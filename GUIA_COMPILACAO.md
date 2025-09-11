# Guia de Compilação - Dissertação e Apresentações

Este guia explica como compilar e executar tanto a dissertação em LaTeX quanto as apresentações em JavaScript.

## 📋 Índice

- [📚 Compilação da Dissertação em LaTeX](#-compilação-da-dissertação-em-latex)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação no Windows](#instalação-no-windows)
  - [Instalação no Linux](#instalação-no-linux)
  - [Instalação no macOS](#instalação-no-macos)
- [🎨 Compilação das Apresentações em JavaScript](#-compilação-das-apresentações-em-javascript)
  - [Pré-requisitos](#pré-requisitos-1)
  - [Instalação](#instalação)
  - [Execução](#execução)
- [🔧 Scripts e Comandos](#-scripts-e-comandos)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [❗ Solução de Problemas](#-solução-de-problemas)


## 📚 Compilação da Dissertação em LaTeX

### Pré-requisitos

1. **LaTeX Distribution:**
   - **Windows:** MiKTeX ou TeX Live
   - **Linux:** TeX Live
   - **macOS:** MacTeX

2. **Ferramentas adicionais:**
   - `make` (para usar o Makefile)
   - `bibtex` (para bibliografia)
   - `pdflatex` (compilador principal)

### Instalação no Windows

1. **Instalar MiKTeX:**
   ```bash
   # Baixar e instalar MiKTeX do site oficial
   # https://miktex.org/download
   ```

2. **Instalar Make:**
   ```bash
   # Opção 1: Usar Chocolatey
   choco install make

   # Opção 2: Usar WSL (Windows Subsystem for Linux)
   wsl --install

   # Opção 3: Usar MinGW-w64
   pacman -S mingw-w64-x86_64-toolchain make
   ```

### Instalação no Linux

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install texlive-full make

# CentOS/RHEL/Fedora
sudo dnf install texlive-scheme-full make
# ou
sudo yum install texlive-scheme-full make
```

### Instalação no macOS

```bash
# Usar Homebrew
brew install --cask mactex
brew install make
```

### Compilação da Dissertação

1. **Navegar para o diretório:**
   ```bash
   cd latex-dissertation
   ```

2. **Verificar estrutura:**
   
   Este comando verifica se todos os arquivos necessários estão presentes e organizados corretamente. Ele valida a estrutura de diretórios, a presença dos arquivos principais como `main.tex`, e a existência das pastas de capítulos, figuras e referências. É útil executar antes da primeira compilação para identificar possíveis problemas de organização.
   ```bash
   make check-structure
   ```

3. **Compilação completa:**
   ```bash
   make
   ```

4. **Compilação rápida (sem bibliografia):**
   ```bash
   make quick
   ```

5. **Compilação contínua (para desenvolvimento):**
   
   Este comando monitora automaticamente as alterações nos arquivos LaTeX e recompila o documento sempre que detecta mudanças. É especialmente útil durante a escrita, pois permite ver as alterações em tempo real sem necessidade de executar manualmente o comando de compilação a cada modificação.
   ```bash
   make watch
   ```

6. **Visualizar o PDF:**
   ```bash
   make view
   ```

### Comandos Úteis do Makefile

```bash
# Limpar arquivos auxiliares
make clean

# Limpar tudo (incluindo PDF)
make distclean

# Verificar erros de compilação
make check

# Contar palavras
make wordcount

# Mostrar ajuda
make help
```

### Estrutura de Arquivos LaTeX

```
latex-dissertation/
├── main.tex                 # Arquivo principal
├── Makefile                 # Script de compilação
├── chapters/                # Capítulos da dissertação
│   ├── introducao.tex
│   ├── revisao-literatura.tex
│   ├── metodologia.tex
│   ├── resultados-discussao.tex
│   └── conclusao.tex
├── frontmatter/             # Elementos pré-textuais
│   ├── capa.tex
│   ├── folha-rosto.tex
│   ├── resumo.tex
│   ├── abstract.tex
│   └── listas.tex
├── backmatter/              # Elementos pós-textuais
│   ├── referencias.tex
│   └── apendices.tex
├── bibliography/            # Arquivos de bibliografia
│   └── referencias.bib
├── figures/                 # Figuras e imagens
├── tables/                  # Tabelas
└── styles/                  # Estilos personalizados
```

## 🎯 Compilação das Apresentações em JavaScript

### Pré-requisitos

1. **Node.js (versão 16 ou superior):**
   - Baixar de: https://nodejs.org/
   - Verificar instalação: `node --version`

2. **npm (geralmente vem com Node.js):**
   - Verificar instalação: `npm --version`

### Instalação das Dependências

1. **Navegar para o diretório:**
   ```bash
   cd js-presentations
   ```

2. **Instalar dependências:**
   ```bash
   npm install
   ```

### Execução das Apresentações

1. **Iniciar o servidor:**
   ```bash
   npm start
   ```

2. **Modo desenvolvimento (com auto-reload):**
   ```bash
   npm run dev
   ```

3. **Acessar as apresentações:**
   - Página inicial: http://localhost:3000
   - Defesa: http://localhost:3000/defesa
   - Qualificação: http://localhost:3000/qualificacao
   - Progresso: http://localhost:3000/progresso

### Scripts Disponíveis

```bash
# Iniciar servidor
npm start

# Modo desenvolvimento
npm run dev

# Compilar assets
npm run build

# Compilar em modo desenvolvimento
npm run build:dev

# Compilar com watch
npm run watch

# Servir arquivos estáticos
npm run serve

# Gerar apresentação específica
npm run presentation:defesa
npm run presentation:qualificacao
npm run presentation:progresso
```

### Estrutura de Arquivos JavaScript

```
js-presentations/
├── package.json             # Configuração do projeto
├── src/                     # Código fonte
│   └── server.js           # Servidor Express
├── public/                  # Arquivos públicos
│   ├── index.html          # Página inicial
│   ├── defesa.html         # Apresentação de defesa
│   ├── qualificacao.html   # Apresentação de qualificação
│   └── progresso.html      # Apresentação de progresso
├── slides/                  # Dados das apresentações
│   ├── defesa.json
│   ├── qualificacao.json
│   └── progresso.json
├── scripts/                 # Scripts utilitários
│   └── generate-presentation.js
├── assets/                  # Recursos (imagens, etc.)
└── node_modules/           # Dependências (gerado automaticamente)
```

## 🔧 Solução de Problemas

### Problemas com LaTeX

1. **Erro de pacote não encontrado:**
   ```bash
   # Instalar pacotes automaticamente (MiKTeX)
   # Ou instalar manualmente:
   tlmgr install <nome-do-pacote>
   ```

2. **Erro de compilação:**
   ```bash
   # Verificar erros
   make check
   
   # Limpar arquivos auxiliares
   make clean
   
   # Tentar compilação novamente
   make
   ```

3. **Problemas com bibliografia:**
   ```bash
   # Compilar sequência completa
   pdflatex main.tex
   bibtex main
   pdflatex main.tex
   pdflatex main.tex
   ```

### Problemas com JavaScript

1. **Erro de dependências:**
   ```bash
   # Limpar cache e reinstalar
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Porta já em uso:**
   ```bash
   # Usar porta diferente
   PORT=3001 npm start
   ```

3. **Erro de permissão:**
   ```bash
   # No Linux/macOS, pode ser necessário:
   sudo npm install -g <pacote>
   ```

## 📝 Personalização

### Personalizar LaTeX

1. **Modificar estilo:**
   - Editar arquivos em `styles/`
   - Ajustar `main.tex` para incluir novos estilos

2. **Adicionar capítulos:**
   - Criar novo arquivo em `chapters/`
   - Incluir no `main.tex`

3. **Modificar bibliografia:**
   - Editar `bibliography/referencias.bib`
   - Usar `\cite{chave}` no texto

### Personalizar Apresentações

1. **Modificar slides:**
   - Editar arquivos JSON em `slides/`
   - Regenerar apresentação: `npm run presentation:<tipo>`

2. **Adicionar novos tipos:**
   - Criar novo arquivo JSON em `slides/`
   - Adicionar rota no `server.js`
   - Criar template HTML

3. **Personalizar visual:**
   - Modificar CSS nos arquivos HTML
   - Adicionar novos estilos

## 🚀 Dicas de Produtividade

### Para LaTeX

1. **Use o modo watch para desenvolvimento:**
   ```bash
   make watch
   ```

2. **Organize figuras e tabelas:**
   - Mantenha arquivos organizados em `figures/` e `tables/`
   - Use nomes descritivos

3. **Versionamento:**
   - Use Git para controle de versão
   - Ignore arquivos auxiliares: `*.aux`, `*.log`, etc.

### Para JavaScript

1. **Desenvolvimento ativo:**
   ```bash
   npm run dev
   ```

2. **Controle remoto:**
   - Use WebSocket para controle remoto das apresentações
   - Acesse de diferentes dispositivos na mesma rede

3. **Geração automática:**
   - Use scripts para gerar apresentações dinamicamente
   - Mantenha dados separados da apresentação

## 📞 Suporte

Para problemas específicos:

1. **LaTeX:** Consulte a documentação do pacote ou distribuição
2. **JavaScript:** Verifique logs do servidor e console do navegador
3. **Makefile:** Use `make help` para ver comandos disponíveis

## 📋 Checklist de Compilação

### LaTeX
- [ ] LaTeX distribution instalada
- [ ] Make instalado
- [ ] Estrutura de diretórios criada
- [ ] Dependências verificadas
- [ ] Compilação bem-sucedida
- [ ] PDF gerado corretamente

### JavaScript
- [ ] Node.js instalado (v16+)
- [ ] Dependências instaladas (`npm install`)
- [ ] Servidor iniciado (`npm start`)
- [ ] Apresentações acessíveis no navegador
- [ ] Funcionalidades testadas

---

**Boa sorte com sua dissertação! 🎓**
