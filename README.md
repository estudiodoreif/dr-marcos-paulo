# Dr. Marcos Paulo Silveira · Site

Recriação do site [drmarcospaulosilveira.com.br](https://www.drmarcospaulosilveira.com.br/) em HTML, CSS e JS puros,
com o mesmo conteúdo do original e layout revisado.

## Estrutura

```
index.html            Página principal
design-system.html    Documentação visual do design system
DESIGN.md             Referência do design system em texto
assets/
  css/tokens.css      Tokens (cor, tipografia, espaço, raio, sombra, motion)
  css/styles.css      Base, componentes e seções
  js/main.js          Header, menu mobile, nav ativa, reveal, botão flutuante, cookies
  img/                Imagens otimizadas (WebP) usadas no site
  img/originais/      Arquivos originais baixados do site (PNG e ícones SVG)
```

## Rodar localmente

Qualquer servidor estático serve. Por exemplo:

```bash
python3 -m http.server 4321
```

Depois abra http://localhost:4321.

## Stack

- Fontes: Italiana + Poppins (Google Fonts)
- Ícones: Material Symbols Sharp, peso 200
- Sem dependências de build
