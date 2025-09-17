# Pandoc Bibliography Tutorial: Creating Markdown Files with Integrated References

This tutorial explains how to use Pandoc to create Markdown files that include formatted bibliography references directly within the document, making them self-contained and ready for publication.

## Overview

When working with academic documents, you often want to:
1. Write in Markdown for simplicity
2. Use citation keys (`[@key]`) for references
3. Generate a final document with formatted citations and bibliography
4. Keep everything in Markdown format for platform compatibility

Pandoc makes this process seamless by "baking" the formatted references directly into your Markdown output.

## 📝 Step-by-Step Process

### Step 1: Prepare Your Source Markdown File

Create a Markdown file with your content and citation keys. Here's an example (`report.md`):

```markdown
---
title: My Research Report
author: Dr. Research
date: September 17, 2025
---

# Introduction

This is the introduction to my report. Pandoc makes it easy to write in 
Markdown and convert to other formats.

In his 1905 paper, Einstein laid out the theory of special relativity [@einstein1905]. 
This changed the course of physics.

# Conclusion

This demonstrates how citations work in academic writing.
```

**Key Points:**
- Use YAML front matter for metadata
- Insert citations using `[@citation_key]` format
- Write your content in standard Markdown

### Step 2: Create Your Bibliography File

Create a BibTeX file (`references.bib`) with your reference data:

```bibtex
@article{einstein1905,
  author  = {Albert Einstein},
  title   = {Zur Elektrodynamik bewegter Körper},
  journal = {Annalen der Physik},
  year    = {1905},
  volume  = {322},
  pages   = {891-921}
}

@book{example2023,
  author    = {Jane Doe},
  title     = {Modern Research Methods},
  publisher = {Academic Press},
  year      = {2023},
  address   = {New York}
}
```

### Step 3: Run the Pandoc Command

Execute the following command in your terminal:

```bash
pandoc report.md --bibliography=references.bib --citeproc -o final_report.md
```

**Command Breakdown:**
- `report.md`: Your source Markdown file
- `--bibliography=references.bib`: Specifies the bibliography file
- `--citeproc`: Enables citation processing
- `-o final_report.md`: Output file name

### Step 4: Understanding the Output

Pandoc will generate a `final_report.md` file with two possible formats:

#### Format 1: Pandoc Extended Markdown (Default)

```markdown
---
title: My Research Report
author: Dr. Research
date: September 17, 2025
---

# Introduction

This is the introduction to my report. Pandoc makes it easy to write in 
Markdown and convert to other formats.

In his 1905 paper, Einstein laid out the theory of special relativity (Einstein 1905). 
This changed the course of physics.

# Conclusion

This demonstrates how citations work in academic writing.

:::: {#refs .references .csl-bib-body .hanging-indent}
::: {#ref-einstein1905 .csl-entry}
Einstein, Albert. 1905. "Zur Elektrodynamik Bewegter Körper." *Annalen Der Physik* 322: 891--921.
:::
::::
```

## Understanding Fenced Divs

The `::::` blocks you see are called **fenced divs** - a Pandoc extension to Markdown:

- `:::: {#refs .references .csl-bib-body .hanging-indent}`: Creates a container with ID and CSS classes
- `::: {#ref-einstein1905 .csl-entry}`: Individual reference container
- `::::`: Closes the main container

**Benefits of Fenced Divs:**
- Preserves semantic structure
- Enables proper styling when converted to HTML
- Maintains reference formatting information
- Compatible with modern Markdown renderers (like GitHub)

## Alternative Output Formats

### Option 1: GitHub-Flavored Markdown (Simpler)

For broader compatibility, use GitHub-Flavored Markdown:

```bash
pandoc report.md --bibliography=references.bib --citeproc -t gfm -o final_report.md
```

**Output:**
```markdown
# My Research Report

## Introduction

In his 1905 paper, Einstein laid out the theory of special relativity
(Einstein 1905). This changed the course of physics.

## References

Einstein, Albert. 1905. "Zur Elektrodynamik Bewegter Körper." *Annalen
Der Physik* 322: 891--921.
```

### Option 2: HTML Divs (Standard)

For HTML-compatible output:

```bash
pandoc report.md --bibliography=references.bib --citeproc -t markdown -o final_report.md
```

**Output:**
```markdown
<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-einstein1905" class="csl-entry">

Einstein, Albert. 1905. "Zur Elektrodynamik Bewegter Körper." *Annalen der Physik* 322: 891–921.

</div>

</div>
```

### Option 3: Strict Markdown (No Extensions)

For maximum portability and compatibility with the most basic Markdown parsers, use

```bash
pandoc report.md --bibliography=references.bib --citeproc -t markdown_strict -o final_report.md
```

### Option: Comonmark
```bash
pandoc report.md --bibliography=references.bib --citeproc -t commonmark -o final_report.md
```


## Advanced Options

### Custom Citation Styles

Use specific citation styles with CSL files:

```bash
pandoc report.md --bibliography=references.bib --csl=apa.csl --citeproc -o final_report.md
```

#### Finding CSL Files

The best place to find CSL files is the official Zotero Style Repository.

1. Go to the repository: https://www.zotero.org/styles
2. Search for a popular numbered style, like "IEEE".
3. Hover over the style name and click to download the `ieee.csl` file.
4. Save this `ieee.csl` file in the same folder as your `report.md` file.

### Multiple Bibliography Files

Include multiple bibliography sources:

```bash
pandoc report.md --bibliography=ref1.bib --bibliography=ref2.bib --citeproc -o final_report.md
```

### Suppress Bibliography

Generate citations without the bibliography section:

```bash
pandoc report.md --bibliography=references.bib --citeproc --metadata suppress-bibliography=true -o final_report.md
```

## Best Practices

1. **File Organization**: Keep your `.md`, `.bib`, and output files in the same directory
2. **Citation Keys**: Use consistent, descriptive citation keys (e.g., `author2023title`)
3. **Format Choice**: 
   - Use default Pandoc Markdown for rich formatting
   - Use GFM (`-t gfm`) for maximum compatibility
4. **Version Control**: Track both source and generated files in your repository
5. **Automation**: Create scripts or Makefiles for repeated conversions

## Troubleshooting

### Common Issues:

1. **Missing Bibliography**: Ensure `--citeproc` flag is included
2. **Uncited References**: Check citation key spelling
3. **Format Problems**: Verify BibTeX syntax
4. **Encoding Issues**: Use UTF-8 encoding for all files

### Validation Commands:

```bash
# Check if Pandoc can read your bibliography
pandoc --bibliography=references.bib --citeproc --metadata nocite='[@*]' -o test.md /dev/null

# Validate BibTeX syntax
bibtex-tidy references.bib --check
```

## PDF Customization 🎨

Customizing your PDF output is where Pandoc truly shines for creating polished, professional documents. The main way to do this is by setting variables that Pandoc passes to its underlying LaTeX template.

You can set these variables in two primary ways:

1. **On the Command Line**: Using the `-V key="value"` or `-V key:value` flag. This is good for single, quick changes.
2. **In the YAML Front Matter**: By adding them to the `---` block at the top of your Markdown file. This is the cleanest method for managing multiple customizations.

### Common Customization Variables ⚙️

Here are some of the most useful variables you can control. For the examples below, I'll use the YAML format.

#### Document Geometry (Margins, Paper Size)

The `geometry` variable is very powerful. It accepts a list of options.

```yaml
---
title: My Report
papersize: a4
geometry:
  - top=2cm
  - bottom=3cm
  - left=1.5in
  - right=1.5in
---
```

You can also use single-line shorthand: `geometry: "margin=1in"`.

#### Fonts

To use custom fonts installed on your system (like Arial, Georgia, etc.), you must use a different PDF engine, like XeLaTeX or LuaLaTeX. You specify this with the `--pdf-engine` flag.

```yaml
---
title: My Report
mainfont: "Georgia"
sansfont: "Arial"
monofont: "Fira Code"
fontsize: 11pt
---
```

- `mainfont`: The main body text font
- `sansfont`: The font for sans-serif elements
- `monofont`: The font for code blocks
- `fontsize`: Can be 10pt, 11pt, or 12pt with standard LaTeX classes

#### Document Class and Language

- `documentclass`: Changes the base LaTeX document type. Common options are `article` (default), `report` (for longer documents with chapters), and `book`
- `lang`: Sets the language, which helps with hyphenation and localized text (like "Contents" vs. "Table of Contents")

```yaml
---
documentclass: report
lang: "en-US"
---
```

#### Table of Contents Depth

The `toc-depth` variable controls how many heading levels are included in the table of contents. The default is 3 (showing `#`, `##`, `###`).

```yaml
---
toc: true
toc-depth: 2 # Only show H1 and H2 in the TOC
---
```

### Advanced Customization: Using Your Own Template 🎨

For total control, you can modify Pandoc's default LaTeX template.

1. **Export the default template**: Run this command in your terminal to create a copy you can edit.
   ```bash
   pandoc -D latex > custom-template.tex
   ```

2. **Edit the template**: Open `custom-template.tex` in a text editor. You can add LaTeX packages (`\usepackage{...}`), change colors, modify the title page layout, and much more. This requires some knowledge of LaTeX.

3. **Use your custom template**: Tell Pandoc to use your new template file instead of the default one.
   ```bash
   pandoc report.md --template=custom-template.tex -o final_report.pdf
   ```

### Example: Complete PDF Customization Command

```bash
pandoc report.md \
  --bibliography=references.bib \
  --csl=ieee.csl \
  --citeproc \
  --pdf-engine=xelatex \
  -V geometry:"margin=1in" \
  -V mainfont:"Times New Roman" \
  -V fontsize:12pt \
  -V documentclass:article \
  -V lang:"en-US" \
  --toc \
  --toc-depth=2 \
  -o final_report.pdf
```

## Conclusion

This workflow allows you to maintain academic documents in Markdown while ensuring proper citation formatting. The resulting files are self-contained, platform-independent, and ready for publication on various platforms including GitHub, academic repositories, or personal websites.

The key advantage is that your final Markdown file includes all formatting information, making it truly portable and eliminating the need for external bibliography files in your published documents. With the PDF customization options, you can create professional, publication-ready documents directly from your Markdown source.
