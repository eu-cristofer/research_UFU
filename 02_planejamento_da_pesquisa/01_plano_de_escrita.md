# Estrutura Proposta da Dissertação

## 1 Capítulo 1: Introdução

### 1.1 Contextualização
- Importância das máquinas rotativas na indústria
- Desafios da manutenção preditiva
- Relevância do diagnóstico precoce de falhas

### 1.2 Problema de Pesquisa
- Apresentação do problema central
- Lacunas na literatura identificadas
- Justificativa para a abordagem proposta

### 1.3 Questões Norteadoras e Objetivos
- Questão central (espectros de ordem superior são capazes de distinguir
  assinaturas não lineares de trinca e desalinhamento?)
- Desmembramento em nove questões norteadoras (Q1–Q9), conforme
  `00_planejamento_global.md` §4.2
- Objetivo geral e específicos (3.1 a 3.6)
- Mapeamento questões-objetivos (tabela §4.3 do planejamento global)

### 1.4 Justificativa
- Relevância científica e prática
- Contribuições esperadas
- Redução da dependência de experimentos físicos

### 1.5 Escopo e Delimitações
- Tipos de falhas abordadas (trincas, desalinhamentos)
- Ferramenta de simulação (ROSS)
- Técnicas de análise (HOS: bi-espectro, bicoerência e tri-espectro)
- Limitações do estudo

### 1.6 Organização da Dissertação
- Estrutura dos capítulos seguintes

## 2 Capítulo 2: Revisão de Literatura / Fundamentação Teórica

### 2.1 Dinâmica de Rotores e Vibrações
- Equações fundamentais de movimento
- Análise modal e frequências naturais
- Comportamento em regime permanente e transiente
- Principais tipos de falhas em sistemas rotativos
- Indicadores espectrais tradicionais

### 2.2 Modelagem Numérica em Dinâmica Rotativa
- Método de elementos finitos aplicado a rotores
- Bibliotecas e ferramentas computacionais
- Modelagem de falhas (trincas, desalinhamentos)
- Validação de modelos numéricos

### 2.3 Análise de Espectros de Ordem Superior
- Fundamentos matemáticos (momentos e cumulantes de ordem superior)
- Bi-espectro: teoria, algoritmos e interpretação
- Tri-espectro: teoria, algoritmos e interpretação
- Aplicações em diagnóstico de falhas
- Vantagens e limitações das técnicas HOS

### 2.4 Estado da Arte
- Aplicações de HOS em máquinas rotativas
- Estudos comparativos entre simulação e experimentação
- Lacunas metodológicas identificadas
- Oportunidades de contribuição

## 3 Capítulo 3: Metodologia

### 3.1 Visão Geral da Metodologia
- Fluxograma do processo de pesquisa
- Etapas metodológicas principais

### 3.2 Ambiente Computacional e Ferramentas
- Biblioteca ROSS: características e capacidades
- Ferramentas de análise HOS (Python, bibliotecas)
- Ambiente de desenvolvimento e processamento

### 3.3 Modelagem Numérica (Respondendo Q1)

#### 3.3.1 Geometria e Configuração do Rotor
- Especificações do eixo rotativo estudado
- Propriedades dos materiais
- Condições de contorno

#### 3.3.2 Modelagem de Condições Normais
- Modelo baseline sem falhas
- Validação com casos conhecidos

#### 3.3.3 Modelagem de Falhas
- Modelo de trincas (*crack breathing phenomenon*)
- Modelo de desalinhamentos
- Parametrização das falhas (severidade, localização)

#### 3.3.4 Configuração de Simulações
- Condições operacionais (velocidades, cargas)
- Parâmetros numéricos (passo de tempo, tolerâncias)
- Estratégias de validação

### 3.4 Procedimentos de Simulação
- **Cenários de Estudo**:
  - Rotor sem falhas (baseline)
  - Rotor com trinca de diferentes severidades
  - Rotor com desalinhamento de diferentes magnitudes
  - Variações de velocidade de rotação
  - Diferentes condições de amortecimento

- **Geração de Dados Temporais**:
  - Extração de sinais de vibração
  - Pré-processamento dos dados
  - Armazenamento e organização

### 3.5 Processamento de Sinais e Análise HOS (Respondendo Q3 e Q4)

#### 3.5.1 Pré-processamento de Sinais
- Filtragem e condicionamento
- Segmentação temporal
- Remoção de tendências

#### 3.5.2 Implementação de Bi-espectro
- Algoritmos de estimação
- Parâmetros de cálculo
- Visualização e interpretação

#### 3.5.3 Implementação de Tri-espectro
- Algoritmos de estimação
- Comparação com bi-espectro
- Aplicabilidade para diagnóstico

#### 3.5.4 Extração de Características
- Identificação de padrões característicos
- Métricas quantitativas
- Análise comparativa entre condições

### 3.6 Estratégia de Validação (Respondendo Q2 e Q8)
- Critérios de validação estabelecidos (topologia espectral, picos
  em (1X,1X) e (1X,2X), bifase em frequências-chave)
- Fontes de dados para comparação (Sinha, 2007 e demais referências)
- Métodos de comparação (qualitativa e quantitativa)
- Análise crítica de resultados
- Discussão do alcance da abordagem numérica open source frente a
  estudos experimentais (Q8)

### 3.7 Análise de Sensibilidade e Robustez (Respondendo Q6 e Q9)
- Análise de sensibilidade dos indicadores HOS à severidade da falha
  e à velocidade de rotação (Q6)
- Efeito de ruído e incertezas paramétricas (Q9)
- Variação com condições operacionais (rotação, amortecimento)
- Avaliação de limites de aplicabilidade

## 4 Capítulo 4: Resultados e Discussão

### 4.1 Resultados da Modelagem Numérica
- Validação dos modelos desenvolvidos
- Comportamento dinâmico do rotor em diferentes condições
- Comparação entre condições normais e com falhas
- Discussão dos modelos implementados

### 4.2 Resultados da Análise de HOS

#### 4.2.1 Bi-espectros Obtidos
- Padrões para condição normal
- Padrões para trincas
- Padrões para desalinhamentos
- Análise comparativa

#### 4.2.2 Tri-espectros Obtidos
- Padrões identificados
- Comparação com bi-espectro
- Valor agregado para diagnóstico

#### 4.2.3 Padrões Característicos Identificados
- Assinaturas específicas de cada tipo de falha
- Variação com severidade da falha
- Influência das condições operacionais

### 4.3 Validação com Literatura (Respondendo Q2 e Q8)
- Comparação qualitativa com resultados experimentais (Sinha, 2007)
- Comparação quantitativa de indicadores
- Discussão de concordâncias e discordâncias
- Análise crítica das diferenças
- Discussão do alcance da abordagem numérica open source frente a
  bancadas experimentais (Q8)

### 4.4 Análise de Robustez e Sensibilidade (Respondendo Q6 e Q9)
- Efeito de variações paramétricas (severidade da falha, rotação,
  amortecimento) — Q6
- Sensibilidade a condições operacionais
- Robustez frente a ruído e incertezas (Q9)
- Limites de aplicabilidade

### 4.5 Discussão Geral
- **Respondendo Q5 (Indicadores escalares mais robustos)**:
  - Ranking dos indicadores HOS (BPR, BCS, BE, bifase) por
    capacidade discriminativa
  - Robustez em diferentes regimes operacionais
  - Recomendações de uso prático

- **Respondendo Q7 (HOS × PSD)**:
  - Ganho de discriminação dos indicadores HOS em relação aos
    indicadores tradicionais baseados em PSD
  - Situações em que HOS supera (ou não) a análise PSD

- Síntese das principais descobertas
- Implicações teóricas e práticas

## 5 Capítulo 5: Conclusões e Perspectivas Futuras

### 5.1 Síntese dos Principais Resultados
- Respostas às questões norteadoras
- Alcance dos objetivos propostos
- Contribuições principais

### 5.2 Contribuições Científicas e Práticas
- Contribuições metodológicas
- Contribuições teóricas
- Aplicações práticas potenciais

### 5.3 Limitações do Estudo
- Limitações metodológicas
- Limitações computacionais
- Limitações de escopo

### 5.4 Recomendações para Trabalhos Futuros
- Extensões do trabalho atual
- Investigação de novos tipos de falhas
- Integração com técnicas de aprendizado de máquina
- Desenvolvimento de ferramentas computacionais
- Validação experimental
