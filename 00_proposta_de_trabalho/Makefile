# Makefile for LaTeX Proposal Document
# Usage: make [target]

# Variables
# --- Document identity -------------------------------------------------------
# DATE drives the name of the final, versioned PDF (e.g. 2026.05.22_proposta_de_trabalho.pdf).
# Bump DATE for each new revision. The LaTeX source keeps a stable, dot-free
# name (00_proposta_de_trabalho.tex) so pdflatex/bibtex jobname and .aux
# resolution stay reliable.
DATE     = 2026.05.22
DOCNAME  = proposta_de_trabalho
TEX_FILE = 00_$(DOCNAME)
MAIN_TEX = $(TEX_FILE).tex
BIB_FILE = references.bib

# BUILD_PDF is the raw pdflatex output; PDF_FILE is the dated artifact we ship.
BUILD_PDF = $(TEX_FILE).pdf
PDF_FILE  = $(DATE)_$(DOCNAME).pdf

# Compiler settings
LATEX = pdflatex
BIBTEX = bibtex
LATEX_FLAGS = -interaction=nonstopmode -file-line-error

# Default target
.PHONY: all
all: $(PDF_FILE)

# Main compilation target: builds the final dated PDF from LaTeX source and bibliography.
$(PDF_FILE): $(MAIN_TEX) $(BIB_FILE)
	@echo "Compiling LaTeX document..."
	$(LATEX) $(LATEX_FLAGS) $(MAIN_TEX)  		# First pdflatex run (generates .aux and other files).
	@if [ -f $(TEX_FILE).aux ]; then \
		echo "Processing bibliography..."; \
		$(BIBTEX) $(TEX_FILE); \
		$(LATEX) $(LATEX_FLAGS) $(MAIN_TEX); \
		$(LATEX) $(LATEX_FLAGS) $(MAIN_TEX); \
	fi
	@mv -f $(BUILD_PDF) $(PDF_FILE)            # Rename raw output to the dated artifact.
	@echo "Compilation complete: $(PDF_FILE)" # Notify about completion and output PDF name.

# Quick compilation (without bibliography)
.PHONY: quick
quick: $(MAIN_TEX)
	@echo "Quick compilation (no bibliography)..."
	$(LATEX) $(LATEX_FLAGS) $(MAIN_TEX)
	@mv -f $(BUILD_PDF) $(PDF_FILE)
	@echo "Quick compilation complete: $(PDF_FILE)"

# Clean auxiliary files (keeps the dated PDF, drops the raw build PDF)
.PHONY: clean
clean:
	@echo "Cleaning auxiliary files..."
	rm -f *.aux *.log *.out *.toc *.lof *.lot *.bbl *.blg *.fdb_latexmk *.fls *.synctex.gz $(BUILD_PDF)
	@echo "Clean complete"

# Clean everything including PDF
.PHONY: distclean
distclean: clean
	@echo "Removing PDF file..."
	rm -f $(PDF_FILE)
	@echo "Distclean complete"

# View the PDF (macOS)
.PHONY: view
view: $(PDF_FILE)
	@echo "Opening PDF..."
	open $(PDF_FILE)

# View the PDF (Linux)
.PHONY: view-linux
view-linux: $(PDF_FILE)
	@echo "Opening PDF..."
	xdg-open $(PDF_FILE)

# Check for errors
.PHONY: check
check: $(MAIN_TEX)
	@echo "Checking for LaTeX errors..."
	$(LATEX) $(LATEX_FLAGS) $(MAIN_TEX) 2>&1 | grep -E "(Error|Warning|Undefined)" || echo "No errors found"

# Word count
.PHONY: wordcount
wordcount: $(PDF_FILE)
	@echo "Counting words..."
	@if command -v texcount >/dev/null 2>&1; then \
		texcount $(MAIN_TEX); \
	else \
		echo "texcount not found. Install with: brew install texcount"; \
	fi

# Watch mode (recompile on changes)
.PHONY: watch
watch:
	@echo "Starting watch mode (Ctrl+C to stop)..."
	@if command -v fswatch >/dev/null 2>&1; then \
		fswatch -o $(MAIN_TEX) $(BIB_FILE) | while read; do \
			echo "File changed, recompiling..."; \
			make quick; \
		done; \
	else \
		echo "fswatch not found. Install with: brew install fswatch"; \
		echo "Or use: make watch-manual"; \
	fi

# Manual watch mode (alternative)
.PHONY: watch-manual
watch-manual:
	@echo "Manual watch mode - press Enter to recompile, Ctrl+C to stop"
	@while true; do \
		read -p "Press Enter to recompile..."; \
		make quick; \
	done

# Help
.PHONY: help
help:
	@echo "Available targets:"
	@echo "  all          - Compile the document with bibliography (default)"
	@echo "  quick        - Quick compilation without bibliography"
	@echo "  clean        - Remove auxiliary files (and the raw build PDF)"
	@echo "  distclean    - Remove all generated files including the dated PDF"
	@echo "  view         - Open PDF in default viewer (macOS)"
	@echo "  view-linux   - Open PDF in default viewer (Linux)"
	@echo "  check        - Check for LaTeX errors"
	@echo "  wordcount    - Count words in document"
	@echo "  watch        - Auto-recompile on file changes"
	@echo "  watch-manual - Manual recompile mode"
	@echo "  help         - Show this help message"
	@echo ""
	@echo "Output PDF: $(PDF_FILE)"
	@echo "Bump the DATE variable at the top of this Makefile for a new revision."
	@echo ""
	@echo "Usage examples:"
	@echo "  make          # Compile with bibliography"
	@echo "  make quick    # Quick compile"
	@echo "  make clean    # Clean up"
	@echo "  make view     # Open PDF"

# Dependencies
$(MAIN_TEX): $(BIB_FILE)
