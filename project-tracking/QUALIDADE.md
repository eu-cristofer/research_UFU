# 📋 PROCEDURE.md - Manual de Gerenciamento Profissional de Projeto de Pesquisa

## 🎯 Visão Executiva

Este documento estabelece os procedimentos operacionais padrão (SOP) para o gerenciamento profissional do projeto de dissertação de mestrado **"Diagnóstico de Falhas em Máquinas Rotativas por Meio de Simulações Numéricas e Análise de Espectros de Ordem Superior"**.

**Responsável**: Cristofer Antoni Souza Costa  
**Orientador**: Prof. Dr. Aldemir Cavallini Jr.  
**Programa**: Pós-Graduação em Engenharia Mecânica - UFU  
**Linha de Pesquisa**: Mecânica dos Sólidos e Vibrações  

---

## 📊 Estrutura de Governança

### 🎯 Objetivos Estratégicos
1. **Excelência Acadêmica**: Manter padrões elevados de qualidade científica
2. **Gestão de Tempo**: Otimizar eficiência e produtividade
3. **Controle de Qualidade**: Garantir conformidade com cronograma e marcos
4. **Gestão de Riscos**: Identificar e mitigar riscos proativamente
5. **Documentação**: Manter registros completos e auditáveis

### 📈 Métricas de Sucesso (KPIs)
- **Progresso Geral**: Meta 100% até 01/01/2025
- **Conformidade de Marcos**: ≥95% dos marcos cumpridos no prazo
- **Eficiência Temporal**: Tempo real vs. tempo estimado ≤110%
- **Qualidade de Entregas**: 100% das entregas aprovadas na primeira submissão
- **Gestão de Riscos**: ≤5% de riscos críticos não mitigados

---

## 🚀 PROCEDIMENTOS DE INICIALIZAÇÃO

### 1. Setup do Ambiente
```bash
# Verificação de pré-requisitos
node --version  # Deve ser ≥16.0.0
npm --version   # Deve ser ≥8.0.0

# Navegação para o diretório do projeto
cd project-tracking

# Configurando o proxy
npm config set proxy http://USERNAME:PASSWORD@PROXY_ADDRESS:PROXY_PORT
npm config set https-proxy http://USERNAME:PASSWORD@PROXY_ADDRESS:PROXY_PORT

# Instalação de dependências (primeira execução)
npm install

# Verificação de integridade
npm audit
```

### 2. Inicialização do Sistema
```bash
# Iniciar servidor principal
npm start

# Verificar status dos serviços
curl http://localhost:3001/api/project
```

### 3. Validação de Acesso
- **Dashboard Web**: http://localhost:3001/dashboard
- **API Principal**: http://localhost:3001/api/project
- **Relatórios**: Diretório `reports/`

---

## 📊 PROCEDIMENTOS OPERACIONAIS DIÁRIOS

### 🌅 Rotina Matinal (08:00-08:15)
**Objetivo**: Estabelecer baseline do dia e identificar prioridades

```bash
# 1. Verificação de Status Geral
npm run track
# Selecionar: "1. Ver status atual"
# Documentar: Progresso geral, fases ativas, alertas

# 2. Análise de Marcos Críticos
npm run milestone
# Identificar: Marcos com prazo ≤7 dias
# Ação: Priorizar atividades relacionadas

# 3. Dashboard Executivo
# Acessar: http://localhost:3001/dashboard
# Revisar: Métricas gerais, gráficos de progresso, alertas de risco
```

**Checklist Matinal**:
- [ ] Status geral verificado
- [ ] Marcos críticos identificados
- [ ] Riscos ativos revisados
- [ ] Prioridades do dia definidas

### 🌆 Rotina Vespertina (17:00-17:15)
**Objetivo**: Consolidar progresso do dia e preparar próximo dia

```bash
# 1. Atualização de Progresso
npm run track
# Selecionar: "3. Atualizar atividade" ou "2. Atualizar fase"
# Documentar: Progresso realizado, obstáculos encontrados

# 2. Registro de Tempo
npm run track
# Selecionar: "5. Registrar tempo"
# Inserir: Tempo gasto por atividade (precisão: 0.5h)

# 3. Análise de Riscos
npm run track
# Selecionar: "7. Ver riscos"
# Avaliar: Novos riscos identificados, status de mitigações
```

**Checklist Vespertino**:
- [ ] Progresso atualizado
- [ ] Tempo registrado
- [ ] Riscos avaliados
- [ ] Próximo dia planejado

---

## 📅 PROCEDIMENTOS OPERACIONAIS SEMANAIS

### 📅 Segunda-feira - Planejamento Estratégico (09:00-10:00)
**Objetivo**: Estabelecer direcionamento estratégico da semana

```bash
# 1. Relatório de Performance da Semana Anterior
npm run report
# Analisar: reports/relatorio-projeto-YYYY-MM-DD.pdf
# Focar: Desvios de cronograma, eficiência temporal, qualidade

# 2. Revisão de Progresso Geral
npm run track
# Selecionar: "1. Ver status atual"
# Comparar: Progresso real vs. planejado

# 3. Planejamento de Atividades
npm run track
# Selecionar: "4. Adicionar atividade"
# Criar: Atividades específicas para a semana
```

**Deliverables Segunda-feira**:
- [ ] Relatório semanal gerado
- [ ] Análise de performance concluída
- [ ] Plano de atividades da semana definido
- [ ] Riscos semanais identificados

### 📊 Sexta-feira - Revisão de Performance (16:00-17:00)
**Objetivo**: Consolidar resultados da semana e preparar próxima semana

```bash
# 1. Atualização Completa de Atividades
npm run track
# Selecionar: "3. Atualizar atividade"
# Atualizar: Todas as atividades da semana

# 2. Geração de Relatório Semanal
npm run report
# Gerar: Relatório completo da semana
# Incluir: PDF, HTML, CSV

# 3. Backup de Segurança
npm run backup
# Executar: Backup completo dos dados
# Verificar: Integridade do backup
```

**Deliverables Sexta-feira**:
- [ ] Todas as atividades atualizadas
- [ ] Relatório semanal gerado
- [ ] Backup de segurança realizado
- [ ] Análise de tendências concluída

---

## 📆 PROCEDIMENTOS OPERACIONAIS MENSALES

### 🗓️ Primeiro Dia do Mês - Revisão Estratégica (09:00-12:00)
**Objetivo**: Análise estratégica mensal e ajustes de curso

```bash
# 1. Backup Completo e Exportação
npm run backup
npm run export
# Gerar: Backup completo + exportação de dados históricos

# 2. Relatório Executivo Mensal
npm run report
# Analisar: Tendências mensais, performance geral
# Focar: Conformidade de cronograma, eficiência, qualidade

# 3. Revisão e Ajuste de Cronograma
# Editar: data/project-data.json
# Ajustar: Datas, marcos, estimativas baseadas em performance real
```

**Deliverables Mensais**:
- [ ] Backup completo realizado
- [ ] Dados históricos exportados
- [ ] Relatório executivo mensal gerado
- [ ] Cronograma revisado e ajustado
- [ ] Análise de tendências concluída

---

## 🎯 GESTÃO DE FASES DO PROJETO

### 📝 Procedimento para Adição de Nova Fase
**Responsável**: Pesquisador Principal  
**Aprovação**: Orientador (para fases críticas)

1. **Análise de Viabilidade**
   ```bash
   # Revisar cronograma atual
   npm run track
   # Selecionar: "1. Ver status atual"
   ```

2. **Definição da Fase**
   ```bash
   # Editar arquivo de dados
   code data/project-data.json
   ```

3. **Estrutura Padrão da Fase**
   ```json
   {
     "id": [próximo_id],
     "name": "Nome Descritivo da Fase",
     "description": "Descrição detalhada dos objetivos e escopo",
     "start_date": "YYYY-MM-DD",
     "end_date": "YYYY-MM-DD",
     "status": "pending",
     "progress": 0,
     "deliverables": [
       "Entregável 1 - Especificação técnica",
       "Entregável 2 - Implementação",
       "Entregável 3 - Validação"
     ],
     "milestones": [
       {
         "name": "Marco 1 - Nome descritivo",
         "date": "YYYY-MM-DD",
         "status": "pending"
       }
     ]
   }
   ```

4. **Validação e Ativação**
   ```bash
   # Reiniciar sistema
   npm start
   
   # Validar no dashboard
   # Acessar: http://localhost:3001/dashboard
   ```

### 🔄 Procedimento para Atualização de Progresso de Fase
**Frequência**: Diária (atividades ativas)  
**Responsável**: Pesquisador Principal

```bash
npm run track
# Selecionar: "2. Atualizar fase"
# Selecionar: Fase específica
# Inserir: Progresso atual (0-100%)
# Documentar: Justificativa para mudanças significativas
```

**Critérios de Validação**:
- Progresso deve ser justificado por entregas concretas
- Mudanças >10% requerem documentação adicional
- Status deve refletir realidade operacional

---

## 📊 GESTÃO DE ATIVIDADES

### ➕ Procedimento para Adição de Atividade
**Responsável**: Pesquisador Principal  
**Validação**: Orientador (para atividades críticas)

```bash
npm run track
# Selecionar: "4. Adicionar atividade"
```

**Campos Obrigatórios**:
- **Título**: Descritivo e específico
- **Descrição**: Objetivos, escopo, critérios de aceitação
- **Fase Relacionada**: Vinculação clara à fase do projeto
- **Data de Início**: Realista e alinhada ao cronograma
- **Data de Fim**: Baseada em estimativas validadas
- **Tempo Estimado**: Em horas (precisão: 0.5h)

### ⏱️ Procedimento para Registro de Tempo
**Frequência**: Diária  
**Precisão**: 0.5 horas  
**Responsável**: Pesquisador Principal

```bash
npm run track
# Selecionar: "5. Registrar tempo"
# Selecionar: Atividade específica
# Inserir: Tempo gasto (formato: X.X horas)
# Adicionar: Notas sobre produtividade, obstáculos, insights
```

**Critérios de Qualidade**:
- Tempo deve ser registrado no mesmo dia
- Notas devem incluir contexto relevante
- Variações >20% da estimativa requerem justificativa

### 📈 Procedimento para Atualização de Progresso de Atividade
**Frequência**: Conforme necessário (mínimo semanal)  
**Responsável**: Pesquisador Principal

```bash
npm run track
# Selecionar: "3. Atualizar atividade"
# Selecionar: Atividade específica
# Inserir: Progresso atual (0-100%)
# Atualizar: Status se necessário
```

**Status Padrão**:
- **pending**: Não iniciada
- **in_progress**: Em execução
- **completed**: Concluída
- **blocked**: Bloqueada (requer ação externa)
- **cancelled**: Cancelada

---

## 🎯 GESTÃO DE MARCOS

### 📅 Procedimento para Verificação de Marcos
**Frequência**: Diária  
**Responsável**: Pesquisador Principal

```bash
# Verificação automática
npm run milestone

# Verificação via dashboard
# Acessar: http://localhost:3001/dashboard
# Seção: "Próximos Marcos"
```

### ✅ Procedimento para Atualização de Status de Marco
**Responsável**: Pesquisador Principal  
**Aprovação**: Orientador (para marcos críticos)

1. **Via Sistema Interativo**
   ```bash
   npm run track
   # Selecionar: "6. Ver marcos"
   ```

2. **Via Edição Direta**
   ```bash
   # Editar arquivo de dados
   code data/project-data.json
   # Localizar: Marco específico
   # Alterar: status para "completed"
   # Documentar: Data de conclusão real
   ```

**Critérios de Conclusão**:
- Marco deve ter entregas validadas
- Documentação deve estar completa
- Aprovação do orientador (quando aplicável)

---

## ⚠️ GESTÃO DE RISCOS

### 🔍 Procedimento para Identificação de Riscos
**Frequência**: Contínua  
**Responsável**: Pesquisador Principal  
**Revisão**: Orientador (riscos críticos)

```bash
npm run track
# Selecionar: "7. Ver riscos"
```

### 📝 Procedimento para Adição de Novo Risco
**Responsável**: Pesquisador Principal  
**Classificação**: Automática baseada em critérios

1. **Edição do Arquivo de Dados**
   ```bash
   code data/project-data.json
   ```

2. **Estrutura Padrão do Risco**
   ```json
   {
     "id": [próximo_id],
     "title": "Título Descritivo do Risco",
     "description": "Descrição detalhada do risco e seu impacto",
     "probability": "low|medium|high",
     "impact": "low|medium|high",
     "status": "active|mitigated|resolved",
     "mitigation": "Estratégia específica de mitigação",
     "owner": "Responsável pela mitigação",
     "date_identified": "YYYY-MM-DD",
     "review_date": "YYYY-MM-DD"
   }
   ```

### 🚨 Classificação de Riscos
- **Baixo**: Probabilidade baixa + Impacto baixo
- **Médio**: Probabilidade média OU Impacto médio
- **Alto**: Probabilidade alta OU Impacto alto
- **Crítico**: Probabilidade alta + Impacto alto

---

## 📊 GERAÇÃO DE RELATÓRIOS

### 📋 Procedimento para Relatório Completo
**Frequência**: Semanal (sexta-feira)  
**Responsável**: Pesquisador Principal

```bash
# Geração de todos os relatórios
npm run report
```

**Arquivos Gerados**:
- `reports/relatorio-projeto-YYYY-MM-DD.pdf` - Relatório executivo
- `reports/relatorio-projeto-YYYY-MM-DD.html` - Relatório visual
- `reports/relatorio-projeto-YYYY-MM-DD.csv` - Dados tabulares
- `reports/marcos-projeto-YYYY-MM-DD.csv` - Marcos específicos

### 📈 Procedimento para Relatório Específico
**Responsável**: Pesquisador Principal  
**Frequência**: Conforme necessário

```bash
# Relatório de marcos
npm run milestone

# Relatório de progresso
npm run track
# Selecionar: "1. Ver status atual"
```

### 📊 Critérios de Qualidade dos Relatórios
- **Completude**: Todos os dados relevantes incluídos
- **Precisão**: Dados validados e atualizados
- **Clareza**: Linguagem técnica apropriada
- **Temporalidade**: Dados do período correto
- **Formatação**: Padrão profissional mantido

---

## 💾 GESTÃO DE BACKUP E SEGURANÇA

### 🔄 Procedimento de Backup
**Frequência**: Diária (automática) + Antes de mudanças críticas  
**Responsável**: Pesquisador Principal

```bash
# Backup completo
npm run backup

# Verificação de integridade
# Validar: Tamanho dos arquivos, data de modificação
```

### 📤 Procedimento de Exportação
**Frequência**: Mensal + Conforme necessário  
**Responsável**: Pesquisador Principal

```bash
# Exportação de dados
npm run export

# Verificação de completude
# Validar: Todos os dados exportados corretamente
```

### 🛡️ Política de Segurança
1. **Backup Diário**: Executar `npm run backup` diariamente
2. **Backup Pré-Mudança**: Sempre antes de edições críticas
3. **Versionamento**: Manter histórico de versões importantes
4. **Teste de Restauração**: Mensalmente testar restauração
5. **Armazenamento Seguro**: Manter backups em local seguro

---

## 🎨 PERSONALIZAÇÃO E MANUTENÇÃO

### 🎨 Procedimento para Customização do Dashboard
**Responsável**: Pesquisador Principal  
**Aprovação**: Orientador (mudanças significativas)

1. **Customização de Interface**
   ```bash
   # Editar CSS
   code public/dashboard.html
   # Modificar: Seção <style>
   ```

2. **Adição de Métricas**
   ```bash
   # Modificar lógica
   code src/index.js
   # Atualizar: Função updateMetrics()
   ```

### 📊 Procedimento para Customização de Relatórios
**Responsável**: Pesquisador Principal

1. **Modificação de Templates**
   ```bash
   # Editar templates
   code templates/
   # Modificar: Templates de relatório
   ```

2. **Personalização de Geração**
   ```bash
   # Modificar lógica
   code scripts/generate-report.js
   # Atualizar: Lógica de geração
   ```

### 🔧 Procedimento de Manutenção
**Frequência**: Mensal  
**Responsável**: Pesquisador Principal

```bash
# Limpeza de dados antigos
find reports/ -name "*.pdf" -mtime +30 -delete
find reports/ -name "*.html" -mtime +30 -delete
find reports/ -name "*.csv" -mtime +30 -delete

# Atualização de dependências
npm update
npm audit
npm audit fix
```

---

## 🚨 PROCEDIMENTOS DE SOLUÇÃO DE PROBLEMAS

### ❌ Problemas Críticos

#### Dashboard Não Carrega
**Sintomas**: Erro 404, página em branco  
**Ação Imediata**:
```bash
# Verificar status do servidor
npm start

# Verificar logs
# Console do navegador (F12)

# Verificar porta
curl http://localhost:3001/api/project
```

#### Erro de Carregamento de Dados
**Sintomas**: Erro JSON, dados não aparecem  
**Ação Imediata**:
```bash
# Verificar integridade do arquivo
code data/project-data.json

# Validar JSON
npm run track

# Restaurar backup se necessário
npm run backup
```

#### Gráficos Não Renderizam
**Sintomas**: Gráficos em branco, erros JavaScript  
**Ação Imediata**:
```bash
# Limpar cache do navegador
# Verificar console (F12)
# Recarregar página
# Verificar conectividade com CDN
```

### 🔍 Procedimento de Diagnóstico
**Responsável**: Pesquisador Principal  
**Escalação**: Orientador (problemas críticos)

1. **Coleta de Informações**
   ```bash
   # Status geral
   npm run track
   
   # Logs do sistema
   # Console do navegador (F12)
   
   # Verificação de dados
   code data/project-data.json
   ```

2. **Análise de Causa Raiz**
   - Identificar momento exato do problema
   - Verificar mudanças recentes
   - Analisar logs de erro

3. **Implementação de Solução**
   - Aplicar correção baseada em análise
   - Testar solução em ambiente controlado
   - Documentar solução para referência futura

---

## ⚡ COMANDOS DE PRODUTIVIDADE

### 🎯 Comandos Essenciais
```bash
# Inicialização
npm start                    # Iniciar sistema
npm run track               # Modo interativo
npm run report              # Gerar relatórios
npm run backup              # Backup de segurança
npm run milestone           # Verificar marcos
```

### ⚡ Atalhos de Produtividade
```bash
# Configurar aliases (adicionar ao .bashrc/.zshrc)
alias pt-start="cd project-tracking && npm start"
alias pt-track="cd project-tracking && npm run track"
alias pt-report="cd project-tracking && npm run report"
alias pt-backup="cd project-tracking && npm run backup"
alias pt-dashboard="open http://localhost:3001/dashboard"
```

### 🔄 Automação de Tarefas
```bash
# Script de rotina diária (criar script personalizado)
#!/bin/bash
cd project-tracking
npm run track << EOF
1
EOF
npm run backup
```

---

## 📊 MÉTRICAS DE PERFORMANCE E QUALIDADE

### 🎯 KPIs Principais
1. **Progresso Geral**: Meta 100% até 01/01/2025
2. **Conformidade de Marcos**: ≥95% dos marcos cumpridos no prazo
3. **Eficiência Temporal**: Tempo real vs. tempo estimado ≤110%
4. **Qualidade de Entregas**: 100% das entregas aprovadas na primeira submissão
5. **Gestão de Riscos**: ≤5% de riscos críticos não mitigados

### 📈 Métricas Secundárias
- **Produtividade Diária**: Horas produtivas por dia
- **Taxa de Conclusão**: Atividades concluídas vs. planejadas
- **Precisão de Estimativas**: Variação entre estimado e real
- **Frequência de Atualizações**: Consistência no registro de progresso

### 📊 Relatórios de Performance
```bash
# Análise semanal de performance
npm run report
# Focar: Tempo gasto vs. progresso, eficiência por fase

# Análise mensal de tendências
npm run export
# Focar: Evolução do progresso, padrões de produtividade
```

---

## 🎓 PRÁTICAS DE EXCELÊNCIA

### 💡 Maximização de Produtividade
1. **Rotina Consistente**: Executar rotinas diárias sempre no mesmo horário
2. **Atualizações Frequentes**: Mínimo 2x por dia para atividades ativas
3. **Revisão Semanal**: 30 minutos toda sexta para análise e planejamento
4. **Backup Preventivo**: Antes de qualquer mudança significativa

### 🎯 Foco em Resultados
1. **Metas SMART**: Específicas, Mensuráveis, Atingíveis, Relevantes, Temporais
2. **Marcos Mensuráveis**: Critérios claros de sucesso para cada marco
3. **Monitoramento Contínuo**: Dashboard como ferramenta de controle
4. **Ajustes Ágeis**: Correção rápida de desvios identificados

### 📊 Análise de Dados
1. **Tendências**: Identificar padrões de produtividade
2. **Gargalos**: Localizar fases que consomem mais tempo
3. **Otimização**: Usar dados históricos para melhorar estimativas
4. **Comunicação**: Relatórios como ferramenta de comunicação com orientador

---

## 🎯 CHECKLIST DE QUALIDADE

### ✅ Checklist Diário (15 minutos)
- [ ] Status geral verificado e documentado
- [ ] Progresso atualizado com justificativa
- [ ] Tempo registrado com precisão de 0.5h
- [ ] Riscos ativos revisados e avaliados
- [ ] Marcos críticos identificados e priorizados

### ✅ Checklist Semanal (1 hora)
- [ ] Relatório semanal gerado e analisado
- [ ] Backup de segurança realizado e verificado
- [ ] Marcos da semana verificados e atualizados
- [ ] Planejamento da próxima semana definido
- [ ] Análise de performance concluída

### ✅ Checklist Mensal (3 horas)
- [ ] Relatório executivo mensal gerado
- [ ] Dados históricos exportados e arquivados
- [ ] Cronograma revisado e ajustado
- [ ] Riscos reavaliados e mitigações atualizadas
- [ ] Análise de tendências e insights documentados

---

## 📞 SUPORTE E ESCALAÇÃO

### 🆘 Procedimento de Suporte
**Nível 1**: Pesquisador Principal (auto-resolução)  
**Nível 2**: Orientador (problemas técnicos complexos)  
**Nível 3**: Suporte técnico especializado (problemas de sistema)

### 📚 Recursos de Suporte
1. **Documentação Técnica**: README.md
2. **Interface Visual**: Dashboard web
3. **API de Integração**: Endpoints REST
4. **Logs do Sistema**: Console do navegador e terminal

### 🔄 Procedimento de Escalação
1. **Identificação**: Problema não resolvido em 30 minutos
2. **Documentação**: Coletar logs, screenshots, descrição detalhada
3. **Escalação**: Contatar orientador com informações completas
4. **Acompanhamento**: Monitorar resolução e documentar solução

---

## 📋 APÊNDICES

### 📊 A. Estrutura de Dados
```json
{
  "project": {
    "title": "string",
    "author": "string",
    "advisor": "string",
    "program": "string",
    "research_line": "string",
    "start_date": "YYYY-MM-DD",
    "expected_end_date": "YYYY-MM-DD",
    "current_date": "YYYY-MM-DD"
  },
  "phases": [
    {
      "id": "number",
      "name": "string",
      "description": "string",
      "start_date": "YYYY-MM-DD",
      "end_date": "YYYY-MM-DD",
      "status": "pending|in_progress|completed",
      "progress": "number (0-100)",
      "deliverables": ["string"],
      "milestones": [
        {
          "name": "string",
          "date": "YYYY-MM-DD",
          "status": "pending|completed"
        }
      ]
    }
  ],
  "activities": [
    {
      "id": "number",
      "phase_id": "number",
      "title": "string",
      "description": "string",
      "start_date": "YYYY-MM-DD",
      "end_date": "YYYY-MM-DD",
      "status": "pending|in_progress|completed|blocked|cancelled",
      "progress": "number (0-100)",
      "time_spent": "number (hours)",
      "notes": "string"
    }
  ],
  "risks": [
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "probability": "low|medium|high",
      "impact": "low|medium|high",
      "status": "active|mitigated|resolved",
      "mitigation": "string",
      "owner": "string",
      "date_identified": "YYYY-MM-DD",
      "review_date": "YYYY-MM-DD"
    }
  ],
  "metrics": {
    "total_phases": "number",
    "completed_phases": "number",
    "in_progress_phases": "number",
    "pending_phases": "number",
    "overall_progress": "number (0-100)",
    "total_activities": "number",
    "completed_activities": "number",
    "in_progress_activities": "number",
    "total_time_spent": "number (hours)",
    "estimated_total_time": "number (hours)"
  }
}
```

### 🔧 B. Comandos de Manutenção
```bash
# Limpeza de arquivos antigos
find reports/ -name "*.pdf" -mtime +30 -delete
find reports/ -name "*.html" -mtime +30 -delete
find reports/ -name "*.csv" -mtime +30 -delete

# Verificação de integridade
npm audit
npm audit fix

# Atualização de dependências
npm update

# Verificação de performance
npm run track
npm run report
```

### 📊 C. Templates de Relatórios
- **Relatório Executivo**: PDF com resumo executivo
- **Relatório Técnico**: HTML com detalhes técnicos
- **Dados Tabulares**: CSV para análise em planilhas
- **Relatório de Marcos**: CSV específico para marcos

---

**🎯 Lembre-se: A excelência em pesquisa requer disciplina, consistência e atenção aos detalhes. Este sistema é sua ferramenta profissional para alcançar os mais altos padrões de qualidade acadêmica.**

---

*Documento**: PROCEDURE.md - Manual de Gerenciamento Profissional*  
*Versão**: 1.0.0  
*Data**: 2024-12-19  
*Autor**: Cristofer Antoni Souza Costa  
*Revisão**: Prof. Dr. Aldemir Cavallini Jr.*  
*Próxima Revisão**: 2025-03-19*


