# Sprint 05 — Sensitivity analysis and scalar HOS metrics

**Role:** You are an AI coding agent. You harden the HOS pipeline against **estimator variance** (segment count, overlap, noise) and implement **2–4 scalar metrics** aligned with the publication roadmap (discrimination-oriented), computed from bispectrum/bicoherence (trispectrum metrics optional).

**Prerequisites:** Sprints 02–04 complete.

**References:**

- [01_article/01_publication_roadmap.md](../01_publication_roadmap.md) — suggested indicators: BPR-like ratios, bicoherence sums, bispectral entropy, biphase at key bins; roadmap risk **R6** (HOS sensitivity).
- Sinha (2007) Discussion: peak labels **B11, B12, B22, B13** — use these as **region-of-interest (ROI)** definitions in Hz centered on expected harmonics of shaft speed.

**Scope — IN:**

1. **Sensitivity study tool** (functions + small notebook or script):

   - Vary: `n_segments` ∈ {25, 50, 100}, `overlap` ∈ {0, 0.5}, optional additive Gaussian noise at SNR levels {∞, 40 dB, 30 dB} (define SNR on signal std).
   - Output: tables or line plots of how each scalar metric moves for **one crack case** and **one misalignment case** at the same nominal speed (750 RPM recommended).

2. **Scalar metrics** (minimum 2, maximum 4):

   - Example set (rename/refine as needed):  
     - **M1:** ratio of bicoherence-summed energy in **B11 ROI** vs **B12 ROI**;  
     - **M2:** total bicoherence mass in union of ROIs;  
     - **M3:** Shannon entropy of normalized `|B|` over a bounded region;  
     - **M4:** biphase at a chosen peak bin (if stable).  
   - Each metric must have: definition, numpy implementation, and unit test on synthetic coupling.

3. **ROI specification** in config:

   - ROIs defined from **instantaneous** 1X frequency \(f_m = \text{RPM}/60\) with bandwidth ±Δf_roi (default Δf_roi = 2× frequency resolution or 2.5 Hz — justify).

**Scope — OUT:**

- Full multiclass classifier / sklearn pipelines (optional stretch; not required for sprint acceptance).
- Experimental data import from Sinha PDF (no raw data in repo).

**Deliverables:**

1. `metrics.py` (or under `hos/`) + tests.
2. `sensitivity.ipynb` or `scripts/run_hos_sensitivity.py` generating plots saved to `02_simula/figures/hos_sensitivity/` (gitignore if large — document).
3. Markdown summary: “which metric is least noise-sensitive for our ROSS signals?”

**Acceptance criteria:**

- [ ] For clean synthetic coupling, metrics behave monotonically or predictably when coupling strength increases (test).
- [ ] Sensitivity notebook/script runs end-to-end without manual editing of paths.
- [ ] At least **two** metrics show **<15% relative change** when moving from 25 to 50 segments for the same ROSS case OR the report explains why not (e.g. insufficient record length) with recommendation to extend `T` in simulation.

**Constraints:**

- Do not change ROSS physics models in this sprint; if longer `T` is needed, only update constants/time vectors with explicit comment to advisor.

**Verification (agent runs):**

```bash
pytest -q
python 02_simula/scripts/run_hos_sensitivity.py   # if created
```

**Handoff to Sprint 06:** Metrics function `compute_metrics(signal_dict) -> dict[str, float]` stable enough for batch CSV rows.
