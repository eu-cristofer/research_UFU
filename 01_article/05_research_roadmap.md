# Engineering Research Roadmap (simulation-only, top-tier)

## Executive summary (minimum viable path)
The fastest credible route is to **minimize scope** (one well-defined rotor model, 2–3 fault classes) while **maximizing rigor** (benchmarks + baselines + robustness + reproducibility).

This roadmap is written as “done = artifact produced”.

## Phase 0 — Lock decisions (1–2 days)
**Decisions to lock** (see `04_gap_analysis.md`):
- Primary novelty: **nonstationary-aware HOS** (recommended) *or* tricoherence novelty.
- Fault set: **healthy + crack + misalignment** (add **unbalance** as baseline if possible).
- Outcome type: interpretable features + simple classifier/thresholding.

**Done when**:
- A one-paragraph “core claim” is written (see `07_fastest_path_top_tier.md`).
- Simulation matrix (below) is frozen.

## Phase 1 — Rotor model build & healthy validation (1–2 weeks)
### Tasks
- Build FE rotor-bearing model in ROSS (elements, discs, bearings, damping).
- Verify basic rotor dynamics:
  - critical speeds / Campbell diagram,
  - orbit behavior near resonance,
  - sanity checks under unbalance.

### Deliverables (paper artifacts)
- Table: rotor model parameters.
- Figure: Campbell / critical speeds.
- Figure: representative time response + order spectrum at selected speeds.

**Done when**:
- Healthy rotor plots look physically plausible and are stable across repeated simulation runs.

## Phase 2 — Fault modeling (1–2 weeks)
### Fault models (minimum)
- **Breathing crack**: time-varying stiffness at a defined rotor location; severity parameter with ≥3 levels.
- **Misalignment**: forcing/coupling model with ≥3 severity levels.

Optional baseline fault:
- **Unbalance**: canonical baseline (helps demonstrate that HOS isn’t “always necessary”).

### Deliverables
- Table: fault parameter mapping (severity → model parameters).
- Figure: example steady-state responses for each fault at one speed (time/orbit/order spectrum).

**Done when**:
- Fault responses exhibit expected qualitative signatures (e.g., harmonics/sidebands) without numerical instability.

## Phase 3 — Signal protocol (steady + optional run-up) (1–2 weeks)
### Stationary protocol (must-have)
For each condition (healthy/faulted), generate steady-state signals at selected speeds.

### Nonstationary protocol (recommended if this is the novelty)
Run-up/run-down profiles:
- at least two speed ramps (slow vs fast) to test robustness.
- define resampling/order-tracking approach.

### Deliverables
- Table: signal generation protocol (fs, duration, segmenting/windowing).
- Figure: example raw nonstationary signal + order tracking output (if included).

## Phase 4 — HOS implementation + sanity checks (1–2 weeks)
### Must-have metrics
- Bicoherence (coherence-normalized) maps; optionally cross-bicoherence between channels.

### Optional (only if justified)
- Tricoherence: keep only if it adds demonstrable value.

### Sanity checks (must-have)
- Synthetic known-coupling signals.
- Noise-only baseline to quantify finite-sample bias.

### Deliverables
- Figure: synthetic validation of HOS (known coupling peaks).
- Table: HOS settings (window length, overlap, normalization, thresholds).

## Phase 5 — Baselines + evaluation (2–4 weeks)
### Baselines (minimum)
- Order spectrum / PSD features.
- Envelope spectrum.
- (Optional) cyclostationary metric.

### Evaluation style
Prefer interpretable evaluation:
- separability measures, ROC/AUC if binary.
- confusion matrices if multi-class.
- effect sizes + variability across seeds.

### Deliverables
- Figure: baseline vs HOS comparison (performance + interpretability).
- Table: benchmark replication summary and match metrics.

## Phase 6 — Robustness / ablation (2–4 weeks)
### Robustness axes (minimum)
- Fault severity (3 levels).
- Noise (3 levels).
- Sensor location (2 locations/channels).
- Speed (3 speeds) and/or 2 run-up profiles (if nonstationary).

### Deliverables
- Figure: performance vs severity/noise.
- Figure: sensitivity to window/segment length.
- Table: ablation summary (what matters, what doesn’t).

## Minimum simulation matrix (reviewer-proof but not bloated)
This is the smallest matrix that still supports top-tier rigor.

### Conditions
- Fault type: {healthy, crack, misalignment} (+ unbalance baseline if feasible)
- Severity: {low, mid, high} (healthy has “none”)
- Speed: {below 1st critical, near 1st critical, above 1st critical}
- Noise: {high SNR, medium SNR, low SNR}
- Sensors: {location A, location B}

### Recommended MVP counts (example)
- Stationary: 3 faults × 3 severities × 3 speeds × 3 noise × 2 sensors = 162 cases (+ healthy variants)\n
  - Reduce by sampling: fix noise for early iterations, then expand.
- Nonstationary (if included): 3 faults × 3 severities × 2 ramps × 2 sensors = 36 cases

## Reproducibility packaging (parallel throughout)
**Always keep artifacts reproducible**:
- parameter tables in markdown,
- scripts/notebooks regenerate all figures,
- fixed random seeds,
- store generated signals (or provide generation scripts if too large).

## Links
- Publishability gate: `03_publishability_check.md`\n
- Fastest acceptance strategy: `07_fastest_path_top_tier.md`\n

