# Design System · Dr. Marcos Paulo Silveira

Referência dos fundamentos visuais do site. A fonte de verdade dos valores é
[`assets/css/tokens.css`](assets/css/tokens.css); a versão visual (com exemplos ao vivo) é
[`design-system.html`](design-system.html).

## Princípios

1. **Escuta antes de ruído.** Hierarquia clara, poucos elementos por tela.
2. **Estética silenciosa.** Contraste suave, linhas de 1px, ícones peso 200.
3. **Confiança acessível.** Contraste AA, foco visível, respeito a `prefers-reduced-motion`.

## Cores

| Token | Hex | Uso |
|---|---|---|
| `--espresso-900` | `#2A201C` | Rodapé, hover de botão |
| `--espresso-800` ★ | `#3A2D28` | Cor-assinatura: botões, títulos, cards escuros |
| `--espresso-700` | `#4E3E37` | — |
| `--caramel-600` | `#8A6A4A` | Texto de destaque sobre fundo claro (AA) |
| `--caramel-500` | `#A9865F` | Numerais, foco |
| `--caramel-400` | `#CBAD8D` | Acento sobre fundo escuro, decoração |
| `--caramel-200` | `#E6D6C3` | Seleção de texto, hover do botão claro |
| `--whatsapp-500` ★ | `#25D366` | Fundo dos CTAs (todos levam ao WhatsApp) e do botão flutuante |
| `--whatsapp-400` | `#4ADE80` | Hover dos CTAs |
| `--whatsapp-900` | `#075E54` | Chip da seta |
| `--whatsapp-ink` | `#052E16` | Texto sobre o verde. Branco não passa (1.98:1); este dá 7.5:1 |
| `--sand-200` | `#EAE4DE` | Fundo do hero e de Tratamentos |
| `--sand-100` | `#F2EDE8` | Fundo de Locais |
| `--linen-50` | `#FBF8F5` | Fundo base |
| `--white` | `#FFFFFF` | Cards |
| `--ink-900` | `#2C2C2C` | Texto principal |
| `--ink-600` | `#5E5A57` | Texto corrido |
| `--ink-400` | `#8F8A86` | Apenas legendas (não usar em texto longo) |
| `--stone-300` | `#D3CFC4` | Numerais decorativos |

Tokens semânticos (`--color-bg`, `--color-text-muted`, `--color-brand`…) apontam para essas primitivas.
Prefira os semânticos em componentes novos.

## Tipografia

- **Italiana** (Google Fonts): títulos `display-*`. Peso único 400.
- **Poppins** 300/400/500/600: texto e interface. Corpo em 300.

| Estilo | Token | Tamanho |
|---|---|---|
| Display XL | `--text-display-xl` | 44 → 84px |
| Display LG | `--text-display-lg` | 36 → 60px |
| Display MD | `--text-display-md` | 28 → 40px |
| Title | `--text-title` | 18 → 20px, Poppins 500 |
| Lead | `--text-body-lg` | 17 → 19px, Poppins 300 |
| Body | `--text-body` | 16px |
| Small | `--text-small` | 14px |
| Overline | `--text-overline` | 12px, 500, caixa alta, `0.2em` |

## Espaço, grid e forma

- Base 4px: `--space-1` (4) a `--space-10` (128).
- Container 1200px, gutter fluido 16 → 40px, seções com `--section-y` (80 → 144px).
- Raio: `sm 8` · `md 16` (cards) · `lg 24` (blocos) · `pill` (botões) · `arch` (fotos editoriais).
- Sombras sempre em tom espresso: `--shadow-xs/sm/md/lg`.

## Ícones

**Material Symbols Sharp**, peso **200**, `FILL 0`, `GRAD 0`.

```html
<span class="icon" aria-hidden="true">hearing</span>
```

A fonte é carregada só com os ícones usados (`&icon_names=` na URL do Google Fonts, **em ordem alfabética**).
Ao usar um ícone novo, adicione o nome na URL do `<head>` de `index.html` e de `design-system.html`.

Ícones em uso: `arrow_outward, auto_awesome, call, chat, check, close, cookie, eco, hearing, location_on, map, menu, shield, verified, videocam, visibility`.

## Componentes

| Classe | Descrição |
|---|---|
| `.btn`, `.btn--brand`, `.btn--light`, `.btn--outline`, `.btn--sm`, `.btn--block` | Botão pílula de 56px, peso 500, com a seta num chip circular e leve elevação no hover. O padrão é **verde WhatsApp**, usado em todos os CTAs de agendamento. `--brand` (espresso) fica para ações que não são WhatsApp, como o aviso de cookies |
| `.link-arrow` | Link sublinhado com seta |
| `.overline` | Rótulo de seção com fio à esquerda |
| `.badge` | Selo (ex.: CRM) |
| `.card`, `.card--inverse` | Card com `icon-frame`, título e texto |
| `.icon-frame` | Ícone em círculo de 52px |
| `.check-list` | Lista com ícone `check` |
| `.treatment` | Item numerado de tratamento |
| `.reveal` | Entrada ao rolar (`--reveal-delay` para escalonar) |

## Motion

- `--ease-out: cubic-bezier(.22, 1, .36, 1)`
- `--dur-fast 180ms` · `--dur-base 320ms` · `--dur-slow 800ms`
- Com `prefers-reduced-motion: reduce`, todas as durações viram 0.

## Hero

- Fundo `--espresso-900` com brilho quente radial; texto em `--linen-50`, destaque em `--caramel-400`.
- Foto sempre no **tamanho nativo (864×779)**, nunca ampliada, presa ao canto inferior direito e fundida ao fundo por gradientes.
- Faixa de credenciais no rodapé do hero (CRM, local, modalidades).
- Enquanto a página não rola, o header fica claro sobre o escuro (logo invertido, botão em contorno). Ao rolar, volta ao padrão linho.
