# Engineering Contribution Classification (what is publishable here)

## Executive summary (2–3 contributions only)
To be publishable in a top-tier venue with **simulation-only evidence**, this work must be positioned as a **method + validated benchmark + reproducible evidence** contribution, not “we tried HOS on simulated signals”.

Recommended contribution set (keep it tight):
1) **A validated HOS diagnostic pipeline** for rotor faults (crack, misalignment) using **coherence-normalized coupling features** (bicoherence, optionally tricoherence), with clear decision rules.\n
2) **A robustness-driven evidence package**: parameter sweeps (fault severity, noise, sensor location, speed) + ablations + statistical reporting.\n
3) **A reproducible benchmark suite** (ROSS model, signal generation protocol, figure regeneration) enabling direct comparison in future studies.

## Contribution taxonomy (engineering journals)
### Type A — Methods / signal processing
- New/optimized HOS feature extraction pipeline tailored to rotor vibration signals.
- Nonstationary compatibility (optional novelty lever): order-domain / windowed HOS for run-up/down.

### Type B — Rotordynamics modeling for diagnostics
- Fault modeling in FE rotor (breathing crack stiffness variation; misalignment forcing/coupling) with clear parameterization.
- Sensor/measurement chain modeling (noise, sampling, probe placement).

### Type C — Evidence & benchmarking (critical for simulation-only)
- Replication of strong literature cases (at least two), with quantified match metrics.
- Baseline methods implemented fairly and compared.
- Release of parameters/scripts for reproducibility.

## What is *not* enough for top-tier (avoid these framings)
- “We simulated a rotor and plotted bispectrum” without benchmarks + baselines.
- A single rotor model + a couple plots (reviewers call this toy/incremental).
- “Higher accuracy” without uncertainty quantification or statistical support.

## Novelty candidates (choose one primary, one secondary)
### Candidate 1 (primary): Nonstationary / run-up compatible HOS in order domain
- Claim: Order-domain, windowed bicoherence yields stable coupling signatures during run-up where PSD/order spectra alone are ambiguous.
- Proof obligation: show robustness vs speed profile + windowing and demonstrate why baselines fail.

### Candidate 2 (secondary): Tri-spectrum / higher-order coupling beyond bispectrum
- Claim: Tricoherence adds discriminative power for particular nonlinear fault signatures.
- Proof obligation: show incremental gain vs bicoherence with proper significance controls (avoid “we added complexity for no reason”).

## A crisp “contribution statement” paragraph (ready to paste into Intro)
This paper presents a simulation-validated methodology for diagnosing rotor faults using higher-order spectral coupling measures. A finite element rotor–bearing model is constructed in ROSS and extended with parametrized crack and misalignment mechanisms. Vibration responses are generated under realistic measurement assumptions and analyzed using coherence-normalized bispectral (and optionally trispectral) features to reveal nonlinear phase coupling signatures that are not captured by second-order spectra. The methodology is evaluated through replication of published benchmark cases and through robustness/ablation studies across fault severity, noise, sensor location, and operating conditions. All model parameters and analysis scripts are provided to enable full reproducibility.

## Links
- Publishability gating & “reviewer objections”: `03_publishability_check.md`\n
- Gaps to close for a full paper: `04_gap_analysis.md`\n

