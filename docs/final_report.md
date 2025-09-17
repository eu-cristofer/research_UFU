% Options for packages loaded elsewhere
\PassOptionsToPackage{unicode}{hyperref}
\PassOptionsToPackage{hyphens}{url}
\documentclass[
]{}
\usepackage{xcolor}
\usepackage{amsmath,amssymb}
\setcounter{secnumdepth}{-\maxdimen} % remove section numbering
\usepackage{iftex}
\ifPDFTeX
  \usepackage[T1]{fontenc}
  \usepackage[utf8]{inputenc}
  \usepackage{textcomp} % provide euro and other symbols
\else % if luatex or xetex
  \usepackage{unicode-math} % this also loads fontspec
  \defaultfontfeatures{Scale=MatchLowercase}
  \defaultfontfeatures[\rmfamily]{Ligatures=TeX,Scale=1}
\fi
\usepackage{lmodern}
\ifPDFTeX\else
  % xetex/luatex font selection
\fi
% Use upquote if available, for straight quotes in verbatim environments
\IfFileExists{upquote.sty}{\usepackage{upquote}}{}
\IfFileExists{microtype.sty}{% use microtype if available
  \usepackage[]{microtype}
  \UseMicrotypeSet[protrusion]{basicmath} % disable protrusion for tt fonts
}{}
\makeatletter
\@ifundefined{KOMAClassName}{% if non-KOMA class
  \IfFileExists{parskip.sty}{%
    \usepackage{parskip}
  }{% else
    \setlength{\parindent}{0pt}
    \setlength{\parskip}{6pt plus 2pt minus 1pt}}
}{% if KOMA class
  \KOMAoptions{parskip=half}}
\makeatother
\setlength{\emergencystretch}{3em} % prevent overfull lines
\providecommand{\tightlist}{%
  \setlength{\itemsep}{0pt}\setlength{\parskip}{0pt}}
\usepackage{bookmark}
\IfFileExists{xurl.sty}{\usepackage{xurl}}{} % add URL line breaks if available
\urlstyle{same}
\hypersetup{
  hidelinks,
  pdfcreator={LaTeX via pandoc}}

\author{}
\date{}

\begin{document}

# Proposta de Dissertação de Mestrado

### Programa de Pós-Graduação: Engenharia Mecânica (POSMEC)

**Linha de Pesquisa Sugerida:** Mecânica dos Sólidos e Vibrações /
Dinâmica de Sistemas Mecânicos

**Proponente**: Cristofer Antoni Souza Costa

**Orientador**: Aldemir Cavallini Jr.

## Título (provisório)

**Diagnóstico de Falhas em Máquinas Rotativas por Meio de Simulações
Numéricas e Análise de Espectros de Ordem Superior**

## Proposta de Plano de tabalho

As máquinas rotativas desempenham um papel fundamental em diversos
setores industriais, sendo sua operação confiável essencial para a
eficiência e segurança dos processos. A detecção precoce de falhas, como
trincas ou desalinhamentos, é crucial para evitar paradas não planejadas
e reduzir custos de manutenção.

A análise de espectros de ordem superior (Higher-Order Spectra - HOS),
incluindo bi-espectro e tri-espectro, oferece uma abordagem promissora
para identificar assinaturas não lineares associadas a diferentes tipos
de falhas. No entanto, a aplicação prática dessas técnicas muitas vezes
enfrenta desafios devido à complexidade dos fenômenos envolvidos e à
necessidade de dados experimentais extensivos \[1\].

Este projeto de mestrado propõe o desenvolvimento de uma metodologia
baseada em simulações numéricas para o diagnóstico de falhas em máquinas
rotativas, utilizando a análise de HOS. O estudo será conduzido conforme
as seguintes etapas:

1.  **Modelagem Numérica**: Desenvolvimento de modelos de elementos
    finitos utilizando-se a ferramenta ROSS \[2\] para simular o
    comportamento dinâmico de eixos rotativos sob condições normais e
    com falhas específicas, como trincas e desalinhamentos.

2.  **Análise de Espectros de Ordem Superior**: Aplicação de técnicas de
    HOS aos dados simulados para identificar padrões característicos que
    diferenciem as condições normais das falhas modeladas.

3.  **Validação e Avaliação**: Comparação dos resultados obtidos com
    dados disponíveis na literatura para avaliar a eficácia da
    metodologia proposta.

Espera-se que este estudo contribua para o aprimoramento das técnicas de
diagnóstico de falhas em máquinas rotativas, oferecendo uma alternativa
baseada em simulação que possa complementar ou reduzir a dependência de
experimentos físicos, alinhando-se às melhores práticas e referências
atuais na área.

## Referências

<div id="refs" class="references csl-bib-body" entry-spacing="0">

<div id="ref-sinha_higher_2007" class="csl-entry">

<span class="csl-left-margin">\[1\]
</span><span class="csl-right-inline">J. K. Sinha, “Higher Order Spectra
for Crack and Misalignment Identification in the Shaft of a Rotating
Machine,” *Structural Health Monitoring*, vol. 6, no. 4, pp. 325–334,
Dec. 2007, doi:
[10.1177/1475921707082309](https://doi.org/10.1177/1475921707082309).</span>

</div>

<div id="ref-timbo_ross_2020" class="csl-entry">

<span class="csl-left-margin">\[2\]
</span><span class="csl-right-inline">R. Timbó *et al.*, “ROSS -
Rotordynamic Open Source Software,” *Journal of Open Source Software*,
vol. 5, no. 48, p. 2120, Apr. 2020, doi:
[10.21105/joss.02120](https://doi.org/10.21105/joss.02120).</span>

</div>

</div>

\end{document}
