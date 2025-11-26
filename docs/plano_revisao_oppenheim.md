# Plano de Revisão Bibliográfica: Sinais e Sistemas
## Fundamentação para Diagnóstico de Falhas em Máquinas Rotativas

**Base Bibliográfica**: Oppenheim, A. V., Willsky, A. S., & Nawab, S. H. (1996). *Signals and Systems* (2nd Ed.). Prentice Hall.

Este documento estabelece o plano de estudo e escrita para a fundamentação teórica de Processamento de Sinais da dissertação. O objetivo é conectar os conceitos clássicos de Sinais e Sistemas apresentados por Oppenheim com os desafios específicos da dinâmica de rotores e análise de Espectros de Ordem Superior (HOS).

---

## 1. Contextualização na Dissertação

A análise de vibrações para diagnóstico de falhas depende intrinsecamente do processamento de sinais. No contexto desta pesquisa:
- **Sinais**: São as respostas de vibração (deslocamento, velocidade ou aceleração) geradas pelas simulações numéricas no ROSS.
- **Sistemas**: O "sistema" é o conjunto eixo-rotor-mancal.
    - **Saudável** $\approx$ Comportamento Linear (em muitas aproximações).
    - **Com Falha (Trinca/Desalinhamento)** $\rightarrow$ Comportamento Não-Linear.

Esta revisão fornecerá a base para entender por que as técnicas tradicionais (baseadas em sistemas lineares e análise de Fourier de 2ª ordem) são insuficientes para caracterizar plenamente as falhas não-lineares, justificando o uso de HOS.

---

## 2. Mapeamento de Conceitos (Oppenheim $\rightarrow$ Aplicação)

### 2.1. Sinais e Sistemas (Capítulos 1 e 2)
*Foco: Definir o vocabulário básico e as propriedades dos sistemas.*

*   **Conceitos Chave**:
    *   Sinais em Tempo Contínuo vs. Tempo Discreto (Simulações numéricas são discretas por natureza).
    *   Sinais Periódicos vs. Aperiódicos (Vibrações de rotores são tipicamente quase-periódicas).
    *   **Propriedades de Sistemas**: Linearidade e Invariância no Tempo (LTI).
    *   **Causalidade e Estabilidade**.

*   **Aplicação na Pesquisa**:
    *   Definir o rotor sem falhas como um sistema linear (aproximação baseline).
    *   Definir as falhas (trincas/folgas) como introdutoras de **não-linearidades**, violando as premissas básicas dos sistemas LTI estudados profundamente por Oppenheim. Isso cria o "gancho" para métodos avançados.

### 2.2. Análise no Domínio da Frequência (Capítulos 3, 4 e 5)
*Foco: A base da análise espectral tradicional.*

*   **Conceitos Chave**:
    *   **Série de Fourier (Cap. 3)**: Representação de sinais periódicos. Harmônicos da rotação ($1X, 2X, 3X...$).
    *   **Transformada de Fourier (Cap. 4)**: Análise de sinais aperiódicos e densidade espectral de energia.
    *   **Transformada de Fourier de Tempo Discreto (Cap. 5)**.

*   **Aplicação na Pesquisa**:
    *   Explicar como o espectro de potência (Power Spectrum) é derivado dessas transformadas.
    *   Demonstrar que a análise de Fourier decompõe o sinal em senóides independentes, perdendo informação de fase relativa entre componentes de frequência acoplados (que ocorrem em não-linearidades).

### 2.3. Amostragem (Capítulo 7)
*Foco: A ponte entre o mundo físico e a simulação numérica.*

*   **Conceitos Chave**:
    *   Teorema da Amostragem de Nyquist.
    *   Aliasing (Falseamento).
    *   Reconstrução de sinal.

*   **Aplicação na Pesquisa**:
    *   Fundamental para configurar as simulações no **ROSS**.
    *   Justificar a escolha do passo de tempo (`dt`) nas simulações numéricas para garantir que as frequências de interesse (harmônicos superiores gerados pelas falhas) sejam capturadas corretamente sem aliasing.

---

## 3. A "Ponte" para HOS (Além do Oppenheim)

Oppenheim foca primariamente em **Sistemas Lineares** e estatísticas de segunda ordem (correlação e densidade espectral de potência). A seção de fundamentação deve terminar explicando o limite dessa teoria para o seu problema:

1.  **Limitação 1 (Linearidade)**: Oppenheim foca em LTI. Falhas de trinca ("breathing crack") tornam a rigidez variante no tempo ou dependente do estado (não-linear).
2.  **Limitação 2 (Gaussianidade)**: A análise espectral clássica assume muitas vezes ruído gaussiano e processos lineares. HOS é necessário quando o processo se desvia da gaussianidade.
3.  **Limitação 3 (Fase)**: O Espectro de Potência (Oppenheim) descarta a informação de fase. O Bi-espectro (HOS) preserva a informação de fase, permitindo detectar **Acoplamento de Fase Quadrático (QPC)**, típico de interações não-lineares.

**Conclusão da Seção**: "Portanto, embora os fundamentos de Oppenheim sejam essenciais para o processamento de sinais básico, a detecção robusta de falhas não-lineares exige a expansão para Estatísticas de Ordem Superior (HOS), conforme detalhado na próxima seção."

---

## 4. Cronograma de Leitura e Escrita Sugerido

Este cronograma se integra à **Fase I** do seu plano de trabalho geral.

| Semana | Tópico Oppenheim | Ação Prática (Fichamento/Escrita) |
| :--- | :--- | :--- |
| **Semana 1** | **Caps. 1 & 7 (Sinais e Amostragem)** | Escrever seção sobre discretização temporal e escolha de parâmetros de simulação para o Cap. 3 (Metodologia). |
| **Semana 2** | **Cap. 2 (Sistemas LTI)** | Escrever parágrafo definindo o rotor "saudável" como sistema LTI e contrastando com o modelo de falha. |
| **Semana 3** | **Caps. 3 & 4 (Fourier)** | Fichar definições matemáticas da Transformada de Fourier para a seção 2.1 (Fundamentação). |
| **Semana 4** | **Síntese e Transição** | Redigir o texto que conecta o fim da análise de Fourier clássica com a necessidade de HOS. |

---

## 5. Estrutura de Tópicos para o Texto da Dissertação

Sugestão de estrutura para a seção "Fundamentos de Processamento de Sinais" no Capítulo 2:

1.  **Representação de Sinais no Domínio do Tempo**
    *   Definição matemática de sinais de vibração (determinísticos vs. aleatórios).
    *   Discretização e Amostragem (Relevância para simulação numérica).
2.  **Análise no Domínio da Frequência (Fourier)**
    *   Série de Fourier e decomposição harmônica.
    *   Transformada de Fourier e Densidade Espectral de Potência (PSD).
    *   Interpretação física: Amplitude e Fase.
3.  **Limitações da Análise Clássica**
    *   Suposição de linearidade e estacionariedade.
    *   A "cegueira" da PSD para acoplamentos de fase (introdução ao problema que HOS resolve).

