# Indicadores de Progresso

> Painel de acompanhamento da pesquisa. Os indicadores quantitativos
> derivam de artefatos versionados; os qualitativos derivam de revisão
> com o orientador. Complementa
> [`research_tasks.md`](research_tasks.md) (T01–T21) e
> [`../01_planejamento_científico/sci_tasks.md`](../01_planejamento_científico/sci_tasks.md)
> (Sprints 00–08).
>
> **Última revisão:** 2026-05-20.

---

## 5.1 Indicadores Quantitativos

| Indicador | Meta | Fonte de evidência | Cadência |
|---|---|---|---|
| Artigos lidos e resumidos | ≥ 40 ao final da Fase I | `references.bib` + fichamentos em `03_literature_review/` | Mensal |
| Modelos ROSS implementados e validados | 3 (saudável, trinca, desalinhamento) | `02_simula/sinha_rotor.toml`, notebooks 00–04 | Por sprint |
| 1ª frequência natural validada | `|f₁ − 27,50| ≤ 0,05 Hz` | Sprint 00, Cell A | Uma vez (G1) |
| Razão de amortecimento calibrada | `|ζ₁ − 0,003| ≤ 5×10⁻⁴` | Sprint 03 | Uma vez (G2) |
| Casos de simulação base executados | 7 (3 saudáveis + 2 trinca + 2 desalinhamento) | `results/campaign.h5` | Sprint 02 |
| Casos de simulação no DoE | grade fatorial completa | `results/campaign.h5` (Sprint 08) | Sprint 08 |
| Algoritmos HOS implementados | bispectro, bicoerência, tri-espectro + indicadores escalares | `signal_utils.py`, testes A/B/C | Sprint 01 |
| Critérios de validação atendidos | ≥ 8/10 em `validation_matrix.csv` | Sprint 07 | Uma vez (G3) |
| Indicadores escalares extraídos | BPR, BCS, BE, bifase para todas as condições | Matriz de características (T13) | Fase IV |
| Comparações HOS × PSD | tabela com ganho de discriminação | Sprint 08 / Capítulo 4 | Fase IV/V |
| Capítulos da dissertação concluídos | 5 de 5 | `01_plano_de_escrita.md` | Mensal a partir da Fase IV |
| Release reprodutível publicado | 1 DOI Zenodo | Tarefa T18 | Fase V |
| Artigo submetido | 1 (MSSP / JSV / JVET) | Tarefa T20 | Fase VI |

## 5.2 Indicadores Qualitativos

| Indicador | Como avaliar | Cadência |
|---|---|---|
| Compreensão dos fundamentos teóricos | Capacidade de explicar o estimador Kim–Powers e o modelo Mayes–Davies em reuniões com o orientador. | Quinzenal |
| Habilidade na modelagem com ROSS | Tempo médio para introduzir uma nova condição de falha; nº de iterações até o modelo convergir. | Por sprint |
| Capacidade de interpretar resultados HOS | Identificação correta dos picos B11, B12, B22 em superfícies bispectrais; leitura das *balls* tri-espectrais. | Sprints 04–06 |
| Qualidade da validação com literatura | Discordâncias justificadas tecnicamente (não apenas reportadas) em `validation_matrix.csv`. | Sprint 07 |
| Robustez metodológica | Estabilidade dos indicadores sob ruído (SNR=40 dB) e variação de sementes. | Fase IV |
| Qualidade da escrita científica | Comentários do orientador por capítulo; nº de revisões até aprovação. | Por capítulo |

---

## Painel rápido (atualizar a cada revisão)

> Marcar `✅` concluído · `🟡` em andamento · `⬜` pendente · `❌` bloqueado.

| Marco | Status | Data |
|---|---|---|
| G1 — Modal (f₁ ≈ 27,5 Hz) | ⬜ | — |
| G2 — Amortecimento calibrado | ⬜ | — |
| G3 — Validação Sinha (≥ 8/10) | ⬜ | — |
| G4 — DoE concluído | ⬜ | — |
| G5 — Defesa | ⬜ | — |

| Capítulo | Esboço | Revisão 1 | Revisão final |
|---|---|---|---|
| 1 — Introdução | ⬜ | ⬜ | ⬜ |
| 2 — Fundamentação | ⬜ | ⬜ | ⬜ |
| 3 — Metodologia | ⬜ | ⬜ | ⬜ |
| 4 — Resultados e Discussão | ⬜ | ⬜ | ⬜ |
| 5 — Conclusões | ⬜ | ⬜ | ⬜ |

---

## Como usar este documento

1. **Atualização mensal** — revisar o "Painel rápido" e os contadores
   quantitativos (artigos lidos, casos executados, capítulos escritos).
2. **Atualização por sprint** — ao fechar um sprint em
   `sci_tasks.md`, marcar o marco G_i correspondente aqui.
3. **Atualização por capítulo** — ao entregar uma versão para revisão
   do orientador, mover o status na tabela de capítulos.
4. **Reuniões de orientação** — usar a coluna "Status" do painel rápido
   como agenda mínima da reunião.

> Os indicadores não substituem `research_tasks.md` (que rastreia
> tarefas atômicas) nem `sci_tasks.md` (que rastreia sprints). Este
> documento é uma camada de **agregação executiva** sobre os dois.
