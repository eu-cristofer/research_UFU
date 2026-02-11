# Fastest Path to Acceptance (Top-tier, Engineering Mode)

## Executive summary (how to win quickly in a strict journal)
Top-tier acceptance is fastest when the paper has **one strong claim**, a **benchmark-quality evidence package**, and **minimal fluff**. For simulation-only work, you win by being the most rigorous and reproducible paper on the topic—not by being the broadest.

Recommended core strategy:
- Make **nonstationary-aware bicoherence** (order-domain / windowed) the **primary novelty**.\n
- Keep **trispectrum** as a strictly optional add-on (only if it clearly improves results).

## 1) Single core claim (write this first and do not drift)
**Core claim (template)**:\n
“A simulation-validated, nonstationary-aware bicoherence pipeline provides robust, interpretable nonlinear coupling features that improve rotor fault diagnosis (crack vs misalignment) under realistic noise, sensor placement, and speed variation, compared with second-order spectral baselines.”

If you decide to exclude run-up/down:
- Remove “nonstationary-aware” and “speed variation”; strengthen stationary robustness and benchmark replication instead.

## 2) Minimum viable evidence for top-tier (do not negotiate downward)
You must have:
- ≥2 benchmark replications (one can be Sinha 2007; the other must be selected).\n
- Baselines: order spectrum/PSD + envelope (optionally cyclostationary).\n
- Robustness: severity + noise + sensor location (+ speed profile if nonstationary).\n
- HOS sanity checks on synthetic known-coupling signals.\n
- Reproducibility package.

If any of these are missing, the submission is at high risk of rejection.

## 3) The “minimum experiments table” (what to include vs defer)
### Must include
- Healthy rotor validation (Campbell + response).\n
- Crack vs misalignment steady-state diagnosis at ≥3 speeds.\n
- Noise sweep + severity sweep + sensor location sweep.\n
- Benchmark replication section.\n
- Baseline comparisons.\n

### Nice-to-have (include only if it’s cheap and strengthens the story)
- Unbalance as baseline class.\n
- Cross-bicoherence between orthogonal channels.\n
- Runtime/scaling section.\n

### Defer / avoid (unless you have strong bandwidth)
- Many fault types beyond crack/misalignment (scope creep).\n
- Deep learning classifiers (hard to justify; adds reviewer skepticism).\n
- Heavy tri-spectrum claims without clear incremental value.

## 4) How to avoid the common top-tier failure modes
### Failure mode: “Incremental”
Fix:
- Put the novelty sentence in the first 10 lines of the Introduction.\n
- Include a table: “This work vs closest prior work” (features, regime, validation, reproducibility).

### Failure mode: “Toy model”
Fix:
- Use a rotor model with enough realism (multi-element FE + bearings) and report parameters.\n
- Add measurement realism (noise, sensors, sampling, aliasing considerations).

### Failure mode: “Parameter-tuned method”
Fix:
- Show sensitivity vs window/segment length and provide engineering guidelines.\n
- Predefine HOS settings and justify them physically/statistically.

## 5) Fast manuscript workflow (engineering-efficient)
Write in the order that de-risks the project:
1) Produce benchmark replication figures.\n
2) Produce baseline comparison figures.\n
3) Produce robustness figures.\n
4) Only then finalize Intro/Related Work wording.\n

## 6) Submission targeting (practical)
Target journals where:
- simulation-only is acceptable if benchmarked and rigorous,\n
- signal processing + mechanical dynamics is in scope.

You can keep a “journal fit table” locally later, but do not over-optimize this until the evidence package exists.

## Links
- Publishability gate: `03_publishability_check.md`\n
- Roadmap & simulation matrix: `05_research_roadmap.md`\n
- Progress checklist: `08_progress_checklist.md`\n

