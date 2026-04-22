# Sprint 04 — Trispectrum and Sinha-style display parity

**Role:** You are an AI coding agent. You extend the HOS library with **trispectrum** estimation consistent with Sinha (2007) Equation (3), and you align **visualization** with the paper’s stated display conventions (normalization, thresholds).

**Prerequisites:** Sprint 02–03 complete.

**References:**

- Sinha (2007) Equation (3) and Section 3.3: tri-spectrum averaging same segment policy; amplitudes **normalized to 1** for bi- and tri-spectra; tri-spectrum plot shows only amplitudes **> 0.1**; “ball” metaphor for triadic frequency energy (if you cannot do 3D balls cleanly, use **isosurface** or **maximum-over-third-axis projection** but document the mapping).

**Scope — IN:**

- Implement `estimate_trispectrum(x, fs, ...)` using the same segment/window/overlap defaults as bispectrum unless docstring proves incompatibility.
- Add **normalization helpers**:

  - `normalize_bispectrum_display(B, mode='sinha')` — scale so plotted magnitude max is 1 (or document L2 norm choice — must match Sinha’s phrase “normalized to 1”).
  - `mask_trispectrum(T, threshold=0.1)` matching paper.

- Visualization utilities:

  - Either Matplotlib 3D scatter with size from magnitude, or Plotly 3D scatter — pick one consistent with existing notebooks (`04` uses Plotly elsewhere).
  - 2D **projections** for paper-style figures if 3D is unreadable in static export.

- Apply trispectrum to **at least one crack speed** (750 RPM) and **one misalignment speed** (900 RPM) using cached signals from Sprint 03.

**Scope — OUT:**

- Full trispectrum classification pipeline (scalar features from T remain optional stubs).
- Performance optimization for huge 3D grids beyond what laptop memory allows — use sparse plotting or coarse frequency bins if needed, but **state the binning** in captions.

**Deliverables:**

1. Extended HOS module + tests on synthetic **cubic** coupling (agent constructs minimal signal where tri-spectrum should light up at known frequency triples; tolerance in bins).
2. Notebook subsection or new `05_sinha_hos_trispectrum.ipynb` with figures mirroring Sinha’s **qualitative** discussion: crack shows multiple tri-spectral components; misalignment dominated by **T111** (paper claim — report match/mismatch honestly).

**Acceptance criteria:**

- [ ] Unit tests cover trispectrum shape and symmetry properties you rely on (document which symmetries you assume for real signals).
- [ ] Plots include **colorbars**, **Hz** axes, and **speed/case** in title.
- [ ] README or notebook states **computational cost** and default frequency limits (e.g. crop to 0–60 Hz if full grid is too large).

**Constraints:**

- Do not claim numerical identity with Sinha’s experimental plots — qualitative comparison language only unless RMSE is defined (out of scope).
- Keep API backward compatible for Sprint 02 bispectrum callers.

**Verification (agent runs):**

```bash
pytest -q
```

plus manual notebook run for two speeds.

**Handoff to Sprint 05:** Export flattened arrays or region-of-interest masks for **B11 / B12 / B22 / B13** neighborhoods in Hz for metric computation.
