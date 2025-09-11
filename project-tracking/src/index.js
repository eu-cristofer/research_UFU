/**
 * Sistema de Acompanhamento de Projeto de Dissertação
 * Diagnóstico de Falhas em Máquinas Rotativas
 */

const express = require('express');
const path = require('path');
const fs = require('fs-extra');
const moment = require('moment');
const cron = require('node-cron');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../reports')));

// Carregar dados do projeto
let projectData = {};
const dataPath = path.join(__dirname, '../data/project-data.json');

function loadProjectData() {
    try {
        const data = fs.readFileSync(dataPath, 'utf8');
        projectData = JSON.parse(data);
        console.log('✅ Dados do projeto carregados com sucesso');
    } catch (error) {
        console.error('❌ Erro ao carregar dados do projeto:', error.message);
        process.exit(1);
    }
}

function saveProjectData() {
    try {
        fs.writeFileSync(dataPath, JSON.stringify(projectData, null, 2));
        console.log('💾 Dados do projeto salvos');
    } catch (error) {
        console.error('❌ Erro ao salvar dados do projeto:', error.message);
    }
}

// Rotas da API
app.get('/api/project', (req, res) => {
    res.json(projectData);
});

app.get('/api/progress', (req, res) => {
    const progress = {
        overall: projectData.metrics.overall_progress,
        phases: projectData.phases.map(phase => ({
            id: phase.id,
            name: phase.name,
            progress: phase.progress,
            status: phase.status
        })),
        activities: projectData.activities.map(activity => ({
            id: activity.id,
            title: activity.title,
            progress: activity.progress,
            status: activity.status
        }))
    };
    res.json(progress);
});

app.get('/api/milestones', (req, res) => {
    const milestones = [];
    projectData.phases.forEach(phase => {
        phase.milestones.forEach(milestone => {
            milestones.push({
                phase_id: phase.id,
                phase_name: phase.name,
                ...milestone
            });
        });
    });
    res.json(milestones);
});

app.get('/api/risks', (req, res) => {
    res.json(projectData.risks);
});

app.post('/api/activity', (req, res) => {
    const { phase_id, title, description, start_date, end_date, time_spent, notes } = req.body;
    
    const newActivity = {
        id: projectData.activities.length + 1,
        phase_id,
        title,
        description,
        start_date,
        end_date,
        status: 'pending',
        progress: 0,
        time_spent: time_spent || 0,
        notes: notes || ''
    };
    
    projectData.activities.push(newActivity);
    saveProjectData();
    
    res.json({ success: true, activity: newActivity });
});

app.put('/api/activity/:id', (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    
    const activityIndex = projectData.activities.findIndex(a => a.id === parseInt(id));
    if (activityIndex === -1) {
        return res.status(404).json({ error: 'Atividade não encontrada' });
    }
    
    projectData.activities[activityIndex] = {
        ...projectData.activities[activityIndex],
        ...updates
    };
    
    saveProjectData();
    res.json({ success: true, activity: projectData.activities[activityIndex] });
});

app.put('/api/phase/:id', (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    
    const phaseIndex = projectData.phases.findIndex(p => p.id === parseInt(id));
    if (phaseIndex === -1) {
        return res.status(404).json({ error: 'Fase não encontrada' });
    }
    
    projectData.phases[phaseIndex] = {
        ...projectData.phases[phaseIndex],
        ...updates
    };
    
    // Atualizar métricas
    updateMetrics();
    saveProjectData();
    
    res.json({ success: true, phase: projectData.phases[phaseIndex] });
});

app.get('/api/dashboard', (req, res) => {
    const dashboard = {
        project: projectData.project,
        metrics: projectData.metrics,
        recent_activities: projectData.activities
            .sort((a, b) => new Date(b.start_date) - new Date(a.start_date))
            .slice(0, 5),
        upcoming_milestones: getUpcomingMilestones(),
        risks: projectData.risks.filter(r => r.status === 'active'),
        progress_chart: generateProgressChart()
    };
    
    res.json(dashboard);
});

// Dashboard route to serve the HTML file
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});

// Dashboard data endpoint that the HTML expects
app.get('/api/dashboard-data', (req, res) => {
    const dashboardData = {
        project: projectData.project,
        metrics: projectData.metrics,
        phases: projectData.phases,
        activities: projectData.activities,
        milestones: getUpcomingMilestones(),
        risks: projectData.risks,
        progressChart: generateProgressChart(),
        timelineData: generateTimelineData()
    };
    
    res.json(dashboardData);
});

// Funções auxiliares
function updateMetrics() {
    const phases = projectData.phases;
    const activities = projectData.activities;
    
    projectData.metrics = {
        total_phases: phases.length,
        completed_phases: phases.filter(p => p.status === 'completed').length,
        in_progress_phases: phases.filter(p => p.status === 'in_progress').length,
        pending_phases: phases.filter(p => p.status === 'pending').length,
        overall_progress: Math.round(
            phases.reduce((sum, phase) => sum + phase.progress, 0) / phases.length
        ),
        total_activities: activities.length,
        completed_activities: activities.filter(a => a.status === 'completed').length,
        in_progress_activities: activities.filter(a => a.status === 'in_progress').length,
        total_time_spent: activities.reduce((sum, activity) => sum + (activity.time_spent || 0), 0),
        estimated_total_time: 600
    };
}

function getUpcomingMilestones() {
    const milestones = [];
    projectData.phases.forEach(phase => {
        phase.milestones.forEach(milestone => {
            if (milestone.status === 'pending') {
                milestones.push({
                    phase_name: phase.name,
                    ...milestone
                });
            }
        });
    });
    
    return milestones
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 5);
}

function generateProgressChart() {
    const phases = projectData.phases;
    return {
        labels: phases.map(p => p.name),
        datasets: [{
            label: 'Progresso (%)',
            data: phases.map(p => p.progress),
            backgroundColor: phases.map(p => {
                switch (p.status) {
                    case 'completed': return '#28a745';
                    case 'in_progress': return '#ffc107';
                    case 'pending': return '#6c757d';
                    default: return '#6c757d';
                }
            })
        }]
    };
}

function generateTimelineData() {
    const timeline = [];
    
    projectData.phases.forEach(phase => {
        timeline.push({
            id: `phase-${phase.id}`,
            content: phase.name,
            start: phase.start_date,
            end: phase.end_date,
            className: `timeline-${phase.status}`
        });
        
        phase.milestones.forEach(milestone => {
            timeline.push({
                id: `milestone-${phase.id}-${milestone.name}`,
                content: milestone.name,
                start: milestone.date,
                className: `milestone-${milestone.status}`
            });
        });
    });
    
    return timeline;
}

// Tarefas agendadas
cron.schedule('0 9 * * 1', () => {
    console.log('📊 Gerando relatório semanal...');
    // Aqui você pode adicionar lógica para gerar relatórios automáticos
});

cron.schedule('0 9 1 * *', () => {
    console.log('📈 Gerando relatório mensal...');
    // Aqui você pode adicionar lógica para gerar relatórios mensais
});

// Inicializar servidor
loadProjectData();
updateMetrics();

app.listen(PORT, () => {
    console.log(`🚀 Sistema de Acompanhamento rodando em http://localhost:${PORT}`);
    console.log(`📊 Dashboard: http://localhost:${PORT}/dashboard`);
    console.log(`📋 API: http://localhost:${PORT}/api/project`);
});

module.exports = app;
