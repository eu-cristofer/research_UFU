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

**Objetivo:** Construir um "gêmeo digital" de alta fidelidade para gerar um dataset controlado e diversificado de vibrações de máquinas rotativas sob diferentes condições operacionais.

**Atividades Detalhadas:**

*1.1. Definição do Sistema de Referência (Meses 1-2)*
- **Geometria do Rotor:** Especificar dimensões (comprimento, diâmetros), número de estágios, localização de discos e mancais
- **Propriedades Materiais:** Definir módulo de elasticidade, densidade, coeficiente de Poisson, amortecimento estrutural
- **Condições de Contorno:** Especificar tipos de mancais (rígidos, flexíveis, com amortecimento), condições de fixação
- **Parâmetros Operacionais:** Faixa de rotações (subcrítica, crítica, supercrítica), condições de carregamento

*1.2. Implementação dos Modelos de Falhas (Meses 3-4)*
- **Modelo de Trinca Respirante:**
  - Implementar modelo de "breathing crack" baseado em variação cíclica da rigidez
  - Definir parâmetros: profundidade da trinca (10%, 20%, 30%, 50% da seção), localização axial
  - Modelar abertura/fechamento em função da rotação usando funções periódicas
- **Modelo de Desalinhamento:**
  - Implementar desalinhamento paralelo e angular
  - Definir severidade: 0.1mm, 0.2mm, 0.5mm (paralelo) e 0.1°, 0.2°, 0.5° (angular)
  - Modelar forças de desalinhamento como forças excitadoras adicionais

*1.3. Campanha de Simulações (Meses 5-8)*
- **Matriz de Parâmetros:**
  - Velocidades: 50%, 75%, 100%, 125%, 150% da velocidade crítica
  - Severidades de falha: 3 níveis para cada tipo de falha
  - Condições: Normal, Trinca, Desalinhamento, Combinações
- **Configurações de Simulação:**
  - Tempo de simulação: 10 segundos (transiente + regime permanente)
  - Frequência de amostragem: 10x a frequência de rotação máxima
  - Pontos de medição: 5-8 pontos ao longo do eixo (incluindo mancais e centro)
- **Controle de Qualidade:**
  - Validação com soluções analíticas conhecidas
  - Verificação de convergência numérica
  - Análise de estabilidade das simulações

**Deliverables:**
- Modelo numérico validado no ROSS
- Dataset de 1000+ simulações com vibrações temporais
- Documentação técnica do modelo e parâmetros
- Scripts de automação para geração de dados

**Etapa 2: Análise HOS e Extração de Características Físicas (Meses 9-13)**

**Objetivo:** Aplicar técnicas de análise de espectros de ordem superior para extrair assinaturas não-lineares características de cada condição operacional e tipo de falha.

**Atividades Detalhadas:**

*2.1. Pré-processamento dos Sinais (Meses 9-10)*
- **Filtragem e Detrending:**
  - Remoção de tendências lineares e não-lineares
  - Filtros passa-alta para remover ruído de baixa frequência
  - Normalização dos sinais para eliminar efeitos de amplitude
- **Segmentação Temporal:**
  - Divisão dos sinais em janelas de análise (2-4 segundos cada)
  - Sobreposição de janelas (50%) para maximizar informação
  - Seleção de segmentos em regime permanente
- **Controle de Qualidade:**
  - Verificação de estacionaridade dos sinais
  - Análise de ruído e SNR (Signal-to-Noise Ratio)

*2.2. Implementação dos Algoritmos HOS (Meses 10-11)*
- **Bi-espectro (3ª ordem):**
  - Implementação usando FFT direto e método indireto
  - Configuração de parâmetros: tamanho de janela, sobreposição, janelamento (Hanning)
  - Cálculo da magnitude e fase do bi-espectro
- **Tri-espectro (4ª ordem):**
  - Implementação para capturar assinaturas mais sutis
  - Análise de simetrias e propriedades matemáticas
- **Momentos de Alta Ordem:**
  - Cálculo de cumulantes de 3ª e 4ª ordem
  - Análise de assimetria e curtose dos sinais

*2.3. Extração de Características (Meses 11-12)*
- **Características do Bi-espectro:**
  - Picos dominantes e suas frequências
  - Integrais em regiões específicas do bi-espectro
  - Momentos estatísticos da magnitude bi-espectral
  - Análise de simetrias e padrões de fase
- **Características do Tri-espectro:**
  - Picos e regiões de alta energia
  - Momentos de 4ª ordem normalizados
- **Características Estatísticas:**
  - Cumulantes normalizados
  - Coeficientes de assimetria e curtose
  - Entropia espectral e outras medidas de complexidade

*2.4. Análise Exploratória e Visualização (Meses 12-13)*
- **Visualização HOS:**
  - Mapas de calor dos bi-espectros e tri-espectros
  - Gráficos de magnitude e fase
  - Comparações entre condições normais e com falhas
- **Análise Estatística Descritiva:**
  - Distribuições das características extraídas
  - Correlações entre características
  - Identificação de outliers e padrões anômalos

**Deliverables:**
- Biblioteca de funções HOS implementadas em Python
- Dataset de características extraídas (matriz de features)
- Visualizações e análises exploratórias
- Documentação dos algoritmos e parâmetros utilizados

**Etapa 3: Validação Física e Interpretação dos Resultados (Meses 14-16)**

**Objetivo:** Validar fisicamente as assinaturas HOS extraídas através de comparação com literatura científica e consolidar o entendimento físico dos mecanismos de falha.

**Atividades Detalhadas:**

*3.1. Revisão Bibliográfica Especializada (Meses 14-15)*
- **Busca Sistemática:**
  - Revisão de artigos sobre HOS em rotores com falhas (últimos 15 anos)
  - Foco em bi-espectros de trincas respirantes e desalinhamentos
  - Análise de bancos de dados experimentais disponíveis
- **Catalogação de Referências:**
  - Compilação de padrões bi-espectrais documentados
  - Identificação de frequências características para cada tipo de falha
  - Coleta de parâmetros de sistemas similares (geometria, materiais, condições)

*3.2. Análise Comparativa Quantitativa (Meses 15-16)*
- **Métricas de Comparação:**
  - Correlação cruzada entre bi-espectros simulados e experimentais
  - Análise de frequências dominantes e suas amplitudes relativas
  - Comparação de distribuições de energia em regiões específicas
- **Validação Estatística:**
  - Testes de significância estatística das diferenças observadas
  - Análise de variância (ANOVA) para diferentes condições
  - Intervalos de confiança para características principais

*3.3. Interpretação Física dos Mecanismos (Meses 16)*
- **Análise de Trincas Respirantes:**
  - Relação entre profundidade da trinca e intensidade das assinaturas HOS
  - Mecanismo de "breathing" e sua influência nas interações não-lineares
  - Correlação com teoria de variação cíclica de rigidez
- **Análise de Desalinhamentos:**
  - Efeito da severidade do desalinhamento nos padrões bi-espectrais
  - Diferenças entre desalinhamento paralelo e angular
  - Interação com forças de desbalanceamento
- **Análise de Condições Combinadas:**
  - Efeito de múltiplas falhas simultâneas
  - Identificação de assinaturas únicas para cada combinação

*3.4. Validação Cruzada e Controle de Qualidade (Meses 16)*
- **Validação do Modelo Numérico:**
  - Comparação com soluções analíticas quando disponíveis
  - Verificação de convergência e independência de malha
  - Análise de sensibilidade dos parâmetros
- **Validação dos Algoritmos HOS:**
  - Teste com sinais sintéticos de características conhecidas
  - Verificação de consistência com implementações de referência
  - Análise de robustez a ruído e parâmetros de análise

**Deliverables:**
- Relatório de validação física com comparações quantitativas
- Base de dados de assinaturas HOS validadas da literatura
- Interpretação física consolidada dos mecanismos de falha
- Critérios de qualidade para validação de simulações HOS

**Etapa 4: Classificação Automática via Aprendizado de Máquina (Meses 17-21)**

**Objetivo:** Desenvolver e otimizar um sistema de classificação automática que utilize as características HOS validadas para diagnosticar o estado operacional de máquinas rotativas.

**Atividades Detalhadas:**

*4.1. Engenharia de Características e Preparação dos Dados (Meses 17-18)*
- **Conversão de Bi-espectros em Features:**
  - Extração de características estatísticas (média, variância, assimetria, curtose)
  - Momentos de magnitude e fase do bi-espectro
  - Integrais em regiões específicas (diagonal principal, regiões de alta energia)
  - Características de forma e textura dos mapas bi-espectrais
- **Seleção e Redução de Dimensionalidade:**
  - Análise de correlação entre features para identificar redundâncias
  - Aplicação de PCA (Principal Component Analysis) para redução de dimensionalidade
  - Seleção de características baseada em importância (Random Forest Feature Importance)
- **Preparação dos Dados:**
  - Normalização e padronização das features
  - Divisão estratificada dos dados (70% treino, 15% validação, 15% teste)
  - Balanceamento de classes se necessário

*4.2. Seleção e Implementação de Algoritmos (Meses 18-19)*
- **Algoritmos Supervisionados:**
  - **Support Vector Machine (SVM):** Kernel RBF e linear, otimização de hiperparâmetros
  - **Random Forest:** Variação do número de árvores e profundidade máxima
  - **Gradient Boosting (XGBoost):** Otimização de learning rate e regularização
  - **Neural Networks:** Arquiteturas MLP com diferentes configurações
- **Otimização de Hiperparâmetros:**
  - Grid Search e Random Search para exploração do espaço de parâmetros
  - Validação cruzada k-fold (k=5) para avaliação robusta
  - Técnicas de early stopping para evitar overfitting

*4.3. Treinamento e Validação dos Modelos (Meses 19-20)*
- **Processo de Treinamento:**
  - Implementação de pipelines de treinamento automatizados
  - Monitoramento de métricas durante o treinamento (loss, accuracy)
  - Implementação de técnicas de regularização (L1, L2, dropout)
- **Validação e Seleção de Modelos:**
  - Avaliação usando conjunto de validação
  - Comparação de múltiplas métricas (accuracy, precision, recall, F1-score)
  - Análise de matriz de confusão para cada modelo
  - Seleção do melhor modelo baseado em performance geral

*4.4. Avaliação e Análise de Desempenho (Meses 20-21)*
- **Métricas de Avaliação:**
  - **Matriz de Confusão:** Análise detalhada de erros de classificação
  - **Métricas por Classe:** Precision, Recall, F1-score para cada tipo de falha
  - **Métricas Globais:** Accuracy, Macro/Micro averaged F1-score
  - **Curvas ROC e AUC:** Análise de performance para classificação multiclasse
- **Análise de Robustez:**
  - Teste com diferentes níveis de ruído nos dados
  - Análise de sensibilidade a parâmetros de simulação
  - Validação com dados de diferentes condições operacionais
- **Interpretabilidade do Modelo:**
  - Análise de importância das features (SHAP values)
  - Visualização de decisões do modelo
  - Identificação das características mais discriminativas

**Deliverables:**
- Sistema de classificação otimizado e validado
- Relatório de performance com métricas detalhadas
- Código-fonte do pipeline de ML completo
- Análise de interpretabilidade e robustez do modelo

**Etapa 5: Redação e Consolidação (Meses 22-24)**

**Objetivo:** Consolidar todos os resultados em uma dissertação coesa e preparar contribuições científicas para publicação.

**Atividades Detalhadas:**

*5.1. Análise Integrada dos Resultados (Meses 22-23)*
- **Síntese Metodológica:**
  - Integração dos resultados das quatro etapas anteriores
  - Análise da eficácia do framework híbrido proposto
  - Avaliação crítica das limitações e pontos de melhoria
- **Análise de Contribuições:**
  - Identificação das principais contribuições científicas
  - Comparação com métodos existentes na literatura
  - Avaliação do impacto potencial para a área

*5.2. Redação da Dissertação (Meses 23-24)*
- **Estruturação do Documento:**
  - Introdução contextualizando o problema e motivando a pesquisa
  - Revisão bibliográfica consolidada sobre HOS e diagnóstico de falhas
  - Metodologia detalhada com justificativas técnicas
  - Resultados e discussões organizados por etapa metodológica
  - Conclusões e trabalhos futuros
- **Revisão e Refinamento:**
  - Múltiplas revisões de conteúdo e forma
  - Validação técnica com orientador
  - Preparação para defesa

*5.3. Preparação de Artigos Científicos (Meses 23-24)*
- **Artigo Principal:**
  - Foco na metodologia completa e resultados integrados
  - Target: Journal of Sound and Vibration ou Mechanical Systems and Signal Processing
- **Artigo Complementar:**
  - Foco específico na validação física das assinaturas HOS
  - Target: Applied Sciences ou Engineering Failure Analysis

**Deliverables:**
- Dissertação final completa e revisada
- Pelo menos um artigo científico submetido
- Apresentação preparada para defesa
- Código-fonte e dados organizados para disponibilização

---

## 4. Especificações Técnicas e Controles de Qualidade

### 4.1. Especificações do Modelo Numérico
- **Elementos Finitos:** Elementos de viga de Euler-Bernoulli com 50-100 elementos
- **Integração Temporal:** Método de Newmark-β com γ=0.5, β=0.25
- **Convergência:** Tolerância de 1×10⁻⁶ para resíduos de força e deslocamento
- **Frequência de Amostragem:** Mínimo 10× a frequência de rotação máxima
- **Tempo de Simulação:** 10 segundos (2s transiente + 8s regime permanente)

### 4.2. Parâmetros HOS
- **Bi-espectro:** Janela Hanning, 2048 pontos, sobreposição 50%
- **Tri-espectro:** Janela Hanning, 1024 pontos, sobreposição 50%
- **Filtros:** Butterworth passa-alta (fc = 0.1×frotação) e passa-banda (0.5-10×frotação)
- **Normalização:** Cumulantes normalizados por variância

### 4.3. Critérios de Validação
- **Modelo Numérico:** Diferença <5% em frequências naturais vs. solução analítica
- **Algoritmos HOS:** Consistência >95% com implementações de referência
- **Classificador ML:** Accuracy >90% no conjunto de teste
- **Validação Física:** Correlação >80% com padrões da literatura

### 4.4. Controles de Qualidade
- **Versionamento:** Git para controle de versão de código e dados
- **Documentação:** Docstrings e comentários em todos os scripts
- **Testes:** Unit tests para funções críticas
- **Backup:** Cópia de segurança diária dos dados e resultados

---

## 5. Cronograma Consolidado e Marcos de Controle

### 5.1. Cronograma Detalhado

| Atividade | M1-M2 | M3-M4 | M5-M6 | M7-M8 | M9-M10 | M11-M12 | M13-M14 | M15-M16 | M17-M18 | M19-M20 | M21 | M22-M23 | M24 |
|:----------|:-----:|:-----:|:-----:|:-----:|:------:|:-------:|:-------:|:-------:|:-------:|:-------:|:---:|:-------:|:---:|
| **Revisão Bibliográfica** | X | X | X | X | | | | | | | | | |
| **Etapa 1: Modelagem Numérica** | | | | | | | | | | | | | |
| - Definição do Sistema | X | X | | | | | | | | | | | |
| - Modelos de Falhas | | X | X | | | | | | | | | | |
| - Campanha de Simulações | | | X | X | | | | | | | | | |
| **Etapa 2: Análise HOS** | | | | | | | | | | | | | |
| - Pré-processamento | | | | | X | | | | | | | | |
| - Algoritmos HOS | | | | | X | X | | | | | | | |
| - Extração de Features | | | | | | X | | | | | | | |
| **Etapa 3: Validação Física** | | | | | | | | | | | | | |
| - Revisão Especializada | | | | | | | X | | | | | | |
| - Análise Comparativa | | | | | | | X | X | | | | | |
| **Etapa 4: Classificação ML** | | | | | | | | | | | | | |
| - Engenharia de Features | | | | | | | | | X | | | | |
| - Algoritmos e Treinamento | | | | | | | | | X | X | | | |
| - Avaliação de Performance | | | | | | | | | | X | | | |
| **Etapa 5: Redação** | | | | | | | | | | | | X | X |

### 5.2. Marcos de Controle e Entregas

| Marco | Mês | Entregas | Critérios de Sucesso |
|:------|:---:|:---------|:-------------------|
| **M1** | 4 | Revisão bibliográfica consolidada | 50+ referências relevantes catalogadas |
| **M2** | 8 | Modelo numérico validado + Dataset | 1000+ simulações, validação <5% erro |
| **M3** | 13 | Características HOS extraídas | Features extraídas de 100% do dataset |
| **M4** | 16 | Validação física completa | Correlação >80% com literatura |
| **M5** | 21 | Classificador ML otimizado | Accuracy >90% no conjunto de teste |
| **M6** | 24 | Dissertação final + Artigo | Dissertação defendida, artigo submetido |

### 5.3. Indicadores de Progresso

**Quantitativos:**
- Número de simulações concluídas vs. planejado
- Porcentagem de características HOS extraídas
- Performance do classificador (accuracy, precision, recall)
- Número de páginas da dissertação escritas

**Qualitativos:**
- Qualidade da validação física (correlação com literatura)
- Robustez do modelo numérico
- Interpretabilidade das assinaturas HOS
- Clareza e completude da documentação

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