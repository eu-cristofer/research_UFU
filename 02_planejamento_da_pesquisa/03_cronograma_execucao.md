# Cronograma de Execução (24 meses)

> Cronograma macro de 24 meses do mestrado. Operacionalmente, a execução
> é conduzida pelos sprints definidos em
> [`../01_planejamento_científico/sci_tasks.md`](../01_planejamento_científico/sci_tasks.md);
> este documento mapeia o programa de sprints para o calendário oficial
> do POSMEC. Ver também
> [`00_planejamento_global.md`](00_planejamento_global.md) (objetivos)
> e [`02_metodologia_cientifica.md`](02_metodologia_cientifica.md)
> (classificação metodológica).
>
> **Última revisão:** 2026-05-20.
> **Início do mestrado (mês 1):** *preencher quando confirmado*.

---

## Visão geral

| Fase | Meses | Tema | Produtos principais |
|---|---|---|---|
| I | 1–4 | Fundamentação e Planejamento | Capítulos 1 e 2 (esboço); `references.bib`. |
| II | 5–9 | Modelagem Numérica | Modelos ROSS validados; Capítulo 3 §3.3. |
| III | 10–14 | Simulações Sistemáticas | Dataset paramétrico (`results/campaign.h5`). |
| IV | 15–18 | Análise HOS | Indicadores HOS; Capítulo 3 §3.5–3.7. |
| V | 19–21 | Validação e Comparação | Capítulo 4 (validação e discussão). |
| VI | 22–24 | Redação Final e Defesa | Dissertação completa, slides de defesa. |

---

## Fase I — Fundamentação e Planejamento (Meses 1–4)

- Revisão bibliográfica sistemática (dinâmica de rotores, modelagem de
  trinca/desalinhamento, HOS, diagnóstico de falhas).
- Familiarização com ROSS e com o pipeline `02_simula/`.
- Estruturação inicial da dissertação seguindo
  [`01_plano_de_escrita.md`](01_plano_de_escrita.md).

**Tarefas relacionadas:** T01–T04 (`research_tasks.md`).
**Produtos:** Capítulos 1 e 2 (esboço); bibliografia consolidada em
`00_proposta_de_trabalho/references.bib`.

## Fase II — Modelagem Numérica (Meses 5–9)

- Construção do modelo FEM em ROSS (geometria de Sinha 2007).
- Implementação dos modelos de trinca respirante (Mayes–Davies) e
  desalinhamento.
- Validação modal (1ª frequência natural ≈ 27,5 Hz) e calibração de
  amortecimento.
- Validação do pipeline contra Sinha (2007) — **gate go/no-go**.

**Tarefas relacionadas:** T05–T08 (`research_tasks.md`) e
**Sprints 00, 02, 03** (`sci_tasks.md`).
**Produtos:** `sinha_rotor.toml` calibrado; Capítulo 3 §3.3 (esboço).

## Fase III — Simulações Sistemáticas (Meses 10–14)

- Validação completa contra Sinha (2007) — Figs. 2, 3, 5, 6, 7, 8, 9, 10.
- Após gate aprovado, execução da campanha paramétrica (DoE) cobrindo
  a/D, ângulo de desalinhamento, rotação e amortecimento.
- Organização do *dataset* em formato estruturado (HDF5) com metadados.

**Tarefas relacionadas:** T09, T10, T21 (`research_tasks.md`) e
**Sprints 04, 05, 06, 07** (gate go/no-go com `validation_matrix.csv`),
**Sprint 08** candidato (DoE).
**Produtos:** `results/campaign.h5` completo; PDFs `sinha_*_side_by_side.pdf`.

## Fase IV — Análise HOS (Meses 15–18)

- Aplicação dos estimadores HOS (já desenvolvidos no Sprint 01) ao
  *dataset* completo.
- Extração da matriz de características (BPR, BCS, BE, bifase) para
  todas as condições.
- Análise comparativa entre saudável × trinca × desalinhamento.
- Comparação HOS × PSD (Q7).

**Tarefas relacionadas:** T11–T16 (`research_tasks.md`).
**Produtos:** matriz de características; Capítulo 3 §3.5–3.7 (esboço);
Capítulo 4 §4.2 (resultados HOS).

## Fase V — Validação e Comparação (Meses 19–21)

- Validação final contra literatura (Sinha, 2007 e demais).
- Análise crítica de concordâncias e discordâncias.
- Análise de robustez (ruído, parâmetros).
- Preparação do *dataset* e código para release Zenodo.

**Tarefas relacionadas:** T17, T18 (`research_tasks.md`).
**Produtos:** Capítulo 4 (versão final); release Zenodo com DOI.

## Fase VI — Redação Final e Defesa (Meses 22–24)

- Redação completa da dissertação.
- Revisão pelo orientador, ajustes e formatação ABNT.
- Submissão de artigo a periódico (MSSP / JSV / JVET).
- Preparação para defesa.

**Tarefas relacionadas:** T19, T20 (`research_tasks.md`).
**Produtos:** dissertação final; artigo submetido; apresentação de defesa.

---

## Alinhamento com o programa de sprints

| Fase (Cronograma) | Sprints (execução real) | Observação |
|---|---|---|
| I | — (preparatório) | Revisão bibliográfica em paralelo com Sprint 00. |
| II | Sprint 00 (modal), Sprint 02 (acquisition), Sprint 03 (damping) | Sprint 01 (biblioteca HOS) é executado em paralelo, antecipando a Fase IV. |
| III | Sprint 04 (Fig. 10), Sprint 05 (crack HOS), Sprint 06 (misalignment HOS), Sprint 07 (matriz de validação), Sprint 08 (DoE — candidato) | Sprint 07 é o **gate go/no-go** para a DoE. |
| IV | Sprint 08 (DoE) — análise HOS sobre o dataset expandido | A maturidade do código HOS vem do Sprint 01; aqui só se aplica. |
| V | Sprint 09 (RK4 experimental — extensão opcional) | Cf. `01_article/04_rk4_working_plan.md`. |
| VI | — | Redação. |

> **Observação importante.** A leitura linear do cronograma sugere que a
> análise HOS começa apenas na Fase IV (mês 15). Na prática, o Sprint 01
> antecipa o desenvolvimento da biblioteca HOS para os meses 5–9
> (paralelo à Fase II), porque os Sprints 04–06 já dependem dela para
> reproduzir Sinha (2007). O cronograma macro reflete **entregáveis
> consolidados**, não a ordem de desenvolvimento técnico.

---

## Marcos críticos (gates)

| Marco | Critério de aprovação | Onde |
|---|---|---|
| **G1 — Modal** | `|f₁ − 27,50| ≤ 0,05 Hz` | Sprint 00 |
| **G2 — Calibração de amortecimento** | `|ζ₁ − 0,003| ≤ 5×10⁻⁴` | Sprint 03 |
| **G3 — Reprodução de Sinha (validação)** | ≥ 8/10 critérios `pass`/`partial` em `validation_matrix.csv` | Sprint 07 |
| **G4 — DoE concluído** | Campanha paramétrica completa, dataset publicado | Sprint 08 |
| **G5 — Dissertação aprovada** | Defesa | Fase VI |

Se G3 falhar, o DoE (Fase III / Sprint 08) **não inicia** — diagnose dos
sprints precedentes precede o avanço.
