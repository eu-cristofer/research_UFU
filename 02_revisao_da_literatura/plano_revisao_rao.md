# Plano de Revisão Bibliográfica: Vibrações Mecânicas
## Fundamentação para Dinâmica de Rotores e Diagnóstico

**Base Bibliográfica**: Rao, S. S. (2018). *Mechanical Vibrations* (6th Ed.). Pearson.

Este documento estabelece o plano de estudo e escrita para a fundamentação teórica de Dinâmica de Rotores e Vibrações da dissertação. O objetivo é conectar os conceitos clássicos de Vibrações apresentados por Rao com a modelagem numérica no ROSS e a posterior análise de falhas via HOS.

---

## 1. Contextualização na Dissertação

A dinâmica de rotores fornece o modelo físico que gera os dados para o diagnóstico. No contexto desta pesquisa:
- **Gerador de Sinais**: O modelo de elementos finitos (no ROSS) simula a física descrita por Rao.
- **Sistemas**:
    - **Rotor Saudável**: Comportamento vibratório linear, caracterizado por frequências naturais e modos de vibrar bem definidos.
    - **Rotor com Falha**: Introdução de forças não-lineares (ex: trinca respirante) ou excitações específicas (ex: desbalanceamento, desalinhamento).

Esta revisão fornecerá a base para construir e validar o "Gêmeo Digital" simplificado no ROSS, garantindo que as simulações representem fenômenos físicos reais antes de aplicarmos técnicas avançadas de processamento de sinais.

---

## 2. Mapeamento de Conceitos (Rao $\rightarrow$ Aplicação)

### 2.1. Fundamentos e MDOF (Capítulos 1, 2 e 6)
*Foco: A base matemática para Elementos Finitos (FEA).*

*   **Conceitos Chave**:
    *   Graus de Liberdade (DOF).
    *   Equações de Movimento: $[M]\{\ddot{x}\} + [C]\{\dot{x}\} + [K]\{x\} = \{F(t)\}$.
    *   Frequências Naturais e Modos de Vibrar (Autovalores e Autovetores).
    *   Vibração Forçada Harmônica (Desbalanceamento é uma força harmônica).

*   **Aplicação na Pesquisa**:
    *   Justificar a modelagem matricial utilizada pelo **ROSS**.
    *   Explicar como a massa, rigidez e amortecimento são distribuídos nas matrizes do sistema.
    *   Fundamentar a resposta do sistema a excitações de desbalanceamento ($1X$).

### 2.2. Sistemas Contínuos e Eixos (Capítulos 8, 9 e 10)
*Foco: Modelagem correta do eixo do rotor.*

*   **Conceitos Chave**:
    *   Vibração transversal de vigas (Euler-Bernoulli vs. Timoshenko).
    *   Efeitos de inércia rotatória e deformação por cisalhamento (importante para eixos curtos/grossos).

*   **Aplicação na Pesquisa**:
    *   Selecionar e justificar o tipo de elemento de viga utilizado nas simulações do ROSS (Timoshenko é padrão em dinâmica de rotores precisa).

### 2.3. Dinâmica de Rotores (Capítulo 11 - Edições recentes ou Seções Específicas)
*Foco: O coração da física do problema.*

*   **Conceitos Chave**:
    *   **Velocidades Críticas**: Ressonância em sistemas rotativos.
    *   **Efeito Giroscópico**: Como a rotação altera as frequências naturais (Diagrama de Campbell).
    *   **Desbalanceamento**: A fonte de excitação mais comum.
    *   **Instabilidade**: Whirl e Whip (vibrações auto-excitadas em mancais).

*   **Aplicação na Pesquisa**:
    *   Explicar o fenômeno físico que gera os dados simulados.
    *   Interpretar os mapas de cores e diagramas de Campbell gerados pelo ROSS.
    *   Diferenciar o comportamento síncrono (desbalanceamento) de sub/super-síncrono (falhas complexas).

### 2.4. Monitoramento e Diagnóstico (Capítulo 14/15)
*Foco: A interface com o processamento de sinais.*

*   **Conceitos Chave**:
    *   Manutenção Preditiva baseada em vibração.
    *   Assinaturas de falhas clássicas no domínio da frequência.
    *   Medição de vibração (Acelerômetros, Proximetros).

*   **Aplicação na Pesquisa**:
    *   Estabelecer o "Ground Truth" (o que a literatura clássica diz que deve acontecer).
    *   Validar se os resultados do HOS corroboram ou superam a análise de espectro tradicional apresentada no Rao.

---

## 3. A "Ponte" para a Pesquisa (Além do Rao)

Embora o Rao cubra a física da vibração extensivamente, a pesquisa avança nos seguintes pontos:

1.  **Limitação da Análise Linear**: O Rao foca muito na linearização para solução analítica. Falhas como trincas introduzem rigidez variante no tempo, exigindo integração numérica (Runge-Kutta, Newmark) que o ROSS realiza, indo além das soluções fechadas do livro.
2.  **Limitação do Diagnóstico Clássico**: O Rao apresenta a análise de espectro (FFT) como ferramenta padrão. A pesquisa mostrará que para não-linearidades sutis, a FFT é insuficiente (cega à fase), justificando o HOS.
3.  **Complexidade Computacional**: O uso de modelos FEA com muitos graus de liberdade (simulados no ROSS) permite estudar a localização da falha com precisão espacial que modelos analíticos simples (Rao) não capturam facilmente.

**Conclusão da Seção**: "O trabalho de Rao fornece as leis governantes da dinâmica do rotor, mas a detecção sensível de não-linearidades incipientes exige ferramentas estatísticas de ordem superior (HOS) aplicadas sobre a resposta temporal simulada numericamente."

---

## 4. Cronograma de Leitura e Escrita Sugerido

Este cronograma deve correr em paralelo ou ligeiramente à frente do cronograma do Oppenheim.

| Semana | Tópico Rao | Ação Prática (Fichamento/Escrita) |
| :--- | :--- | :--- |
| **Semana 1** | **Caps. 1 & 2 (Fundamentos)** | Escrever a seção de modelagem matemática (Eqs. de Movimento) no Cap. 2 ou 3 da dissertação. |
| **Semana 2** | **Cap. 9/10 (Vigas)** | Justificar a escolha dos elementos de Timoshenko na seção de Metodologia (ROSS). |
| **Semana 3** | **Cap. 11 (Rotores)** | **Crítico**: Escrever sobre Desbalanceamento, Efeito Giroscópico e Velocidades Críticas. Gerar primeiros plots no ROSS para ilustrar. |
| **Semana 4** | **Falhas e Diagnóstico** | Fichar assinaturas de falhas clássicas para usar como base de comparação na discussão dos resultados. |

---

## 5. Estrutura de Tópicos para o Texto da Dissertação

Sugestão de estrutura para a seção "Fundamentos de Dinâmica de Rotores" no Capítulo 2:

1.  **Modelagem Matemática de Sistemas Rotativos**
    *   Equações de Lagrange e Elementos Finitos.
    *   Matrizes do sistema (Massa, Rigidez, Amortecimento, Giroscópica).
    *   Modelo de viga de Timoshenko vs. Euler-Bernoulli.
2.  **Fenômenos Dinâmicos Fundamentais**
    *   Velocidades Críticas e Modos de Vibrar.
    *   O Diagrama de Campbell (efeito da rotação na frequência natural).
    *   Resposta ao Desbalanceamento (vibração síncrona).
3.  **Mecanismos de Falha e Não-Linearidades**
    *   Modelagem física de falhas (como a trinca altera a rigidez $K(t)$).
    *   Limitações dos modelos lineares para diagnóstico avançado.

