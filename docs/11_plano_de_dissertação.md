# Plano de Dissertação

---

## 1. Elementos Pré-textuais
- Capa  
- Folha de rosto  
- Resumo (em português)  
- Abstract (em inglês)  
- Listas (Figuras, Tabelas, Siglas)  
- Sumário  

---

## 2. Estrutura da Dissertação

### 2.1 Introdução
- Contextualização do tema: importância das máquinas rotativas e desafios de manutenção preditiva  
- Justificativa do estudo, destacando a redução da dependência de experimentos físicos  
- Problema de pesquisa e lacunas na literatura  
- Objetivos:
  - **Geral**: desenvolver metodologia de diagnóstico baseada exclusivamente em simulações e HOS  
  - **Específicos**:
    1. Modelagem numérica de eixos rotativos com falhas (trincas, desalinhamentos)  
    2. Simulação de respostas dinâmicas sob condições variadas  
    3. Aplicação de bi-espectro e tri-espectro aos sinais simulados  
    4. Validação comparativa com referências da literatura  
    5. (Opcional) Classificação de falhas via aprendizado de máquina  
- Organização dos capítulos  

### 2.2 Revisão de Literatura / Fundamentação Teórica
- Principais tipos de falhas em sistemas rotativos e seus indicadores espectrais  
- Modelagem via elementos finitos e simulação numérica em dinâmica rotativa  
- Teoria de HOS (bi-espectro e tri-espectro): fundamentos, algoritmos e aplicações  
- Aplicações anteriores e lacunas metodológicas abertas  

### 2.3 Metodologia
- Ambiente computacional e ferramentas:
  - Biblioteca ROSS para modelagem de sistemas rotativos
  - Ferramentas de análise de HOS (Python + bibliotecas)  
- Detalhamento da modelagem:
  - Geometria do eixo rotativo  
  - Características das falhas simuladas  
  - Configuração das condições de contorno e parâmetros operacionais  
- Procedimentos de simulação:
  - Cenários definidos (velocidades, tipos de falhas)  
- Processamento de sinais:
  - Extração de dados temporais e aplicação de bi-espectro/tri-espectro  
- Estratégia de validação:
  - Comparação com resultados na literatura  
  - (Opcional) Implementação de algoritmo de classificação via aprendizado de máquina  

### 2.4 Resultados e Discussão
- Apresentação dos principais resultados das simulações  
- Identificação de padrões espectrais característicos das falhas  
- Comparativos quantitativos e qualitativos com referências externas  
- Discussão dos resultados:
  - Robustez dos métodos HOS  
  - Limitações e sensibilidade às condições operacionais e ruído  

### 2.5 Conclusão e Perspectivas Futuras
- Síntese dos principais achados  
- Contribuições metodológicas e teóricas  
- Limitações do estudo  
- Recomendações para continuidade da pesquisa e aplicações práticas futuras  

---

## 3. Cronograma (exemplo para 24 meses)

| **Fase** | **Atividade** | **Meses** | **Produtos** |
|----------|---------------|-----------|--------------|
| **I** | Revisão bibliográfica + familiarização ROSS | 1-4 | Cap. 1.2 (esboço) |
| **II** | Modelagem numérica e validação básica | 5-9 | Modelos validados |
| **III** | Simulações sistemáticas | 10-14 | Base de dados completa |
| **IV** | Implementação HOS e análise | 15-18 | Algoritmos + resultados |
| **V** | Validação e comparações | 19-21 | Cap. 1.4 |
| **VI** | Redação final e defesa | 22-24 | Dissertação completa |

---

## 3. Recursos Críticos
- **Software**: Licença ROSS (essencial)
- **Hardware**: Workstation para simulações intensivas
- **Dados**: Acesso a bases experimentais para validação
- **Bibliografia**: Acesso IEEE, Elsevier, ASME

---

## 5. Referências (exemplos)
- Artigos clássicos sobre HOS e diagnóstico espectral  
- Estudos de simulação de falhas em sistemas rotativos  
- Fontes metodológicas sobre elementos finitos e análise de sinais

