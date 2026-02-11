# Publishability Check & Gap Analysis

## 1. Go / No-go checklist

Before investing months of work, verify that your paper **can** be published. All five items must eventually be "yes".

| # | Question | Status | Why it matters |
|---|----------|--------|----------------|
| 1 | Is the novelty clear in one sentence? | Pending | If you cannot state what is new, reviewers will call it "incremental". |
| 2 | Can you replicate at least 2 published benchmark cases? | Pending | Simulation-only papers live or die by external anchoring. Without benchmarks, reviewers say "not convincing". |
| 3 | Do you have at least 2 strong baselines to compare against? | Pending | If you only show HOS results with no comparison, reviewers ask "why not just use PSD?" |
| 4 | Can you show robustness across noise, severity, and sensors? | Pending | A method that only works under perfect conditions is not useful. |
| 5 | Can someone else reproduce your results from your scripts? | Pending | Reproducibility is increasingly required and is a strong silent lever for acceptance. |

> **How to use this table:** Come back to this checklist regularly. When all five are "Done", you are ready to write the full manuscript.

---

## 2. Reviewer objections and how to pre-answer them

Reviewers will raise these objections. Plan your defense **before** you run into them.

### Objection 1: "This is simulation-only — not convincing."

This is the biggest risk for your paper. Here is how to neutralize it:

- **Replicate 2 published cases.** One is already in your bibliography: Sinha 2007 (HOS for crack vs misalignment). You need a second benchmark — look for a widely cited rotor crack simulation paper with published spectra or orbits.
- **Report quantitative match metrics**, not just "our plot looks similar". Use: peak frequency locations, amplitude ratios (1X/2X), orbit shape descriptors, or bicoherence peak magnitudes.
- **Be honest about limitations.** Include a paragraph in your Discussion that says exactly what experimental validation would look like and what assumptions might break.

> **Why this matters:** Reviewers are not against simulation — they are against *unanchored* simulation. Benchmarks convert your simulation from "trust me" into "verified against the community".

### Objection 2: "Novelty is incremental — HOS has been used before."

- Put your novelty sentence in the **first 10 lines** of the Introduction.
- Include a **comparison table** in Related Work: "This work vs closest prior work" — columns for features used, operating regime, validation approach, and reproducibility.
- Show a concrete case where PSD/order spectrum **fails** and bicoherence **succeeds**.

> **Why this matters:** Reviewers skim the Intro first. If they do not see novelty immediately, they form a negative first impression that colors the rest of the review.

### Objection 3: "HOS is unstable / parameter-dependent."

- Run a **sensitivity study**: vary window length and segment count, show that coupling peaks remain stable.
- Provide **engineering guidelines**: "for rotors operating at X RPM with Y sampling rate, use window length Z."
- Use **coherence normalization** (bicoherence, not raw bispectrum) — this reduces amplitude dependence.

### Objection 4: "Tri-spectrum adds complexity without benefit."

- Simple rule: **only include trispectrum if it measurably improves diagnostic performance.** If it does not, drop it. Reviewers respect restraint.

---

## 3. What is missing today (gap list)

Your proposal is a good starting point, but a publishable manuscript needs specific **artifacts** (figures, tables, code). Here is everything that is missing, organized by priority.

### Priority A — Without these, the paper cannot be submitted

| # | Missing artifact | Type | Done when... |
|---|-----------------|------|-------------|
| A1 | Rotor model parameter table (geometry, discs, bearings, damping) | Table | All values are defined and documented |
| A2 | Healthy rotor validation plots (Campbell diagram, critical speeds, sample response) | Figure | Plots are physically plausible and match rotor dynamics fundamentals |
| A3 | Fault model definitions (crack: breathing stiffness; misalignment: forcing model) with severity mapping | Table + equations | 3 severity levels per fault, mathematically defined |
| A4 | Signal generation protocol (sampling freq, duration, windowing, noise model) | Table | Protocol is frozen and documented |
| A5 | HOS implementation validated on synthetic known-coupling signals | Figure | Known coupling peaks appear correctly; noise-only baseline shows ~0 bicoherence |
| A6 | Benchmark replication: Sinha 2007 key results reproduced | Figure + metrics | Qualitative match + at least one quantitative metric reported |
| A7 | Benchmark replication: second published case reproduced | Figure + metrics | Same as A6 |
| A8 | Baseline comparison: PSD/order spectrum vs bicoherence | Figure + table | Same data, same conditions, fair comparison |
| A9 | Robustness sweeps: severity, noise, sensor location | Figures | Performance curves across at least 3 levels per axis |

### Priority B — Strengthen the paper but not strictly required

| # | Missing artifact | Type | Done when... |
|---|-----------------|------|-------------|
| B1 | Envelope spectrum baseline | Figure | Compared fairly against HOS |
| B2 | Unbalance as baseline fault class | Figure | Shows HOS is not "always needed" (sanity check) |
| B3 | Runtime/computational cost table | Table | Time per case reported |
| B4 | Nonstationary run-up results (if this is your novelty) | Figure | Order-domain HOS is stable across speed ramp |

---

## 4. Step-by-step: how to close the gaps

### Step 1: Select your second benchmark paper (Week 1)
- Search for a widely cited rotor crack simulation paper (Jeffcott model or FE model) with published spectra, orbits, or coupling patterns.
- Add it to `references.bib`.
- Write down exactly which figure/table you will replicate.

> **Why first?** If you cannot find a second benchmark, you need to adjust your strategy early — not after months of simulation work.

### Step 2: Build and validate the healthy rotor model (Weeks 1-2)
- Construct the FE model in ROSS.
- Produce: Campbell diagram, critical speeds, sample time response and orbit at 2-3 speeds.
- Verify that results are physically plausible (no numerical artifacts).

> **Why before faults?** If the healthy model is wrong, all fault results will be meaningless. This is your foundation.

### Step 3: Implement fault models (Weeks 3-4)
- Breathing crack: time-varying stiffness at one rotor location, 3 severity levels.
- Misalignment: forcing/coupling model, 3 severity levels.
- Generate faulted responses and verify expected signatures (harmonics, sidebands).

### Step 4: Validate HOS on synthetic signals (Week 4)
- Create a simple test signal with known quadratic phase coupling.
- Verify that your bicoherence code finds the correct peaks.
- Run on pure Gaussian noise — bicoherence should be near zero.

> **Why synthetic first?** This proves your HOS code works correctly before you trust it on rotor signals. Reviewers will ask for this.

### Step 5: Run benchmarks + baselines + robustness (Weeks 5-8)
- Replicate Sinha 2007 and your second benchmark.
- Implement PSD/order spectrum baseline on the same data.
- Run the robustness sweeps (severity x noise x sensor).

### Step 6: Assess go/no-go (Week 8)
- Return to the checklist in Section 1 above.
- If all five items are "Done", proceed to writing.
- If not, identify what is blocking and address it before writing.

---

## Links
- Problem and contributions: [01_problem_and_contributions.md](01_problem_and_contributions.md)
- What to do and when: [03_roadmap_and_paper_outline.md](03_roadmap_and_paper_outline.md)
- Track your progress: [04_checklist_and_risks.md](04_checklist_and_risks.md)
