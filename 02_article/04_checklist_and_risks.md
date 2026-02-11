# Progress Checklist & Risk Assessment

## How to use this file

Review this checklist **every week**. Check off items as you complete them. If most of section G is not checked, you are not ready to submit.

---

## Progress Checklist

### A) Problem & claim clarity
- [ ] One-sentence primary novelty claim locked.
- [ ] 2-3 contributions list locked.
- [ ] Scope frozen (fault types, regimes, sensors, speeds).
- [ ] Advisor has reviewed and agreed with the scope.

> **Why this matters:** If your claim is still fuzzy when you start writing, you will rewrite the Introduction multiple times. Lock it early.

### B) Rotor model credibility
- [ ] Rotor model parameter table complete (geometry, material, discs, bearings, damping).
- [ ] Healthy validation plots complete (Campbell diagram, critical speeds, sample responses).
- [ ] Numerical stability verified (no artifacts driving conclusions).

> **Why this matters:** The healthy model is the foundation. If it is wrong, every fault result is wrong too.

### C) Fault modeling
- [ ] Crack model defined: breathing stiffness variation, severity mapping (3 levels).
- [ ] Misalignment model defined: forcing/coupling model, severity mapping (3 levels).
- [ ] (Optional) Unbalance baseline included.
- [ ] Example faulted responses show expected qualitative signatures.

### D) Signal protocol
- [ ] Sampling frequency, duration, and windowing documented.
- [ ] Noise model documented (SNR levels defined).
- [ ] Sensor locations defined (at least 2).
- [ ] (If nonstationary) Run-up profiles defined and reproducible.

### E) HOS implementation
- [ ] Bicoherence definition and normalization fixed.
- [ ] Synthetic known-coupling validation completed (correct peaks detected).
- [ ] Noise-only bias check completed (bicoherence near zero).
- [ ] Parameter sensitivity quantified (window/segment length).

> **Why this matters:** If your HOS code has a bug or is sensitive to parameters, your results are not trustworthy. Validate the tool before using it.

### F) Baselines
- [ ] PSD/order spectrum baseline implemented.
- [ ] Envelope spectrum baseline implemented.
- [ ] (Optional) Cyclostationary baseline implemented.
- [ ] All baselines use the same data, same length, same conditions (fairness).

> **Why this matters:** Reviewers will reject your paper if you do not compare against simpler methods. They need to see that HOS adds value.

### G) Evidence package (what reviewers actually judge)
- [ ] Benchmark 1 replicated (e.g., Sinha 2007) with quantitative match metrics.
- [ ] Benchmark 2 replicated (selected and cited) with quantitative match metrics.
- [ ] Robustness sweeps completed: severity (3 levels), noise (3 levels), sensor (2 locations).
- [ ] Ablation study completed (which factors matter most).
- [ ] All figures generated from scripts (not manually).

> **Why this matters:** This section is the heart of your paper. Reviewers spend most of their time here. If it is weak, nothing else saves you.

### H) Writing & presentation
- [ ] All figures and tables produced before writing begins.
- [ ] Related work contains a "this work vs closest prior work" comparison table.
- [ ] Limitations section is honest and specific.
- [ ] Computational cost reported (at least runtime per case).

### I) Reproducibility
- [ ] All parameters, seeds, and settings are version-controlled.
- [ ] Script/notebook regenerates all plots and tables end-to-end.
- [ ] Clear instructions for someone else to reproduce results.

---

## Risk Assessment

### Risk table

| # | Risk | Likelihood | Impact | What to watch for | What to do |
|---|------|-----------|--------|-------------------|------------|
| 1 | Simulation-only perceived as weak | High | High | Reviewer says "needs experiments" | Replicate 2+ benchmarks; report match metrics; publish reproducibility package; be honest about limitations |
| 2 | Novelty seen as incremental | Medium | High | You cannot write a novelty sentence without caveats | Audit related work early; include comparison table; lock one primary novelty |
| 3 | HOS estimates are unstable | High | High | Results change when window length changes | Run sensitivity study; use coherence normalization; provide engineering guidelines |
| 4 | Fault models produce artifacts | Medium | High | Nonphysical spikes or instabilities | Validate healthy model first; compare against known fault signatures; check integration step and damping |
| 5 | Scope creep delays submission | High | Medium | Too many fault types, too many plots, no clear story | Freeze scope at Phase 0; follow the minimum simulation matrix; say no to extras |
| 6 | Cannot reproduce figures | Medium | High | Figures created manually or settings undocumented | Script all figure generation; fix random seeds; store settings in tables |

> **Why track risks?** As a new researcher, it is easy to spend months on a path that leads nowhere. The risk table tells you what to watch for so you can course-correct early.

---

## Stop / continue gates

### Stop and simplify if any of these happen:
- You can only replicate one benchmark (not two).
- Baselines outperform HOS on most conditions.
- HOS sensitivity is too large to provide practical guidelines.
- You cannot regenerate your figures from scripts.

### Continue toward submission when:
- All items in sections A-G of the checklist are checked.
- The novelty statement is clean and your advisor agrees.
- The reproducibility package is complete.

---

## Weekly review template

Use this template every Friday:

1. **What did I complete this week?** (check items above)
2. **What is blocking me?** (identify the specific problem)
3. **Does any risk from the table feel more likely now?** (if yes, act on the mitigation)
4. **What will I do next week?** (pick 2-3 items from the checklist)

> **Why weekly reviews?** Research projects fail silently — you can feel busy for months without making real progress. A 10-minute weekly review keeps you on track and gives you something concrete to discuss with your advisor.

---

## Links
- Problem and contributions: [01_problem_and_contributions.md](01_problem_and_contributions.md)
- Publishability and gaps: [02_publishability_and_gaps.md](02_publishability_and_gaps.md)
- Roadmap and paper outline: [03_roadmap_and_paper_outline.md](03_roadmap_and_paper_outline.md)
