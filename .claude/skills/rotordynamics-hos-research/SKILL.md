---
name: rotordynamics-hos-research
description: Domain companion to the academic-research skill, scoped to rotordynamics, fault diagnosis, and Higher-Order Spectra (HOS) for Cristofer's POSMEC/UFU thesis. Pre-loads the canonical author list, target journals, and local corpus locations so retrieval is fast and the thesis bibliography stays consistent. Use when working on the literature review, Methods text, references.bib expansion, or any citation task tied to the Sinha-2007 validation programme.
---

# Rotordynamics + HOS research (project skill)

## Composition with the user-level skill

This skill **extends** the user-level `academic-research` skill — it does not replace it. The factual-silence policy, failure-mode templates, evidence hierarchy, Chain-of-Verification protocol, and APA 7th edition formatting all still apply. This file adds three things on top:

1. The local corpus and where to look first.
2. The canonical authors and journals for this domain.
3. The thesis-specific framing constraints (target journals, Sinha 2007 as validation reference).

When both skills are relevant to a task, follow the user-level skill's protocol and consult this file for *what* to retrieve and *which sources are authoritative* in this domain.

## Local corpus — search here first

Before issuing any web search, scan the working directory for sources already curated for this thesis:

- **`99_references/`** — the literature folder. Currently contains:
  - *Sinha (2007), "Higher Order Spectra for Crack and Misalignment Identification in the Shaft of a Rotating Machine"*, Structural Health Monitoring 6(4), 325–334. The paper the thesis numerically validates against. Bib key `sinha_higher_2007`.
  - *Lalanne & Ferraris (1998), "Rotordynamics Prediction in Engineering"*. Foundational FE rotordynamics textbook; beam-element conventions referenced by ROSS.
  - *Muszyńska (2005), "Rotordynamics"*. Already in the bib as `muszynska_rotordynamics_2005` — note the PDF filename "Faulkner — 2005 …" is a Zotero rename artefact, do **not** re-add this work under a Faulkner key.
  - *Timbó et al. (2020), "ROSS — Rotordynamic Open Source Software"*, JOSS 5(48). Bib key `timbo_ross_2020`.
- **`00_proposta_de_trabalho/references.bib`** — existing BibTeX for the Portuguese-language thesis proposal. Append new entries here.
- **`01_planejamento_científico/sprints_executivos/`** — operational plan and Tier 1 source for Methods scaffolding:
  - `README.md` — execution order of sprints 00–07 and the 10 falsifiable claims that map Sinha (2007) Figs. 2–10 to numeric exit criteria. Use this as the spine for any Validation or Methods paragraph.
  - `publication_roadmap.md` — gap analysis. §4.2 names the eight literature categories the publishable paper needs (rotordynamics fundamentals, crack breathing, misalignment, HOS theory, HOS in rotating machinery, comparator methods, numerical fault diagnosis, ROSS / open-source rotordynamics) with target counts; §5.3 sets the DoE; §6.1 lists target journals; §7.2 lists the conference-first ladder.
  - `00_modal_validation.md` … `07_validation_report.md` — sprint specs. Sprint 07 produces the Methods draft and the scored validation matrix that anchor the thesis manuscript.
- **`02_simula/05_synthesis.ipynb`** — audit of the simulation pipeline. Cite for any methodological claim about the current state of the code.

Treat these as Tier 1 sources for thesis purposes (peer-reviewed paper + the user's own curated PDFs and notes) and start there before WebSearch.

## Canonical authors — recognize these on sight

These are the authors whose names should be expected in any rotordynamics-HOS bibliography. When `WebSearch` returns hits with these authors, treat them as high-priority. When the user names them, do not ask what paper they mean if the context (thesis topic) makes the work unambiguous.

**Crack dynamics and breathing models**
- *Mayes, I. W. & Davies, W. G. R.* — the (1 − cos θ) Δk / 2 breathing function (1984, ASME JVASRD). Cited by Sinha [4].
- *Gasch, R.* — survey of cracked-rotor dynamics; alternative breathing-law formulation (1993, JSV).
- *Wauer, J.* — comprehensive review of cracked rotor dynamics (1990, Applied Mechanics Reviews).
- *Sabnavis, G., Kirk, R. G., Kasarda, M., & Quinn, D.* — cracked-shaft detection literature review (2004, Shock and Vibration Digest).
- *Sinou, J.-J. & Lees, A. W.* — analytical orbit simulation under cracked-rotor transients (2005, JSV).
- *Papadopoulos, C. A.* — fracture-mechanics compliance coefficients underlying ROSS's cracked-element stiffness matrix.
- *Jun, O. S., Eun, H. J., Earmme, Y. Y., & Lee, C. W.* — modelling and vibration analysis of a simple rotor with a breathing crack (1992, JSV).

**Misalignment**
- *Sekhar, A. S. & Prabhu, B. S.* — coupling-misalignment vibration effects (1995, JSV).
- *Xu, M. & Marangoni, R. D.* — flexible-coupling misalignment + unbalance theoretical model (1994, JSV, Parts I & II).
- *Xia, Y., Pang, J., Yang, L., Zhao, Q., & Yang, X.* — hexangular flexible-coupling vibration model (2019, Applied Acoustics). The model behind ROSS's `run_misalignment(coupling="flex", ...)`.
- *Dewell, D. L. & Mitchell, L. D.* — spectrum analysis for misaligned disk coupling (1984, ASME JVASRD).

**Higher-Order Spectra theory**
- *Nikias, C. L. & Petropulu, A. P.* — *Higher-Order Spectra Analysis* (1993, Prentice Hall). The textbook.
- *Kim, Y. C. & Powers, E. J.* — bispectrum normalization convention (1979, IEEE T. Plasma Sci.).
- *Collis, W. B., White, P. R., & Hammond, J. K.* — bispectrum and trispectrum estimation (1998, MSSP). Sinha [23].
- *Fackrell, J. W. A., White, P. R., Hammond, J. K., Pinnington, R. J., & Parsons, T. A.* — interpretation of bispectra (1995, MSSP, Parts I & II). Sinha [21–22].
- *Hinich, M. J.* — transient-signal detection via bispectrum (1990, IEEE TASSP). Sinha [24].
- *Rivola, A. & White, P. R.* — bispectral analysis of bilinear oscillator / fatigue cracks (1998, JSV); HOS in condition monitoring (1999, ASME DETC). Sinha [26, 29].

**Rotordynamics fundamentals (textbooks / handbooks)**
- *Lalanne, M. & Ferraris, G.* — *Rotordynamics Prediction in Engineering* (1998, Wiley). Already in `99_references/`; the beam-element formulation underlying ROSS's `ShaftElement` traces back here.
- *Muszyńska, A.* — *Rotordynamics* (2005, CRC/Taylor & Francis). Already in the bib as `muszynska_rotordynamics_2005`.
- *Friswell, M. I., Penny, J. E. T., Garvey, S. D., & Lees, A. W.* — *Dynamics of Rotating Machines* (2010, Cambridge). The textbook that ROSS examples mirror.
- *Genta, G.* — *Dynamics of Rotating Systems* (2005, Springer).
- *Childs, D.* — *Turbomachinery Rotordynamics* (1993, Wiley).
- *Vance, J., Zeidan, F., & Murphy, B.* — *Machinery Vibration and Rotordynamics* (2010, Wiley).
- *Ehrich, F. F.* (ed.) — *Handbook of Rotordynamics* (1992, McGraw-Hill).
- *Ewins, D. J.* — *Modal Testing: Theory, Practice and Application* (2000, RSP). Sinha [31] — impulse-response method that produced the 27.50 Hz target.

**ROSS library**
- *Timbó, R., Martins, R., Bachmann, G., Rangel, F., Mota, J., Valério, J., & Ritto, T.* — *ROSS — Rotordynamic Open Source Software* (2020, JOSS 5(48), 2120). The open-source FEM rotordynamics tool used by every notebook in `02_simula/`. PDF in `99_references/`; bib key `timbo_ross_2020`.

**Author of record for the validation target**
- *Sinha, J. K.* — the 2007 paper validated against; also: PhD thesis (2002, Swansea); single-rundown unbalance/misalignment estimation (2004, JSV, with Lees & Friswell); centrifugal-pump diagnosis (2006, SHM, with Rao); early-contact detection (2006, JSV).

## Target journals (publication roadmap)

The publishability calibration is set by `01_planejamento_científico/sprints_executivos/publication_roadmap.md` §6.1. From most-to-least preferred:

- **Mechanical Systems and Signal Processing (MSSP)** — top venue for signal-processing + mechanical systems. ~IF 8.
- **Journal of Sound and Vibration (JSV)** — strong rotordynamics community; Sinha publishes here regularly.
- **Structural Health Monitoring (SHM)** — where Sinha (2007) was published.
- **Mechanism and Machine Theory** — focus on mechanical modelling.
- **ASME Journal of Vibration and Acoustics** — faster review, respected venue.
- **Latin American Journal of Solids and Structures** — regional, good first-publication option.

Conferences for early de-risking: COBEM, DINAME, ISMA, IFToMM. Listed in roadmap §7.2.

## Thesis framing constraints

When drafting Methods, Introduction, or Discussion text, observe the constraints already locked into the sprint plan:

- The thesis is a **numerical investigation** (the title shifts to "Numerical and Experimental Study" if an experimental rig extension lands later — see the "Candidate next sprint after 07" section of `sprints_executivos/README.md`). Do not phrase the contribution as a theoretical advance.
- The validation reference is **Sinha (2007)**. The thesis aims to *reproduce* its experimental HOS features (Figs. 2, 3, 5, 7 for crack; 4, 6, 8 for misalignment) and *extend* the simulation work that Sinha §5 acknowledged could not be done for misalignment (the novelty claim driving Sprint 06).
- The crack model used is **Mayes & Davies (1984)** as implemented by ROSS (`crack_model="Mayes"`). The breathing function `(1 − cos θ) Δk / 2` is identical to Sinha §5's own FE.
- The misalignment model is the **Xia et al. (2019)** flex-coupling model, also implemented by ROSS. This is the *novel contribution versus Sinha 2007*, who could not FE-simulate misalignment.
- HOS estimator settings are **Sinha §3.3 verbatim**: 50 segments, 50% overlap, Δf = 1.25 Hz. Bispectral normalization is **Kim & Powers (1979)**. Cite both.
- The proposal text in `00_proposta_de_trabalho/` is in **Portuguese (pt-BR), ABNT-styled**. The journal manuscript will be in **English**. When drafting, use the language the user is currently working in; do not silently switch.

## Bibliography hygiene

When adding a reference to `00_proposta_de_trabalho/references.bib`:

1. **Verify against the local corpus first.** If the paper is in `99_references/` already, the bibliographic metadata is in the PDF — extract it from there, do not re-derive it from the web.
2. **Use the BibTeX entry type that matches.** `@article` for journal papers, `@book` for textbooks, `@inbook` for handbook chapters, `@phdthesis` for dissertations, `@inproceedings` for conference papers.
3. **Keys follow `lastname_firstword_year` lower-case** (e.g. `sinha_higher_2007`, `mayes_analysis_1984`). Match the existing style in `references.bib`.
4. **DOIs, URLs, page ranges** — only add if verified. Apply the user-level skill's metadata-fidelity rule.
5. **Cross-link with `01_planejamento_científico/sprints_executivos/publication_roadmap.md` §4.2** — every new reference should fit into one of the eight category buckets (rotordynamics fundamentals, crack breathing, misalignment, HOS theory, HOS in rotating machinery, comparator methods, numerical fault diagnosis, ROSS).
6. **Reuse existing keys.** The locally-resident PDFs already have keys: `sinha_higher_2007`, `timbo_ross_2020`, `muszynska_rotordynamics_2005`. Lalanne & Ferraris (1998) is in `99_references/` but not yet in the bib — when adding it, use `lalanne_rotordynamics_1998`.

## Activation

Apply this skill — alongside the user-level `academic-research` skill — whenever the user asks for:

- A literature-review section, paragraph, or annotated entry tied to crack diagnosis, misalignment, HOS, or ROSS.
- Methods text that names crack-breathing models, misalignment-coupling models, HOS estimators, or rotordynamics FE conventions.
- Citation verification for the canonical authors above.
- Target-journal scoping, abstract drafting, or paper-structure decisions for the Sinha-validation paper.

If the request is generic scholarly writing with no rotordynamics / HOS hook, defer entirely to the user-level skill and do not pre-load this file's domain content.
