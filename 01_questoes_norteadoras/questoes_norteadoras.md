# Questões Norteadoras da Pesquisa

## 1. Questão Central de Pesquisa

**Como desenvolver uma metodologia eficaz baseada em simulações numéricas e análise de espectros de ordem superior para diagnóstico de falhas em máquinas rotativas?**

1. **Como as simulações numéricas podem ser utilizadas para diagnosticar falhas em máquinas rotativas de forma eficaz?**
   - Esta é a questão central do trabalho, que busca desenvolver uma metodologia baseada em simulação.

2. **De que forma a análise de espectros de ordem superior (HOS) pode identificar assinaturas não lineares específicas de diferentes tipos de falhas?**
   - Relacionada ao método principal de análise (bi-espectro e tri-espectro).

3. **Quais padrões característicos nos espectros de ordem superior diferenciam as condições normais de operação das condições de falha?**
   - Esta questão direciona a análise dos dados simulados.

4. **Haveria a possibilidade de fazer HOS de FullSpectrum?**
   - Esta questão explora a aplicação de análise de espectros de ordem superior a dados de espectro completo.

## 2. Questões Norteadoras Teóricas

### Q1. Modelagem e Simulação

**Como modelar numericamente (via elementos finitos utilizando ROSS) o comportamento dinâmico de eixos rotativos sob condições normais e com falhas específicas (trincas e desalinhamentos)?**

- **Relacionamento com objetivos**: Corresponde ao Objetivo Específico 1 (Modelagem Numérica)
- **Aspectos a investigar**:
  - Validação da modelagem de eixos sem falhas
  - Implementação de modelos de trincas (*crack breathing phenomenon*)
  - Modelagem de desalinhamentos em diferentes configurações
  - Parametrização adequada das falhas
  - Convergência e validação dos modelos numéricos

### Q2. Análise de Espectros de Ordem Superior

**De que forma a análise de espectros de ordem superior (bi-espectro e tri-espectro) pode identificar e caracterizar assinaturas não lineares específicas de diferentes tipos de falhas em máquinas rotativas?**

- **Relacionamento com objetivos**: Corresponde ao Objetivo Específico 2 (Análise de HOS)
- **Aspectos a investigar**:
  - Fundamentos matemáticos do bi-espectro e tri-espectro
  - Interpretação física dos espectros de ordem superior
  - Algoritmos computacionais para estimação de HOS
  - Características distintivas nos HOS para cada tipo de falha
  - Sensibilidade dos métodos HOS a diferentes condições operacionais

### Q3. Padrões Característicos

**Quais padrões característicos nos espectros de ordem superior diferenciam claramente as condições normais de operação das condições de falha (trincas e desalinhamentos)?**

- **Relacionamento com objetivos**: Corresponde ao Objetivo Específico 2 (Análise de HOS)
- **Aspectos a investigar**:
  - Assinaturas espectrais específicas de cada tipo de falha
  - Variação dos padrões com severidade da falha
  - Influência da velocidade de rotação nos padrões HOS
  - Robustez dos padrões identificados
  - Comparação entre padrões de trincas e desalinhamentos

## 3. Questões Norteadoras Metodológicas

### Q4. Validação da Metodologia

**Qual a eficácia da metodologia proposta baseada em simulação quando comparada com dados e técnicas disponíveis na literatura científica?**

- **Relacionamento com objetivos**: Corresponde ao Objetivo Específico 3 (Validação)
- **Aspectos a investigar**:
  - Comparação qualitativa com resultados experimentais da literatura
  - Comparação quantitativa de indicadores de falha
  - Identificação de concordâncias e discordâncias
  - Análise das limitações da abordagem simulada
  - Critérios de validação estabelecidos na área

### Q5. Complementaridade e Viabilidade

**A metodologia proposta baseada em simulação pode efetivamente complementar ou reduzir a dependência de experimentos físicos para diagnóstico de falhas em máquinas rotativas?**

- **Relacionamento com objetivos**: Objetivo Geral e Justificativa
- **Aspectos a investigar**:
  - Vantagens e limitações da abordagem simulada
  - Situações em que simulações são preferíveis a experimentos
  - Contribuições práticas da metodologia
  - Viabilidade de implementação em ambientes industriais
  - Custos e benefícios comparativos

## 4. Questões Norteadoras Exploratórias

### Q6. Análise de Full Spectrum

**Há possibilidade e vantagens na aplicação de análise de espectros de ordem superior a dados de Full Spectrum (espectro completo) para diagnóstico de falhas?**

- **Relacionamento com objetivos**: Exploratório, potencial extensão do Objetivo Específico 2
- **Aspectos a investigar**:
  - Fundamentos teóricos do Full Spectrum
  - Aplicabilidade de HOS ao Full Spectrum
  - Vantagens comparativas em relação a análises tradicionais
  - Complexidade computacional adicional
  - Valor agregado para diagnóstico

### Q7. Robustez e Sensibilidade

**Qual a robustez e sensibilidade da metodologia proposta a variações nas condições operacionais (velocidade, carga, ruído) e parâmetros de modelagem?**

- **Relacionamento com objetivos**: Aspecto transversal aos objetivos específicos
- **Aspectos a investigar**:
  - Análise de sensibilidade dos parâmetros de modelagem
  - Efeito do ruído nos resultados de HOS
  - Variação da performance com diferentes condições operacionais
  - Limites de aplicabilidade da metodologia
  - Estratégias de robustificação

