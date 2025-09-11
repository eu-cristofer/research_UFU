/**
 * Script para gerar apresentações dinamicamente
 * Baseado nos dados JSON das apresentações
 */

const fs = require('fs');
const path = require('path');

class PresentationGenerator {
    constructor() {
        this.templatesDir = path.join(__dirname, '../templates');
        this.slidesDir = path.join(__dirname, '../slides');
        this.publicDir = path.join(__dirname, '../public');
    }

    /**
     * Gera uma apresentação baseada nos dados JSON
     * @param {string} presentationType - Tipo da apresentação (defesa, qualificacao, progresso)
     */
    async generatePresentation(presentationType) {
        try {
            console.log(`🎯 Gerando apresentação: ${presentationType}`);
            
            // Carregar dados da apresentação
            const slidesData = this.loadSlidesData(presentationType);
            
            // Gerar HTML da apresentação
            const html = this.generateHTML(slidesData);
            
            // Salvar arquivo HTML
            const outputPath = path.join(this.publicDir, `${presentationType}.html`);
            fs.writeFileSync(outputPath, html);
            
            console.log(`✅ Apresentação gerada: ${outputPath}`);
            
            // Gerar arquivos de recursos se necessário
            await this.generateAssets(presentationType, slidesData);
            
        } catch (error) {
            console.error(`❌ Erro ao gerar apresentação ${presentationType}:`, error.message);
            throw error;
        }
    }

    /**
     * Carrega os dados das apresentações do arquivo JSON
     * @param {string} presentationType - Tipo da apresentação
     * @returns {Object} Dados da apresentação
     */
    loadSlidesData(presentationType) {
        const slidesPath = path.join(this.slidesDir, `${presentationType}.json`);
        
        if (!fs.existsSync(slidesPath)) {
            throw new Error(`Arquivo de slides não encontrado: ${slidesPath}`);
        }
        
        const slidesContent = fs.readFileSync(slidesPath, 'utf8');
        return JSON.parse(slidesContent);
    }

    /**
     * Gera o HTML da apresentação
     * @param {Object} slidesData - Dados das apresentações
     * @returns {string} HTML gerado
     */
    generateHTML(slidesData) {
        const template = this.getBaseTemplate();
        
        // Substituir variáveis do template
        let html = template
            .replace('{{TITLE}}', slidesData.title)
            .replace('{{SUBTITLE}}', slidesData.subtitle || '')
            .replace('{{AUTHOR}}', slidesData.author)
            .replace('{{ADVISOR}}', slidesData.advisor)
            .replace('{{PROGRAM}}', slidesData.program)
            .replace('{{RESEARCH_LINE}}', slidesData.research_line)
            .replace('{{DATE}}', slidesData.date);

        // Gerar slides
        const slidesHTML = this.generateSlidesHTML(slidesData.slides);
        html = html.replace('{{SLIDES}}', slidesHTML);

        // Gerar scripts específicos
        const scriptsHTML = this.generateScriptsHTML(slidesData);
        html = html.replace('{{SCRIPTS}}', scriptsHTML);

        return html;
    }

    /**
     * Gera o HTML dos slides
     * @param {Array} slides - Array de slides
     * @returns {string} HTML dos slides
     */
    generateSlidesHTML(slides) {
        return slides.map(slide => {
            switch (slide.type) {
                case 'title':
                    return this.generateTitleSlide(slide);
                case 'content':
                    return this.generateContentSlide(slide);
                case 'chart':
                    return this.generateChartSlide(slide);
                default:
                    return this.generateContentSlide(slide);
            }
        }).join('\n');
    }

    /**
     * Gera slide de título
     * @param {Object} slide - Dados do slide
     * @returns {string} HTML do slide
     */
    generateTitleSlide(slide) {
        const backgroundClass = slide.id === 'title' ? 'data-background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" class="title-slide"' : '';
        
        return `
            <section ${backgroundClass}>
                <h1>${slide.title}</h1>
                ${slide.subtitle ? `<h2>${slide.subtitle}</h2>` : ''}
                ${this.generateSlideContent(slide.content)}
            </section>`;
    }

    /**
     * Gera slide de conteúdo
     * @param {Object} slide - Dados do slide
     * @returns {string} HTML do slide
     */
    generateContentSlide(slide) {
        return `
            <section>
                <h2><i class="fas fa-${this.getSlideIcon(slide.id)}"></i> ${slide.title}</h2>
                ${this.generateSlideContent(slide.content)}
            </section>`;
    }

    /**
     * Gera slide com gráfico
     * @param {Object} slide - Dados do slide
     * @returns {string} HTML do slide
     */
    generateChartSlide(slide) {
        return `
            <section>
                <h2><i class="fas fa-chart-${slide.chartType || 'line'}"></i> ${slide.title}</h2>
                <div class="chart-container">
                    <canvas id="${slide.chartId}"></canvas>
                </div>
                ${this.generateSlideContent(slide.content)}
            </section>`;
    }

    /**
     * Gera conteúdo do slide baseado no tipo
     * @param {Object} content - Conteúdo do slide
     * @returns {string} HTML do conteúdo
     */
    generateSlideContent(content) {
        if (!content) return '';

        let html = '';

        // Conteúdo de texto simples
        if (typeof content === 'string') {
            html += `<p>${content}</p>`;
        }

        // Lista de itens
        if (content.items) {
            html += '<ul>';
            content.items.forEach(item => {
                if (typeof item === 'string') {
                    html += `<li>${item}</li>`;
                } else {
                    html += `<li><strong>${item.title}:</strong> ${item.description}</li>`;
                }
            });
            html += '</ul>';
        }

        // Colunas
        if (content.columns) {
            html += '<div class="two-columns">';
            content.columns.forEach(column => {
                html += `
                    <div class="column">
                        <h3>${column.title}</h3>
                        <ul>
                            ${column.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>`;
            });
            html += '</div>';
        }

        // Métricas/resultados
        if (content.metrics) {
            html += '<div class="results-grid">';
            content.metrics.forEach(metric => {
                html += `
                    <div class="result-card">
                        <div class="metric">${metric.value}</div>
                        <div class="label">${metric.label}</div>
                        ${metric.description ? `<div class="description">${metric.description}</div>` : ''}
                    </div>`;
            });
            html += '</div>';
        }

        // Passos da metodologia
        if (content.steps) {
            html += '<div class="timeline">';
            content.steps.forEach(step => {
                html += `
                    <div class="timeline-item">
                        <h3>${step.id}. ${step.title}</h3>
                        <p>${step.description}</p>
                    </div>`;
            });
            html += '</div>';
        }

        return html;
    }

    /**
     * Obtém ícone baseado no ID do slide
     * @param {string} slideId - ID do slide
     * @returns {string} Nome do ícone
     */
    getSlideIcon(slideId) {
        const icons = {
            'agenda': 'list',
            'contextualizacao': 'industry',
            'problema': 'question-circle',
            'objetivos': 'target',
            'metodologia': 'cogs',
            'resultados': 'chart-line',
            'contribuicoes': 'trophy',
            'conclusoes': 'check-circle',
            'agradecimentos': 'heart',
            'perguntas': 'question-circle'
        };
        return icons[slideId] || 'info-circle';
    }

    /**
     * Gera scripts específicos para a apresentação
     * @param {Object} slidesData - Dados da apresentação
     * @returns {string} HTML dos scripts
     */
    generateScriptsHTML(slidesData) {
        return `
        <script>
            // Configuração específica da apresentação
            const presentationData = ${JSON.stringify(slidesData, null, 2)};
            
            // Configurar gráficos específicos
            document.addEventListener('DOMContentLoaded', function() {
                // Gráficos serão configurados aqui baseados nos dados
                console.log('Dados da apresentação carregados:', presentationData);
            });
        </script>`;
    }

    /**
     * Gera assets específicos da apresentação
     * @param {string} presentationType - Tipo da apresentação
     * @param {Object} slidesData - Dados da apresentação
     */
    async generateAssets(presentationType, slidesData) {
        // Criar diretório de assets se não existir
        const assetsDir = path.join(__dirname, '../assets', presentationType);
        if (!fs.existsSync(assetsDir)) {
            fs.mkdirSync(assetsDir, { recursive: true });
        }

        // Gerar arquivo de configuração
        const configPath = path.join(assetsDir, 'config.json');
        fs.writeFileSync(configPath, JSON.stringify(slidesData, null, 2));

        console.log(`📁 Assets gerados em: ${assetsDir}`);
    }

    /**
     * Retorna o template base HTML
     * @returns {string} Template HTML
     */
    getBaseTemplate() {
        return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}}</title>
    <link rel="stylesheet" href="/reveal/dist/reveal.css">
    <link rel="stylesheet" href="/reveal/dist/theme/white.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css">
    <style>
        .reveal .slides section {
            text-align: left;
        }
        
        .reveal .slides section[data-background] {
            text-align: center;
        }
        
        .reveal h1, .reveal h2, .reveal h3 {
            color: #2c3e50;
        }
        
        .reveal .title-slide {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .reveal .title-slide h1,
        .reveal .title-slide h2,
        .reveal .title-slide p {
            color: white;
        }
        
        .reveal .highlight {
            background-color: #fff3cd;
            padding: 0.2em 0.4em;
            border-radius: 0.25rem;
        }
        
        .reveal .two-columns {
            display: flex;
            gap: 2rem;
        }
        
        .reveal .two-columns .column {
            flex: 1;
        }
        
        .reveal .chart-container {
            width: 100%;
            height: 400px;
            margin: 1rem 0;
        }
        
        .reveal .results-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin: 1rem 0;
        }
        
        .reveal .result-card {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 0.5rem;
            padding: 1rem;
            text-align: center;
        }
        
        .reveal .result-card .metric {
            font-size: 2em;
            font-weight: bold;
            color: #28a745;
        }
        
        .reveal .result-card .label {
            font-size: 0.9em;
            color: #6c757d;
        }
        
        .reveal .timeline {
            position: relative;
            padding-left: 2rem;
        }
        
        .reveal .timeline::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #667eea;
        }
        
        .reveal .timeline-item {
            position: relative;
            margin-bottom: 2rem;
            padding-left: 2rem;
        }
        
        .reveal .timeline-item::before {
            content: '';
            position: absolute;
            left: -1.5rem;
            top: 0.5rem;
            width: 1rem;
            height: 1rem;
            background: #667eea;
            border-radius: 50%;
        }
        
        .reveal .back-button {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1000;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 1.2em;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        }
        
        .reveal .back-button:hover {
            background: #5a6fd8;
            transform: scale(1.1);
        }
    </style>
</head>
<body>
    <button class="back-button" onclick="window.location.href='/'">
        <i class="fas fa-arrow-left"></i>
    </button>

    <div class="reveal">
        <div class="slides">
            {{SLIDES}}
        </div>
    </div>

    <script src="/reveal/dist/reveal.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
    <script src="/socket.io/socket.io.js"></script>
    <script>
        // Configuração do Reveal.js
        Reveal.initialize({
            hash: true,
            transition: 'slide',
            transitionSpeed: 'default',
            backgroundTransition: 'fade',
            controls: true,
            progress: true,
            center: true,
            touch: true,
            loop: false,
            rtl: false,
            navigationMode: 'default',
            shuffle: false,
            fragments: true,
            fragmentInURL: false,
            embedded: false,
            help: true,
            showNotes: false,
            autoPlayMedia: null,
            preloadIframes: null,
            autoSlide: 0,
            autoSlideStoppable: true,
            autoSlideMethod: null,
            defaultTiming: null,
            mouseWheel: false,
            previewLinks: false,
            postMessage: true,
            postMessageEvents: false,
            focusBodyOnPageVisibilityChange: true,
            width: 960,
            height: 700,
            margin: 0.1,
            minScale: 0.2,
            maxScale: 1.5,
            disableLayout: false
        });

        // Destacar código
        hljs.highlightAll();

        // WebSocket para controle remoto
        const socket = io();
        
        Reveal.on('slidechanged', event => {
            socket.emit('slide-changed', {
                indexh: event.indexh,
                indexv: event.indexv,
                slide: event.slide
            });
        });

        socket.on('slide-changed', data => {
            Reveal.slide(data.indexh, data.indexv);
        });
    </script>
    
    {{SCRIPTS}}
</body>
</html>`;
    }
}

// Executar se chamado diretamente
if (require.main === module) {
    const presentationType = process.argv[2];
    
    if (!presentationType) {
        console.error('❌ Tipo de apresentação não especificado');
        console.log('Uso: node generate-presentation.js <tipo>');
        console.log('Tipos disponíveis: defesa, qualificacao, progresso');
        process.exit(1);
    }
    
    const generator = new PresentationGenerator();
    generator.generatePresentation(presentationType)
        .then(() => {
            console.log('🎉 Apresentação gerada com sucesso!');
        })
        .catch(error => {
            console.error('💥 Erro:', error.message);
            process.exit(1);
        });
}

module.exports = PresentationGenerator;
