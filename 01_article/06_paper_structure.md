# Paper Structure for Engineering Journals (MSSP/JSV-style)

## Executive summary
This outline is optimized for **top-tier reviewers**: it foregrounds novelty, makes simulation-only credible via benchmarks, and includes the methods/validation depth expected in rotordynamics + signal processing journals.

## Title (working)
**Fault diagnosis in rotor–bearing systems using simulation-validated higher-order spectral coupling features**\n
(adjust after the core claim is locked)

## Abstract (structure, not text yet)
- Problem + why it matters (rotor faults; nonlinear coupling)\n
- Gap (2nd-order spectra insufficient)\n
- Method (ROSS FE + fault models + bicoherence/tricoherence)\n
- Validation (≥2 benchmark replications)\n
- Results (robustness vs noise/speed/sensor)\n
- Contribution + reproducibility statement

## 1. Introduction
Must include:
- Rotating machinery fault diagnosis context.\n
- Why HOS is appropriate.\n
- **One-sentence primary novelty claim**.\n
- Bullet contributions (2–3 only).\n
- A “paper roadmap” paragraph.

## 2. Related work (focused, comparative)
Do not survey everything. Instead:
- rotor fault signatures (crack/misalignment)\n
- HOS in mechanical diagnostics\n
- what *exactly* is missing in prior rotor+HOS papers (table of differences)

## 3. Rotor–bearing model and fault modeling
### 3.1 FE model
- element type, discretization, discs, bearings, damping

### 3.2 Fault models
- crack (breathing): definition + parameters + severity mapping\n
- misalignment: definition + parameters + severity mapping\n
- optional baseline (unbalance)

**Table 1**: rotor model parameters\n
**Table 2**: fault severity mapping

## 4. Signal generation protocol
- steady-state procedure, speed selection\n
- nonstationary procedure (if included): run-up profile and order tracking\n
- sampling, noise injection, sensor locations

**Table 3**: signal protocol parameters

## 5. Higher-order spectral methodology
Keep theory minimal, emphasize implementation.
- bispectrum vs bicoherence (normalization)\n
- segmentation/windowing choices\n
- thresholds/significance\n
- (optional) tricoherence and when it is used

**Table 4**: HOS settings

## 6. Baseline methods
- PSD/order spectrum feature set\n
- envelope spectrum\n
- optional cyclostationary metric\n
Define fairness constraints.

## 7. Validation and results
### 7.1 Implementation sanity checks (must come first)
- synthetic known-coupling signals\n
- noise-only bias check\n

**Figure 1**: HOS sanity check results

### 7.2 Healthy rotor validation
- Campbell / critical speeds\n
- response/orbit examples\n

**Figure 2**: Campbell + response validation

### 7.3 Benchmark replication (simulation-only credibility anchor)
- Benchmark 1: Sinha 2007 coupling signatures\n
- Benchmark 2: to be selected (see `04_gap_analysis.md`)\n

**Table 5**: replication match metrics\n
**Figure 3**: reproduced benchmark plots

### 7.4 Fault diagnosis results (stationary)
- bicoherence maps and derived features per fault/severity\n
- baseline comparisons\n

**Figure 4**: bicoherence maps (healthy vs faults)\n
**Figure 5**: baseline vs HOS diagnostic performance

### 7.5 Robustness and ablation
- severity/noise/sensor location\n
- window length/overlap sensitivity\n

**Figure 6**: robustness curves\n
**Figure 7**: ablation/sensitivity

### 7.6 Nonstationary results (if core novelty)
- order-domain/windowed HOS during run-up\n
- stability across speed ramps\n

**Figure 8**: nonstationary HOS stability across run-up

## 8. Discussion
What reviewers want here:
- why coupling patterns occur (physics interpretation)\n
- when/why baselines fail\n
- limitations of simulation-only and what experimental transfer would require\n
- computational cost and parameter guidelines

## 9. Conclusions
- restate contributions\n
- concise engineering takeaways\n
- reproducibility statement

## Appendix (optional but often welcomed)
- derivations/details of normalization\n
- additional sensitivity plots\n
- parameter tables too large for main text

## “Figure list” (quick reference)
- Fig 1: HOS sanity checks\n
- Fig 2: Healthy rotor validation\n
- Fig 3: Benchmark replication\n
- Fig 4: HOS maps for faults\n
- Fig 5: Baseline comparison\n
- Fig 6–7: Robustness/ablation\n
- Fig 8: Nonstationary run-up (if included)

## Links
- Fastest acceptance constraints: `07_fastest_path_top_tier.md`\n
- Progress checklist: `08_progress_checklist.md`\n
