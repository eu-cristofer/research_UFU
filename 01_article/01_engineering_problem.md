# Engineering Problem (Rotating Machinery Fault Diagnosis via HOS + Simulation)

## Executive summary (what this paper will solve)
You will produce a **reviewer-credible, simulation-based** methodology to **detect and diagnose faults in rotating machinery** (rotor–bearing systems) by extracting **higher-order spectral (HOS) features** (bi-/tri-spectrum, coherence-based coupling metrics) from simulated vibration signals under **steady-state** and (optionally) **run-up/run-down** operation.

This file pins down the engineering problem in a way that is testable, falsifiable, and aligned with Mechanical Systems and Signal Processing (MSSP) / Journal of Sound and Vibration (JSV) expectations.

## Context (why industry and science care)
- Rotating machinery (turbomachinery, pumps, compressors, generators) is safety- and cost-critical; early fault detection avoids unplanned downtime.
- Common rotor faults (e.g., **cracks**, **misalignment**, **unbalance**, **rub**) introduce **nonlinearities** and **interactions** across harmonics and sidebands.
- Classical tools (PSD, order spectrum, envelope) are powerful but can be insufficient when:
  - responses are **non-Gaussian / nonlinearly coupled**,
  - multiple components overlap in frequency/order,
  - transient regimes (run-up/run-down) violate stationarity assumptions.

## Engineering system definition (what is being modeled)
### Rotor–bearing model class
This project targets a rotor-bearing system representable as:
- **Finite element rotor** (Timoshenko beam elements), with discs and bearings,
- linear baseline dynamics plus **fault-induced nonlinearities/time-variations**.

Implementation vehicle: **ROSS** (Python rotor dynamics library) for FE model construction and time response simulation.

### Operating regimes (what signals are generated)
Two regimes are relevant; the final paper can include either one (or both) depending on the novelty path:
- **Steady-state at constant rotational speed**: easiest to validate; strong baseline for top-tier rigor.
- **Nonstationary run-up/run-down**: harder but higher novelty if HOS is made robust to speed variation.

### Measured quantities (what the “sensor” records)
Vibration signals at one or more locations:
- displacement/velocity/acceleration in orthogonal directions (e.g., x/y probes),
- optionally derived signals: orbit, spectrum, order spectrum.

Signal quality assumptions must be explicit:
- sampling frequency, anti-aliasing,
- noise model (additive measurement noise),
- sensor placement (bearing housing vs shaft probes).

## Fault hypotheses (what must be distinguished)
Minimum set consistent with the proposal:
- **Crack (breathing crack)**: introduces time-varying stiffness and nonlinear coupling; often manifests as sub-/super-harmonics and modulation effects.
- **Misalignment**: coupling between shafts/forces; can yield strong harmonics and cross-coupling signatures.

Optional (recommended for stronger baseline comparisons and to avoid “too narrow” scope):
- **Unbalance**: canonical linear-ish fault; useful as a baseline class and for sanity checks.
- **Rub/looseness**: strongly nonlinear; high payoff but can increase modeling risk—include only if time permits.

## Why higher-order spectra (HOS) is the right tool here
HOS is engineered to detect **nonlinear phase coupling** that second-order spectra (PSD) cannot capture.
- **Bispectrum / bicoherence**: reveals quadratic phase coupling among components \(f_1, f_2, f_1+f_2\).
- **Trispectrum / tricoherence**: extends to cubic interactions; potentially more sensitive to certain nonlinearities but more demanding computationally and statistically.

Engineering interpretation you will emphasize:
- Faults can create **consistent coupling patterns** (e.g., sideband interactions) that remain detectable even when amplitude spectra are ambiguous.

## The research question (reviewer-ready)
**Primary question**:
Can a simulation-driven HOS pipeline reliably distinguish **healthy vs faulted** rotor responses (and discriminate fault types/severity) across realistic operating and measurement conditions, with validation against published benchmarks and strong baselines?

## Inputs/outputs (formal problem statement)
### Inputs
- FE rotor model parameters (geometry, material, discs, bearings, damping)
- operating conditions (speed \(\Omega\), load, run-up profile)
- fault parameters (location, severity)
- measurement definition (sensor location/type, sampling, noise)

### Outputs
- diagnostic decision(s):
  - detection: healthy vs faulted
  - diagnosis: fault type and (optionally) severity estimate
- a confidence measure / decision thresholding rule

### Constraints (top-tier + simulation-only)
- No physical experiment data: must compensate with
  - replication of at least **two** strong literature cases (see `04_gap_analysis.md` and `05_research_roadmap.md`),
  - internal consistency checks (energy, modal checks, limit cases),
  - extensive robustness/ablation.

## What “success” looks like (engineering acceptance criteria)
To be credible for MSSP/JSV-type review:
- **Model credibility**: rotor dynamic behavior matches known phenomena (critical speeds, orbit shapes, resonance peaks).
- **Benchmark replication**: published fault cases are reproduced (qualitatively + quantitatively) with clear parameter reporting.
- **Method credibility**: HOS implementation validated on synthetic signals with known coupling before applying to rotor signals.
- **Baselines**: comparisons against strong, fair baselines (order spectrum/PSD/envelope; optionally cyclostationary metrics).
- **Robustness**: stable performance vs noise, sensor placement, windowing choices, and speed variation (if nonstationary included).
- **Reproducibility**: scripts + parameter tables enable full regeneration of all figures/tables.

## Links to the rest of the package
- Publishability gate checks: `03_publishability_check.md`\n
- Concrete gaps to close: `04_gap_analysis.md`\n
- Execution plan + minimum simulation matrix: `05_research_roadmap.md`\n
- Paper outline + required figure list: `06_paper_structure.md`\n
