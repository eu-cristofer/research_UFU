/**
 * Script para Acompanhamento de Progresso
 * Permite atualizar progresso das atividades e fases
 */

const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');

class ProgressTracker {
    constructor() {
        this.dataPath = path.join(__dirname, '../data/project-data.json');
        this.projectData = {};
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        this.loadProjectData();
    }

    loadProjectData() {
        try {
            const data = fs.readFileSync(this.dataPath, 'utf8');
            this.projectData = JSON.parse(data);
        } catch (error) {
            console.error('Erro ao carregar dados do projeto:', error.message);
            process.exit(1);
        }
    }

    saveProjectData() {
        try {
            fs.writeFileSync(this.dataPath, JSON.stringify(this.projectData, null, 2));
            console.log('✅ Dados salvos com sucesso!');
        } catch (error) {
            console.error('❌ Erro ao salvar dados:', error.message);
        }
    }

    async showMenu() {
        console.log('\n📊 Sistema de Acompanhamento de Progresso');
        console.log('==========================================');
        console.log('1. Ver status atual do projeto');
        console.log('2. Atualizar progresso de uma fase');
        console.log('3. Atualizar progresso de uma atividade');
        console.log('4. Adicionar nova atividade');
        console.log('5. Registrar tempo gasto');
        console.log('6. Ver próximos marcos');
        console.log('7. Ver riscos');
        console.log('0. Sair');
        console.log('==========================================');
        
        const choice = await this.askQuestion('Escolha uma opção: ');
        return choice;
    }

    async showProjectStatus() {
        console.log('\n📈 Status Atual do Projeto');
        console.log('==========================');
        console.log(`Título: ${this.projectData.project.title}`);
        console.log(`Progresso Geral: ${this.projectData.metrics.overall_progress}%`);
        console.log(`Fases Concluídas: ${this.projectData.metrics.completed_phases}/${this.projectData.metrics.total_phases}`);
        console.log(`Atividades Concluídas: ${this.projectData.metrics.completed_activities}/${this.projectData.metrics.total_activities}`);
        console.log(`Tempo Total Gasto: ${this.projectData.metrics.total_time_spent} horas`);
        
        console.log('\n📋 Fases do Projeto:');
        this.projectData.phases.forEach(phase => {
            const statusIcon = this.getStatusIcon(phase.status);
            console.log(`${statusIcon} ${phase.id}. ${phase.name} - ${phase.progress}% (${phase.status})`);
        });
    }

    async updatePhaseProgress() {
        console.log('\n🔄 Atualizar Progresso de Fase');
        console.log('==============================');
        
        this.projectData.phases.forEach(phase => {
            console.log(`${phase.id}. ${phase.name} - ${phase.progress}% (${phase.status})`);
        });
        
        const phaseId = await this.askQuestion('\nID da fase: ');
        const phase = this.projectData.phases.find(p => p.id === parseInt(phaseId));
        
        if (!phase) {
            console.log('❌ Fase não encontrada!');
            return;
        }
        
        const newProgress = await this.askQuestion(`Novo progresso (0-100) para "${phase.name}": `);
        const newStatus = await this.askQuestion('Novo status (pending/in_progress/completed): ');
        
        phase.progress = parseInt(newProgress);
        phase.status = newStatus;
        
        this.updateMetrics();
        this.saveProjectData();
        
        console.log(`✅ Fase "${phase.name}" atualizada!`);
    }

    async updateActivityProgress() {
        console.log('\n🔄 Atualizar Progresso de Atividade');
        console.log('===================================');
        
        this.projectData.activities.forEach(activity => {
            const phase = this.projectData.phases.find(p => p.id === activity.phase_id);
            console.log(`${activity.id}. ${activity.title} (${phase ? phase.name : 'N/A'}) - ${activity.progress}% (${activity.status})`);
        });
        
        const activityId = await this.askQuestion('\nID da atividade: ');
        const activity = this.projectData.activities.find(a => a.id === parseInt(activityId));
        
        if (!activity) {
            console.log('❌ Atividade não encontrada!');
            return;
        }
        
        const newProgress = await this.askQuestion(`Novo progresso (0-100) para "${activity.title}": `);
        const newStatus = await this.askQuestion('Novo status (pending/in_progress/completed): ');
        const timeSpent = await this.askQuestion('Tempo gasto (horas): ');
        const notes = await this.askQuestion('Notas (opcional): ');
        
        activity.progress = parseInt(newProgress);
        activity.status = newStatus;
        activity.time_spent = (activity.time_spent || 0) + parseInt(timeSpent || 0);
        if (notes) activity.notes = notes;
        
        this.updateMetrics();
        this.saveProjectData();
        
        console.log(`✅ Atividade "${activity.title}" atualizada!`);
    }

    async addNewActivity() {
        console.log('\n➕ Adicionar Nova Atividade');
        console.log('===========================');
        
        this.projectData.phases.forEach(phase => {
            console.log(`${phase.id}. ${phase.name}`);
        });
        
        const phaseId = await this.askQuestion('\nID da fase: ');
        const phase = this.projectData.phases.find(p => p.id === parseInt(phaseId));
        
        if (!phase) {
            console.log('❌ Fase não encontrada!');
            return;
        }
        
        const title = await this.askQuestion('Título da atividade: ');
        const description = await this.askQuestion('Descrição: ');
        const startDate = await this.askQuestion('Data de início (YYYY-MM-DD): ');
        const endDate = await this.askQuestion('Data de fim (YYYY-MM-DD): ');
        
        const newActivity = {
            id: this.projectData.activities.length + 1,
            phase_id: parseInt(phaseId),
            title,
            description,
            start_date: startDate,
            end_date: endDate,
            status: 'pending',
            progress: 0,
            time_spent: 0,
            notes: ''
        };
        
        this.projectData.activities.push(newActivity);
        this.updateMetrics();
        this.saveProjectData();
        
        console.log(`✅ Atividade "${title}" adicionada!`);
    }

    async registerTimeSpent() {
        console.log('\n⏱️ Registrar Tempo Gasto');
        console.log('========================');
        
        this.projectData.activities.forEach(activity => {
            const phase = this.projectData.phases.find(p => p.id === activity.phase_id);
            console.log(`${activity.id}. ${activity.title} (${phase ? phase.name : 'N/A'}) - ${activity.time_spent || 0}h`);
        });
        
        const activityId = await this.askQuestion('\nID da atividade: ');
        const activity = this.projectData.activities.find(a => a.id === parseInt(activityId));
        
        if (!activity) {
            console.log('❌ Atividade não encontrada!');
            return;
        }
        
        const timeSpent = await this.askQuestion(`Tempo gasto em "${activity.title}" (horas): `);
        const notes = await this.askQuestion('Descrição do trabalho realizado: ');
        
        activity.time_spent = (activity.time_spent || 0) + parseInt(timeSpent);
        if (notes) {
            activity.notes = activity.notes ? `${activity.notes}\n${notes}` : notes;
        }
        
        this.updateMetrics();
        this.saveProjectData();
        
        console.log(`✅ ${timeSpent}h registradas para "${activity.title}"!`);
    }

    async showUpcomingMilestones() {
        console.log('\n🎯 Próximos Marcos');
        console.log('==================');
        
        const milestones = [];
        this.projectData.phases.forEach(phase => {
            phase.milestones.forEach(milestone => {
                milestones.push({
                    phase_name: phase.name,
                    ...milestone
                });
            });
        });
        
        const upcomingMilestones = milestones
            .filter(m => m.status === 'pending')
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(0, 10);
        
        if (upcomingMilestones.length === 0) {
            console.log('Nenhum marco pendente.');
            return;
        }
        
        upcomingMilestones.forEach(milestone => {
            const daysRemaining = Math.ceil((new Date(milestone.date) - new Date()) / (1000 * 60 * 60 * 24));
            const statusIcon = daysRemaining < 0 ? '🔴' : daysRemaining < 7 ? '🟡' : '🟢';
            console.log(`${statusIcon} ${milestone.phase_name}: ${milestone.name} (${milestone.date}) - ${daysRemaining} dias`);
        });
    }

    async showRisks() {
        console.log('\n⚠️ Riscos Identificados');
        console.log('======================');
        
        if (this.projectData.risks.length === 0) {
            console.log('Nenhum risco identificado.');
            return;
        }
        
        this.projectData.risks.forEach(risk => {
            const riskIcon = risk.probability === 'high' ? '🔴' : risk.probability === 'medium' ? '🟡' : '🟢';
            console.log(`${riskIcon} ${risk.title}`);
            console.log(`   Descrição: ${risk.description}`);
            console.log(`   Mitigação: ${risk.mitigation}`);
            console.log(`   Status: ${risk.status}`);
            console.log('');
        });
    }

    updateMetrics() {
        const phases = this.projectData.phases;
        const activities = this.projectData.activities;
        
        this.projectData.metrics = {
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

    getStatusIcon(status) {
        switch (status) {
            case 'completed': return '✅';
            case 'in_progress': return '🔄';
            case 'pending': return '⏳';
            default: return '❓';
        }
    }

    askQuestion(question) {
        return new Promise((resolve) => {
            this.rl.question(question, (answer) => {
                resolve(answer.trim());
            });
        });
    }

    async run() {
        console.log('🚀 Sistema de Acompanhamento de Progresso');
        console.log('==========================================');
        
        while (true) {
            const choice = await this.showMenu();
            
            switch (choice) {
                case '1':
                    await this.showProjectStatus();
                    break;
                case '2':
                    await this.updatePhaseProgress();
                    break;
                case '3':
                    await this.updateActivityProgress();
                    break;
                case '4':
                    await this.addNewActivity();
                    break;
                case '5':
                    await this.registerTimeSpent();
                    break;
                case '6':
                    await this.showUpcomingMilestones();
                    break;
                case '7':
                    await this.showRisks();
                    break;
                case '0':
                    console.log('👋 Até logo!');
                    this.rl.close();
                    return;
                default:
                    console.log('❌ Opção inválida!');
            }
            
            await this.askQuestion('\nPressione Enter para continuar...');
        }
    }
}

// Executar se chamado diretamente
if (require.main === module) {
    const tracker = new ProgressTracker();
    tracker.run().catch(error => {
        console.error('💥 Erro:', error.message);
        process.exit(1);
    });
}

module.exports = ProgressTracker;
