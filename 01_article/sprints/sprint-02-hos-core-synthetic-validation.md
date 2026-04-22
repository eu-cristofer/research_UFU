# Sprint 02 — HOS core library and synthetic validation

**Role:** You are an AI coding agent. You implement a **small, testable Python module** for bispectrum and bicoherence estimation using the **direct method** (segmented DFT averaging), aligned with Sinha (2007) Section 3.3 and Equation (2). You prove correctness on **synthetic** signals before any ROSS dependency.

**References:**

- Roadmap appendix bispectrum sketch in [01_article/01_publication_roadmap.md](../01_publication_roadmap.md).
- Sinha (2007): **50 segments**, **50% overlap**, **Δf = 1.25 Hz** at **fs = 2560 Hz** ⇒ segment length **N = 2048** (verify in module docstring).
- Nikias & Petropulu (1993) or equivalent for definitions if you need bicoherence normalization.

**Scope — IN:**

- New package or module under `02_simula/` (e.g. `02_simula/hos/` with `__init__.py`, `bispectrum.py`) **or** `02_simula/hos_core.py` if the team prefers flat layout — pick one, keep imports simple.
- Public API (names illustrative; you may refine):

  ```text
  estimate_bispectrum(x, fs, nperseg=2048, noverlap=1024, n_segments=50, window='hann', detrend='constant') -> (B, freqs)
  estimate_bicoherence(x, fs, same kwargs) -> (b2, freqs)
  ```

- Document in docstrings: frequency grid is `rfftfreq` convention; bispectrum indices `(i, j)` correspond to `(f_i, f_j)` with coupling to `f_i + f_j` (match Sinha’s Equation (2) indexing carefully).
- **Synthetic tests** (pytest under `02_simula/tests/` or repo `tests/` — follow existing project convention; if none, add minimal `pytest` layout):

  1. **Pure cosine at f0:** bispectrum should not show spurious quadratic coupling (within numerical tolerance).
  2. **Known quadratic phase coupling:** e.g. signal constructed so energy appears at `(f0, f0)` coupling to `2f0` — assert peak location within ±1 bin of expected `(f0, f0)` region.
  3. **Bicoherence** in `[0, 1]` and high where coupling is injected.

- Use `numpy`; `scipy.signal` for window/detrend is allowed. Vectorize inner loops where reasonable for performance, but clarity > micro-optimization in this sprint.

**Scope — OUT:**

- Trispectrum (Sprint 04).
- HDF5 batch pipelines (Sprint 06).
- Notebook polish for publication figures.

**Deliverables:**

1. Module + `README` section in module docstring or `02_simula/hos/README.md` explaining parameters vs Sinha table.
2. `pytest` tests green locally.
3. One **minimal** notebook or script snippet (optional) under `02_simula/` that plots `|B(f1,f2)|` for a synthetic case only (not required if tests are sufficient).

**Acceptance criteria:**

- [ ] Default kwargs match Sinha’s stated **50 / 50% / 1.25 Hz** at **2560 Hz** (2048-point segments).
- [ ] Tests pass and document expected numerical tolerances (comment in test file).
- [ ] No dependency on `ross` inside the HOS module (keep FEM and HOS decoupled).

**Constraints:**

- Do not copy large blocks from the roadmap’s illustrative bispectrum triple loop if a clearer FFT-bin implementation exists; if you use the roadmap snippet, fix the `X3` indexing bug (full complex FFT vs `rfft` consistency).
- Avoid new heavy dependencies (no `torch`); `numba` optional only if justified.

**Verification (agent runs):**

```bash
pytest path/to/test_hos.py -q
```

**Handoff to Sprint 03:** Export a single function `hos_preprocess(x, fs_sim, target_fs=SINHA_FS_HZ, aa_cutoff=SINHA_AA_CUTOFF_HZ)` if Sprint 01 specified resampling/filtering; otherwise stub with clear `NotImplementedError` and docstring.
