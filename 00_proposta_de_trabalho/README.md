# Proposta de Trabalho - Mestrado

Este diretório contém os arquivos relacionados à proposta de trabalho para a inscrição no mestrado do programa pós-gradução em Engenharia Mecânica (POSMEC) da UFU.

Documento enviado anexado em **31/11/2025**.

## 📋 Conteúdo

- **`00_proposta_de_trabalho.tex`** - Documento LaTeX principal com a proposta de trabalho
- **`00_proposta_de_trabalho.pdf`** - PDF gerado a partir do arquivo LaTeX
- **`references.bib`** - Arquivo de bibliografia em formato BibTeX
- **`Makefile`** - Script de automação para compilação do documento
- **`README.md`** - Este arquivo de documentação

## 🛠️ Compilação do Documento

### Pré-requisitos

- LaTeX (pdflatex)
- BibTeX
- Make (opcional, mas recomendado)

### Comandos Disponíveis

```bash
# Compilação completa (com bibliografia)
make

# Compilação rápida (sem bibliografia)
make quick

# Limpeza de arquivos auxiliares
make clean

# Limpeza completa (incluindo PDF)
make distclean

# Visualizar PDF (macOS)
make view

# Visualizar PDF (Linux)
make view-linux

# Verificar erros
make check

# Contar palavras
make wordcount

# Modo watch (recompilação automática)
make watch

# Ajuda
make help
```

### Compilação Manual

Se preferir compilar manualmente:

```bash
# Primeira passada
pdflatex 00_proposta_de_trabalho.tex

# Processar bibliografia
bibtex 00_proposta_de_trabalho

# Segunda e terceira passadas
pdflatex 00_proposta_de_trabalho.tex
pdflatex 00_proposta_de_trabalho.tex
```

## 📝 Estrutura do Documento

O documento LaTeX está estruturado com:

- Configuração para português brasileiro
- Formatação ABNT-like
- Suporte a links clicáveis
- Integração com bibliografia BibTeX
- Seções sobre título, proposta e plano de trabalho

## 🔧 Personalização

Para modificar o documento:

1. Edite `00_proposta_de_trabalho.tex` para alterar o conteúdo
2. Adicione referências em `references.bib`
3. Execute `make` para recompilar
4. Use `make view` para visualizar o resultado