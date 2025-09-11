# Dissertação de Mestrado - Diagnóstico de Falhas em Máquinas Rotativas

Este repositório contém a estrutura completa para desenvolvimento da dissertação de mestrado sobre **Diagnóstico de Falhas em Máquinas Rotativas por Meio de Simulações Numéricas e Análise de Espectros de Ordem Superior**.

## 📋 Informações do Projeto

- **Autor:** Cristofer Antoni Souza Costa
- **Orientador:** Prof. Dr. Aldemir Cavallini Jr.
- **Programa:** Pós-Graduação em Engenharia Mecânica - UFU
- **Linha de Pesquisa:** Mecânica dos Sólidos e Vibrações / Dinâmica de Sistemas Mecânicos

## 🎯 Objetivo

Desenvolver uma metodologia integrada para diagnóstico de falhas em máquinas rotativas, combinando:
- Simulação numérica utilizando ROSS
- Análise de Espectros de Ordem Superior (HOS)
- Validação física com literatura científica
- Classificação automática via Aprendizado de Máquina

## 📁 Estrutura do Projeto

```
📦 Projeto Dissertação
├── 📄 00_proposta_de_dissertação.md     # Proposta inicial
├── 📄 01_plano_de_trabalho.md           # Plano de trabalho detalhado
├── 📄 02_plano_de_dissertação.md        # Estrutura da dissertação
├── 📄 README.md                         # Este arquivo
├── 📄 GUIA_COMPILACAO.md               # Guia de compilação
├── 📁 latex-dissertation/              # Dissertação em LaTeX
│   ├── 📄 main.tex                     # Arquivo principal
│   ├── 📄 Makefile                     # Script de compilação
│   ├── 📁 chapters/                    # Capítulos
│   ├── 📁 frontmatter/                 # Elementos pré-textuais
│   ├── 📁 backmatter/                  # Elementos pós-textuais
│   ├── 📁 bibliography/                # Bibliografia
│   ├── 📁 figures/                     # Figuras
│   ├── 📁 tables/                      # Tabelas
│   └── 📁 styles/                      # Estilos
└── 📁 js-presentations/                # Apresentações em JavaScript
    ├── 📄 package.json                 # Configuração Node.js
    ├── 📁 src/                         # Código fonte
    ├── 📁 public/                      # Arquivos públicos
    ├── 📁 slides/                      # Dados das apresentações
    ├── 📁 scripts/                     # Scripts utilitários
    └── 📁 assets/                      # Recursos
```

## 🚀 Início Rápido

### 1. Compilar a Dissertação em LaTeX

```bash
# Navegar para o diretório LaTeX
cd latex-dissertation

# Instalar dependências (se necessário)
# Windows: Instalar MiKTeX
# Linux: sudo apt install texlive-full make
# macOS: brew install --cask mactex

# Compilar a dissertação
make

# Visualizar o PDF
make view
```

### 2. Executar as Apresentações em JavaScript

```bash
# Navegar para o diretório de apresentações
cd js-presentations

# Instalar dependências
npm install

# Iniciar o servidor
npm start

# Acessar no navegador
# http://localhost:3000
```

## 📚 Documentação

- **[Guia de Compilação](GUIA_COMPILACAO.md)** - Instruções detalhadas para compilar LaTeX e JavaScript
- **[Proposta de Dissertação](00_proposta_de_dissertação.md)** - Proposta inicial do projeto
- **[Plano de Trabalho](01_plano_de_trabalho.md)** - Plano detalhado de execução
- **[Plano de Dissertação](02_plano_de_dissertação.md)** - Estrutura da dissertação

## 🛠️ Tecnologias Utilizadas

### LaTeX
- **Distribuição:** MiKTeX/TeX Live
- **Classe:** memoir
- **Compilador:** pdflatex
- **Bibliografia:** bibtex
- **Build:** make

### JavaScript
- **Runtime:** Node.js 16+
- **Framework:** Express.js
- **Apresentações:** Reveal.js
- **Gráficos:** Chart.js
- **Visualização:** D3.js
- **Build:** npm/webpack

## 📊 Metodologia

A metodologia proposta é desenvolvida em quatro etapas principais:

1. **Modelagem Numérica**
   - Desenvolvimento de modelos de elementos finitos
   - Simulação de sistemas rotativos com falhas
   - Geração de dataset sintético

2. **Análise HOS**
   - Cálculo de bi-espectros e tri-espectros
   - Extração de características não lineares
   - Identificação de padrões característicos

3. **Validação Física**
   - Comparação com literatura científica
   - Análise de sensibilidade
   - Verificação de consistência física

4. **Classificação ML**
   - Treinamento de classificadores
   - Avaliação de desempenho
   - Automação do diagnóstico

## 🎯 Resultados Esperados

- **Validação:** Erro < 3% em comparação com dados experimentais
- **Classificação:** Acurácia > 90% na identificação de falhas
- **Robustez:** Desempenho mantido com até 10% de ruído
- **Aplicabilidade:** Metodologia transferível para sistemas industriais

## 📈 Cronograma

| Fase | Atividade | Duração | Status |
|------|-----------|---------|--------|
| I | Revisão bibliográfica + familiarização ROSS | 4 meses | ✅ |
| II | Modelagem numérica e validação básica | 5 meses | 🔄 |
| III | Simulações sistemáticas | 5 meses | ⏳ |
| IV | Implementação HOS e análise | 4 meses | ⏳ |
| V | Validação e comparações | 3 meses | ⏳ |
| VI | Redação final e defesa | 3 meses | ⏳ |

## 🤝 Contribuições

Este é um projeto acadêmico individual, mas sugestões e melhorias são bem-vindas:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Autor:** Cristofer Antoni Souza Costa
- **Email:** cristofer.costa@ufu.br
- **Orientador:** Prof. Dr. Aldemir Cavallini Jr.
- **Instituição:** Universidade Federal de Uberlândia (UFU)

## 🙏 Agradecimentos

- Prof. Dr. Aldemir Cavallini Jr. (Orientador)
- Programa de Pós-Graduação em Engenharia Mecânica - UFU
- Comunidade científica da área de dinâmica de rotores
- Desenvolvedores das ferramentas utilizadas (ROSS, Reveal.js, etc.)

## 📚 Referências Principais

- Friswell, M. I., et al. (2010). *Dynamics of Rotating Machines*. Cambridge University Press.
- Nikias, C. L., & Petropulu, A. P. (1993). *Higher-Order Spectra Analysis*. Prentice Hall.
- Randall, R. B. (2011). *Vibration-based condition monitoring*. John Wiley & Sons.
- Lei, Y., et al. (2020). Machinery health prognostics: A systematic review. *Mechanical Systems and Signal Processing*.

---

**Desenvolvido com ❤️ para o avanço da ciência e tecnologia em diagnóstico de falhas em máquinas rotativas.**
