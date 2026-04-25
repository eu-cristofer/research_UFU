# Audit Note — `FFT.md` (academic-research skill)

> Performed under the skill `academic-research` (factual-silence policy) and its project companion `rotordynamics-hos-research`. Every claim added or corrected below was verified against retrieved web sources; every claim left in question is flagged as such rather than smoothed over.
>
> Date of audit: 2026-04-25.

## 1. Factual errors (must correct)

**F1 — Newton's Law of Cooling is *not* the first law of thermodynamics.**
- Original text (lines 11): *"Newton's Law of Cooling, or the first law of thermodynamics"*.
- Why this is wrong: Newton's Law of Cooling is an empirical convective heat-transfer relation that asserts the rate of heat transfer between a body and its surroundings is proportional to the temperature difference. The first law of thermodynamics is the conservation-of-energy statement `dU = δQ − δW`. Conflating the two confuses two distinct physical principles.
- Suggested correction: replace with *"Newton's Law of Cooling, an empirical convective heat-transfer relation"* and, separately in the derivation paragraph, name the *conservation of energy* as the principle that drives the energy-balance integral.

**F2 — Inconsistent thermal-diffusivity notation.**
- Original text: the parameter table (lines 21) defines `Thermal Diffusivity | α² | K/(ρc)`, but the simplified heat equation (lines 46) is written `∂u/∂t = α ∂²u/∂x²`.
- Why this is wrong: either the symbol `α` denotes `K/(ρc)` (the standard convention found in Carslaw & Jaeger 1959 and Bracewell 2000) and the equation is correct, or the symbol `α²` is reserved for the diffusivity (some texts) and the equation should read `∂u/∂t = α² ∂²u/∂x²`. The document mixes both. Fix one way or the other consistently.
- Suggested correction: keep `α = K/(ρc)` in the table; keep the simplified equation as `∂u/∂t = α ∂²u/∂x²`. Drop the `²`.

**F3 — 1-D / 3-D dimensional inconsistency in the energy integral.**
- Original text (lines 25–29): the volume element is introduced as `dV = dx dy dz` but the energy integral is then written as `H(t) = ∫_D cρ u(x,t) dx`.
- Suggested correction: pick one. For the 1-D derivation (which is what the rest of the section uses), write the energy integral as a 1-D integral and drop the `dV = dx dy dz` introduction. For a fully general 3-D derivation, keep `dV = dx dy dz` and write `H(t) = ∫_D cρ u(\mathbf{x},t) dV`.

## 2. Citation problems

**C1 — `Arens et al. (2026), SIAM Review` — wrong authors.**
- Verified source: Ehler, M., Gröchenig, K., & Klotz, A. (2026). Quantitative estimates: How well does the discrete Fourier transform approximate the Fourier transform on ℝ? *SIAM Review*, 68(1), 93–123. <https://doi.org/10.1137/24M1650399>. arXiv preprint: <https://arxiv.org/abs/2403.03810>.
- The paper exists with the title quoted in `FFT.md`, but the authors are Ehler, Gröchenig, and Klotz — not "Arens et al."
- Action: replace the authorship.

**C2 — `Hassan, et al. (2025), IJSRA` — wrong authors and tier-3 source.**
- Verified source: Hameed, A. F., & Al-Thahab, O. Q. J. (2025). Comprehensive review on fast Fourier transform types and their applications. *International Journal of Science and Research Archive*, 16(3), 1146–1152. <https://journalijsra.com/sites/default/files/fulltext_pdf/IJSRA-2025-2663.pdf>.
- IJSRA is a low-impact open-access journal. Per the academic-research skill's CRAAP screening, it sits in tier 3 (secondary academic literature). Cite only if a tier-1/2 review is unavailable; otherwise replace.
- Action: correct the authorship; consider replacing with a higher-tier review such as Heideman, Johnson & Burrus (1984) or Stein & Shakarchi (2003).

**C3 — `Jones, K. J. (2023), J. Phys. Res. Appl.` — exists, but borderline publisher.**
- Verified source: Jones, K. J. (2023). Historical journey of the fast Fourier transform — From Enlightenment Europe via Bletchley Park to the modern world. *Journal of Physics Research and Applications*. SciTechnol. <https://www.scitechnol.com/peer-review/historical-journey-of-the-fast-fourier-transformfrom-enlightenment-europe-iviai-bletchley-park-to-the-modern-world-qlpI.php?article_id=24575>.
- The publisher (SciTechnol / Heighten Science Publications) has a mixed reputation; not predatory by major lists but not in the same tier as IEEE / SIAM / Springer. Author and title are confirmed; metadata is incomplete (no volume, issue, or page numbers visible on the publisher site).
- Action: keep with caveat, or replace with the high-tier history references already known: Heideman, Johnson & Burrus (1984) and Cooley, Lewis & Welch (1967).

**C4 — `Jiang, Z., et al. (2021), IEEE Access` — fully verified.**
- Confirmed: Jiang, Z., Chen, J., & Li, B. (2021). Empirical evaluation of typical sparse fast Fourier transform algorithms. *IEEE Access*, 9, 97100–97119. <https://doi.org/10.1109/ACCESS.2021.3095071>.
- No correction needed; add the DOI and the missing co-authors.

**C5 — `Housley, et al. (2023), Frontiers in Computer Science` — author unverified.**
- Search returns no Frontiers in Computer Science paper authored by "Housley" on the heat equation in 2023. The closest title match is *Parallel computation to bidimensional heat equation using MPI/CUDA and FFTW package*, Frontiers in Computer Science, 2023, but the authorship cannot be confirmed without a direct page fetch (rate-limited at the time of audit).
- Action: per the skill's metadata-fidelity rule, **remove this entry** until the metadata is verified, or replace with a verified high-tier reference such as Greengard & Lin (2007), *Spectral approximation of the free-space heat kernel*, *J. Comput. Phys.* (which already appears in the Frontiers paper's reference list and is itself widely cited).

## 3. Recommended additions (foundational, all verifiable)

These are well-established peer-reviewed sources that the document currently omits but should cite to anchor the major claims.

| Tier | Reference | Why add |
|---|---|---|
| 1 (textbook) | Carslaw, H. S., & Jaeger, J. C. (1959). *Conduction of Heat in Solids* (2nd ed.). Oxford University Press. | Canonical reference for the heat equation; cite alongside Fourier (1822). |
| 1 (textbook) | Bracewell, R. N. (2000). *The Fourier Transform and Its Applications* (3rd ed.). McGraw-Hill. | Standard reference for the continuous Fourier transform conventions. |
| 1 (textbook) | Stein, E. M., & Shakarchi, R. (2003). *Fourier Analysis: An Introduction.* Princeton University Press. | Modern rigorous treatment of Fourier series convergence and Dirichlet conditions. |
| 1 (textbook) | Oppenheim, A. V., & Schafer, R. W. (2010). *Discrete-Time Signal Processing* (3rd ed.). Pearson. | Standard reference for DFT/FFT algorithmic details and PSD estimation. |
| 1 (journal) | Welch, P. D. (1967). The use of fast Fourier transform for the estimation of power spectra: A method based on time averaging over short, modified periodograms. *IEEE Transactions on Audio and Electroacoustics*, 15(2), 70–73. <https://doi.org/10.1109/TAU.1967.1161901> | Defines the Welch method, the standard PSD estimator that operationalizes the Wiener–Khinchin theorem. |
| 1 (journal) | Heideman, M. T., Johnson, D. H., & Burrus, C. S. (1984). Gauss and the history of the fast Fourier transform. *IEEE ASSP Magazine*, 1(4), 14–21. <https://doi.org/10.1109/MASSP.1984.1162257> | Definitive history paper; primary source for the Clairaut–Lagrange–Gauss timeline currently under-sourced in the document. |
| 1 (journal) | Cooley, J. W., Lewis, P. A. W., & Welch, P. D. (1967). Historical notes on the fast Fourier transform. *IEEE Transactions on Audio and Electroacoustics*, 15(2), 76–79. | Earlier FFT-history paper authored by Cooley himself; complements Heideman et al. (1984). |

## 4. Style observations (non-blocking)

- **Conventions of the Fourier transform.** The document uses the symmetric `(1/√(2π))` convention (lines 132–139). This is one of three common conventions; engineering texts (Bracewell, Oppenheim) usually use `e^{-i2πft}` with no normalization on the forward transform. State the convention chosen at the point of introduction so readers can convert.
- **Mixed `j` vs `i` for the imaginary unit.** PSD equation (line 172) uses `j`; the Fourier transform pair (lines 132–139) uses `i`. Pick one.
- **Reference grouping.** "Foundational References (Creators)" mixes 1822, 1930, 1934, 1965 (a 143-year span). Consider splitting into "Originating works" (Fourier, Gauss) and "Twentieth-century synthesis" (Wiener, Khinchin, Cooley & Tukey) for readability.
