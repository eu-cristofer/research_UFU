# Configurações
MAIN = dissertation
TEX = $(MAIN).tex
PDF = $(MAIN).pdf
LATEX = pdflatex

# Arquivos auxiliares para limpeza
AUX_FILES = *.aux *.bbl *.blg *.log *.out *.toc *.lof *.lot *.fdb_latexmk *.fls *.synctex.gz

# =============================================================================
# REGRAS PRINCIPAIS
# =============================================================================

# Standard compilation
std:
	@echo "Compilando $(TEX)..."
	$(LATEX) $(TEX)
	$(LATEX) $(TEX)
	@echo "Compilação concluída: $(PDF)"

# Compilação simples do teste
teste:
	@echo "Compilando $(TEX)..."
	$(LATEX) $(TEX)
	$(LATEX) $(TEX)
	@echo "Compilação concluída: $(PDF)"

# Limpar arquivos auxiliares do teste
clean:
	@echo "Limpando arquivos auxiliares de: $(TEX)..."
	rm -f $(AUX_FILES)