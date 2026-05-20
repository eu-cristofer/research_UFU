# Task List — Sinha (2007) Validation Programme

> Track sprint progress here. Mark items with `[x]` when done.
> Full sprint specs live in `sprints_executivos/`. Execution order: 00 → 01 → 02 → 03 → (04 ∥ 05 ∥ 06) → 07.

---

## Sprint 00 — Modal FE Validation
> *Effort: half a day. Blocks: all downstream sprints.*

- [ ] Create `01_rotordynamic_simulation/00a_modal_check.ipynb`
- [ ] Cell A: assert intact f1 within ±0.05 Hz of 27.50 Hz
- [ ] Cell B: verify Mayes crack fully-open angle ≈ 180°
- [ ] Cell C: add `SINHA_MODAL_TARGET = 27.50` to `constants.py` with provenance docstring
- [ ] `__all__` updated with `SINHA_MODAL_TARGET`

**Exit criteria**
- [ ] Notebook runs end-to-end without raising
- [ ] `|f1 − 27.50| ≤ 0.05 Hz` assertion passes
- [ ] Decision "calibration target is experimental 27.50 Hz" written into `constants.py` docstring

---

## Sprint 01 — HOS Core Library + Synthetic Validation
> *Effort: 5 days. Blocks: Sprints 02, 04, 05, 06, 07.*

**`signal_utils.py`**
- [ ] `window_and_detrend()`
- [ ] `amplitude_spectrum()`
- [ ] `psd_welch()`
- [ ] `bispectrum()` — Kim–Powers normalized, segment averaging, non-redundant region only
- [ ] `bicoherence()` — convenience alias
- [ ] `trispectrum()` — sparse, threshold=0.10
- [ ] `harmonic_amplitude()` — parabolic interpolation
- [ ] `downsample_to()` — Butterworth LP + decimate
- [ ] `add_awgn()` — reproducible AWGN injection

**`plot_utils.py`**
- [ ] `plot_bispectrum_surface()` — Sinha Figs. 5/6 style
- [ ] `plot_trispectrum_balls()` — Sinha Figs. 7/8 style

**`06_hos_validation.ipynb`**
- [ ] Test A — positive QPC: `b²(f,f) ≥ 0.95` and `b²(f,2f) ≥ 0.95`
- [ ] Test B — negative (uncoupled phases): `max b² ≤ 0.20`
- [ ] Test C — trispectrum sparsity: `(i_f, i_f, i_f)` in dict, ≤ 10 entries above 0.10

**Exit criteria**
- [ ] `signal_utils.py` and `plot_utils.py` importable; docstrings cite Sinha Eqs. (2)–(3) and Kim–Powers 1979
- [ ] Tests A, B, C all assert true
- [ ] Default `bispectrum()` yields Δf = 1.25 Hz, 50 segments at 50% overlap (Sinha §3.3) when called with `fs=2560`
- [ ] Visualizers produce figures resembling Sinha Figs. 5 and 7 on QPC signal

---

## Sprint 02 — Sinha-Matched Acquisition + HDF5 Persistence
> *Effort: 3 days. Blocks: Sprints 04, 05, 06, 07.*

**`constants.py` extensions**
- [ ] `DT_SIM`, `FS_SIM`, `T_LONG` (25 s at 10 kHz)
- [ ] `FS_ACQ_EXP = 2560`, `FS_ACQ_FE = 1000`, `AA_CUTOFF = 1000`
- [ ] `SNR_DB = 40`
- [ ] Keep `DT` / `T` aliases so notebooks 01–04 still run
- [ ] `__all__` and docstring provenance updated

**`run_campaign.py`**
- [ ] 7 base cases: 3 healthy + 2 crack + 2 misalignment
- [ ] Noise injected after downsampling
- [ ] Writes `results/campaign.h5` (gzip compressed)

**Integration tests in `06_hos_validation.ipynb`**
- [ ] Test D: B11 peak at 650 RPM within ±1 bin of (10.83, 10.83) Hz
- [ ] Test E: injected SNR within ±1 dB of 40 dB

**Exit criteria**
- [ ] `constants.py` exports all new constants; `__all__` updated
- [ ] Notebooks 01–04 still run without modification
- [ ] `run_campaign.py` completes and writes 7 groups to `campaign.h5`
- [ ] Tests D and E pass
- [ ] Audit H1 closed: `04_sinha_fault_analysis.ipynb` no longer has hand-rolled `cases` list

---

## Sprint 03 — Damping Calibration + Modal-Truncation Convergence
> *Effort: 2 days. Blocks: Sprints 04, 05, 06.*

- [ ] Implement `tune_beta_damping()` via Brentq (mirror `tune_kxx` pattern)
- [ ] Achieve `|ζ₁ − 0.003| ≤ 5×10⁻⁴`
- [ ] Back up `sinha_rotor_pre_damping.toml` before re-saving
- [ ] Re-save `sinha_rotor.toml` with tuned damping
- [ ] Verify Sprint 00 Cell A assertion still passes on damped rotor
- [ ] Modal-truncation table: `(n_modes, |B11|, |B22|, |B12|)` for n_modes ∈ {12, 24, 36}
- [ ] Commit table to `sprints/03_convergence_table.md`
- [ ] Choose `NUM_MODES` (first within 5% of 36-mode reference) and add to `constants.py`
- [ ] Update `run_campaign.py` to use `NUM_MODES` (not hardcoded 12)
- [ ] Re-run `run_campaign.py` and re-assert Sprint 02 Tests D and E

**Exit criteria**
- [ ] `sinha_rotor.toml` re-saved with `|ζ₁ − 0.003| ≤ 5e-4`
- [ ] `sinha_rotor_pre_damping.toml` exists alongside
- [ ] Sprint 00 Cell A still passes
- [ ] Convergence table written to `03_convergence_table.md`
- [ ] `NUM_MODES` exported from `constants.py` with justification

---

## Sprint 04 — Reproduce Sinha's FE Simulation (Figs. 9 & 10)
> *Effort: 3–5 days. Blocks: Sprint 07. Can run in parallel with 05 after 03 lands.*

- [ ] Create `07_sinha_fig10_replication.ipynb`
- [ ] Cell 1: load rotor, sanity modal check
- [ ] Cell 2: run Mayes crack at 772.5 RPM on `T_LONG` grid
- [ ] Cell 3: Sinha AA chain — LP 1 kHz → downsample to 1 kHz → add 40 dB AWGN
- [ ] Cell 4: Fig. 9 orbit plot saved to `results/figures/sprint_04/fig9_orbit.png`
- [ ] Cell 5: Fig. 10(a) bispectrum surface + peak-location assertion (top-3 peaks cover B11, B12, B22 within ±1 bin)
- [ ] Cell 6: Fig. 10(b) trispectrum balls + T111 presence assertion
- [ ] Cell 7: side-by-side PDF to `reports/sinha_fig10_side_by_side.pdf`
- [ ] Append Execution Log to this sprint file

**Exit criteria**
- [ ] Notebook runs end-to-end without raising
- [ ] Cell 5 peak-location assertion passes (±1 bin, Δf=1.25 Hz)
- [ ] Cell 6 T111 assertion passes
- [ ] Orbit shows loop-containing-small-loop topology at 772.5 RPM
- [ ] `reports/sinha_fig10_side_by_side.pdf` exists
- [ ] Execution Log filled in

---

## Sprint 05 — Reproduce Crack HOS at 650 / 750 RPM (Sinha Figs. 2, 3, 5, 7)
> *Effort: 1 week. Blocks: Sprint 07. Can run in parallel with Sprint 06.*

- [ ] Create `08_crack_hos_650_750.ipynb`
- [ ] Cell 1: load crack@650, crack@750, healthy@650, healthy@750 from `campaign.h5`
- [ ] Cell 2: Fig. 2 — amplitude spectra at 650 and 750 RPM
- [ ] Cell 3: Fig. 3 — orbit plots at 650 and 750 RPM
- [ ] Cell 4: Fig. 5 — bispectrum surfaces at 650 and 750 RPM
- [ ] Cell 5: scalar indicators (B11, B22, B12, B13) + speed-dependence assertion `B22/B11(750) ≥ 2·B22/B11(650)`
- [ ] Cell 6: Fig. 7 — trispectrum balls; assert T222 absent at 650, present at 750
- [ ] Cell 7: orbit-topology check — ≥ 4 zero-crossings/rev at 750 RPM
- [ ] Cell 8: assemble `reports/sinha_crack_side_by_side.pdf`
- [ ] Append Execution Log to sprint file

**Exit criteria**
1. - [ ] `|B22/B11|(750) ≥ 2·|B22/B11|(650)`
2. - [ ] `|T222|(750) ≥ 0.10` above normalized threshold; `|T222|(650) < 0.10`
3. - [ ] 750 RPM orbit has ≥ 4 y=0 crossings per revolution
4. - [ ] Amplitude spectrum at 750 RPM shows visible harmonics to ≥ 5× above −40 dB noise floor
5. - [ ] `reports/sinha_crack_side_by_side.pdf` renders four paired panels (Figs. 2, 3, 5, 7)

---

## Sprint 06 — Misalignment HOS Extension (Novel Contribution)
> *Effort: 1 week. Blocks: Sprint 07. Can run in parallel with Sprint 05.*

- [ ] Create `09_misalignment_hos_750_900.ipynb`
- [ ] Cell 1: load misalignment@750, misalignment@900, healthy@750, healthy@900 from `campaign.h5`
- [ ] Cell 2: Fig. 4 — amplitude spectra at 750 and 900 RPM
- [ ] Cell 3: Fig. 6 — bispectrum surfaces at 750 and 900 RPM
- [ ] Cell 4: scalar indicators + B22 absence assertion (B22/B11 ≤ 0.10) + B13 presence assertion (B13/B11 ≥ 0.15)
- [ ] Cell 5: topology set comparison — assert `topology(750) == topology(900)` and `{(1,1),(1,2),(1,3)} ⊆ topology`; `(2,2) ∉ topology`
- [ ] Cell 6: Fig. 8 — trispectrum balls; assert only T111 above 0.10 at either speed
- [ ] Cell 7: assemble `reports/sinha_misalignment_side_by_side.pdf`
- [ ] Append Execution Log to sprint file

**Exit criteria**
1. - [ ] `|B22/B11| ≤ 0.10` at both 750 and 900 RPM (B22 absent)
2. - [ ] `|B13/B11| ≥ 0.15` at both speeds (B13 = B31 present)
3. - [ ] Topology set identical at 750 and 900 RPM; contains (1,1), (1,2), (1,3); does not contain (2,2)
4. - [ ] Only T111 above 0.10 normalized threshold in tri-spectrum at either speed
5. - [ ] `reports/sinha_misalignment_side_by_side.pdf` renders paired panels for Sinha Figs. 4, 6, 8

---

## Sprint 07 — Scored Validation Report + Methods Draft
> *Effort: 3–5 days. Final sprint — no downstream.*

- [ ] Fill `results/validation_matrix.csv` with 10 rows (one per Sinha claim), all `status` fields set to `pass` / `fail` / `partial` / `not_tested`
- [ ] Assemble `reports/sinha_validation_figures.pdf` (title page + 8 paired panels + scoring summary)
- [ ] Draft `01_article/03_methods_draft.md` — 5 sections with measured numbers substituted for all placeholders
  - [ ] §3.1 Finite-element rotor model
  - [ ] §3.2 Fault models (Mayes crack + Xia et al. misalignment)
  - [ ] §3.3 Time integration and acquisition pipeline
  - [ ] §3.4 Higher-order spectra (estimator settings, normalization, plotting)
  - [ ] §3.5 Validation protocol

**Exit criteria**
- [ ] `validation_matrix.csv` has 10 rows, all `status` fields populated
- [ ] `sinha_validation_figures.pdf` renders cleanly with title page, panels, and scoring page
- [ ] Methods draft cites Sinha (2007), Kim & Powers (1979), Xia et al. (2019), Mayes & Davies (1984) correctly
- [ ] Advisor can read the draft + scan the PDF in 15 min and pose concrete next-step questions

---

## Go / No-Go gate after Sprint 07

- [ ] Validation matrix scores ≥ 8/10 `pass` or `partial` → proceed to Sprint 08 (DoE expansion)
- [ ] If < 8/10 → do not advance; diagnose and fix failing sprints first

---

## Post-validation candidates (not started)

- [ ] **Sprint 08** — DoE expansion: crack depths {0.1…0.5} × speeds {650, 750, 900} × misalignment levels {small, medium, large}; compute BPR, BCS, BE indicators
- [ ] **Sprint 09** — RK4 experimental validation (`01_article/04_rk4_working_plan.md`)
