# Sprint 03 — ROSS signal extraction and HOS pilot

**Role:** You are an AI coding agent. You connect **existing ROSS notebooks/results workflows** to the HOS module from Sprint 02 by extracting **probe time series** at Sinha-relevant speeds and producing **first bispectrum / bicoherence maps** for: healthy baseline, cracked shaft, misaligned shaft.

**Prerequisites:** Sprint 01 (constants) and Sprint 02 (HOS core + tests) complete.

**References:**

- [02_simula/04_sinha_fault_analysis.ipynb](../../02_simula/04_sinha_fault_analysis.ipynb) — fault cases and probe definition.
- [02_simula/03_sinha_crack_model_comparison.ipynb](../../02_simula/03_sinha_crack_model_comparison.ipynb) — `run_crack` usage patterns.
- Sinha (2007): crack emphasis **650 / 750 RPM**; misalignment spectra examples **750 / 900 RPM**; **vertical** direction primary for comparison to paper figures.

**Scope — IN:**

- Add a small **Python module or notebook-only functions** (prefer module for reuse) that, given a `TimeResponseResults` (or the arrays your notebooks already use), returns `t`, `x_vertical` (and optionally `x_horizontal`) at `PROBE_NODE` consistent with Sinha’s “vertical displacement” convention. Document which global DOF index maps to vertical at the probe.
- Implement **steady-state cropping** consistent with existing notebooks (reuse their `t_start_ss` logic or centralize it if duplicated).
- Apply **preprocessing** decided in Sprint 01 (resample to 2560 Hz and/or 1 kHz AA equivalent). If Sprint 01 left this as TODO, implement the **default** path agreed there (agent must read the technical note and follow it).
- New notebook **or** new section at end of `04_sinha_fault_analysis.ipynb`:

  - Three cases: healthy, crack (`CRACK_RATIO=0.5`, Mayes or the model your advisor chose — document default), misalignment (`MIS_X`, `MIS_Y` as Sinha).
  - At minimum: **vertical** signal, speeds **650 and 750 RPM** for crack; **750 and 900 RPM** for misalignment; include healthy at same speeds for context.
  - Plot: `|B|`, `b^2` (bicoherence) 2D heatmaps with frequency axes 0–100 Hz or 0–200 Hz (justify range from first natural frequency and harmonics).

**Scope — OUT:**

- Automated parameter sweeps across full DoE (Sprint 06).
- Trispectrum plots (Sprint 04).
- Statistical classification / ROC (Sprint 05 metrics are scalars only at pilot level here).

**Deliverables:**

1. Reusable extractor + preprocessing pipeline callable from a notebook.
2. Pilot notebook section with **four to eight** HOS figures total (clear titles, speed and case in caption).
3. Short markdown bullet list (in notebook or `02_simula/notes/hos_pilot_findings.md`) answering: “Do we see **qualitatively different** bispectrum structure between crack and misalignment at the same speed when both are excited?” — honest “not yet / partial / yes” with reasons.

**Acceptance criteria:**

- [ ] HOS plots use **exactly** the Sinha-matched estimator defaults from Sprint 02 unless the notebook explains a deviation.
- [ ] No manual copy-paste of long time arrays into the notebook — load from simulation output variables or a saved `.npz` if runtime is an issue (optional `.npz` cache is allowed).
- [ ] Runtime for one case is acceptable on a laptop (if not, document subsampling strategy and risk).

**Constraints:**

- Do not change `sinha_rotor.toml` geometry in this sprint unless fixing an **objective bug**; tuning bearings belongs to a separate human decision.
- Keep notebook outputs cleared or committed per repo convention — follow existing pattern in repo.

**Verification (agent runs):**

- Execute the new notebook section (or `python 02_simula/scripts/run_hos_pilot.py` if you create a script) in CI or locally and confirm no exceptions.

**Handoff to Sprint 04:** Save intermediate `npz` with `(t, x_v, x_h, fs, meta)` for one speed per case for trispectrum reuse.
