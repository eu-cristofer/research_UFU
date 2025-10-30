# Questões Norteadoras e Objetivos

## Questão central
Como a an\u00e1lise de espectros de ordem superior (HOS) aplicada a sinais gerados por simula\u00e7\u00f5es ROSS pode distinguir de forma robusta condi\u00e7\u00f5es normais e falhas (trincas, desalinhamento) em eixos rotativos?

## Quest\u00f5es norteadoras (desdobramentos)
1. Quais vari\u00e1veis do modelo (rigidez, amortecimento, velocidade de rota\u00e7\u00e3o, amplitude da falha) mais influenciam as assinaturas HOS? 
2. Quais configura\u00e7\u00f5es de HOS (bi-espectro, tri-espectro, janelas, estimadores) maximizam sensibilidade e especificidade para cada tipo de falha?
3. Como tratar ru\u00eddo e transientes nas simula\u00e7\u00f5es para tornar os resultados compar\u00e1veis a sinais experimentais?
4. Qu\u00e3o bem as assinaturas HOS extra\u00eddas de simula\u00e7\u00f5es generalizam para dados experimentais da literatura?
5. \u00c9 poss\u00edvel relacionar par\u00e2metros de HOS a par\u00e2metros f\u00edsicos da falha (por exemplo: tamanho de trinca)?

## Objetivo geral
Desenvolver e validar uma metodologia baseada em simula\u00e7\u00f5es ROSS e an\u00e1lise de HOS para diagn\u00f3stico de trincas e desalinhamento em eixos rotativos.

## Objetivos espec\u00edficos
- Implementar um conjunto de cen\u00e1rios simulados (saud\u00e1vel, trinca - varia\u00e7\u00e3o de tamanho, desalinhamento - varia\u00e7\u00e3o angular) com par\u00e2metros controlados.
- Extrair e comparar medidas de HOS (bi-espectro, bispectrum magnitude, bicoherence, tri-espectro quando aplic\u00e1vel) entre cen\u00e1rios.
- Avaliar robustez a ru\u00eddo e transientes e definir procedimentos de pr\u00e9-processamento (detrend, sincroniza\u00e7\u00e3o por ordem, filtragem).
- Quantificar desempenho usando m\u00e9tricas padronizadas (sensibilidade, especificidade, ROC-AUC) e determinar limites pr\u00e1ticos de detec\u00e7\u00e3o.
- Validar qualitativamente (e quando poss\u00edvel quantitativamente) com dados experimentais da literatura.
