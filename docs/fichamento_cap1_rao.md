# Fichamento - Capítulo 1: Fundamentos de Vibração

## Resumo Executivo

O Capítulo 1 estabelece os fundamentos matemáticos e físicos essenciais para o estudo de vibrações mecânicas. O capítulo introduz os conceitos de vibração livre e forçada em sistemas de um e dois graus de liberdade, estabelecendo a base para análises mais complexas de sistemas rotativos. Os conceitos de frequência natural, amortecimento e ressonância são fundamentais para compreender o comportamento dinâmico de máquinas rotativas e suas respostas a diferentes condições operacionais.

Este capítulo é crucial para o projeto pois fornece a base teórica para entender como falhas (como trincas e desalinhamentos) alteram as características dinâmicas de um sistema rotativo, modificando suas frequências naturais e padrões de resposta.

## Conceitos Fundamentais

- **Vibração Livre:** Movimento oscilatório de um sistema sem forças externas aplicadas, determinado apenas pelas condições iniciais e propriedades do sistema (massa, rigidez, amortecimento).

- **Vibração Forçada:** Movimento resultante da aplicação de forças externas periódicas ou não-periódicas ao sistema.

- **Frequência Natural:** Frequência característica de oscilação de um sistema em vibração livre, dependente da relação entre rigidez e massa.

- **Amortecimento:** Mecanismo de dissipação de energia que reduz a amplitude das vibrações ao longo do tempo.

- **Ressonância:** Fenômeno que ocorre quando a frequência de excitação se aproxima da frequência natural do sistema, resultando em amplitudes de vibração significativamente aumentadas.

## Equações-Chave

### Equação 1: Frequência Natural de Sistema de 1 GDL
```
ωn = √(k/m)
```
**Aplicação:** Cálculo da frequência natural de componentes individuais do rotor (discos, mancais) para análise modal.

### Equação 2: Equação de Movimento - Sistema de 1 GDL Amortecido
```
mẍ + cẋ + kx = F(t)
```
**Aplicação:** Base para modelagem de elementos individuais do sistema rotativo em ROSS.

### Equação 3: Fator de Amortecimento
```
ζ = c/(2√(km)) = c/(2mωn)
```
**Aplicação:** Parâmetro crucial para modelagem de perdas energéticas em rotores (mancais, selos, etc.).

### Equação 4: Frequência Natural Amortecida
```
ωd = ωn√(1-ζ²)
```
**Aplicação:** Frequência real de oscilação considerando amortecimento, importante para análise de estabilidade de rotores.

### Equação 5: Amplitude de Resposta em Ressonância
```
X = F0/(2ζk)
```
**Aplicação:** Estimativa de amplitudes máximas em velocidades críticas do rotor.

## Conexões com o Projeto

### ROSS (Simulação)
- **Modelagem de Elementos:** As equações de 1 GDL servem como base para modelar elementos individuais (discos, eixos, mancais) no ROSS.
- **Condições Iniciais:** Compreensão de vibração livre é essencial para definir condições iniciais adequadas nas simulações.
- **Parâmetros de Amortecimento:** O fator ζ é crucial para modelar realisticamente as perdas energéticas do sistema.

### HOS (Análise)
- **Frequências Características:** As frequências naturais identificadas nas simulações ROSS serão os pontos focais para análise de bi-espectro.
- **Não-linearidades:** Compreensão da resposta linear é fundamental para identificar desvios não-lineares causados por falhas.
- **Ressonâncias:** Picos de ressonância são pontos críticos onde falhas podem gerar assinaturas HOS mais pronunciadas.

### Machine Learning
- **Features de Frequência:** Frequências naturais e amortecidas podem ser features importantes para classificação.
- **Amplitudes de Resposta:** Valores de amplitude em diferentes frequências são indicadores de condição.
- **Parâmetros Modais:** Frequências naturais, fatores de amortecimento e formas modais são características distintivas entre condições normais e com falhas.

## Exemplos Práticos

### Exemplo 1: Disco de Rotor
**Sistema:** Disco de massa m = 10 kg, rigidez equivalente k = 1×10⁶ N/m
**Cálculo:** ωn = √(1×10⁶/10) = 316.2 rad/s = 50.3 Hz
**Aplicação:** Frequência natural do disco para análise modal em ROSS

### Exemplo 2: Sistema com Amortecimento
**Parâmetros:** m = 5 kg, k = 2×10⁵ N/m, c = 100 N⋅s/m
**Cálculo:** ζ = 100/(2×√(2×10⁵×5)) = 0.158 (subamortecido)
**Aplicação:** Modelagem de mancal com amortecimento viscoso

### Exemplo 3: Resposta Forçada
**Excitação:** F(t) = 100 sin(50t) N
**Sistema:** m = 2 kg, k = 5×10⁴ N/m, c = 20 N⋅s/m
**Aplicação:** Simulação de desbalanceamento em rotor

## Notas de Implementação

### Código Python para Validação
```python
import numpy as np
import matplotlib.pyplot as plt

def sistema_1gdl(m, k, c, F0, omega, t):
    """
    Simula resposta de sistema de 1 GDL
    """
    wn = np.sqrt(k/m)
    zeta = c/(2*np.sqrt(k*m))
    wd = wn*np.sqrt(1-zeta**2)
    
    # Resposta forçada harmônica
    X = F0/np.sqrt((k-m*omega**2)**2 + (c*omega)**2)
    phi = np.arctan2(c*omega, k-m*omega**2)
    
    return X, phi, wn, zeta, wd

# Exemplo de uso
m, k, c = 10, 1e6, 100  # kg, N/m, N⋅s/m
F0, omega = 1000, 300   # N, rad/s
t = np.linspace(0, 1, 1000)

X, phi, wn, zeta, wd = sistema_1gdl(m, k, c, F0, omega, t)
print(f"Frequência natural: {wn:.2f} rad/s")
print(f"Fator de amortecimento: {zeta:.3f}")
print(f"Amplitude de resposta: {X:.6f} m")
```

### Parâmetros para ROSS
```python
# Exemplo de definição de elemento em ROSS
elemento_disco = {
    'massa': 10.0,           # kg
    'rigidez': 1e6,          # N/m
    'amortecimento': 100,    # N⋅s/m
    'frequencia_natural': np.sqrt(1e6/10)  # rad/s
}
```

### Validação Numérica
- **Convergência:** Verificar se as frequências naturais calculadas convergem com aumento do número de elementos
- **Conservação de Energia:** Validar que a energia total do sistema é conservada em vibração livre
- **Ressonância:** Confirmar que amplitudes máximas ocorrem em ω ≈ ωn

## Referências Cruzadas

### Conexões com Outros Capítulos
- **Capítulo 2:** Extensão para sistemas MDOF
- **Capítulo 11:** Aplicação específica em rotores
- **Capítulo 14:** Base para análise espectral

### Artigos Relacionados
- Friswell et al. (2010) - Aplicação em dinâmica de rotores
- Randall (2011) - Monitoramento de condição baseado em vibração
- Muszynska (2005) - Vibrações em máquinas rotativas

### Validação Experimental
- Comparar frequências naturais calculadas com medições experimentais
- Validar fatores de amortecimento com testes de decaimento livre
- Verificar amplitudes de ressonância com testes de sweep de frequência

## Aplicações Específicas no Projeto

### 1. Modelagem de Falhas
- **Trinca:** Modifica a rigidez local, alterando frequências naturais
- **Desalinhamento:** Introduz forças de excitação, afetando amplitudes de resposta
- **Desbalanceamento:** Cria excitação síncrona, amplificando respostas em ressonância

### 2. Análise HOS
- **Bi-espectro:** Identifica interações não-lineares entre frequências naturais
- **Tri-espectro:** Detecta acoplamentos de ordem superior
- **Assinaturas:** Padrões característicos em diferentes condições de falha

### 3. Classificação ML
- **Features:** Frequências naturais, fatores de amortecimento, amplitudes
- **Padrões:** Variações desses parâmetros indicam tipo e severidade de falha
- **Validação:** Comparação com dados experimentais da literatura

---

**Data do Fichamento:** [Data atual]
**Próximo Capítulo:** Capítulo 2 - Vibração Livre de Sistemas de Múltiplos Graus de Liberdade
**Tempo de Estudo:** 1 semana
**Status:** ✅ Concluído




