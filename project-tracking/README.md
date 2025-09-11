# Sistema de Acompanhamento de Projeto de Dissertação

Este sistema permite acompanhar o progresso da dissertação de mestrado sobre **Diagnóstico de Falhas em Máquinas Rotativas**, fornecendo ferramentas para monitoramento, relatórios e controle de marcos.

## 🎯 Funcionalidades

### 📊 Dashboard Web
- Visualização em tempo real do progresso
- Gráficos interativos de progresso
- Métricas gerais do projeto
- Timeline de fases e marcos
- Monitoramento de riscos

### 📈 Acompanhamento de Progresso
- Atualização de progresso de fases e atividades
- Registro de tempo gasto
- Adição de novas atividades
- Controle de marcos importantes

### 📋 Geração de Relatórios
- Relatórios em PDF, HTML e CSV
- Relatórios de marcos
- Exportação de dados
- Relatórios automáticos agendados

### 🔔 Notificações e Alertas
- Lembretes de marcos próximos
- Alertas de riscos
- Notificações de progresso

## 🚀 Instalação e Uso

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install

# Iniciar o sistema
npm start
```

### Comandos Disponíveis

```bash
# Iniciar servidor principal
npm start

# Modo desenvolvimento
npm run dev

# Acompanhar progresso (modo interativo)
npm run track

# Gerar relatórios
npm run report

# Iniciar dashboard web
npm run dashboard

# Verificar marcos
npm run milestone

# Backup dos dados
npm run backup

# Exportar dados
npm run export
```

## 📊 Dashboard Web

Acesse o dashboard em: http://localhost:3002

### Funcionalidades do Dashboard:
- **Métricas Gerais**: Progresso geral, fases concluídas, tempo gasto
- **Gráficos**: Progresso por fase, tempo gasto por atividade
- **Fases do Projeto**: Status e progresso de cada fase
- **Marcos**: Próximos marcos e prazos
- **Riscos**: Riscos identificados e mitigações

## 📈 Acompanhamento de Progresso

Execute `npm run track` para acessar o modo interativo:

### Opções Disponíveis:
1. **Ver status atual** - Visualizar progresso geral
2. **Atualizar fase** - Modificar progresso de uma fase
3. **Atualizar atividade** - Modificar progresso de uma atividade
4. **Adicionar atividade** - Criar nova atividade
5. **Registrar tempo** - Adicionar tempo gasto
6. **Ver marcos** - Próximos marcos importantes
7. **Ver riscos** - Riscos identificados

## 📋 Geração de Relatórios

Execute `npm run report` para gerar todos os relatórios:

### Tipos de Relatórios:
- **PDF**: Relatório completo formatado
- **HTML**: Relatório visual para web
- **CSV**: Dados tabulares para análise
- **Marcos**: Relatório específico de marcos

### Localização dos Relatórios:
```
project-tracking/reports/
├── relatorio-projeto-YYYY-MM-DD.pdf
├── relatorio-projeto-YYYY-MM-DD.html
├── relatorio-projeto-YYYY-MM-DD.csv
└── marcos-projeto-YYYY-MM-DD.csv
```

## 📁 Estrutura do Projeto

```
project-tracking/
├── src/                    # Código fonte
│   ├── index.js           # Servidor principal
│   └── dashboard.js       # Dashboard web
├── scripts/               # Scripts utilitários
│   ├── track-progress.js  # Acompanhamento interativo
│   ├── generate-report.js # Geração de relatórios
│   ├── check-milestones.js # Verificação de marcos
│   ├── backup-data.js     # Backup dos dados
│   └── export-data.js     # Exportação de dados
├── data/                  # Dados do projeto
│   └── project-data.json  # Dados principais
├── public/                # Arquivos públicos
│   └── dashboard.html     # Interface do dashboard
├── reports/               # Relatórios gerados
├── templates/             # Templates de relatórios
└── package.json          # Configuração do projeto
```

## 📊 Dados do Projeto

Os dados são armazenados em `data/project-data.json` e incluem:

### Estrutura dos Dados:
- **Informações do Projeto**: Título, autor, orientador, programa
- **Fases**: Lista de fases com progresso e status
- **Atividades**: Atividades detalhadas com tempo gasto
- **Marcos**: Marcos importantes com datas
- **Riscos**: Riscos identificados e mitigações
- **Métricas**: Estatísticas gerais do projeto

### Exemplo de Fase:
```json
{
  "id": 1,
  "name": "Revisão Bibliográfica",
  "description": "Revisão abrangente da literatura",
  "start_date": "2023-01-01",
  "end_date": "2023-04-30",
  "status": "completed",
  "progress": 100,
  "deliverables": ["Revisão completa", "Metodologia definida"],
  "milestones": [
    {
      "name": "Revisão concluída",
      "date": "2023-03-15",
      "status": "completed"
    }
  ]
}
```

## 🔧 Personalização

### Adicionar Novas Fases:
1. Edite `data/project-data.json`
2. Adicione nova fase no array `phases`
3. Execute `npm run track` para atualizar

### Modificar Relatórios:
1. Edite templates em `templates/`
2. Modifique `scripts/generate-report.js`
3. Execute `npm run report`

### Adicionar Novas Métricas:
1. Modifique `src/index.js`
2. Atualize função `updateMetrics()`
3. Reinicie o servidor

## 📱 API Endpoints

### Endpoints Disponíveis:
- `GET /api/project` - Dados completos do projeto
- `GET /api/progress` - Progresso geral
- `GET /api/milestones` - Lista de marcos
- `GET /api/risks` - Riscos identificados
- `GET /api/dashboard` - Dados do dashboard
- `POST /api/activity` - Adicionar atividade
- `PUT /api/activity/:id` - Atualizar atividade
- `PUT /api/phase/:id` - Atualizar fase

## 🔔 Agendamento de Tarefas

O sistema inclui tarefas agendadas:
- **Relatório semanal**: Toda segunda-feira às 9h
- **Relatório mensal**: Todo dia 1º às 9h
- **Verificação de marcos**: Diariamente

## 🛡️ Backup e Segurança

### Backup Automático:
```bash
npm run backup
```

### Exportação de Dados:
```bash
npm run export
```

## 📞 Suporte

Para problemas ou dúvidas:
1. Verifique os logs do sistema
2. Consulte a documentação
3. Execute `npm run track` para diagnóstico

## 🎯 Próximas Funcionalidades

- [ ] Notificações por email
- [ ] Integração com calendário
- [ ] Análise de produtividade
- [ ] Relatórios automáticos
- [ ] Interface mobile
- [ ] Integração com Git

---

**Desenvolvido para acompanhar o progresso da dissertação de mestrado sobre Diagnóstico de Falhas em Máquinas Rotativas.**
