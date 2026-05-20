# Executive Summary: Publication Assessment

> **Project:** Fault Diagnosis in Rotating Machines via Numerical Simulations and HOS
> **Author:** Cristofer Antoni Souza Costa | **Advisor:** Prof. Dr. Aldemir A. Cavallini Jr.
> **Program:** M.Sc. Mechanical Engineering (POSMEC) -- UFU
> **Date:** February 2026

---

## Research Overview

| Item | Description |
|---|---|
| **Problem** | Detecting and distinguishing shaft cracks from misalignment in rotating machinery using vibration data |
| **Method** | FEM simulation (ROSS, open-source) + Higher-Order Spectra (bispectrum/bicoherence) analysis |
| **Novelty** | First systematic *numerical* parametric study combining ROSS with HOS; existing HOS work is limited to small experimental rigs (Sinha, 2007) |
| **Deliverable** | Reproducible, open-source Python pipeline for simulation-based fault diagnosis |

---

## Publishability Verdict

**PUBLISHABLE -- conditionally.** Current score: ~3.3 / 5.

The research idea occupies a real gap (numerical HOS + open-source tools), but the proposal currently describes a *workflow*, not a *study with quantifiable outcomes*. Four conditions must be met:

| # | Condition | Priority |
|---|---|---|
| 1 | Design a parametric simulation campaign (DoE with ~450 cases) | Critical |
| 2 | Define quantitative HOS-based fault indicators (not just visual plots) | Critical |
| 3 | Perform a discrimination analysis (crack vs. misalignment vs. healthy) | Critical |
| 4 | Validate against at least one published experimental dataset | High |

---

## Top Gaps to Close

| Gap | Current State | Required State |
|---|---|---|
| Literature review | 3 references | 25-40 references across 8 categories |
| Fault modeling | "Will model cracks and misalignment" | Documented breathing crack model (Mayes-Davies) + misalignment forcing |
| Simulation design | Not specified | Full DoE: crack depth, misalignment angle, speed, damping |
| HOS indicators | Not defined | At least 3 scalar metrics (BPR, BCS, Bispectral Entropy) |
| Validation | "Compare with literature" | Quantitative benchmarking against Sinha (2007) or equivalent |

---

## Target Journals

| Journal | Fit | Strategy |
|---|---|---|
| **Journal of Sound and Vibration** | Very good | Primary target |
| **Structural Health Monitoring** | Good | Alternative primary |
| **ASME J. Vibration and Acoustics** | Good | Faster review backup |
| **Latin American J. Solids and Structures** | Moderate | Safe first-publication option |

**Recommended strategy:** Submit preliminary results to a conference first (COBEM, DINAME, or IFToMM), then expand to a full journal paper.

---

## Key Risks

| Risk | Severity | Mitigation |
|---|---|---|
| **ROSS cannot handle time-varying stiffness (crack model)** | High | Investigate early; fallback: custom Newmark-beta integrator |
| **Bispectrum does not differentiate crack vs. misalignment** | Critical | Run 4 quick test cases as go/no-go gate before full campaign |
| **Reviewer perceives "just applying known methods"** | High | Add quantitative indicators, sensitivity analysis, open-source reproducibility |
| **No experimental validation** | High | Title as "numerical investigation"; validate FEM frequencies + compare HOS patterns with published data |

---

## Go/No-Go Decision Points

| Gate | When | Pass Criterion | Fail Action |
|---|---|---|---|
| Can ROSS handle the crack model? | Month 2 | Working time-integration with time-varying K | Implement custom integrator |
| Does bispectrum differentiate faults? | Month 4 | Visually distinct patterns for crack vs. misalignment | Pivot to crack-severity-only study |
| Are quantitative indicators separable? | Month 7 | At least 2 indicators show >80% separability | Revisit indicator definitions |
| Is the paper competitive? | Month 9 | Advisor approves novelty and completeness | Consider alternative journal |

---

## Estimated Timeline

| Phase | Period | Key Output |
|---|---|---|
| 1 -- Foundation | Feb -- Apr 2026 | Literature review, ROSS familiarity, hypothesis |
| 2 -- Model Development | Mar -- Jun 2026 | Validated FEM model with crack + misalignment |
| 3 -- Simulation Campaign | Jun -- Aug 2026 | 450 simulation cases, structured dataset |
| 4 -- HOS Analysis | Jun -- Oct 2026 | Feature matrix, sensitivity curves, discrimination results |
| 5 -- Writing + Submission | Sep 2026 -- Jan 2027 | Submitted journal paper |

**Fastest path (MVP):** Crack-only study, 15 cases, bispectrum only -- publishable in ~6-8 months.

---

## Immediate Next Step

Run the **go/no-go simulation** (see `03_ross_agent_prompt.md`): build a simple ROSS rotor, simulate 4 cases (healthy, light crack, severe crack, misalignment), compute bispectrum, and visually assess whether the patterns are distinguishable. This retires the most critical risk (R2) before investing months of work.

---

*Full details: see `01_publication_roadmap.md`*
