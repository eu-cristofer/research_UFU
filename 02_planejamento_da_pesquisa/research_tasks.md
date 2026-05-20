# Lista de Tarefas da Pesquisa

Acompanhamento da evolução das atividades definidas em
[`00_planejamento_global.md`](00_planejamento_global.md). Cada tarefa
corresponde a um objetivo específico do planejamento; marque o checkbox
ao concluir.

> **Legenda de status:** `[ ]` pendente · `[~]` em andamento · `[x]` concluída
>
> **Última revisão:** 2026-05-19 — sincronizada com a versão atual do
> planejamento global (inclui tri-espectro na contextualização e gate
> Fase 1 → Fase 2 na seção 3.3).

---

## 3.1 — Revisão da Literatura

- [ ] **T01.** Revisão bibliográfica sobre **dinâmica de rotores**
  (efeitos giroscópicos, modos de flexão, resposta ao desbalanceamento,
  FEM Nelson-McVaugh / Lalanne-Ferraris). Consolidar referências no
  `references.bib`.
- [ ] **T02.** Revisão bibliográfica sobre **modelagem de trincas e
  desalinhamento** (Mayes-Davies, chaveamento de rigidez, modelos
  energéticos; desalinhamento paralelo/angular com componentes 1X/2X/3X).
- [ ] **T03.** Revisão bibliográfica sobre **espectros de ordem superior
  (HOS)** — bi-espectro, bicoerência **e tri-espectro** (Nikias &
  Mendel, Collis et al.), métodos de estimação e aplicações em
  diagnóstico de máquinas rotativas.
- [ ] **T04.** Revisão bibliográfica sobre **diagnóstico de falhas em
  máquinas rotativas** (PSD, envelope, wavelets, HOS, ML) — posicionar
  a lacuna preenchida pelo pipeline ROSS + HOS validado contra Sinha
  (2007).

## 3.2 — Modelagem Numérica e Validação

- [ ] **T05.** Construir **modelo FEM do rotor-mancal em ROSS** (rotor
  de Sinha 2007), incluindo efeitos giroscópicos, rigidez e
  amortecimento dos mancais. Verificar consistência dos nós entre
  `00_sinha_rotor.ipynb` e `constants.py`.
- [ ] **T06.** Implementar **modelo de trinca respirante** com rigidez
  variável no tempo (Mayes-Davies ou chaveamento), integrado ao
  `CRACK_NODE`.
- [ ] **T07.** Implementar **modelo de desalinhamento** com excitação
  harmônica em 1X, 2X e 3X aplicada no acoplamento.
- [ ] **T08.** **Validar modelos contra a literatura**: 1ª frequência
  natural ≈ 27,5 Hz, resposta ao desbalanceamento e curvas de Sinha
  (2007). Documentar erros relativos e critério de aceitação.

## 3.3 — Campanha de Simulação Paramétrica

### Fase 1 — Validação (gate go/no-go)

- [ ] **T21.** Validar a **baseline do pipeline (ROSS + HOS)** contra
  Sinha (2007): topologia dos espectros, picos em (1X,1X) e (1X,2X),
  bifase. Documentar critério de aceitação.
  *Só avançar para a Fase 2 se este gate for aprovado.*

### Fase 2 — DoE (somente após aprovação na Fase 1)

- [ ] **T09.** Projetar **DoE paramétrico** cobrindo a/D ∈ [0,0; 0,5],
  ângulo de desalinhamento ∈ [0,0°; 2,0°], rotação ∈ [0,5×; 1,5×]
  da crítica e amortecimento ∈ [0,01; 0,05]. Definir grade fatorial,
  réplicas e sementes de ruído.
- [ ] **T10.** **Executar a campanha** e armazenar sinais em formato
  estruturado (HDF5/Parquet) com metadados completos de parâmetros e
  sementes.

## 3.4 — Análise de Espectros de Ordem Superior

- [ ] **T11.** Implementar **estimadores de bi-espectro e bicoerência**
  (método direto com média por segmentos). Validar com sinais
  sintéticos de acoplamento quadrático conhecido.
- [ ] **T12.** Definir e extrair **indicadores HOS**: BPR, BCS,
  Entropia Bispectral (BE) e bifase em frequências-chave (1X, 2X, 3X).
- [ ] **T13.** Construir a **matriz de características**
  (simulação × indicador) para uso na etapa de diagnóstico.

## 3.5 — Diagnóstico de Falhas e Análise de Sensibilidade

- [ ] **T14.** Avaliar **separabilidade** entre condições (saudável ×
  trinca × desalinhamento) — matriz de confusão, ROC, acurácia
  (LDA, k-NN, SVM linear).
- [ ] **T15.** **Análise de sensibilidade** em relação a severidade,
  rotação, amortecimento e ruído.
- [ ] **T16.** Comparar **HOS × PSD** sob as mesmas condições e
  reportar ganho de discriminação.

## 3.6 — Validação Contra Literatura e Reprodutibilidade

- [ ] **T17.** **Validação final** dos padrões HOS contra Sinha (2007)
  (correspondência qualitativa e divergências).
- [ ] **T18.** Publicar o **pacote reprodutível** (GitHub + Zenodo) com
  código, dados, ambiente e notebooks; registrar release com DOI.

## Redação

- [ ] **T19.** Redigir capítulos da **dissertação** (Introdução,
  Fundamentação Teórica, Metodologia, Resultados e Discussão,
  Conclusões), mantendo coerência com `constants.py` e a tabela de
  mapeamento Questões × Objetivos.
- [ ] **T20.** Preparar **artigo para periódico** (MSSP, JSV, JVET ou
  similar) — selecionar revista e adequar formato.

---

## Mapeamento Questões × Tarefas

| # | Questão norteadora | Tarefas relacionadas |
|---|---|---|
| Q1 | FEM via ROSS reproduz dinâmica de rotores com trinca/desalinhamento? | T05, T06, T07, T08 |
| Q2 | Padrões HOS numéricos consistentes com Sinha (2007)? | T21, T17 |
| Q3 | Quais características não lineares são identificadas por HOS? | T11, T12, T13 |
| Q4 | Bispectro/bicoerência distingue falhas similares na PSD? | T13, T14, T16 |
| Q5 | Quais indicadores escalares são mais robustos para classificação? | T12, T14, T15 |
| Q6 | Como severidade e rotação influenciam padrões bispectrais? | T09, T10, T15 |
| Q7 | HOS supera PSD para falhas com PSD semelhante? | T16 |
| Q8 | Abordagem numérica open source é comparável aos experimentos? | T17, T18 |
| Q9 | Metodologia é robusta a parâmetros e ruído? | T09, T10, T15 |

## Dependências críticas

- **T21 (Fase 1 — gate)** depende de T06, T07, T08, T11 e **bloqueia**
  T09 e T10. Não inicie a Fase 2 (DoE) antes de aprovar este gate.
- T13 depende de T11 + T12.
- T14, T15 e T16 dependem de T13.
- T17 depende de T13, T14 e T16.
- T19 e T20 dependem dos resultados consolidados (T14–T17).
