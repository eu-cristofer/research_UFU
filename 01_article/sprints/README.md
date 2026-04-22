# Programming sprints — ROSS + Sinha-matched HOS pipeline

These sprints implement the plan in [../01_publication_roadmap.md](../01_publication_roadmap.md) (Phases 3–4 focus) in **six controlled steps**. Each `sprint-NN-*.md` file is written as a **standalone prompt for an AI coding agent** (context, tasks, acceptance criteria, files).

**Run order:** complete sprints in numeric order unless a sprint’s preamble says it can parallelize.

| Sprint | File | Goal (one line) |
|--------|------|-----------------|
| 1 | [sprint-01-foundation-and-sinha-acquisition.md](sprint-01-foundation-and-sinha-acquisition.md) | Single source of truth for simulation constants; document Sinha acquisition parity |
| 2 | [sprint-02-hos-core-synthetic-validation.md](sprint-02-hos-core-synthetic-validation.md) | Bispectrum + bicoherence module; synthetic signal tests |
| 3 | [sprint-03-ross-extraction-pilot.md](sprint-03-ross-extraction-pilot.md) | Extract probe time series from ROSS; first HOS on crack/misalignment at Sinha speeds |
| 4 | [sprint-04-trispectrum-and-display-parity.md](sprint-04-trispectrum-and-display-parity.md) | Optional trispectrum; Sinha-style normalization and masks |
| 5 | [sprint-05-sensitivity-and-scalar-metrics.md](sprint-05-sensitivity-and-scalar-metrics.md) | Segment/noise sensitivity; define 2–4 scalar fault metrics |
| 6 | [sprint-06-doe-batch-and-feature-matrix.md](sprint-06-doe-batch-and-feature-matrix.md) | Reduced DoE runner + structured storage + feature matrix export |

After Sprint 6, the human researcher can connect results to the publication roadmap checklist (Phase 4–5) and figures vs. Sinha (2007).
