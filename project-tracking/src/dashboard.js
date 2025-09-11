/**
 * Dashboard Web para Acompanhamento do Projeto
 */

const express = require('express');
const path = require('path');
const fs = require('fs-extra');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Carregar dados do projeto
let projectData = {};
const dataPath = path.join(__dirname, '../data/project-data.json');

function loadProjectData() {
    try {
        const data = fs.readFileSync(dataPath, 'utf8');
        projectData = JSON.parse(data);
    } catch (error) {
        console.error('Erro ao carregar dados:', error.message);
    }
}

// Rota principal do dashboard
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});

// API para dados do dashboard
app.get('/api/dashboard-data', (req, res) => {
    loadProjectData();
    
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

function getUpcomingMilestones() {
    const milestones = [];
    projectData.phases.forEach(phase => {
        phase.milestones.forEach(milestone => {
            milestones.push({
                phase_name: phase.name,
                ...milestone
            });
        });
    });
    
    return milestones
        .filter(m => m.status === 'pending')
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 10);
}

function generateProgressChart() {
    return {
        labels: projectData.phases.map(p => p.name),
        datasets: [{
            label: 'Progresso (%)',
            data: projectData.phases.map(p => p.progress),
            backgroundColor: projectData.phases.map(p => {
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

app.listen(PORT, () => {
    console.log(`📊 Dashboard rodando em http://localhost:${PORT}`);
});
