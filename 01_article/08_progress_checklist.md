# Progress Tracking Checklist (Reviewer-aligned)

## Executive summary
Use this as a living checklist. If you can’t check most items, you’re not ready for a top-tier submission.

## A) Problem + claim clarity
- [ ] One-sentence **primary novelty** claim locked (see `07_fastest_path_top_tier.md`).\n
- [ ] 2–3 contributions list locked (see `02_contribution_classification.md`).\n
- [ ] Scope frozen (fault types, regimes, sensors).

## B) Rotor model credibility
- [ ] Rotor model parameter table complete.\n
- [ ] Healthy validation plots complete (Campbell, critical speeds, sample responses).\n
- [ ] Numerical stability verified (no artifact-driven conclusions).

## C) Fault modeling credibility
- [ ] Crack model definition documented + severity mapping (≥3 levels).\n
- [ ] Misalignment model definition documented + severity mapping (≥3 levels).\n
- [ ] (Optional) Unbalance baseline included.

## D) Signal protocol & data integrity
- [ ] Sampling frequency/duration/windowing documented.\n
- [ ] Noise model documented + SNR sweep defined.\n
- [ ] Sensor locations defined (≥2).\n
- [ ] (If nonstationary) run-up profiles defined and reproducible.

## E) HOS implementation validity
- [ ] HOS definitions fixed (bispectrum vs bicoherence normalization).\n
- [ ] Synthetic known-coupling validation completed.\n
- [ ] Noise-only bias check completed.\n
- [ ] Parameter sensitivity (window/segment length) quantified.

## F) Baselines (fair and strong)
- [ ] Order spectrum / PSD baseline implemented.\n
- [ ] Envelope spectrum baseline implemented.\n
- [ ] (Optional) Cyclostationary baseline implemented.\n
- [ ] Fairness rules documented (same data length, same splits).

## G) Evidence package (what top-tier reviewers actually judge)
- [ ] Benchmark replication 1 completed (e.g., Sinha 2007).\n
- [ ] Benchmark replication 2 completed (selected and cited).\n
- [ ] Match metrics reported (not only qualitative plots).\n
- [ ] Robustness sweeps completed (severity/noise/sensor; + speed if nonstationary).\n
- [ ] Ablation study completed (what drives performance).

## H) Writing & presentation
- [ ] Figure list complete and every figure is generated from scripts.\n
- [ ] Related work contains a “closest prior work” comparison table.\n
- [ ] Limitations section is honest and specific.\n
- [ ] Computational cost reported (at least runtime per case).

## I) Reproducibility package
- [ ] All parameters, seeds, and settings are version-controlled.\n
- [ ] Script/notebook regenerates all plots/tables end-to-end.\n
- [ ] Clear instructions to reproduce results.

## Links
- Publishability gate: `03_publishability_check.md`\n
- Gap list: `04_gap_analysis.md`\n

