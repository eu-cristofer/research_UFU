# Desenho Experimental (simula\u00e7\u00f5es ROSS + HOS)

## Cen\u00e1rios propostos
- Saud\u00e1vel (refer\u00eancia).
- Trinca localizada:
  - Pequena, m\u00e9dia, grande (variar comprimento/profundidade).
  - Posicionamentos distintos ao longo do eixo (pr\u00f3ximo ao rolamento, meio do viga-eixo).
- Desalinhamento:
  - Desalinhamento angular leve/m\u00e9dio/alto.
- Combina\u00e7\u00f5es (trinca + desalinhamento) para estudar efeitos acoplados.

## Par\u00e2metros de simula\u00e7\u00e3o (sugest\u00f5es)
- Velocidades de rota\u00e7\u00e3o: 500, 1000, 2000, 3000 rpm (ajustar \u00e0s caracter\u00edsticas do modelo).
- Amostragem (Fs): >= 10 \u00d7 maior que a maior frequ\u00eancia de interesse; exemplo: 10 kHz (ajustar conforme modos).
- Dura\u00e7\u00e3o: 10 s por execu\u00e7\u00e3o (ou o suficiente para coletar muitas rota\u00e7\u00f5es) com N repeti\u00e7\u00f5es (por exemplo, 20 execu\u00e7\u00f5es com ru\u00eddo diferente).
- N\u00famero de r\u00e9plicas por cen\u00e1rio: >= 30 para estat\u00edsticas.
- Ru\u00eddo adicionado: SNR variando (infinitamente pequena a SNR baixa) para testar robustez.

## Aquisi\u00e7\u00e3o e pr\u00e9-processamento
- Filtragem banda (se aplic\u00e1vel), remo\u00e7\u00e3o de tendência, normaliza\u00e7\u00e3o.
- Sincroniza\u00e7\u00e3o por ordem (order-tracking) se rota\u00e7\u00f5es vari\u00e1veis.
- Segmenta\u00e7\u00e3o com overlap: janela Hamming, tamanho de janela 1024-8192 amostras, overlap 50% (ajustar por Fs).

## Par\u00e2metros HOS
- Bi-espectro / Bicoherence:
  - Estimador: média sobre segmentos (Welch-style) ou estimador de lag-truncation.
  - Normaliza\u00e7\u00e3o: bicoherence para comparar magnitudes entre cen\u00e1rios.
- Tri-espectro: calcular onde houver evid\u00eancia de intera\u00e7\u00f5es mais complexas.
- Janelas e resolu\u00e7\u00e3o de freq.: ajustar para separar bandas de interesse.

## Features extra\u00eddas
- Magnitude do bi-espectro em combina\u00e7\u00f5es de frequ\u00eancias relevantes.
- Peak counts, entropia do bi-espectro, bicoherence média por banda.
- Vetor de features para classifica\u00e7\u00e3o (SVM, RandomForest, redes neurais) e thresholds para detec\u00e7\u00e3o.

## Protocolo de experi\u00eAncia
1. Gerar dados para cen\u00e1rios base.
2. Aplicar pr\u00e9-processamento padronizado.
3. Calcular HOS e extrair features.
4. Treinar e avaliar classificador e regras estat\u00edsticas.
5. Testar robustez a ru\u00eddo e variações de par\u00e2metros.
