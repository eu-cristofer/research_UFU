# Engineering Publishability Check (Top-tier, Simulation-only) — CRITICAL

## Executive summary (go/no-go logic)
For MSSP/JSV-level review, a simulation-only paper is publishable if it reads like a **benchmark-quality, methodologically rigorous** contribution:\n
- **Go** if: you replicate strong published cases, compare against tough baselines, quantify robustness/uncertainty, and provide full reproducibility.\n
- **No-go** if: results are “pretty plots” without external anchoring, or novelty is unclear vs existing rotor HOS literature.

This file is the “reviewer brain” distilled into engineering tasks.

## 1) Novelty check (is the idea new enough?)
### What you must clearly claim (one sentence)
Pick one **primary novelty** and defend it:
- **Option A (recommended)**: *HOS coupling features computed in a nonstationary-aware manner (order-domain / windowed) provide stable and discriminative signatures for rotor fault diagnosis under run-up/down.*\n
- **Option B**: *Tri-spectrum-based coupling (tricoherence) provides additional discriminative power vs bispectrum for specific nonlinear rotor faults.*

### What reviewers will ask (and you must pre-answer)
- “Isn’t bicoherence already used for machine fault diagnostics?”\n
  - Answer must specify *what is new*: rotor-specific modeling + benchmark replication + nonstationary handling + decision rules + robustness evidence.
- “Why trispectrum?”\n
  - Answer must show measurable gain **or** demote it to a supporting analysis (avoid over-claiming).

### Anti-novelty trap (avoid)
Do not frame novelty as “we used ROSS + HOS” — that is integration, not novelty.

## 2) Validation check (simulation-only credibility)
### Minimum viable validation (MVPV) for top-tier
You must include **both**:
1) **Model validation** (healthy rotor): show plausible critical speeds and vibration response consistent with rotor dynamics fundamentals.\n
2) **Benchmark replication** (faulted rotor): replicate **≥ 2** published fault scenarios with similar qualitative signatures **and** at least one quantitative match metric.

### Quantitative match metrics (pick 2–3)
- Peak frequencies/orders and amplitude ratios (e.g., 1X/2X/sidebands)\n
- Orbit shape descriptors (e.g., ellipticity, orientation)\n
- Bicoherence peak locations/magnitudes compared to reported coupling patterns\n
- Error norms on order spectra over defined bands

### Implementation validation (before rotor data)
Validate HOS code on synthetic signals with known coupling:
- Quadratic phase coupling signal (known bicoherence peaks)\n
- Noise-only Gaussian baseline (bicoherence ~ 0 except finite-sample bias)\n
- Known modulation case (sideband coupling)

## 3) Baseline comparison (reviewers demand this)
At minimum compare against:
- **Order spectrum / PSD** features (amplitude-only)\n
- **Envelope spectrum** (bearing-style baseline; still useful as generic nonlinearity detector)\n
- Optionally (stronger): **cyclostationary / spectral correlation** metrics

Rules for fair baselines:
- Same data length / sampling\n
- Same train/test split (if classification is used)\n
- Same noise levels and parameter sweeps

## 4) Statistical & robustness requirements (avoid “fragile method” rejection)
### Robustness axes (must sweep)
- Fault severity (at least 3 levels)\n
- Noise level (e.g., SNR levels representative of measurement)\n
- Sensor location (≥ 2 locations or channels)\n
- Speed variability (if nonstationary claim; ≥ 2 run-up profiles)

### Reporting standards
- Confidence intervals or variability across seeds/realizations\n
- Effect sizes where possible (not only p-values)\n
- Avoid single-run cherry-picked plots

## 5) Computational feasibility (practical reviewer concern)
Bispectrum/trispectrum can be expensive:
- Report complexity drivers: window length, overlap, frequency bins\n
- Provide runtime per case and scaling notes\n
- If tri-spectrum is included, justify it with either performance gains or scientific insights

## 6) Reproducibility package (often a silent acceptance lever)
Minimum release artifacts:
- Rotor model parameter table(s) (geometry, bearings, damping)\n
- Fault parameter definitions (location, severity mapping)\n
- Signal generation scripts and seeds\n
- HOS extraction code and settings (window, overlap, normalization)\n
- Figure regeneration script/notebook

## 7) Common top-tier reviewer objections and how to neutralize them
### Objection: “Simulation-only; not convincing.”
Mitigation:
- Benchmark replication vs published experimental/simulation results\n
- Sensitivity + uncertainty quantification\n
- Explain limits and what would be required for experimental transfer

### Objection: “Novelty is incremental.”
Mitigation:
- One primary novelty, stated early\n
- Direct comparison to closest prior work (table of differences)\n
- Show failure modes of amplitude-only baselines

### Objection: “HOS is unstable / parameter-dependent.”
Mitigation:
- Parameter sweep for windowing/segment length\n
- Show stability of coupling peaks across conditions\n
- Provide guidelines (engineering rules) for parameter selection

### Objection: “Tri-spectrum adds complexity without benefit.”
Mitigation:
- Pre-register the decision: keep trispectrum only if it improves diagnostic performance or interpretable coupling patterns.

## 8) Decision gate (use this before writing the full paper)
**Proceed to full manuscript** only if you can demonstrate:
- ≥2 benchmark replications with documented match metrics\n
- Baselines implemented and clearly outperformed (or at least complemented)\n
- Robustness sweeps completed (severity/noise/sensors)\n
- HOS code validated on synthetic known-coupling signals\n
- Reproducibility package drafted

## Links
- Concrete missing items list: `04_gap_analysis.md`\n
- Execution plan: `05_research_roadmap.md`\n
- Fastest top-tier route: `07_fastest_path_top_tier.md`\n

