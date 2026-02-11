# Gap Analysis Toward a Publishable Paper (top-tier, simulation-only)

## Executive summary (what is missing today)
The proposal in `00_proposta_de_trabalho/00_proposta_de_trabalho.tex` is conceptually sound but **not yet a publishable paper**. The missing pieces are not “more text”; they are **specific engineering artifacts** that reviewers require:
- Explicit rotor model + fault model definitions (equations/assumptions/parameters).
- A **benchmark replication plan** (≥2 external anchors) for simulation-only credibility.
- A nonstationary handling plan (if run-up included) and baseline comparisons.
- Robustness/ablation + statistical reporting and a reproducibility package.

This file turns those gaps into a concrete list of figures/tables/code outputs.

## 1) Proposal → paper deltas (high impact)
### A) System and modeling details (currently under-specified)
**Missing**:
- Rotor geometry/discretization (elements, discs), bearing coefficients, damping model.
- Clear state-space / FE formulation description sufficient for reproduction.
- Fault models (mathematical definitions + parameter mapping):
  - breathing crack: how stiffness varies with rotor angle/time, where it is applied, severity parameter.
  - misalignment: forcing model/coupling, harmonics expected, how it enters equations.

**Required paper artifacts**:
- Table: rotor model parameters (geometry/material/discs/bearings/damping).
- Figure: Campbell diagram / critical speeds (healthy rotor).
- Figure: example orbit(s) and time response at key speeds.

### B) Signal protocol and measurement chain (currently absent)
**Missing**:
- Sampling frequency, duration, segment/window strategy (critical for HOS stability).
- Sensor locations/channels, noise model (SNR).
- Stationary vs nonstationary protocol (steady vs run-up/down).

**Required artifacts**:
- Table: signal generation protocol (fs, duration, windows, overlap, detrend, filtering).
- Figure: example raw signals + order spectra/PSD for context.

### C) HOS methodology (currently described at a high level only)
**Missing**:
- Exact definitions used (bispectrum vs bicoherence; normalization).
- Practical implementation choices:
  - window length/overlap,
  - frequency resolution,
  - bias/variance handling,
  - significance thresholding.
- If run-up/down: order-domain resampling or time–frequency segmentation before HOS.

**Required artifacts**:
- “Implementation box” in Methods: parameter list for HOS.
- Validation figure(s) on synthetic known-coupling signals (sanity checks).

### D) Evidence package (most important gap for simulation-only)
**Missing**:
- External benchmarks (published cases) and what you will match.
- Strong baselines and fair comparisons.
- Robustness/ablation plan.

**Required artifacts**:
- Benchmark replication section with:
  - selected papers/cases,
  - reproduced plots and match metrics.
- Baseline comparison section with:
  - order spectrum/PSD features,
  - envelope spectrum,
  - (optional) cyclostationary metric.
- Robustness figures: performance vs severity/noise/sensor.

## 2) Benchmark replication targets (what to anchor against)
### Benchmark 1 (already in your bib): Sinha 2007 (HOS for crack vs misalignment)
Reference: `sinha_higher_2007` in `00_proposta_de_trabalho/references.bib`.

**Gap**: The proposal does not define what will be replicated.

**Replication plan** (paper-ready):
- Replicate their key observation: distinguish crack vs misalignment using HOS coupling patterns.
- Match at least:
  - bicoherence peak locations (coupling among 1X, 2X, etc.),
  - qualitative separation between faults.

### Benchmark 2 (to be added): a widely cited rotor crack benchmark (simulation or experimental)
You need at least one more external anchor besides Sinha 2007. Options:
- a classic breathing crack rotor model paper (often Jeffcott-style) with published spectra/orbits.
- a rotor fault diagnosis dataset/paper with published order spectra and fault signatures.

**Gap**: not yet selected and not cited.

**Action**:
- Add 1–2 benchmark papers to `references.bib` once chosen; define what plots/metrics will be replicated.

## 3) “Minimum figures/tables” list (what reviewers expect)
### Figures (minimum set)
1) Healthy rotor validation: Campbell / critical speeds + example response.
2) Faulted response overview: time waveform + PSD/order spectrum for each fault.
3) HOS sanity checks on synthetic signals (known coupling).
4) Bispectrum/bicoherence maps for healthy vs crack vs misalignment (same settings).
5) Baseline comparison: performance/diagnostic separability vs PSD/order/envelope.
6) Robustness: performance vs noise and severity (and sensor location).
7) (If run-up) nonstationary case: order-domain HOS stability across speed sweep.

### Tables (minimum set)
1) Rotor model parameters.
2) Fault parameter mapping (severity levels).
3) Signal/HOS settings.
4) Benchmark replication summary (what matched and error metrics).
5) Runtime/scaling (optional but helpful).

## 4) Decision points (must be locked early)
These decisions change the entire paper shape:
- **Primary novelty**: run-up/nonstationary HOS (recommended) vs tri-spectrum novelty.
- **Fault set**: minimum crack + misalignment (+ unbalance as baseline).
- **Outcome type**: diagnostic “engineering rules” vs ML classifier.\n
  - For fastest top-tier acceptance, prefer **interpretable coupling features + simple classifiers** (logistic/thresholding) over deep learning.

## Links
- Publishability gate: `03_publishability_check.md`\n
- Execution plan & simulation matrix: `05_research_roadmap.md`\n

