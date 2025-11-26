/**
 * Gerador de Relatórios do Projeto
 * Gera relatórios em PDF, HTML e CSV
 */

const fs = require('fs-extra');
const path = require('path');
const moment = require('moment');
const PDFDocument = require('pdfkit');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const Handlebars = require('handlebars');

class ReportGenerator {
    constructor() {
        this.dataPath = path.join(__dirname, '../data/project-data.json');
        this.reportsPath = path.join(__dirname, '../reports');
        this.templatesPath = path.join(__dirname, '../templates');
        this.projectData = {};
        
        this.loadProjectData();
        this.ensureDirectories();
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

    ensureDirectories() {
        fs.ensureDirSync(this.reportsPath);
        fs.ensureDirSync(this.templatesPath);
    }

    /**
     * Gera relatório completo em PDF
     */
    async generatePDFReport() {
        const doc = new PDFDocument();
        const filename = `relatorio-projeto-${moment().format('YYYY-MM-DD')}.pdf`;
        const filepath = path.join(this.reportsPath, filename);
        
        doc.pipe(fs.createWriteStream(filepath));
        
        // Cabeçalho
        doc.fontSize(20).text('Relatório de Progresso do Projeto', 50, 50);
        doc.fontSize(12).text(`Gerado em: ${moment().format('DD/MM/YYYY HH:mm')}`, 50, 80);
        
        let yPosition = 120;
        
        // Informações do projeto
        doc.fontSize(16).text('Informações do Projeto', 50, yPosition);
        yPosition += 30;
        
        doc.fontSize(12)
           .text(`Título: ${this.projectData.project.title}`, 50, yPosition)
           .text(`Autor: ${this.projectData.project.author}`, 50, yPosition + 20)
           .text(`Orientador: ${this.projectData.project.advisor}`, 50, yPosition + 40)
           .text(`Programa: ${this.projectData.project.program}`, 50, yPosition + 60);
        
        yPosition += 100;
        
        // Métricas gerais
        doc.fontSize(16).text('Métricas Gerais', 50, yPosition);
        yPosition += 30;
        
        const metrics = this.projectData.metrics;
        doc.fontSize(12)
           .text(`Progresso Geral: ${metrics.overall_progress}%`, 50, yPosition)
           .text(`Fases Concluídas: ${metrics.completed_phases}/${metrics.total_phases}`, 50, yPosition + 20)
           .text(`Atividades Concluídas: ${metrics.completed_activities}/${metrics.total_activities}`, 50, yPosition + 40)
           .text(`Tempo Total Gasto: ${metrics.total_time_spent} horas`, 50, yPosition + 60);
        
        yPosition += 100;

        // Indicadores de Progresso
        if (this.projectData.indicators) {
             if (yPosition > 600) {
                doc.addPage();
                yPosition = 50;
             }
             
            doc.fontSize(16).text('Indicadores de Progresso', 50, yPosition);
            yPosition += 30;

            // Quantitativos
            doc.fontSize(14).text('Quantitativos', 50, yPosition);
            yPosition += 25;
            this.projectData.indicators.quantitative.forEach(ind => {
                doc.fontSize(12).text(`• ${ind.name}: ${ind.current}/${ind.target} ${ind.unit}`, 70, yPosition);
                yPosition += 20;
            });

            yPosition += 20;

            // Qualitativos
            doc.fontSize(14).text('Qualitativos', 50, yPosition);
            yPosition += 25;
            this.projectData.indicators.qualitative.forEach(ind => {
                doc.fontSize(12).text(`• ${ind.name}: ${ind.level} (Score: ${ind.score}/5)`, 70, yPosition);
                yPosition += 20;
            });
            
            yPosition += 50;
        }
        
        // Fases do projeto
        doc.fontSize(16).text('Fases do Projeto', 50, yPosition);
        yPosition += 30;
        
        this.projectData.phases.forEach(phase => {
            if (yPosition > 700) {
                doc.addPage();
                yPosition = 50;
            }
            
            doc.fontSize(14).text(`${phase.id}. ${phase.name}`, 50, yPosition);
            yPosition += 20;
            
            doc.fontSize(12)
               .text(`Status: ${phase.status}`, 70, yPosition)
               .text(`Progresso: ${phase.progress}%`, 70, yPosition + 15)
               .text(`Período: ${moment(phase.start_date).format('DD/MM/YYYY')} - ${moment(phase.end_date).format('DD/MM/YYYY')}`, 70, yPosition + 30);
            
            yPosition += 60;
        });
        
        // Atividades recentes
        doc.addPage();
        yPosition = 50;
        
        doc.fontSize(16).text('Atividades Recentes', 50, yPosition);
        yPosition += 30;
        
        const recentActivities = this.projectData.activities
            .sort((a, b) => new Date(b.start_date) - new Date(a.start_date))
            .slice(0, 10);
        
        recentActivities.forEach(activity => {
            if (yPosition > 700) {
                doc.addPage();
                yPosition = 50;
            }
            
            doc.fontSize(12)
               .text(`• ${activity.title}`, 50, yPosition)
               .text(`  Status: ${activity.status} | Progresso: ${activity.progress}% | Tempo: ${activity.time_spent}h`, 70, yPosition + 15);
            
            yPosition += 35;
        });
        
        doc.end();
        
        console.log(`✅ Relatório PDF gerado: ${filepath}`);
        return filepath;
    }

    /**
     * Gera relatório em HTML
     */
    async generateHTMLReport() {
        const template = this.getHTMLTemplate();
        const compiledTemplate = Handlebars.compile(template);
        
        const html = compiledTemplate({
            project: this.projectData.project,
            metrics: this.projectData.metrics,
            phases: this.projectData.phases,
            activities: this.projectData.activities,
            risks: this.projectData.risks,
            indicators: this.projectData.indicators,
            generatedAt: moment().format('DD/MM/YYYY HH:mm')
        });
        
        const filename = `relatorio-projeto-${moment().format('YYYY-MM-DD')}.html`;
        const filepath = path.join(this.reportsPath, filename);
        
        fs.writeFileSync(filepath, html);
        
        console.log(`✅ Relatório HTML gerado: ${filepath}`);
        return filepath;
    }

    /**
     * Gera relatório em CSV
     */
    async generateCSVReport() {
        const filename = `relatorio-projeto-${moment().format('YYYY-MM-DD')}.csv`;
        const filepath = path.join(this.reportsPath, filename);
        
        const csvWriter = createCsvWriter({
            path: filepath,
            header: [
                {id: 'phase_id', title: 'ID Fase'},
                {id: 'phase_name', title: 'Nome da Fase'},
                {id: 'activity_title', title: 'Atividade'},
                {id: 'status', title: 'Status'},
                {id: 'progress', title: 'Progresso (%)'},
                {id: 'time_spent', title: 'Tempo Gasto (h)'},
                {id: 'start_date', title: 'Data Início'},
                {id: 'end_date', title: 'Data Fim'}
            ]
        });
        
        const records = [];
        this.projectData.activities.forEach(activity => {
            const phase = this.projectData.phases.find(p => p.id === activity.phase_id);
            records.push({
                phase_id: activity.phase_id,
                phase_name: phase ? phase.name : 'N/A',
                activity_title: activity.title,
                status: activity.status,
                progress: activity.progress,
                time_spent: activity.time_spent || 0,
                start_date: moment(activity.start_date).format('DD/MM/YYYY'),
                end_date: moment(activity.end_date).format('DD/MM/YYYY')
            });
        });
        
        await csvWriter.writeRecords(records);
        
        console.log(`✅ Relatório CSV gerado: ${filepath}`);
        return filepath;
    }

    /**
     * Gera relatório de marcos
     */
    async generateMilestonesReport() {
        const filename = `marcos-projeto-${moment().format('YYYY-MM-DD')}.csv`;
        const filepath = path.join(this.reportsPath, filename);
        
        const csvWriter = createCsvWriter({
            path: filepath,
            header: [
                {id: 'phase_name', title: 'Fase'},
                {id: 'milestone_name', title: 'Marco'},
                {id: 'date', title: 'Data'},
                {id: 'status', title: 'Status'},
                {id: 'days_remaining', title: 'Dias Restantes'}
            ]
        });
        
        const records = [];
        this.projectData.phases.forEach(phase => {
            phase.milestones.forEach(milestone => {
                const daysRemaining = moment(milestone.date).diff(moment(), 'days');
                records.push({
                    phase_name: phase.name,
                    milestone_name: milestone.name,
                    date: moment(milestone.date).format('DD/MM/YYYY'),
                    status: milestone.status,
                    days_remaining: daysRemaining
                });
            });
        });
        
        await csvWriter.writeRecords(records);
        
        console.log(`✅ Relatório de marcos gerado: ${filepath}`);
        return filepath;
    }

    /**
     * Gera todos os relatórios
     */
    async generateAllReports() {
        console.log('📊 Gerando relatórios do projeto...');
        
        try {
            const pdfPath = await this.generatePDFReport();
            const htmlPath = await this.generateHTMLReport();
            const csvPath = await this.generateCSVReport();
            const milestonesPath = await this.generateMilestonesReport();
            
            console.log('🎉 Todos os relatórios foram gerados com sucesso!');
            console.log(`📁 Localização: ${this.reportsPath}`);
            
            return {
                pdf: pdfPath,
                html: htmlPath,
                csv: csvPath,
                milestones: milestonesPath
            };
        } catch (error) {
            console.error('❌ Erro ao gerar relatórios:', error.message);
            throw error;
        }
    }

    /**
     * Template HTML para relatórios
     */
    getHTMLTemplate() {
        return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório do Projeto - {{project.title}}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .header { background: #667eea; color: white; padding: 20px; border-radius: 5px; margin-bottom: 30px; }
        .section { margin-bottom: 30px; }
        .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .metric { background: #f8f9fa; padding: 20px; border-radius: 5px; text-align: center; }
        .metric-value { font-size: 2em; font-weight: bold; color: #667eea; }
        .phase { background: white; border: 1px solid #ddd; padding: 20px; margin-bottom: 20px; border-radius: 5px; }
        .phase.completed { border-left: 5px solid #28a745; }
        .phase.in-progress { border-left: 5px solid #ffc107; }
        .phase.pending { border-left: 5px solid #6c757d; }
        .activity { margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 3px; }
        .risk { background: #f8d7da; border: 1px solid #f5c6cb; padding: 15px; margin: 10px 0; border-radius: 5px; }
        .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; text-align: center; }
    </style>
</head>
<body>
    <div class="header">
        <h1>{{project.title}}</h1>
        <p><strong>Autor:</strong> {{project.author}} | <strong>Orientador:</strong> {{project.advisor}}</p>
        <p><strong>Programa:</strong> {{project.program}}</p>
        <p><strong>Gerado em:</strong> {{generatedAt}}</p>
    </div>

        <div class="section">
        <h2>Indicadores de Progresso</h2>
        
        <h3>Quantitativos</h3>
        <div class="metrics">
            {{#each indicators.quantitative}}
            <div class="metric">
                <div class="metric-value">{{current}}/{{target}}</div>
                <div>{{name}}</div>
                <small>{{unit}}</small>
            </div>
            {{/each}}
        </div>

        <h3>Qualitativos</h3>
        <div class="metrics">
            {{#each indicators.qualitative}}
            <div class="metric">
                <div class="metric-value">{{score}}/5</div>
                <div>{{name}}</div>
                <small>{{level}}</small>
            </div>
            {{/each}}
        </div>
    </div>

    <div class="section">
        <h2>Métricas Gerais</h2>
        <div class="metrics">
            <div class="metric">
                <div class="metric-value">{{metrics.overall_progress}}%</div>
                <div>Progresso Geral</div>
            </div>
            <div class="metric">
                <div class="metric-value">{{metrics.completed_phases}}</div>
                <div>Fases Concluídas</div>
            </div>
            <div class="metric">
                <div class="metric-value">{{metrics.total_time_spent}}h</div>
                <div>Tempo Total Gasto</div>
            </div>
            <div class="metric">
                <div class="metric-value">{{metrics.completed_activities}}</div>
                <div>Atividades Concluídas</div>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>Fases do Projeto</h2>
        {{#each phases}}
        <div class="phase {{status}}">
            <h3>{{id}}. {{name}}</h3>
            <p><strong>Status:</strong> {{status}} | <strong>Progresso:</strong> {{progress}}%</p>
            <p><strong>Período:</strong> {{start_date}} - {{end_date}}</p>
            <p>{{description}}</p>
        </div>
        {{/each}}
    </div>

    <div class="section">
        <h2>Atividades Recentes</h2>
        {{#each activities}}
        <div class="activity">
            <h4>{{title}}</h4>
            <p><strong>Status:</strong> {{status}} | <strong>Progresso:</strong> {{progress}}% | <strong>Tempo:</strong> {{time_spent}}h</p>
            <p>{{description}}</p>
        </div>
        {{/each}}
    </div>

    {{#if risks}}
    <div class="section">
        <h2>Riscos Identificados</h2>
        {{#each risks}}
        <div class="risk">
            <h4>{{title}}</h4>
            <p>{{description}}</p>
            <p><strong>Mitigação:</strong> {{mitigation}}</p>
        </div>
        {{/each}}
    </div>
    {{/if}}

    <div class="footer">
        <p>Relatório gerado automaticamente pelo Sistema de Acompanhamento de Projeto</p>
    </div>
</body>
</html>`;
    }
}

// Executar se chamado diretamente
if (require.main === module) {
    const generator = new ReportGenerator();
    generator.generateAllReports()
        .then(() => {
            console.log('🎉 Relatórios gerados com sucesso!');
        })
        .catch(error => {
            console.error('💥 Erro:', error.message);
            process.exit(1);
        });
}

module.exports = ReportGenerator;
