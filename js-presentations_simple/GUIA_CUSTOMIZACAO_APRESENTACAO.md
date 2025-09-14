# 🎨 Guia de Customização de Apresentações

## Como Ajustar Tamanhos e Estilos na Sua Apresentação

### 📋 Índice
1. [Noções Básicas de CSS](#noções-básicas-de-css)
2. [Ajustando Tamanhos de Fonte](#ajustando-tamanhos-de-fonte)
3. [Controlando Espaçamentos](#controlando-espaçamentos)
4. [Personalizando Cores](#personalizando-cores)
5. [Classes Personalizadas](#classes-personalizadas)
6. [Exemplos Práticos](#exemplos-práticos)
7. [Dicas Avançadas](#dicas-avançadas)

---

## 🎯 Noções Básicas de CSS

### Estrutura Básica
```css
seletor {
    propriedade: valor;
}
```

### Seletores Comuns no Seu Arquivo
- `.reveal h1` - Títulos principais
- `.reveal h2` - Títulos de seção
- `.reveal p` - Parágrafos
- `.reveal li` - Itens de lista
- `.reveal .highlight` - Texto destacado

---

## 📏 Ajustando Tamanhos de Fonte

### Tamanhos Atuais e Como Modificar

| Elemento | Tamanho Atual | Exemplos de Alteração |
|----------|---------------|----------------------|
| **Título Principal (h1)** | `2.2em` | `1.8em` (menor) ou `3em` (maior) |
| **Título de Seção (h2)** | `1.8em` | `1.5em` (menor) ou `2.2em` (maior) |
| **Subtítulo (h3)** | `1.4em` | `1.2em` (menor) ou `1.6em` (maior) |
| **Texto do Parágrafo** | `0.9em` | `0.8em` (menor) ou `1.1em` (maior) |
| **Itens de Lista** | `0.85em` | `0.75em` (menor) ou `1em` (maior) |

### Como Fazer a Alteração
1. Abra o arquivo `proposta.html`
2. Encontre a seção `<style>` (linhas 11-128)
3. Localize a propriedade `font-size` que deseja alterar
4. Mude o valor (ex: de `2.2em` para `2.5em`)
5. Salve o arquivo e recarregue no navegador

---

## 📐 Controlando Espaçamentos

### Propriedades de Espaçamento

| Propriedade | O que Controla | Valores Sugeridos |
|-------------|----------------|-------------------|
| `margin-top` | Espaço acima | `10px`, `20px`, `30px` |
| `margin-bottom` | Espaço abaixo | `10px`, `20px`, `30px` |
| `padding` | Espaço interno | `10px`, `15px`, `20px` |
| `line-height` | Espaçamento entre linhas | `1.2` (apertado), `1.4` (normal), `1.6` (soltinho) |

### Exemplos de Uso
```css
/* Espaço entre itens de lista */
.reveal li {
    margin-bottom: 20px; /* Aumenta espaço entre itens */
}

/* Espaço entre parágrafos */
.reveal p {
    margin-bottom: 25px; /* Mais espaço entre parágrafos */
}

/* Espaçamento das linhas */
.reveal li {
    line-height: 1.5; /* Linhas mais espaçadas */
}
```

---

## 🎨 Personalizando Cores

### Sistema de Cores Atual

| Elemento | Cor Atual | Código | Alternativas |
|----------|-----------|--------|--------------|
| **Títulos** | Azul escuro | `#2c3e50` | `#34495e`, `#2c3e50` |
| **Título Principal** | Vermelho | `#e74c3c` | `#c0392b`, `#e67e22` |
| **Destaque** | Laranja | `#f39c12` | `#e74c3c` (vermelho), `#27ae60` (verde) |
| **Caixas Metodologia** | Azul | `#3498db` | `#e74c3c` (vermelho), `#27ae60` (verde) |

### Paleta de Cores Sugeridas

#### Cores Primárias
- **Azul**: `#3498db`, `#2980b9`, `#2c3e50`
- **Verde**: `#27ae60`, `#2ecc71`, `#16a085`
- **Vermelho**: `#e74c3c`, `#c0392b`, `#e67e22`
- **Roxo**: `#8e44ad`, `#9b59b6`, `#663399`

#### Cores de Fundo
- **Branco**: `#ffffff`
- **Cinza Claro**: `#f8f9fa`, `#ecf0f1`
- **Cinza Médio**: `#e9ecef`, `#dee2e6`

### Como Alterar Cores
```css
/* Mudar cor dos títulos */
.reveal h1, .reveal h2, .reveal h3 {
    color: #27ae60; /* Verde em vez de azul */
}

/* Mudar cor de destaque */
.reveal .highlight {
    background-color: #e74c3c; /* Vermelho em vez de laranja */
}

/* Mudar fundo geral */
.reveal {
    background-color: #f8f9fa; /* Cinza claro em vez de branco */
}
```

---

## 🏷️ Classes Personalizadas

### Classes Disponíveis

#### Classes de Cor de Texto
```html
<span class="text-primary">Texto azul escuro</span>
<span class="text-success">Texto verde</span>
<span class="text-warning">Texto laranja</span>
<span class="text-danger">Texto vermelho</span>
```

#### Classes de Caixas
```html
<div class="custom-box">
    Conteúdo em caixa azul
</div>

<div class="methodology-step">
    Passo da metodologia
</div>
```

#### Classe de Destaque
```html
<span class="highlight">Texto destacado</span>
```

---

## 💡 Exemplos Práticos

### Exemplo 1: Títulos Maiores
```css
.reveal h1 {
    font-size: 3em; /* Títulos muito grandes */
}
.reveal h2 {
    font-size: 2.2em; /* Subtítulos grandes */
}
```

### Exemplo 2: Mais Espaçamento
```css
.reveal li {
    margin-bottom: 25px; /* Mais espaço entre itens */
    line-height: 1.6; /* Linhas mais espaçadas */
}
```

### Exemplo 3: Tema Verde
```css
.reveal h1, .reveal h2, .reveal h3 {
    color: #27ae60; /* Verde para títulos */
}
.reveal .highlight {
    background-color: #2ecc71; /* Verde claro para destaque */
}
```

### Exemplo 4: Fundo Colorido
```css
.reveal {
    background-color: #f8f9fa; /* Fundo cinza claro */
}
.reveal .slides section {
    background-color: #ffffff; /* Slides brancos */
    border-radius: 10px; /* Bordas arredondadas */
    box-shadow: 0 2px 10px rgba(0,0,0,0.1); /* Sombra sutil */
}
```

---

## 🚀 Dicas Avançadas

### 1. Responsividade
```css
/* Para telas pequenas */
@media (max-width: 768px) {
    .reveal h1 {
        font-size: 1.8em; /* Títulos menores em mobile */
    }
}
```

### 2. Animações
```css
.reveal .custom-box {
    transition: all 0.3s ease; /* Transição suave */
}
.reveal .custom-box:hover {
    transform: scale(1.05); /* Aumenta ao passar o mouse */
}
```

### 3. Bordas e Sombras
```css
.reveal .methodology-step {
    border-radius: 8px; /* Bordas arredondadas */
    box-shadow: 0 2px 8px rgba(0,0,0,0.1); /* Sombra sutil */
}
```

### 4. Gradientes
```css
.reveal .custom-box {
    background: linear-gradient(135deg, #3498db, #2980b9); /* Gradiente azul */
}
```

---

## 🔧 Como Aplicar as Mudanças

### Passo a Passo
1. **Abra** o arquivo `proposta.html` no seu editor
2. **Localize** a seção `<style>` (entre as linhas 11-128)
3. **Encontre** a propriedade que deseja alterar
4. **Modifique** o valor conforme desejado
5. **Salve** o arquivo (Ctrl+S)
6. **Recarregue** a página no navegador (F5)

### Dicas Importantes
- ✅ Sempre faça backup antes de grandes mudanças
- ✅ Teste as mudanças em diferentes tamanhos de tela
- ✅ Use valores proporcionais (em, %) para melhor responsividade
- ✅ Mantenha consistência visual em toda a apresentação

---

## 📱 Testando Suas Mudanças

### Como Visualizar
1. Abra o arquivo `proposta.html` no navegador
2. Use as setas do teclado para navegar
3. Pressione `F11` para tela cheia
4. Use `Esc` para sair da tela cheia

### Navegação
- **Setas**: Navegar entre slides
- **Espaço**: Próximo slide
- **Shift+Espaço**: Slide anterior
- **Home**: Primeiro slide
- **End**: Último slide

---

## 🎯 Resumo Rápido

### Para Aumentar Tamanhos
- Títulos: `font-size: 2.5em` ou `3em`
- Texto: `font-size: 1em` ou `1.1em`
- Espaçamento: `margin-bottom: 25px`

### Para Diminuir Tamanhos
- Títulos: `font-size: 1.8em` ou `1.5em`
- Texto: `font-size: 0.8em` ou `0.75em`
- Espaçamento: `margin-bottom: 10px`

### Para Mudar Cores
- Títulos: `color: #27ae60` (verde)
- Destaque: `background-color: #e74c3c` (vermelho)
- Fundo: `background-color: #f8f9fa` (cinza claro)

---

*💡 Lembre-se: Pequenas mudanças podem ter grande impacto visual. Teste sempre antes de apresentar!*
