# Evolução Analítica da Teoria Harmônica: da Difusão Térmica à Transformada Rápida de Fourier e à Estocasticidade Espectral

> **Nota editorial (rev. 2026-04-25).** Este documento é a versão em português da revisão de [`FFT.md`](./FFT.md), produzida sob a *skill* `academic-research`. Convenções adotadas: difusividade térmica denotada $\alpha = K/(\rho c)$; par de Fourier na convenção simétrica (apresentada na §4); unidade imaginária $i$. Todas as citações foram verificadas; a auditoria está em [`FFT_audit.md`](./FFT_audit.md).

O desenvolvimento das ferramentas matemáticas necessárias para descrever a propagação do calor em corpos sólidos representa uma das mudanças mais significativas da história da ciência. As investigações de Joseph Fourier, no início do século XIX, sobre o movimento da energia térmica fizeram mais do que oferecer a solução de um problema físico específico: inauguraram a análise harmônica e estabeleceram as bases do processamento moderno de sinais, da teoria da informação e da mecânica quântica (Fourier, 1822/2009; Bracewell, 2000). Essa trajetória analítica abrange a formalização da equação do calor, a prova rigorosa da convergência das séries trigonométricas, a transição do espectro discreto para o contínuo e, por fim, a otimização computacional desses métodos por meio da Transformada Rápida de Fourier (FFT) (Heideman, Johnson, & Burrus, 1984). A conexão entre essas leis físicas determinísticas e a natureza estocástica das flutuações térmicas conduziu, posteriormente, ao desenvolvimento da estimação de densidade espectral de potência (PSD) e ao Teorema da Flutuação–Dissipação.

## 1. A gênese da teoria térmica e a equação analítica do calor

A formalização matemática do calor começa com a vivência de Joseph Fourier durante a campanha napoleônica no Egito, entre 1798 e 1801. O objetivo central, codificado em sua obra de 1822 *Théorie analytique de la chaleur* (Fourier, 1822/2009), foi estabelecer as leis matemáticas que governam o transporte de calor.

### 1.1 Fundamentos físicos e a Lei de Resfriamento de Newton

O modelo de Fourier apoia-se em uma hipótese microscópica de transferência — o "princípio da comunicação do calor" —, segundo a qual a quantidade de calor trocada entre dois pontos materiais adjacentes é proporcional à diferença de suas temperaturas. Trata-se da mesma proporcionalidade formalizada na Lei de Resfriamento de Newton, uma relação empírica de transferência de calor por convecção; **não** corresponde à primeira lei da termodinâmica, que enuncia a conservação da energia em sistemas termodinâmicos (Çengel & Boles, 2015). Os dois princípios atuam em níveis distintos: a Lei de Resfriamento fornece a relação constitutiva do fluxo, enquanto a primeira lei provê o balanço de conservação ao qual esse fluxo é alimentado.

Fourier definiu a intensidade de um raio de calor como proporcional ao gradiente de temperatura — a moderna Lei de Fourier `q = −K ∇u` — fechando a descrição constitutiva (Carslaw & Jaeger, 1959). Os parâmetros materiais relevantes são resumidos na tabela abaixo.

| Parâmetro físico | Símbolo | Definição e papel | Unidade SI |
| --- | --- | --- | --- |
| Temperatura | $u$ | Estado térmico em um ponto do espaço-tempo | K |
| Condutividade térmica | $K$ | Capacidade do material de conduzir energia térmica | W·m⁻¹·K⁻¹ |
| Densidade | $\rho$ | Massa por unidade de volume do meio condutor | kg·m⁻³ |
| Calor específico | $c$ | Energia para elevar a temperatura de uma unidade de massa em um grau | J·kg⁻¹·K⁻¹ |
| Difusividade térmica | $\alpha = K/(\rho c)$ | Governa a velocidade da difusão térmica | m²·s⁻¹ |

### 1.2 Dedução da equação do calor

A dedução é uma aplicação da conservação de energia a um volume de controle. Para uma região $D$ tridimensional, o conteúdo de calor total é

$$
H(t) = \int_D c\, \rho\, u(\mathbf{x}, t) \, dV.
$$

A conservação de energia exige que sua derivada temporal iguale o fluxo líquido de calor para dentro através de $\partial D$. Substituindo a Lei de Fourier para o fluxo,

$$
\frac{dH}{dt} = \int_{\partial D} K\, \nabla u \cdot \mathbf{n} \, dS.
$$

Aplicando o teorema da divergência e exigindo a igualdade para qualquer $D$ obtém-se a forma local

$$
c\, \rho\, \frac{\partial u}{\partial t} = \nabla \cdot (K\, \nabla u).
$$

Para um meio homogêneo e isotrópico, com propriedades materiais constantes, a expressão se reduz à equação canônica do calor / difusão (Carslaw & Jaeger, 1959):

$$
\frac{\partial u}{\partial t} = \alpha\, \nabla^2 u, \qquad \alpha = \frac{K}{\rho c}.
$$

Em uma dimensão espacial: $\partial_t u = \alpha\, \partial_x^2 u$. O lado direito é a curvatura espacial do campo de temperatura; onde $u$ é côncavo para baixo (máximo local), $\partial_x^2 u < 0$ e a temperatura decresce no tempo, o que corresponde ao alisamento difusivo esperado fisicamente.

## 2. A metodologia da separação de variáveis

Para resolver a equação do calor, Fourier desenvolveu o método da separação de variáveis, técnica que decompõe uma EDP em equações diferenciais ordinárias cujas soluções podem ser superpostas. O método é particularmente eficaz para problemas com condições de contorno homogêneas e perfil inicial de temperatura prescrito (Strauss, 2008).

### 2.1 Decomposição em componentes espacial e temporal

Supõe-se que a solução fatora:

$$
u(x, t) = X(x)\, T(t).
$$

Substituindo e dividindo por $\alpha\, X(x)\, T(t)$:

$$
\frac{T'(t)}{\alpha\, T(t)} = \frac{X''(x)}{X(x)} = -\lambda.
$$

A constante de separação é a mesma em ambos os lados porque o lado esquerdo depende apenas de $t$ e o direito apenas de $x$. O sinal negativo é escolhido para que a solução temporal decaia exponencialmente, em consonância com a natureza dissipativa da difusão.

### 2.2 O problema de autovalor e as condições de contorno

Da separação resultam duas EDOs:

- **Temporal:** $T'(t) + \alpha \lambda\, T(t) = 0 \;\Rightarrow\; T(t) = A\, e^{-\alpha \lambda t}$.
- **Espacial:** $X''(x) + \lambda\, X(x) = 0$, problema de autovalor cujos $\lambda$ admissíveis são fixados pelas condições de contorno.

| Tipo de contorno | Forma | Interpretação física |
| --- | --- | --- |
| Dirichlet | $u(0, t) = u(L, t) = 0$ | Extremidades fixadas em temperatura de referência |
| Neumann | $u_x(0, t) = u_x(L, t) = 0$ | Extremidades isoladas; sem fluxo nas fronteiras |
| Periódico | $u(-L, t) = u(L, t)$, $u_x(-L, t) = u_x(L, t)$ | Geometria fechada (anel) |

Para uma barra de comprimento $L$ com condições de Dirichlet, a solução espacial deve satisfazer $X(0) = X(L) = 0$, conduzindo ao espectro discreto

$$
\lambda_n = \left(\frac{n\pi}{L}\right)^2, \qquad X_n(x) = \sin\!\left(\frac{n\pi x}{L}\right), \qquad n = 1, 2, 3, \dots.
$$

## 3. A formalização das séries de Fourier e a ortogonalidade

A solução completa exige representar uma distribuição inicial arbitrária $u(x, 0) = f(x)$ como superposição das autofunções $X_n$. A afirmação controversa de Fourier era que qualquer função periódica suficientemente regular — mesmo com um número finito de descontinuidades de salto — admite tal representação trigonométrica (Stein & Shakarchi, 2003).

### 3.1 Determinação dos coeficientes via ortogonalidade

As autofunções senoidais em $[0, L]$ satisfazem a identidade de ortogonalidade

$$
\int_0^L \sin\!\left(\frac{n\pi x}{L}\right)\sin\!\left(\frac{m\pi x}{L}\right) dx = \begin{cases} L/2, & n = m, \\ 0, & n \neq m, \end{cases}
$$

que fornece o mecanismo de projeção para extrair os coeficientes da expansão. Dado

$$
f(x) = \sum_{n=1}^{\infty} B_n \sin\!\left(\frac{n\pi x}{L}\right),
$$

multiplicar por $\sin(m\pi x / L)$ e integrar em $[0, L]$ reduz a soma a um único termo:

$$
B_n = \frac{2}{L} \int_0^L f(x)\, \sin\!\left(\frac{n\pi x}{L}\right)\, dx.
$$

### 3.2 Ceticismo histórico e a prova de Dirichlet

A memória de Fourier de 1807 foi recebida com ceticismo pelos principais matemáticos franceses do período — Lagrange, Laplace, Poisson e Monge —; Lagrange, em particular, recusou-se a aceitar que funções descontínuas pudessem ser representadas por somas de termos trigonométricos contínuos (Grattan-Guinness, 1972). A primeira prova rigorosa de convergência apareceu em 1829, quando Peter Gustav Lejeune Dirichlet estabeleceu condições suficientes — variação limitada em um período, número finito de máximos/mínimos e número finito de descontinuidades — sob as quais as somas parciais convergem ao valor da função em pontos de continuidade e à média dos limites laterais em pontos de salto (Stein & Shakarchi, 2003).

## 4. Generalização para a Transformada de Fourier contínua

Enquanto as séries de Fourier descrevem funções periódicas em um intervalo limitado, funções não-periódicas na reta real exigem um espectro contínuo. Tomar o limite do período $T \to \infty$ converte a soma discreta $\sum_n$ em uma soma de Riemann e, por fim, em uma integral, produzindo o par da Transformada de Fourier (Bracewell, 2000):

$$
\hat{f}(k) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} f(x)\, e^{-ikx}\, dx, \qquad
f(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} \hat{f}(k)\, e^{ikx}\, dk.
$$

A normalização simétrica $1/\sqrt{2\pi}$ adotada aqui é uma das três convenções comuns; textos de engenharia frequentemente usam frequência $f$ em Hz, núcleo $e^{-i 2\pi f t}$ e nenhuma constante na frente, enquanto textos de física tendem a colocar todo o $1/(2\pi)$ na transformada inversa. A conversão entre convenções é apenas uma reetiquetação, mas a consistência interna de cada dedução é essencial.

## 5. As Transformadas Discreta e Rápida de Fourier

A base matemática do processamento digital de sinais é a Transformada Discreta de Fourier (DFT), que processa uma sequência finita de $N$ amostras (Oppenheim & Schafer, 2010):

$$
X[k] = \sum_{n=0}^{N-1} x[n]\, e^{-i 2\pi k n / N}, \qquad k = 0, 1, \dots, N-1.
$$

### 5.1 Origens pré-modernas

Fórmulas explícitas do tipo DFT precedem a computação digital em mais de um século. Heideman, Johnson e Burrus (1984) documentam a seguinte cronologia:

- **Alexis-Claude Clairaut (1754).** Fórmula explícita do tipo DFT mais antiga conhecida, restrita a uma série de cossenos, derivada para um problema de interpolação astronômica.
- **Joseph Louis Lagrange (1759, 1762).** Séries de Fourier finitas com senos, também para interpolação astronômica.
- **Carl Friedrich Gauss (c. 1805, publicado postumamente em 1866).** *Theoria interpolationis methodo nova tractata* — primeira fórmula DFT explícita conhecida combinando senos e cossenos, derivada para a interpolação da órbita de asteroides. Crucialmente, Gauss já empregava uma fatoração do tipo dividir-para-conquistar que antecipa a FFT moderna em 160 anos.

### 5.2 A FFT moderna

O algoritmo Cooley–Tukey reduz a DFT de $\mathcal{O}(N^2)$ para $\mathcal{O}(N \log N)$ operações por meio de divisão recursiva em transformadas menores (Cooley & Tukey, 1965). O algoritmo é, como ressaltam Heideman, Johnson e Burrus (1984), uma *redescoberta independente* da fatoração de Gauss, e não uma construção inteiramente nova. Cooley, Lewis e Welch (1967) oferecem um relato complementar em primeira pessoa sobre a recepção do algoritmo. A aplicação motivadora — detecção de testes nucleares subterrâneos por análise espectral de sinais sismográficos — figura entre as aplicações politicamente mais consequentes da matemática pura no século XX.

Variantes modernas (Brigham, 1988; Oppenheim & Schafer, 2010) estendem o algoritmo radix-2 básico a fatorações mistas, algoritmos de fator primo e à família mais recente da FFT esparsa, que explora a esparsidade no domínio da frequência para alcançar escalonamento sublinear sob hipóteses adequadas (Jiang, Chen, & Li, 2021).

## 6. Densidade Espectral de Potência e o Teorema de Wiener–Khinchin

A conexão entre sinais determinísticos e processos estocásticos passa pela Densidade Espectral de Potência (PSD). Para um processo aleatório estacionário no sentido amplo $X(t)$ com autocorrelação $R_X(\tau) = \mathbb{E}[X(t)\, X(t + \tau)]$, o teorema de Wiener–Khinchin afirma que a PSD é a Transformada de Fourier da autocorrelação:

$$
S_X(f) = \int_{-\infty}^{\infty} R_X(\tau)\, e^{-i 2\pi f \tau}\, d\tau.
$$

Wiener (1930) estabeleceu o resultado para sinais determinísticos; Khinchin (1934) o estendeu a processos estocásticos estacionários. Na prática, a PSD é estimada de uma amostra finita pelo **método de Welch** — segmentação do registro, janelamento de cada segmento, cálculo da magnitude FFT ao quadrado, média entre segmentos —, que troca resolução em frequência por redução de variância (Welch, 1967). É o estimador padrão implementado em `scipy.signal.welch` e bibliotecas equivalentes.

## 7. Flutuações térmicas e o Teorema da Flutuação–Dissipação

A linhagem histórica fecha-se com a realização física dessas ideias na teoria do ruído térmico.

### 7.1 Movimento Browniano de Einstein

Em 1905, Albert Einstein forneceu a derivação estatística do movimento browniano, demonstrando que a agitação errática dos grãos de pólen observada por Brown era evidência direta da agitação molecular (Einstein, 1905). A relação de Einstein entre constante de difusão, temperatura e atrito constitui a primeira instância do que mais tarde seria chamado Teorema da Flutuação–Dissipação.

### 7.2 Ruído Johnson–Nyquist

Em 1928, Johnson (1928) caracterizou experimentalmente o ruído de tensão por agitação térmica em resistores elétricos, e Nyquist (1928) forneceu a derivação termodinâmica mostrando que a PSD desse ruído é determinada apenas pela resistência e pela temperatura absoluta: $S_V(f) = 4 k_B T R$ (unilateral, em V²·Hz⁻¹). Este é o exemplo canônico de processo de ruído físico plano (branco) na banda muito abaixo de $k_B T / h$.

## 8. Bibliografia

### 8.1 Obras originais

- Clairaut, A.-C. (1754). *Mémoire sur l'orbite apparente du Soleil autour de la Terre, en ayant égard aux perturbations produites par les actions de la Lune et des planètes principales.* Mémoires de l'Académie Royale des Sciences. [Conforme reportado por Heideman, Johnson, & Burrus, 1984.]
- Lagrange, J.-L. (1759, 1762). *Recherches sur la nature et la propagation du son.* Miscellanea Taurinensia. [Conforme reportado por Heideman, Johnson, & Burrus, 1984.]
- Fourier, J. (1822/2009). *Théorie analytique de la chaleur.* Paris: Firmin Didot. (Reedição da Cambridge University Press, 2009).
- Gauss, C. F. (1866). *Theoria interpolationis methodo nova tractata.* In *Werke*, Vol. 3, pp. 265–327. Königliche Gesellschaft der Wissenschaften, Göttingen. (Publicação póstuma de manuscrito não publicado de c. 1805.)
- Wiener, N. (1930). Generalized harmonic analysis. *Acta Mathematica*, 55, 117–258.
- Khinchin, A. (1934). Korrelationstheorie der stationären stochastischen Prozesse. *Mathematische Annalen*, 109(1), 604–615.
- Einstein, A. (1905). Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden Flüssigkeiten suspendierten Teilchen. *Annalen der Physik*, 322(8), 549–560.
- Johnson, J. B. (1928). Thermal agitation of electricity in conductors. *Physical Review*, 32(1), 97–109.
- Nyquist, H. (1928). Thermal agitation of electric charge in conductors. *Physical Review*, 32(1), 110–113.

### 8.2 Síntese do século XX e fundamentos algorítmicos

- Cooley, J. W., & Tukey, J. W. (1965). An algorithm for the machine calculation of complex Fourier series. *Mathematics of Computation*, 19(90), 297–301. <https://doi.org/10.1090/S0025-5718-1965-0178586-1>
- Cooley, J. W., Lewis, P. A. W., & Welch, P. D. (1967). Historical notes on the fast Fourier transform. *IEEE Transactions on Audio and Electroacoustics*, 15(2), 76–79. <https://doi.org/10.1109/TAU.1967.1161903>
- Welch, P. D. (1967). The use of fast Fourier transform for the estimation of power spectra: A method based on time averaging over short, modified periodograms. *IEEE Transactions on Audio and Electroacoustics*, 15(2), 70–73. <https://doi.org/10.1109/TAU.1967.1161901>
- Heideman, M. T., Johnson, D. H., & Burrus, C. S. (1984). Gauss and the history of the fast Fourier transform. *IEEE ASSP Magazine*, 1(4), 14–21. <https://doi.org/10.1109/MASSP.1984.1162257>
- Brigham, E. O. (1988). *The Fast Fourier Transform and Its Applications.* Englewood Cliffs, NJ: Prentice Hall.

### 8.3 Livros-texto de referência

- Carslaw, H. S., & Jaeger, J. C. (1959). *Conduction of Heat in Solids* (2ª ed.). Oxford: Oxford University Press.
- Bracewell, R. N. (2000). *The Fourier Transform and Its Applications* (3ª ed.). New York: McGraw-Hill.
- Stein, E. M., & Shakarchi, R. (2003). *Fourier Analysis: An Introduction.* Princeton, NJ: Princeton University Press.
- Strauss, W. A. (2008). *Partial Differential Equations: An Introduction* (2ª ed.). Hoboken, NJ: Wiley.
- Oppenheim, A. V., & Schafer, R. W. (2010). *Discrete-Time Signal Processing* (3ª ed.). Upper Saddle River, NJ: Pearson.
- Çengel, Y. A., & Boles, M. A. (2015). *Thermodynamics: An Engineering Approach* (8ª ed.). New York: McGraw-Hill.
- Grattan-Guinness, I. (1972). *Joseph Fourier, 1768–1830.* Cambridge, MA: MIT Press.

### 8.4 Revisões recentes (2021–2026)

- Jiang, Z., Chen, J., & Li, B. (2021). Empirical evaluation of typical sparse fast Fourier transform algorithms. *IEEE Access*, 9, 97100–97119. <https://doi.org/10.1109/ACCESS.2021.3095071>
- Jones, K. J. (2023). Historical journey of the fast Fourier transform — From Enlightenment Europe via Bletchley Park to the modern world. *Journal of Physics Research and Applications*. SciTechnol. *(Editora open-access; fonte de tier 3 — corrobora, mas não substitui, Heideman, Johnson, & Burrus, 1984.)*
- Hameed, A. F., & Al-Thahab, O. Q. J. (2025). Comprehensive review on fast Fourier transform types and their applications. *International Journal of Science and Research Archive*, 16(3), 1146–1152. *(Periódico open-access de tier 3; útil apenas como survey didático.)*
- Ehler, M., Gröchenig, K., & Klotz, A. (2026). Quantitative estimates: How well does the discrete Fourier transform approximate the Fourier transform on ℝ? *SIAM Review*, 68(1), 93–123. <https://doi.org/10.1137/24M1650399>
