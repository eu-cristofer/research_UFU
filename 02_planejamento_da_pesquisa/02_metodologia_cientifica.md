# Metodologia Científica Aplicada

> Documento de classificação metodológica da pesquisa. Complementa
> [`00_planejamento_global.md`](00_planejamento_global.md) (objetivos
> 3.1–3.6), [`01_plano_de_escrita.md`](01_plano_de_escrita.md) (estrutura
> do Capítulo 3) e a operacionalização em
> [`../01_planejamento_científico/sci_tasks.md`](../01_planejamento_científico/sci_tasks.md).
>
> **Última revisão:** 2026-05-20.

---

## 3.1 Tipo de Pesquisa

| Dimensão | Classificação | Justificativa no contexto da dissertação |
|---|---|---|
| Natureza | Pesquisa Aplicada | Endereça um problema concreto de manutenção preditiva em máquinas rotativas (cf. §1.1 do planejamento global). |
| Abordagem | Quantitativa, com análise qualitativa complementar | Indicadores HOS (BPR, BCS, BE, bifase) são quantitativos; a topologia de bispectro/trispectro é interpretada qualitativamente em comparação com Sinha (2007). |
| Objetivos | Desenvolvimento e Validação | Construir o pipeline ROSS + HOS (desenvolvimento) e demonstrar concordância com Sinha (2007) e demais referências (validação). |
| Procedimentos | Pesquisa Computacional/Numérica | Investigação via simulação FEM em ROSS + processamento de sinais em Python. Delimitação explícita do estudo (§Delimitação do Estudo do planejamento global). |

## 3.2 Métodos de Investigação

- **Simulação Numérica** — modelos FEM em ROSS para rotor saudável,
  trinca respirante (Mayes–Davies) e desalinhamento (excitação 1X/2X/3X);
  ver objetivo específico §3.2 e tarefas T05–T08 em
  [`research_tasks.md`](research_tasks.md).
- **Análise de Sinais** — estimadores de bispectro (Kim–Powers
  normalizado), bicoerência e tri-espectro implementados em
  `signal_utils.py` (Sprint 01 do programa de validação). Extração dos
  indicadores escalares definidos em §3.4 do planejamento global.
- **Comparação com Literatura** — benchmarking contra Sinha (2007),
  Figs. 2–10, com matriz de validação de 10 critérios
  (`results/validation_matrix.csv`, Sprint 07).
- **Análise de Sensibilidade** — DoE paramétrico (a/D, ângulo de
  desalinhamento, rotação, amortecimento), executado **apenas após**
  o gate de validação da Fase 1 (cf. §3.3 do planejamento global e
  Sprint 08 candidato em `sci_tasks.md`).

## 3.3 Validação Científica

| Tipo | Como será conduzida | Evidência/Artefato |
|---|---|---|
| Teórica | Fundamentação em literatura consolidada (Nelson–McVaugh, Lalanne–Ferraris, Nikias & Mendel, Collis et al.). | Capítulo 2 da dissertação (`01_plano_de_escrita.md` §2). |
| Numérica | Conferência da 1ª frequência natural (~27,5 Hz), órbita a 772,5 RPM (loop com pequena alça), convergência modal. | Sprint 00 (modal), Sprint 03 (convergência), `02_simula/00_sinha_rotor.ipynb`. |
| Comparativa | Reprodução qualitativa e quantitativa das Figs. 2, 3, 5, 7, 9 e 10 de Sinha (2007); critérios `±1 bin` em picos bispectrais e SNR=40 dB. | Sprints 04, 05, 06; PDFs `reports/sinha_*_side_by_side.pdf`. |
| Reprodutibilidade | Pipeline em código aberto (ROSS + Python), `constants.py` como fonte única de verdade, release com DOI no Zenodo. | Tarefa T18 em `research_tasks.md`. |

## 3.4 Critérios de Qualidade

- **Rigor Metodológico** — aderência a métodos consagrados: FEM
  Nelson–McVaugh para rotores, estimador Kim–Powers (1979) para
  bispectro, modelo Mayes–Davies (1984) para trinca respirante, modelo
  Xia et al. (2019) para desalinhamento.
- **Reprodutibilidade** — todos os parâmetros de simulação centralizados
  em `02_simula/constants.py`; *seeds* de ruído registradas; ambiente
  `research` definido em `environment.yml`; entregas versionadas em
  `git` com release Zenodo.
- **Validação Multi-fonte** — confronto com literatura experimental
  (Sinha, 2007), confronto com casos sintéticos (acoplamento
  quadrático conhecido nos testes A/B/C do Sprint 01) e, na extensão
  futura, com a bancada Bently Nevada RK4 (cf.
  `01_article/04_rk4_working_plan.md`).
- **Originalidade** — contribuições metodológicas previstas:
  (i) pipeline aberto ROSS + HOS reprodutível;
  (ii) extensão da validação de Sinha para o caso de desalinhamento
       (Sprint 06 — contribuição nova; Sinha cobre apenas trinca);
  (iii) matriz de características escalares (BPR, BCS, BE, bifase)
       sistematicamente comparada com indicadores PSD (Q7).

---

## Mapeamento metodologia × objetivos × tarefas

| Item desta metodologia | Objetivo específico | Tarefas / Sprints |
|---|---|---|
| §3.2 — Simulação Numérica | 3.2 (modelagem e validação) | T05–T08; Sprints 00, 02, 03 |
| §3.2 — Análise de Sinais | 3.4 (análise HOS) | T11–T13; Sprint 01 |
| §3.2 — Comparação com Literatura | 3.6 (validação contra literatura) | T17; Sprints 04, 05, 06, 07 |
| §3.2 — Análise de Sensibilidade | 3.3 + 3.5 (DoE + diagnóstico) | T09, T10, T14, T15, T16; Sprint 08 (candidato) |
| §3.3 — Validação Comparativa | 3.6 | Sprint 07 (`validation_matrix.csv`) |
| §3.4 — Reprodutibilidade | 3.6 | T18 (Zenodo + GitHub) |
