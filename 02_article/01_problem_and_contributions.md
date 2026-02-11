# Problem Definition & Contributions

## 1. The research problem (one paragraph)

Rotating machinery (compressors, pumps, turbines) is critical infrastructure. When faults like **cracks** or **misalignment** develop in the rotor shaft, they introduce nonlinear vibration patterns that standard spectral analysis (PSD, order spectrum) can miss. **Higher-Order Spectra (HOS)** — specifically bispectrum and bicoherence — can detect the nonlinear phase coupling that these faults create. This project builds a **simulation-based diagnostic pipeline**: a finite-element rotor model (using the open-source library ROSS) generates realistic vibration signals under healthy and faulted conditions, and HOS features are extracted to distinguish fault types and severities.

> **Why this matters:** Reviewers need to see the problem stated in one clear paragraph at the start of your paper. If they cannot summarize your problem after reading the first half-page, the paper will likely be rejected.

---

## 2. The research question (one sentence)

**Can a simulation-driven HOS pipeline reliably detect and classify rotor faults (crack vs misalignment) across realistic noise, sensor placement, and operating conditions, validated against published benchmarks and outperforming standard spectral baselines?**

> **Why one sentence?** Top journals expect a single, falsifiable question. Everything in the paper must serve this question. If a section does not help answer it, cut it.

---

## 3. What counts as "success" (3 acceptance criteria)

Your paper is ready to submit when you can demonstrate all three:

| # | Criterion | What it means in practice |
|---|-----------|--------------------------|
| 1 | **Model credibility** | Your healthy rotor behaves like a real rotor: correct critical speeds, plausible orbits, stable numerics. |
| 2 | **Benchmark replication** | You reproduce the key results of at least 2 published papers (e.g., Sinha 2007) and show quantitative match metrics. |
| 3 | **Method superiority + robustness** | HOS features outperform (or clearly complement) PSD/order/envelope baselines, and results hold across noise levels, sensor locations, and fault severities. |

> **Why these three?** Simulation-only papers have no lab data, so reviewers judge you on (1) whether your model is believable, (2) whether you anchor results to existing literature, and (3) whether your method actually adds value over simpler alternatives.

---

## 4. Your contributions (claim exactly 2-3)

Keep this list tight. More claims = more things reviewers can attack.

1. **A validated HOS diagnostic pipeline** for rotor faults using coherence-normalized bicoherence features, with clear engineering decision rules.
2. **A robustness evidence package**: systematic sweeps across fault severity (3 levels), noise (3 SNR levels), and sensor placement (2 locations), with statistical reporting.
3. **A reproducible benchmark suite**: all model parameters, signal generation scripts, and analysis code are provided so others can replicate your results.

### Paste-ready contribution paragraph (for your Introduction)

> *This paper presents a simulation-validated methodology for diagnosing rotor faults using higher-order spectral coupling measures. A finite-element rotor-bearing model is constructed in ROSS and extended with parametrized crack and misalignment mechanisms. Vibration responses are generated under realistic measurement assumptions and analyzed using coherence-normalized bispectral features to reveal nonlinear phase coupling signatures not captured by second-order spectra. The methodology is evaluated through replication of published benchmark cases and robustness studies across fault severity, noise, sensor location, and operating conditions. All model parameters and analysis scripts are provided for full reproducibility.*

> **Why paste-ready?** Writing the contribution paragraph early forces you to commit to what the paper actually delivers. It also becomes the skeleton of your Abstract.

---

## 5. Step-by-step: how to lock these down

Follow these steps **before** writing any code or running any simulations:

### Step 1: Validate the research question with your advisor
- Show them the one-sentence question above.
- Confirm the fault types (crack + misalignment) and the tool (ROSS + bicoherence).
- Ask: "Is there any experimental data we could also use?" (this would strengthen the paper significantly).

### Step 2: Choose your primary novelty
Pick **one** of these as your main claim (the other becomes secondary):
- **Option A (recommended):** Nonstationary-aware bicoherence — HOS computed during run-up/run-down using order-domain resampling, showing stable coupling signatures where PSD fails.
- **Option B:** Stationary bicoherence with benchmark-quality robustness — no run-up complexity, but the most thorough parameter sweep and baseline comparison in the rotor HOS literature.

> **Why choose now?** The novelty claim shapes every decision downstream: what simulations to run, what figures to produce, how to write the Introduction. Changing it later wastes weeks of work.

### Step 3: Freeze the scope
Write down and do not change:
- Fault types: healthy, crack, misalignment (+ unbalance as sanity-check baseline).
- Severity levels: 3 per fault (low, medium, high).
- Speeds: 3 (below, near, above first critical speed).
- Noise levels: 3 SNR values.
- Sensor locations: 2.

### Step 4: Write a one-page "core claim" document
Combine the research question + contributions + scope into one page. This is your north star — tape it to your monitor.

---

## Links
- What must be true before you can submit: [02_publishability_and_gaps.md](02_publishability_and_gaps.md)
- What to do and when: [03_roadmap_and_paper_outline.md](03_roadmap_and_paper_outline.md)
- Track your progress: [04_checklist_and_risks.md](04_checklist_and_risks.md)
