# Plano de Fichamento - Vibrações Mecânicas (Rao, 2018)

## Contexto do Projeto
**Título da Dissertação:** Diagnóstico de Falhas em Máquinas Rotativas por Meio de Simulações Numéricas e Análise de Espectros de Ordem Superior

**Foco Principal:** Desenvolvimento de metodologia baseada em simulação numérica (ROSS) + análise HOS + machine learning para diagnóstico automático de falhas em máquinas rotativas.

---

## Estratégia de Fichamento

### 1. Abordagem Focada
- **Prioridade:** Capítulos diretamente relacionados à dinâmica de rotores e análise de vibrações
- **Método:** Fichamento seletivo com ênfase em conceitos aplicáveis ao projeto
- **Integração:** Conectar teoria do Rao com as etapas metodológicas do projeto

### 2. Estrutura do Fichamento
Para cada capítulo relevante:
- **Resumo dos conceitos fundamentais**
- **Equações-chave e suas aplicações**
- **Conexões com o projeto de pesquisa**
- **Exemplos práticos relevantes**
- **Notas para implementação em ROSS**

---

## Plano de Leitura Estruturado

### **FASE 1: FUNDAMENTOS (Meses 1-2)**
*Integração com: Fundamentos Teóricos do plano de estudos*

#### **Capítulo 1: Fundamentos de Vibração**
**Prioridade:** ALTA
**Tempo estimado:** 1 semana
**Foco do fichamento:**
- Conceitos básicos de vibração livre e forçada
- Sistemas de 1 e 2 graus de liberdade
- Análise modal e frequências naturais
- **Conexão com projeto:** Base para entender comportamento dinâmico de rotores

#### **Capítulo 2: Vibração Livre de Sistemas de Múltiplos Graus de Liberdade**
**Prioridade:** ALTA
**Tempo estimado:** 1 semana
**Foco do fichamento:**
- Análise modal de sistemas MDOF
- Matrizes de massa, rigidez e amortecimento
- Modos normais e coordenadas modais
- **Conexão com projeto:** Essencial para modelagem em elementos finitos (ROSS)

#### **Capítulo 3: Vibração Harmônica de Sistemas de Múltiplos Graus de Liberdade**
**Prioridade:** ALTA
**Tempo estimado:** 1 semana
**Foco do fichamento:**
- Resposta forçada harmônica
- Funções de transferência
- Análise de frequência
- **Conexão com projeto:** Base para análise espectral e HOS

#### **Capítulo 4: Vibração Forçada de Sistemas de Múltiplos Graus de Liberdade**
**Prioridade:** MÉDIA
**Tempo estimado:** 1 semana
**Foco do fichamento:**
- Resposta a excitações arbitrárias
- Análise no domínio do tempo
- **Conexão com projeto:** Comportamento transiente de rotores

### **FASE 2: SISTEMAS CONTÍNUOS (Meses 2-3)**
*Integração com: Modelagem e Simulação*

#### **Capítulo 8: Vibração Longitudinal de Barras**
**Prioridade:** MÉDIA
**Tempo estimado:** 1 semana
**Foco do fichamento:**
- Equação de onda unidimensional
- Condições de contorno
- **Conexão com projeto:** Modelagem simplificada de eixos

#### **Capítulo 9: Vibração Transversal de Cordas e Barras**
**Prioridade:** ALTA
**Tempo estimado:** 1 semana
**Foco do fichamento:**
- Equação de Euler-Bernoulli
- Vibração transversal de vigas
- **Conexão com projeto:** Base para modelagem de eixos rotativos

#### **Capítulo 10: Vibração de Vigas**
**Prioridade:** ALTA
**Tempo estimado:** 1 semana
**Foco do fichamento:**
- Teoria de vigas de Timoshenko
- Efeitos de inércia rotacional
- **Conexão com projeto:** Modelagem mais precisa de eixos

### **FASE 3: SISTEMAS ROTATIVOS (Meses 3-4)**
*Integração com: Modelagem de Falhas Específicas*

#### **Capítulo 11: Vibração de Sistemas Rotativos**
**Prioridade:** MUITO ALTA
**Tempo estimado:** 2 semanas
**Foco do fichamento:**
- Efeitos giroscópicos
- Velocidades críticas
- Desbalanceamento
- **Conexão com projeto:** CORAÇÃO do projeto - dinâmica de rotores

#### **Capítulo 12: Vibração de Sistemas com Amortecimento**
**Prioridade:** ALTA
**Tempo estimado:** 1 semana
**Foco do fichamento:**
- Tipos de amortecimento
- Amortecimento viscoso e estrutural
- **Conexão com projeto:** Modelagem de perdas energéticas em rotores

### **FASE 4: ANÁLISE ESPECTRAL (Meses 4-5)**
*Integração com: Processamento de Sinais e HOS*

#### **Capítulo 14: Análise de Vibração**
**Prioridade:** MUITO ALTA
**Tempo estimado:** 2 semanas
**Foco do fichamento:**
- Análise espectral (FFT)
- Densidade espectral de potência
- Análise de ordem
- **Conexão com projeto:** Base para análise HOS

#### **Capítulo 15: Medição e Instrumentação de Vibração**
**Prioridade:** MÉDIA
**Tempo estimado:** 1 semana
**Foco do fichamento:**
- Transdutores de vibração
- Processamento de sinais
- **Conexão com projeto:** Validação de simulações

---

## Cronograma Detalhado de Fichamento

| **Semana** | **Capítulo** | **Foco Principal** | **Produto do Fichamento** | **Integração com Projeto** |
|------------|--------------|-------------------|---------------------------|---------------------------|
| **1** | Cap. 1 | Fundamentos | Resumo conceitual + equações-chave | Base teórica para ROSS |
| **2** | Cap. 2 | MDOF Livre | Análise modal + exemplos | Modelagem em elementos finitos |
| **3** | Cap. 3 | MDOF Harmônico | Funções de transferência | Análise espectral |
| **4** | Cap. 4 | MDOF Forçado | Resposta temporal | Comportamento transiente |
| **5** | Cap. 8 | Barras | Modelagem 1D | Eixos simplificados |
| **6** | Cap. 9 | Vigas Transversais | Euler-Bernoulli | Modelagem de eixos |
| **7** | Cap. 10 | Vigas Avançadas | Timoshenko | Modelagem precisa |
| **8-9** | Cap. 11 | Rotores | **FOCO PRINCIPAL** | **CORAÇÃO DO PROJETO** |
| **10** | Cap. 12 | Amortecimento | Modelagem de perdas | Validação física |
| **11-12** | Cap. 14 | Análise Espectral | **FOCO PRINCIPAL** | **BASE PARA HOS** |
| **13** | Cap. 15 | Instrumentação | Validação | Comparação sim/exp |

---

## Estrutura do Fichamento por Capítulo

### Template de Fichamento:

```markdown
# Fichamento - Capítulo X: [Título]

## Resumo Executivo
[2-3 parágrafos com os conceitos principais]

## Conceitos Fundamentais
- **Conceito 1:** [Definição + aplicação]
- **Conceito 2:** [Definição + aplicação]

## Equações-Chave
### Equação 1: [Nome]
```
[Equação]
```
**Aplicação:** [Como usar no projeto]

## Conexões com o Projeto
### ROSS (Simulação)
- [Como aplicar na modelagem]
- [Parâmetros relevantes]

### HOS (Análise)
- [Relevância para análise espectral]
- [Conceitos para bi-espectro]

### Machine Learning
- [Features que podem ser extraídas]
- [Padrões para classificação]

## Exemplos Práticos
- [Casos de estudo relevantes]
- [Validação com literatura]

## Notas de Implementação
- [Código Python/ROSS]
- [Parâmetros de simulação]
- [Validação numérica]

## Referências Cruzadas
- [Artigos relacionados]
- [Conexões com outros capítulos]
```

---

## Métricas de Progresso

### Indicadores Quantitativos
- **Capítulos fichados:** 13/15 (87% dos relevantes)
- **Equações documentadas:** ~50-70 equações-chave
- **Conexões com projeto:** 100% dos capítulos relevantes
- **Exemplos implementados:** 5-10 casos de validação

### Indicadores Qualitativos
- **Compreensão dos fundamentos:** Capacidade de explicar conceitos
- **Aplicação prática:** Implementação em ROSS
- **Integração metodológica:** Conexão com HOS e ML
- **Validação:** Comparação com literatura

---

## Recursos Complementares

### Software para Validação
- **ROSS:** Implementação dos modelos
- **Python:** Análise dos resultados
- **MATLAB:** Validação de algoritmos (se necessário)

### Literatura de Apoio
- **Friswell et al. (2010):** Dinâmica de Rotores
- **Randall (2011):** Monitoramento de Condição
- **Nikias & Petropulu (1993):** HOS

### Ferramentas de Fichamento
- **Notion/Obsidian:** Organização dos fichamentos
- **LaTeX:** Documentação matemática
- **Git:** Controle de versão dos fichamentos

---

## Considerações Finais

Este plano de fichamento está estrategicamente alinhado com o cronograma do projeto de mestrado, priorizando os capítulos mais relevantes para:

1. **Fundamentação teórica sólida** para modelagem em ROSS
2. **Compreensão profunda** da dinâmica de rotores
3. **Base matemática** para análise HOS
4. **Validação física** das simulações

O fichamento será um **documento vivo**, atualizado conforme o progresso da pesquisa e as descobertas durante a implementação.





