# Proposta de Plano de Trabalho de Mestrado

**Título Provisório:** Diagnóstico (e Classificação?) de Falhas em Máquinas Rotativas por Meio de Simulações Numéricas e Análise de Espectros de Ordem Superior (e Aprendizado de Máquina)

**Programa de Pós-Graduação:** Engenharia Mecânica (POSMEC) - UFU

**Candidato(a):** Cristofer Antoni Souza Costa

---

## 1. Justificativa

A manutenção preditiva na Indústria 4.0 depende criticamente de sistemas de diagnóstico autônomos e confiáveis. Máquinas rotativas, sendo a espinha dorsal de inúmeros processos industriais, requerem métodos de monitoramento que possam não apenas detectar, mas também identificar e classificar falhas incipientes com alta precisão. Contudo, o desenvolvimento de tais sistemas enfrenta um desafio fundamental: a escassez de dados experimentais de falhas para treinar algoritmos inteligentes.

Este projeto aborda este desafio por meio de um **framework híbrido**. Propõe-se, primeiramente, a construção de um **"gêmeo digital"** — um modelo de simulação de alta fidelidade em elementos finitos — para gerar uma base de dados rica e controlada de vibrações de um sistema rotativo sob diferentes condições operacionais (normal, com trinca, com desalinhamento). 🦾

Em segundo lugar, a pesquisa mergulha na física do problema, utilizando a Análise de Espectros de Ordem Superior (HOS) para extrair as assinaturas não-lineares que são as verdadeiras "impressões digitais" de cada falha. Esta etapa é crucial e visa validar, por comparação com a literatura, que as características extraídas da simulação são fisicamente significativas.

Finalmente, com as características físicas validadas em mãos, o projeto avança para a automação. Essas características servirão de entrada (features) para treinar um modelo de Aprendizado de Máquina (Machine Learning), criando um classificador robusto e capaz de diagnosticar o estado da máquina de forma automática. Esta abordagem integrada — **Simular, Analisar, Validar e Classificar** — representa um avanço significativo, oferecendo uma metodologia completa para o desenvolvimento de sistemas de diagnóstico que são ao mesmo tempo fisicamente fundamentados e tecnologicamente avançados.

---

## 2. Objetivos

### 2.1. Objetivo Geral

Desenvolver e validar um framework híbrido completo para o diagnóstico e classificação automática de falhas em máquinas rotativas, que integre simulação numérica, análise física via HOS e classificação por aprendizado de máquina.

### 2.2. Objetivos Específicos

1.  **Modelagem e Simulação:** Desenvolver modelos de elementos finitos de um sistema rotativo na plataforma ROSS para simular seu comportamento dinâmico em condição normal e sob falhas de trinca e desalinhamento.
2.  **Análise e Extração de Características:** Aplicar a análise de bi-espectro aos sinais de vibração simulados para identificar e extrair as assinaturas não-lineares características de cada condição.
3.  **Validação Física:** Realizar uma análise crítica das assinaturas HOS obtidas, comparando-as com padrões e resultados documentados na literatura científica para validar a fidelidade física das simulações.
4.  **Desenvolvimento do Classificador:** Utilizar as características HOS validadas para treinar, testar e otimizar um modelo de aprendizado de máquina supervisionado, capaz de classificar automaticamente o estado operacional do sistema.
5.  **Avaliação de Desempenho:** Avaliar a performance global do framework por meio de métricas quantitativas do classificador (e.g., matriz de confusão, acurácia), demonstrando a eficácia da metodologia integrada.

---

## 3. Metodologia Integrada

O projeto será executado em quatro etapas metodológicas interdependentes:

**Etapa 1: Modelagem Numérica e Geração do Dataset (Meses 1-8)**
* **Foco:** Construir o "gêmeo digital" na biblioteca ROSS (Python).
* **Atividades:** Definir a geometria e propriedades do rotor; implementar modelos matemáticos para a trinca ("respiração") e o desalinhamento; executar uma campanha de simulações variando parâmetros (velocidade, severidade da falha) para criar um dataset robusto e diversificado.

**Etapa 2: Análise HOS e Extração de Características Físicas (Meses 9-13)**
* **Foco:** Investigar a física dos sinais gerados.
* **Atividades:** Implementar algoritmos para o cálculo do bi-espectro de cada sinal do dataset; identificar os padrões, picos e interações de fase que surgem em decorrência de cada falha.

**Etapa 3: Validação Física e Interpretação dos Resultados (Meses 14-16)**
* **Foco:** Garantir que as características encontradas são significativas e corretas.
* **Atividades:** Realizar uma busca aprofundada na literatura por assinaturas de HOS (bi-espectros) de falhas em rotores; comparar qualitativa e quantitativamente os padrões encontrados na Etapa 2 com os benchmarks da literatura; consolidar o entendimento de *por que* cada falha gera uma assinatura específica. **Esta etapa é o elo fundamental entre as duas abordagens.**

**Etapa 4: Classificação Automática via Aprendizado de Máquina (Meses 17-21)**
* **Foco:** Automatizar o processo de diagnóstico.
* **Atividades:**
    * **Engenharia de Características:** Converter os bi-espectros validados em vetores numéricos (features).
    * **Treinamento:** Alimentar um classificador (e.g., SVM, Random Forest) com uma parte do dataset (dados de treino).
    * **Validação Quantitativa:** Testar o classificador treinado com a parte restante do dataset (dados de teste) e avaliar seu desempenho com uma matriz de confusão e métricas de acurácia, precisão e recall.

**Etapa 5: Redação e Consolidação (Meses 22-24)**
* **Foco:** Documentar a pesquisa.
* **Atividades:** Análise integrada dos resultados, redação da dissertação e preparação de artigos científicos.

---

## 4. Cronograma Consolidado

| Atividade                                               | M1-M4 | M5-M8 | M9-M12 | M13-16 | M17-20 | M21-24 |
| :------------------------------------------------------ | :---: | :---: | :----: | :----: | :----: | :----: |
| **Revisão Bibliográfica Aprofundada (HOS & ML)** |   X   |   X   |        |        |        |        |
| **Etapa 1: Modelagem e Geração do Dataset** |       |   X   |   X    |        |        |        |
| **Etapa 2 e 3: Análise HOS e Validação Física** |       |       |   X    |    X   |        |        |
| **Etapa 4: Desenvolvimento do Classificador de ML** |       |       |        |    X   |    X   |        |
| **Análise Final e Etapa 5: Redação da Dissertação** |       |       |        |        |    X   |    X   |

---

## 5. Considerações Finais sobre o Escopo

Este plano de trabalho combinado é ambicioso e completo, com um potencial de contribuição científica e tecnológica muito elevado. Ele aborda o problema desde a sua base física até a sua aplicação automatizada. Dado o escopo expandido para um mestrado de 24 meses, será crucial um gerenciamento de tempo eficiente. A complexidade do classificador de ML (Etapa 4) pode ser ajustada conforme o andamento da pesquisa, começando com modelos mais simples e evoluindo se o tempo permitir.

---

## 6. Referências Bibliográficas Preliminares 📚

### Fundamentos de Dinâmica de Rotores e Vibrações
* Friswell, M. I., Penny, J. E. T., Garvey, S. D., & Lees, A. W. (2010). *Dynamics of Rotating Machines*. Cambridge University Press.
    * *Obra de referência essencial que cobre a teoria fundamental da dinâmica de rotores.*
* Lalanne, M., & Ferraris, G. (1998). *Rotordynamics Prediction in Engineering*. John Wiley & Sons.
    * *Um clássico da área, com foco em predições e modelagem para aplicações de engenharia.*
* Randall, R. B. (2011). *Vibration-based condition monitoring: industrial, aerospace and automotive applications*. John Wiley & Sons.
    * *Excelente livro que conecta a teoria de análise de vibrações com a prática do monitoramento de condição.*

### Gêmeos Digitais (Digital Twins) e Indústria 4.0
* Grieves, M. (2014). *Digital Twin: Manufacturing Excellence through Virtual Factory Replication*. White paper.
    * *Publicação seminal de Michael Grieves, onde o conceito de Gêmeo Digital foi formalmente introduzido e detalhado.*
* Tao, F., Sui, F., Liu, A., Qi, Q., Zhang, M., Song, B., ... & Nee, A. Y. C. (2018). Digital twin-driven prognostics and health management for complex equipment. *CIRP Annals*, 67(1), 169-172.
    * *Excelente artigo que conecta diretamente o conceito de Gêmeo Digital com o campo de Prognóstico e Gestão de Saúde (PHM), área central deste projeto.*
* Glaessgen, E., & Stargel, D. (2012). The digital twin paradigm for future NASA and US Air Force vehicles. In *53rd AIAA/ASME/ASCE/AHS/ASC structures, structural dynamics and materials conference*.
    * *Uma das primeiras e mais citadas aplicações do paradigma do Gêmeo Digital, mostrando seu valor em sistemas críticos e de alta complexidade.*

### Análise de Espectros de Ordem Superior (HOS)
* Nikias, C. L., & Petropulu, A. P. (1993). *Higher-Order Spectra Analysis: A Nonlinear Signal Processing Framework*. Prentice Hall.
    * *Considerado o livro-texto fundamental para a teoria de Espectros de Ordem Superior.*
* Fackrell, J. W. A., White, P. R., Hammond, J. K., & Pinheir, J. P. (1995). The interpretation of the bispectra of vibration signals—I. Theory. *Mechanical Systems and Signal Processing*, 9(3), 257-266.
    * *Artigo seminal que detalha a teoria da interpretação do bi-espectro especificamente para sinais de vibração.*

### Modelagem de Falhas Específicas
* Wensing, J. A. (1997). *On the dynamics of cracked rotors: a literature survey*. Vrijhof-Tromp, Rotterdam.
    * *Uma revisão literária crucial para entender a complexa dinâmica de rotores com trincas e os modelos para representá-la.*

### Aprendizado de Máquina Aplicado ao Diagnóstico de Falhas
* Lei, Y., Yang, B., Jiang, X., Jia, F., Li, N., & Nandi, A. K. (2020). Machinery health prognostics: A systematic review from data acquisition to RUL prediction. *Mechanical Systems and Signal Processing*, 138, 106581.
    * *Uma revisão sistemática e recente que oferece um panorama completo do campo, desde a aquisição de dados até a predição, contextualizando a importância do diagnóstico.*
* Widodo, A., & Yang, B. S. (2007). Support vector machine in machine condition monitoring and fault diagnosis. *Mechanical Systems and Signal Processing*, 21(6), 2560-2574.
    * *Artigo de revisão focado no uso de Support Vector Machines (SVM), um dos classificadores mais populares e robustos para esta aplicação.*
* Kankar, P. K., Sharma, S. C., & Harsha, S. P. (2011). Fault diagnosis of ball bearings using machine learning methods. *Expert systems with applications*, 38(3), 1876-1886.
    * *Um exemplo prático de aplicação de diferentes métodos de ML para diagnóstico de falhas em rolamentos, servindo como um bom análogo para o trabalho proposto.*

### Software e Ferramentas
* Timbó, R., et al. (2020). ROSS: Rotordynamic Open-Source Software. *Journal of Open Source Software*, 5(48), 2120.
    * *Artigo oficial da biblioteca ROSS. Essencial para citar a ferramenta de simulação a ser utilizada no projeto.*