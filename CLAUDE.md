# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Master's thesis (POSMEC / UFU) on fault diagnosis in rotating machines by combining open-source FEM rotordynamics (the ROSS library) with Higher-Order Spectra (bispectrum / trispectrum / bicoherence). The target study reproduces Sinha (2007) numerically and extends it into a parametric campaign over shaft cracks and misalignment.

Planning lives in two parallel hubs — check both when a task's scope or motivation is unclear:

- `01_planejamento_científico/` — English-language scientific plan.
  - `conceitual/02_executive_summary.md` — one-page framing of the research.
  - `conceitual/01_publication_roadmap.md` — full gap analysis, go/no-go gates, timeline.
  - `conceitual/03_ross_agent_prompt.md` — spec of the go/no-go feasibility experiment.
  - `conceitual/04_rk4_working_plan.md` — revised plan that adds experimental validation on the Bently Nevada RK4 rig.
  - `sprints_executivos/` — the **active execution plan**. Sprints 00 → 07 each have purpose / prerequisites / work items / exit criteria; order is `00 → 01 → 02 → 03 → (04 ∥ 05 ∥ 06) → 07`. `sci_tasks.md` is the checkbox tracker.
- `02_planejamento_da_pesquisa/` — Portuguese (pt-BR) research-planning hub: `00_planejamento_global.md`, `01_plano_de_escrita.md`, `02_metodologia_cientifica.md`, `03_cronograma_execucao.md`, `04_indicadores_progresso.md`. This is the language the thesis itself is written in; edits here should stay in pt-BR.

## Environment

The conda/mamba environment is `research` (Python 3.12). ROSS is not on conda and must be installed by pip inside the env.

```bash
mamba env create -f environment.yml        # or: mamba env update -f environment.yml
conda activate research
pip install ross-rotordynamics             # required; not in environment.yml
```

Notebooks set `pio.renderers.default = "notebook"` for inline Plotly — launch via `jupyter lab` / `jupyter notebook` rather than `nbconvert --execute` unless you know the renderer is OK in the target context.

## Simulation code layout (`02_simula/`)

The notebooks form an ordered pipeline and **share state through files, not imports**:

1. `00_sinha_rotor.ipynb` — builds the Sinha rotor geometry in ROSS, calibrates bearing stiffness via `scipy.optimize.brentq` to match the first bending frequency (~27.5 Hz), and **writes `sinha_rotor.toml`** via `rotor.save("sinha_rotor.toml")`.
2. `01_sinha_rotor_modal.ipynb`, `02_sinha_unbalance_phase_crack.ipynb`, `03_sinha_crack_model_comparison.ipynb`, `04_sinha_fault_analysis.ipynb` — all begin with `rotor = rs.Rotor.load("sinha_rotor.toml")` and `from constants import *`.
3. `05_synthesis.ipynb` — engineering audit of `02_simula/` against the publication roadmap (current state, hardcoded parameters, error/best-practice review, gap-analysis). Read this first when orienting on what is built vs. what is still missing; it is the source for the sprint plan in `01_planejamento_científico/sprints_executivos/`.
4. `01_unbalance.ipynb` is an auxiliary single-topic notebook (currently untracked).

Consequences:
- If `00_sinha_rotor.ipynb` has not been run in the current working copy, downstream notebooks will fail with `FileNotFoundError` on `sinha_rotor.toml`. Run 00 first (or regenerate the TOML) when modifying the rotor geometry.
- Node indices (`DISK_NODE = 6`, `CRACK_NODE = 7`, `BEARING_*_NODE`, `PROBE_NODE`) in `constants.py` are coupled to the shaft discretization in `00_sinha_rotor.ipynb`. Changing the node_pos_mm list in 00 requires updating `constants.py` in lockstep, and the downstream notebooks assert this (e.g. `assert rotor.disk_elements[0].n == DISK_NODE`).

### `constants.py` is the single source of truth

All shared simulation parameters (unbalance, speeds, time grid, HOS handoff values from Sinha §3/§3.3) live in `02_simula/constants.py`. Do not re-declare them inline in a notebook — Sprint 01 explicitly consolidated per-notebook overrides (notably `UNB_PHASE = 4π/3 rad`, previously `3π/4` inline in notebook 04) so the thesis Methods section can cite one table. When adding a parameter that belongs in more than one notebook, add it to `constants.py` and its `__all__` (kept alphabetical), with a provenance paragraph in the module docstring.

ROSS values that carry units are stored as `pint` quantities via `ross.Q_(...)`. When consuming them in numerical code, call `.m` (magnitude) or `.to("<unit>").m` at the call site — mixing `Q_` objects with bare floats silently breaks downstream math.

### Working with the notebooks

- Notebook outputs are committed (they are 5–8 MB each because Plotly figures are embedded). If you run cells, be deliberate about whether to keep or strip the new outputs before committing.
- There is no formal test suite. Verification is by (a) matching the ~27.5 Hz first bending frequency in notebook 00, and (b) the `assert` statements at the top of the downstream notebooks that pin disk-node identity against the TOML.
- When a notebook is too expensive to re-run interactively, `jupyter nbconvert --to script --stdout <nb>.ipynb` is a safe way to inspect code without materializing outputs.

## LaTeX proposal (`00_proposta_de_trabalho/`)

Self-contained pdflatex + bibtex build, with a `Makefile`. Common targets: `make` (full build with bibliography), `make quick` (one pdflatex pass), `make clean`, `make view` (macOS `open`). The document is Portuguese (pt-BR) and ABNT-styled; keep that when editing `.tex`.

## References and literature

- `99_references/` — source PDFs: Sinha (2007) (target paper), Lalanne & Ferraris (1998) (rotordynamics textbook), Timbó et al. (2020) (ROSS paper), Faulkner (2005). Cite these when editing Methods-related text; the bibliography is in `00_proposta_de_trabalho/references.bib`.
- `03_literature_review/` — long-form review notes (e.g., `FFT.md` is an English peer-reviewed-audit pass on the Fourier-to-FFT-to-PSD narrative; `FFT_pt-BR.md` is the pt-BR translation; `FFT_audit.md` is the line-level findings log). Produced with the `academic-research` skill — preserve that convention (verified citations, APA-style) when extending.
- `04_mindmaps/` — research-question mind maps in Markdown.
- `tutorials/pandoc_tutorial/` — unrelated pandoc sandbox; do not pull it into simulation code.

## Conventions learned from the repo

- The notebooks include a "Research recap — parameters and provenance" markdown cell near the top. If you add or change a parameter used by the thesis Methods section, update that recap and the `constants.py` docstring so the provenance chain (symbol → origin → conclusion) stays intact.
- Commit messages are long, descriptive, and written in English (the proposal text itself is in Portuguese). Follow that mixed convention rather than switching to one style wholesale.
