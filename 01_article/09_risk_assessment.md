# Risk Assessment (top-tier, simulation-only)

## Executive summary
The dominant risk is **reviewer skepticism of simulation-only evidence**. Your mitigation is not “more claims”; it is **benchmark replication + baselines + robustness + reproducibility**.

## Risk register (engineering format)
| Risk | Likelihood | Impact | Early warning sign | Mitigation (actionable) |
|---|---:|---:|---|---|
| Simulation-only perceived as weak evidence | High | High | Reviewer comments: “needs experiments” / “toy study” | Replicate ≥2 published benchmark cases; quantify match metrics; add strong baselines; publish reproducibility package |
| Novelty overlap with existing HOS + fault diagnosis papers | Medium | High | Hard to write a crisp novelty sentence without caveats | Run a focused related-work audit; include “closest prior work comparison” table; lock one primary novelty and remove extra claims |
| HOS estimates unstable / parameter-dependent (window length, segment count) | High | High | Results change drastically when window length changes | Sensitivity study; define engineering guidelines; use coherence normalization; report confidence intervals |
| Tri-spectrum adds complexity without payoff | Medium | Medium | Tricoherence doesn’t improve diagnostic separability | Make tri-spectrum strictly optional; include only if it adds measurable value |
| Fault models produce unrealistic artifacts | Medium | High | Nonphysical spikes/instabilities; signatures dominated by numerical issues | Validate healthy dynamics first; compare against known fault signatures; adjust integration step and damping; document assumptions |
| Nonstationary run-up HOS becomes too complex | Medium | Medium | Large variance; inconsistent coupling maps during run-up | Keep run-up as primary novelty only if stable; otherwise submit stationary-only with stronger robustness and benchmarking |
| Computational cost too high for parameter sweeps | Medium | Medium | Infeasible runtime per case | Optimize segmentation; limit frequency bins; parallelize; precompute; report scaling and justify choices |
| Over-scoped simulation matrix delays submission | High | Medium | Too many fault types / too many plots; no clear story | Freeze scope; focus on crack vs misalignment; add unbalance only as baseline; follow `07_fastest_path_top_tier.md` |
| Reproducibility gaps (can’t regenerate figures) | Medium | High | Figures created manually / settings undocumented | Scripted generation for all figures; store settings in tables; fixed seeds; one-command regen |

## Highest-risk decisions (and default stance)
- **Primary novelty**: nonstationary-aware bicoherence (default).\n
  - Drop if stability cannot be shown.
- **Tri-spectrum**: optional.\n
  - Keep only if it improves diagnosis or yields interpretable coupling patterns.

## “Stop/continue” gates (practical)
Stop and simplify if any occurs:
- only one benchmark can be replicated,\n
- baselines outperform HOS,\n
- HOS sensitivity is too large to provide guidelines,\n
- figures cannot be regenerated reliably.

Continue toward submission when:
- benchmarks + baselines + robustness are done and consistent,\n
- novelty statement is clean,\n
- reproducibility package is complete.

## Links
- Publishability gate: `03_publishability_check.md`\n
- Roadmap: `05_research_roadmap.md`\n

