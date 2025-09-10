# =============================================================================
# MAKEFILE PARA DISSERTAÇÃO EM LATEX
# =============================================================================

# Configurações
MAIN = main
TEX = $(MAIN).tex
PDF = $(MAIN).pdf
LATEX = pdflatex
BIBTEX = bibtex
VIEWER = start

# Diretórios
CHAPTERS_DIR = chapters
FIGURES_DIR = figures
TABLES_DIR = tables
BIBLIOGRAPHY_DIR = bibliography
STYLES_DIR = styles
FRONTMATTER_DIR = frontmatter
BACKMATTER_DIR = backmatter

# Arquivos auxiliares para limpeza
AUX_FILES = *.aux *.bbl *.blg *.log *.out *.toc *.lof *.lot *.fdb_latexmk *.fls *.synctex.gz

# =============================================================================
# REGRAS PRINCIPAIS
# =============================================================================

# Compilação completa (padrão)
all: $(PDF)

# Compilação rápida (sem bibliografia)
quick: 
	$(LATEX) $(TEX)
	$(LATEX) $(TEX)

# Compilação completa com bibliografia
$(PDF): $(TEX)
	@echo "Compilando LaTeX..."
	$(LATEX) $(TEX)
	@echo "Processando bibliografia..."
	$(BIBTEX) $(MAIN)
	@echo "Segunda compilação..."
	$(LATEX) $(TEX)
	@echo "Terceira compilação (referências cruzadas)..."
	$(LATEX) $(TEX)
	@echo "Compilação concluída: $(PDF)"

# Visualizar o PDF
view: $(PDF)
	$(VIEWER) $(PDF)

# Compilação contínua (para desenvolvimento)
watch:
	@echo "Iniciando compilação contínua..."
	@echo "Pressione Ctrl+C para parar"
	latexmk -pdf -pvc $(TEX)

# =============================================================================
# UTILITÁRIOS
# =============================================================================

# Limpar arquivos auxiliares
clean:
	@echo "Limpando arquivos auxiliares..."
	rm -f $(AUX_FILES)

# Limpar tudo (incluindo PDF)
distclean: clean
	@echo "Limpando arquivo PDF..."
	rm -f $(PDF)

# Verificar estrutura de diretórios
check-structure:
	@echo "Verificando estrutura de diretórios..."
	@for dir in $(CHAPTERS_DIR) $(FIGURES_DIR) $(TABLES_DIR) $(BIBLIOGRAPHY_DIR) $(STYLES_DIR) $(FRONTMATTER_DIR) $(BACKMATTER_DIR); do \
		if [ ! -d "$$dir" ]; then \
			echo "Criando diretório: $$dir"; \
			mkdir -p "$$dir"; \
		else \
			echo "Diretório existe: $$dir"; \
		fi \
	done

# Contar palavras (aproximado)
wordcount:
	@echo "Contando palavras..."
	@detex $(TEX) | wc -w

# Verificar erros de compilação
check:
	@echo "Verificando erros de compilação..."
	$(LATEX) $(TEX) 2>&1 | grep -i error || echo "Nenhum erro encontrado"

# =============================================================================
# AJUDA
# =============================================================================

help:
	@echo "Comandos disponíveis:"
	@echo "  make          - Compilação completa"
	@echo "  make quick    - Compilação rápida (sem bibliografia)"
	@echo "  make view     - Visualizar PDF"
	@echo "  make watch    - Compilação contínua"
	@echo "  make clean    - Limpar arquivos auxiliares"
	@echo "  make distclean- Limpar tudo (incluindo PDF)"
	@echo "  make check    - Verificar erros"
	@echo "  make wordcount- Contar palavras"
	@echo "  make help     - Mostrar esta ajuda"

# =============================================================================
# REGRAS FALSAS
# =============================================================================

.PHONY: all quick view watch clean distclean check-structure wordcount check help
