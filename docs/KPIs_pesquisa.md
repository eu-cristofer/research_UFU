# Indicadores Chave de Desempenho (KPIs) da Pesquisa

Este documento consolida os principais indicadores para monitoramento do progresso científico e gerencial da dissertação: *Diagnóstico de Falhas em Máquinas Rotativas por Meio de Simulações Numéricas e Análise de Espectros de Ordem Superior*.

## 1. Indicadores de Desempenho Científico (Scientific KPIs)

Estes indicadores medem o avanço técnico e a qualidade da produção intelectual da pesquisa.

### 1.1 Indicadores Quantitativos
*Baseados no Planejamento da Dissertação*

- **Revisão Bibliográfica**:
  - Número de artigos lidos e resumidos (Meta: manter fluxo contínuo).
  - Atualização da base de referências no gerenciador bibliográfico.
- **Modelagem Numérica (ROSS)**:
  - Número de modelos de eixos rotativos implementados.
  - Taxa de modelos validados com sucesso contra literatura/casos analíticos.
- **Simulações e Dados**:
  - Quantidade de casos de simulação executados (Cenários: Normal, Trinca, Desalinhamento).
  - Volume de dados de vibração gerados para análise.
- **Implementação de Algoritmos**:
  - Algoritmos de HOS (Bi-espectro e Tri-espectro) implementados e funcionais.
  - Número de comparações quantitativas realizadas entre simulação e literatura.

### 1.2 Indicadores Qualitativos
*Avaliação subjetiva e técnica da evolução do pesquisador*

- **Domínio Teórico**: Profundidade da compreensão sobre dinâmica de rotores e processamento de sinais.
- **Proficiência Técnica**: Habilidade e autonomia na utilização da biblioteca ROSS e Python.
- **Capacidade Analítica**: Qualidade na interpretação física dos resultados de HOS (identificação de padrões).
- **Robustez**: Grau de consistência da metodologia frente a ruídos e variações de parâmetros.
- **Escrita Científica**: Clareza, coerência e rigor na redação dos capítulos e relatórios.

---

## 2. Indicadores de Gestão do Projeto (Project Management KPIs)

Estes indicadores monitoram a saúde do projeto, prazos e eficiência, alinhados com o *Manual de Gerenciamento Profissional*.

### 2.1 KPIs Principais
- **Progresso Geral**: Percentual de conclusão do escopo total em relação ao cronograma (Meta: 100% na data de defesa).
- **Conformidade de Marcos (Milestones)**: Percentual de marcos críticos entregues dentro do prazo estipulado (Meta: ≥95%).
- **Eficiência Temporal**: Razão entre horas reais gastas e horas estimadas por atividade (Meta: ≤110%, indicando desvio máximo de 10%).
- **Qualidade de Entregas**: Taxa de aprovação de entregas (capítulos, relatórios) pelo orientador sem necessidade de refação estrutural (Meta: Alta).
- **Controle de Riscos**: Percentual de riscos críticos identificados que possuem plano de mitigação ativo (Meta: 100% dos críticos).

### 2.2 Métricas Operacionais
- **Produtividade Diária/Semanal**: Horas produtivas dedicadas à pesquisa.
- **Taxa de Conclusão de Atividades**: Razão entre atividades concluídas e planejadas no ciclo semanal.
- **Frequência de Atualização**: Consistência no registro de progresso no sistema de tracking.

---

## 3. Matriz de Acompanhamento

| Categoria | KPI | Frequência de Medição | Fonte de Dados |
|-----------|-----|----------------------|----------------|
| **Científica** | Artigos/Fichamentos | Mensal | `docs/` e Gerenciador Bibl. |
| **Científica** | Modelos Validados | Por Fase | Repositório Git / Scripts |
| **Científica** | Resultados HOS | Por Fase | Relatórios de Análise |
| **Gestão** | Progresso Geral (%) | Semanal | Dashboard / `npm run track` |
| **Gestão** | Prazos (Milestones) | Semanal | Dashboard / Cronograma |
| **Gestão** | Horas Dedicadas | Diária | Registro de Tempo |

---

**Observação**: A revisão destes KPIs deve ser feita mensalmente durante a reunião de *Revisão Estratégica*, conforme definido nos procedimentos do projeto.


