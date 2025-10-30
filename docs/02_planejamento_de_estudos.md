# Planejamento de Estudos - Diagnóstico de Falhas em Máquinas Rotativas

## 1. Fundamentos Teóricos (Meses 1-4)

### 1.1 Dinâmica de Rotores e Vibrações
- **Livro Principal**: Friswell et al. (2010) - *Dynamics of Rotating Machines*
- **Complementar**: Lalanne & Ferraris (1998) - *Rotordynamics Prediction in Engineering*
- **Tópicos**:
  - Equações de movimento de rotores
  - Análise modal e frequências naturais
  - Comportamento em regime permanente e transiente
  - Efeitos de desbalanceamento e desalinhamento

### 1.2 Análise de Vibrações e Monitoramento de Condição
- **Referência**: Randall (2011) - *Vibration-based condition monitoring*
- **Tópicos**:
  - Fundamentos de análise espectral (FFT)
  - Ordem de análise e full spectrum
  - Indicadores de condição
  - Técnicas de processamento de sinais

### 1.3 Análise de Espectros de Ordem Superior (HOS)
- **Livro Fundamental**: Nikias & Petropulu (1993) - *Higher-Order Spectra Analysis*
- **Artigo Seminal**: Fackrell et al. (1995) - Interpretação de bi-espectros
- **Tópicos**:
  - Teoria matemática do bi-espectro
  - Interpretação física dos espectros de ordem superior
  - Algoritmos computacionais para HOS
  - Aplicações em diagnóstico de falhas

## 2. Modelagem e Simulação (Meses 5-9)

### 2.1 Biblioteca ROSS - Rotordynamic Open-Source Software
- **Referência**: Timbó et al. (2020) - *ROSS: Rotordynamic Open-Source Software*
- **Atividades**:
  - Instalação e familiarização com a biblioteca
  - Tutorial de modelagem básica
  - Criação de modelos simples de eixos rotativos
  - Validação com casos conhecidos da literatura

### 2.2 Modelagem de Falhas Específicas
- **Referência**: Wensing (1997) - *On the dynamics of cracked rotors*
- **Tópicos**:
  - Modelagem de trincas (crack breathing phenomenon)
  - Modelagem de desalinhamentos
  - Implementação de condições de contorno
  - Parametrização de falhas

### 2.3 Simulações Sistemáticas
- **Cenários de Estudo**:
  - Rotor sem falhas (condição baseline)
  - Rotor com trinca de diferentes severidades
  - Rotor com desalinhamento de diferentes magnitudes
  - Variações de velocidade de rotação
  - Diferentes condições de amortecimento

## 3. Processamento de Sinais e HOS (Meses 10-13)

### 3.1 Implementação Computacional
- **Ferramentas**:
  - Python com NumPy/SciPy
  - Bibliotecas especializadas em HOS
  - Desenvolvimento de algoritmos customizados

### 3.2 Análise de Bi-espectro
- **Implementação**:
  - Algoritmo de estimação de bi-espectro
  - Visualização e interpretação
  - Extração de características
  - Análise de fase e magnitude

### 3.3 Análise de Tri-espectro
- **Implementação**:
  - Algoritmos para tri-espectro
  - Comparação com bi-espectro
  - Identificação de padrões característicos

## 4. Validação e Literatura (Meses 14-16)

### 4.1 Busca Bibliográfica Sistemática
- **Bases de Dados**:
  - IEEE Xplore
  - ScienceDirect (Elsevier)
  - ASME Digital Collection
  - Google Scholar

### 4.2 Comparação com Resultados Experimentais
- **Foco**:
  - Assinaturas HOS de trincas em rotores
  - Padrões de desalinhamento
  - Validação quantitativa e qualitativa
  - Análise crítica das diferenças

## 5. Aprendizado de Máquina (Meses 17-21)

### 5.1 Fundamentos de ML para Diagnóstico
- **Referências**:
  - Lei et al. (2020) - Revisão sistemática de prognóstico
  - Widodo & Yang (2007) - SVM em diagnóstico
  - Kankar et al. (2011) - ML em rolamentos

### 5.2 Engenharia de Características
- **Atividades**:
  - Conversão de bi-espectros em features
  - Seleção de características relevantes
  - Normalização e pré-processamento

### 5.3 Desenvolvimento do Classificador
- **Algoritmos**:
  - Support Vector Machine (SVM)
  - Random Forest
  - Neural Networks (se tempo permitir)
- **Validação**:
  - Cross-validation
  - Métricas de performance
  - Matriz de confusão

## 6. Cronograma de Estudos Detalhado

| **Mês** | **Foco Principal** | **Atividades Específicas** | **Produtos Esperados** |
|---------|-------------------|---------------------------|----------------------|
| **1-2** | Fundamentos | Leitura teórica intensiva | Resumo crítico dos fundamentos |
| **3-4** | HOS Theory | Estudo aprofundado de HOS | Implementação básica de algoritmos |
| **5-6** | ROSS | Tutorial e primeiros modelos | Modelo básico validado |
| **7-8** | Falhas | Modelagem de trincas e desalinhamentos | Modelos com falhas implementados |
| **9** | Simulações | Campanha sistemática de simulações | Dataset completo gerado |
| **10-11** | HOS Aplicado | Análise de todos os sinais simulados | Bi-espectros de todas as condições |
| **12** | Tri-espectro | Implementação e análise | Comparação bi vs tri-espectro |
| **13** | Validação | Comparação com literatura | Relatório de validação |
| **14-15** | Literatura | Busca sistemática e análise | Mapeamento do estado da arte |
| **16** | Validação Final | Análise crítica e refinamento | Características validadas |
| **17-18** | ML Prep | Engenharia de features | Dataset para ML preparado |
| **19-20** | Classificação | Treinamento e teste de modelos | Classificador otimizado |
| **21** | Avaliação | Métricas de performance | Relatório de resultados ML |

## 7. Recursos e Ferramentas

### 7.1 Software
- **ROSS**: Biblioteca principal para simulações
- **Python**: Ambiente de desenvolvimento
- **Bibliotecas**: NumPy, SciPy, Matplotlib, Scikit-learn
- **IDE**: Jupyter Notebooks para análise exploratória

### 7.2 Hardware
- **Workstation**: Para simulações computacionalmente intensivas
- **Armazenamento**: Para grandes volumes de dados de simulação

### 7.3 Bibliografia
- **Acesso**: IEEE Xplore, ScienceDirect, ASME
- **Livros**: Aquisição dos livros fundamentais
- **Artigos**: Acesso via portal CAPES

## 8. Métricas de Progresso

### 8.1 Indicadores Quantitativos
- Número de artigos lidos e resumidos
- Modelos ROSS implementados e validados
- Casos de simulação executados
- Algoritmos HOS implementados
- Precisão do classificador ML

### 8.2 Indicadores Qualitativos
- Compreensão dos fundamentos teóricos
- Habilidade na modelagem com ROSS
- Capacidade de interpretar resultados HOS
- Qualidade da validação com literatura
- Robustez da metodologia desenvolvida

## 9. Riscos e Contingências

### 9.1 Riscos Técnicos
- **Complexidade do ROSS**: Tempo adicional para familiarização
- **Convergência das simulações**: Otimização de parâmetros
- **Computacional**: Uso de clusters se necessário

### 9.2 Mitigações
- Início antecipado com ROSS
- Validação incremental dos modelos
- Planejamento de recursos computacionais
- Contato com comunidade ROSS

---

**Nota**: Este planejamento é flexível e pode ser ajustado conforme o progresso e descobertas durante a pesquisa. O foco deve sempre estar na qualidade dos resultados e na contribuição científica significativa.
