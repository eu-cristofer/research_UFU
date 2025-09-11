# 📚 Guia Completo: Como Editar o Conteúdo das Apresentações

Este guia te ensina como editar o conteúdo das suas apresentações JavaScript de forma eficiente e organizada.

## 🏗️ **Estrutura do Sistema**

Seu sistema de apresentações funciona da seguinte forma:

1. **Dados da Apresentação**: Arquivos JSON em `slides/` (ex: `defesa.json`)
2. **Gerador**: Script que converte JSON em HTML (`scripts/generate-presentation.js`)
3. **Apresentações**: HTMLs gerados em `public/` (ex: `defesa.html`)

## 📝 **Como Editar o Conteúdo**

### **1. Localização dos Arquivos de Conteúdo**

O conteúdo principal está em:
```
js-presentations/slides/defesa.json
```

### **2. Estrutura do Arquivo JSON**

O arquivo JSON tem esta estrutura básica:

```json
{
  "title": "Título da Apresentação",
  "subtitle": "Subtítulo",
  "author": "Seu Nome",
  "advisor": "Nome do Orientador",
  "program": "Programa de Pós-Graduação",
  "research_line": "Linha de Pesquisa",
  "date": "2024",
  "slides": [
    {
      "id": "identificador-unico",
      "type": "title|content|chart",
      "title": "Título do Slide",
      "content": { /* conteúdo específico */ }
    }
  ]
}
```

### **3. Tipos de Slides Disponíveis**

#### **🏷️ Slide de Título (`type: "title"`)**
```json
{
  "id": "title",
  "type": "title",
  "title": "Título Principal",
  "subtitle": "Subtítulo (opcional)",
  "content": {
    "author": "Nome do Autor",
    "advisor": "Nome do Orientador",
    "program": "Programa de Pós-Graduação",
    "research_line": "Linha de Pesquisa"
  }
}
```

#### **📄 Slide de Conteúdo (`type: "content"`)**
Suporta vários tipos de conteúdo:

**a) Lista Simples:**
```json
{
  "id": "agenda",
  "type": "content", 
  "title": "Agenda",
  "content": {
    "items": [
      {
        "title": "1. Introdução",
        "description": "Problema e objetivos"
      },
      {
        "title": "2. Metodologia", 
        "description": "Abordagem proposta"
      }
    ]
  }
}
```

**b) Layout em Duas Colunas:**
```json
{
  "id": "contextualizacao",
  "type": "content",
  "title": "Contextualização", 
  "content": {
    "columns": [
      {
        "title": "Coluna 1",
        "items": ["Item 1", "Item 2", "Item 3"]
      },
      {
        "title": "Coluna 2",
        "items": ["Item A", "Item B", "Item C"]
      }
    ]
  }
}
```

**c) Métricas/Resultados:**
```json
{
  "id": "resultados",
  "type": "content",
  "title": "Resultados",
  "content": {
    "metrics": [
      {
        "value": "95%",
        "label": "Acurácia",
        "description": "Classificador XGBoost"
      },
      {
        "value": "<3%",
        "label": "Erro de Validação",
        "description": "Comparação experimental"
      }
    ]
  }
}
```

**d) Timeline/Metodologia:**
```json
{
  "id": "metodologia",
  "type": "content",
  "title": "Metodologia",
  "content": {
    "steps": [
      {
        "id": 1,
        "title": "Modelagem Numérica",
        "description": "Desenvolvimento com ROSS"
      },
      {
        "id": 2,
        "title": "Análise HOS",
        "description": "Espectros de ordem superior"
      }
    ]
  }
}
```

**e) Contribuições Categorizadas:**
```json
{
  "id": "contribuicoes",
  "type": "content",
  "title": "Contribuições",
  "content": {
    "methodological": [
      "Framework integrado inédito",
      "Validação sistemática rigorosa"
    ],
    "technical": [
      "Modelos numéricos de alta fidelidade",
      "Algoritmos HOS otimizados"
    ],
    "practical": [
      "Metodologia aplicável industrialmente",
      "Redução de custos de desenvolvimento"
    ]
  }
}
```

## 🔄 **Fluxo de Trabalho Completo**

### **Passo 1: Editar o Conteúdo**
1. Abra o arquivo `js-presentations/slides/defesa.json`
2. Modifique o conteúdo conforme necessário
3. Salve o arquivo

### **Passo 2: Gerar a Apresentação**
Execute um dos comandos:

```bash
# Para gerar apenas a apresentação de defesa
npm run presentation:defesa

# Ou usando Node.js diretamente
node scripts/generate-presentation.js defesa
```

### **Passo 3: Visualizar**
1. Inicie o servidor: `npm run dev`
2. Acesse: `http://localhost:3000`
3. Clique em "Defesa Final" para ver sua apresentação

### **Passo 4: Ajustar e Iterar**
- Faça ajustes no JSON
- Regenere a apresentação
- Visualize novamente

## 🎨 **Ícones Automáticos**

O sistema usa ícones automáticos baseados no ID do slide:

- `agenda` → `fas fa-list`
- `contextualizacao` → `fas fa-industry`
- `problema` → `fas fa-question-circle`
- `objetivos` → `fas fa-target`
- `metodologia` → `fas fa-cogs`
- `resultados` → `fas fa-chart-line`
- `contribuicoes` → `fas fa-trophy`
- `conclusoes` → `fas fa-check-circle`

## 💡 **Exemplos Práticos de Edição**

### **Exemplo 1: Alterar o Título Principal**
```json
// Antes
"title": "Defesa Final - Dissertação de Mestrado"

// Depois
"title": "Apresentação Final - Dissertação de Mestrado"
```

### **Exemplo 2: Adicionar um Novo Slide**
```json
{
  "id": "novo-slide",
  "type": "content",
  "title": "Limitações do Trabalho",
  "content": {
    "items": [
      "Dependência de dados simulados",
      "Limitações do modelo numérico",
      "Necessidade de validação experimental"
    ]
  }
}
```

### **Exemplo 3: Modificar Resultados**
```json
{
  "id": "resultados",
  "type": "content",
  "title": "Principais Resultados",
  "content": {
    "metrics": [
      {
        "value": "98%",
        "label": "Precisão do Modelo",
        "description": "Validação cruzada"
      },
      {
        "value": "0.95",
        "label": "F1-Score",
        "description": "Média ponderada"
      }
    ]
  }
}
```

### **Exemplo 4: Atualizar Informações Pessoais**
```json
{
  "title": "Defesa Final - Dissertação de Mestrado",
  "subtitle": "Diagnóstico de Falhas em Máquinas Rotativas...",
  "author": "Seu Nome Completo",
  "advisor": "Prof. Dr. Nome do Orientador",
  "program": "Programa de Pós-Graduação em Engenharia Mecânica - UFU",
  "research_line": "Mecânica dos Sólidos e Vibrações",
  "date": "2024"
}
```

## 🚀 **Comandos Úteis**

```bash
# Instalar dependências
npm install

# Desenvolvimento com auto-reload
npm run dev

# Gerar todas as apresentações
npm run presentation:defesa
npm run presentation:qualificacao  
npm run presentation:progresso

# Servir arquivos estáticos
npm run serve
```

## 📁 **Estrutura de Arquivos**

```
js-presentations/
├── slides/
│   └── defesa.json          # ← EDITE AQUI o conteúdo
├── scripts/
│   └── generate-presentation.js  # Gerador automático
├── public/
│   ├── index.html           # Dashboard principal
│   ├── defesa.html          # ← Apresentação gerada
│   ├── qualificacao.html    # ← Apresentação gerada
│   └── progresso.html       # ← Apresentação gerada
└── package.json
```

## ⚠️ **Dicas Importantes**

1. **Sempre mantenha a estrutura JSON válida** - use uma ferramenta como JSONLint para validar
2. **Faça backup** do arquivo original antes de grandes mudanças
3. **Teste sempre** após edições importantes
4. **Use IDs únicos** para cada slide
5. **Mantenha consistência** na nomenclatura

## 🎯 **Resumo: Como Começar Agora**

1. **Abra** `js-presentations/slides/defesa.json` no seu editor
2. **Identifique** o slide que quer modificar pelo `"id"`
3. **Edite** o conteúdo mantendo a estrutura JSON
4. **Salve** o arquivo
5. **Execute** `npm run presentation:defesa`
6. **Visualize** em `http://localhost:3000/defesa`

## 🔧 **Solução de Problemas**

### **Erro de JSON Inválido**
- Verifique vírgulas e chaves
- Use um validador JSON online
- Certifique-se que todas as strings estão entre aspas

### **Apresentação Não Atualiza**
- Verifique se executou o comando de geração
- Limpe o cache do navegador
- Confirme que o servidor está rodando

### **Ícones Não Aparecem**
- Verifique se o FontAwesome está carregando
- Confirme que o ID do slide está correto
- Use IDs conhecidos para ter ícones automáticos

## 📚 **Recursos Adicionais**

- **Reveal.js Documentation**: https://revealjs.com/
- **FontAwesome Icons**: https://fontawesome.com/icons
- **JSON Validator**: https://jsonlint.com/
- **Chart.js Documentation**: https://www.chartjs.org/

---

**🎉 Pronto!** Agora você tem controle total sobre o conteúdo das suas apresentações. O sistema é muito flexível e permite que você foque no conteúdo acadêmico sem se preocupar com HTML/CSS.

**Autor**: Cristofer Antoni Souza Costa  
**Orientador**: Prof. Dr. Aldemir Cavallini Jr.  
**Programa**: Pós-Graduação em Engenharia Mecânica - UFU  
**Data**: 2024
