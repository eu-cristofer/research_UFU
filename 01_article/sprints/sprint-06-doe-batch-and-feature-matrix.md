# Sprint 06 — Reduced DoE, batch simulation, and feature matrix

**Role:** You are an AI coding agent. You implement a **reduced design of experiments** (subset of the roadmap’s full factorial) that loops ROSS simulations, stores time series + metadata, and emits a **feature matrix** CSV (rows = cases, columns = metrics + labels) using the HOS metrics from Sprint 05.

**Prerequisites:** Sprints 01–05 complete.

**References:**

- [01_article/01_publication_roadmap.md](../01_publication_roadmap.md) — Phase 3 DoE table (full scope); MVP suggestion (e.g. 5 crack depths × 3 speeds). You must implement a **reduced** but documented subset.
- Existing notebooks: `03` (crack depths, models), `04` (fault types), `02` (phase — optional factor).

**Scope — IN:**

1. **DoE configuration** as a machine-readable file:

   - Preferred: `02_simula/doe/reduced_doe.toml` or `reduced_doe.yaml` listing factors: `fault_type ∈ {healthy, crack, misalignment}`, `speed_rpm`, `crack_depth_ratio` (if crack), `crack_model` (fixed default unless varied), `unbalance_phase_deg` (fixed or small grid).
   - Explicit **random seed** for any stochastic component (noise injection optional flag).

2. **Batch runner**:

   - CLI: `python 02_simula/batch/run_campaign.py --config 02_simula/doe/reduced_doe.toml --output runs/2026-04-21` (directory name `02_simula` is not a Python package name; use script entrypoints or a `pyproject` console script if you later promote a proper package).
   - Each case folder: `meta.json` + `signal.npz` (`t`, `x_v`, `x_h`, `fs_analysis`, `rpm`, `fault`, hashes of config).
   - **Idempotency:** skip if output exists unless `--force`.

3. **Post-processing:**

   - Script reads each `signal.npz`, applies Sprint 01 preprocessing + Sprint 02 HOS + Sprint 05 metrics → row in `features.csv`.
   - Include pass/fail QC: minimum duration, NaN check, optional PSD peak at 1X within tolerance of RPM.

4. **Documentation:**

   - `02_simula/doe/README.md`: table of factors, count of runs, expected runtime on reference machine (agent estimates order of magnitude).

**Scope — OUT:**

- Parallel cluster / SLURM (optional `joblib` parallel over cases is a stretch — implement if trivial).
- Journal-quality figure automation.

**Deliverables:**

1. `doe/` config + `batch/` package (or scripts) + `features.csv` example from a **tiny** dry run (e.g. 3 cases) committed or documented.
2. README with instructions for advisor to reproduce full campaign locally.

**Acceptance criteria:**

- [ ] Dry run completes 3 cases on clean checkout with one command sequence documented in README.
- [ ] `features.csv` has columns: `case_id`, `fault_type`, `speed_rpm`, at least **two** HOS metrics, and `notes` (empty if OK).
- [ ] No secrets or huge binaries committed; use `.gitignore` for `runs/` if appropriate.

**Constraints:**

- Respect ROSS version pinned in environment; log `ross.__version__` into `meta.json`.
- Fail fast with readable errors if `ross` not installed.

**Verification (agent runs):**

```bash
python 02_simula/batch/run_campaign.py --config 02_simula/doe/reduced_doe_minimal.toml --output /tmp/hos_doe_smoke
python 02_simula/batch/build_feature_matrix.py --runs /tmp/hos_doe_smoke --out /tmp/features.csv
```

**Project completion relative to roadmap:** After this sprint, the team has Phase 3–4 **machinery**; Phase 5 writing remains human-led, using `features.csv` and pilot figures.
