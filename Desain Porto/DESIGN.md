---
name: Obsidian Kinetic
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#009bd1'
  on-tertiary-container: '#002d40'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 3.75rem
    fontWeight: '700'
    lineHeight: 4.25rem
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: 3rem
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: '0'
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: -0.01em
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.4rem
    letterSpacing: '0'
  label-tech:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.04em
  caption:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system embodies an elite, high-performance software engineering aesthetic: deeply technical, surgically precise, and unapologetically modern. Tailored for senior engineers, systems architects, and technical leaders, the interface communicates technical mastery, structural rigor, and forward-looking vision.

The visual direction merges **refined minimalism** with **technical glassmorphism** and **structural gridlines**. It balances deep, obsidian-slate backdrops with luminous indigo and violet gradients, counterbalanced by precision cyan signals. The interface feels like a high-end developer cockpit or interactive terminal: ultra-crisp 1px borders, subtle surface luminosity, high-density metadata chips, and terminal-grade code typography. It deliberately eschews playful or juvenile tropes in favor of restrained sophistication, high contrast, and architectural discipline.

## Colors

The palette is engineered around an ultra-deep luminous dark mode where deep space slate serves as the canvas, allowing electric spectral accents to denote hierarchy, interactivity, and system state.

### Core Roles
- **Canvas / Void Base (`#090D16`)**: The primary absolute background, providing infinite depth and deep contrast without relying on lifeless pure black.
- **Surface Elevation 1 (`#0F172A`)**: Base card fill and structural sectioning with 70–85% alpha when combined with backdrop-blur.
- **Surface Elevation 2 (`#1E293B`)**: Hover states, embedded interactive modules, code block shells, and active tab containers.
- **Primary Accent (`#6366F1` - Electric Indigo)**: Interactive calls to action, active states, key focus rings, and forward-link indicators.
- **Secondary Accent (`#8B5CF6` - Spectral Violet)**: Visual telemetry, gradient terminations, highlights in hero vectors, and certification accents.
- **Tertiary Accent (`#38BDF8` - Cyan Telemetry)**: Live metrics, system uptime pulses, Git commit references, language tags, and high-priority terminal signals.

### Neutral Foreground Spectrum
- **Text High Contrast (`#F8FAFC`)**: Primary headings, active code tokens, project titles.
- **Text Balanced (`#94A3B8`)**: Body copy, technical descriptions, timeline text.
- **Text Subdued / Ghost (`#475569`)**: Metadata labels, line numbers, subtle timestamps, disabled states.
- **Border Crisp Alpha (`rgba(148, 163, 184, 0.12)`)**: Structural 1px separation lines across all card surfaces and divider rules.
- **Border Highlight Alpha (`rgba(99, 102, 241, 0.4)`)**: Focus and hover rim lighting on interactive cards.

## Typography

The typographic hierarchy couples **Geist** for crisp structural headers, **Inter** for neutral, hyper-legible narrative body text, and **JetBrains Mono** for developer signals, code snippets, timestamps, and tech badges.

### Typographic Governance
- Headers leverage negative tracking (`-0.02em` to `-0.04em`) to impart an editorial, engineered density reminiscent of state-of-the-art developer consoles.
- All code, badges, system statuses, terminal prompts, and meta tags (`label-tech`) must strictly use `JetBrains Mono` with uppercase transformations or explicit casing patterns.
- Tabular figures must be enabled (`font-variant-numeric: tabular-nums`) for numeric data points, dates, commit hashes, and file size readouts.

## Layout & Spacing

The portfolio is structured on a 12-column responsive fluid grid pinned to a maximum container width of `1280px` (`80rem`), centering the reading experience while preserving ample peripheral void space.

### Breakpoints & Geometry
- **Desktop (>= 1024px)**: 12 columns, `1.5rem` (`24px`) gutters, outer margins `2rem` (`32px`) to `auto`. Split-screen views (e.g., sticky bio/timeline on left 4 cols, projects and code sandbox on right 8 cols) are prioritized.
- **Tablet (768px – 1023px)**: 8 columns, `1.25rem` (`20px`) gutters, outer margins `1.5rem` (`24px`). Two-column project cards reflow cleanly.
- **Mobile (< 768px)**: 4 columns, `1rem` (`16px`) gutters, outer margins `1rem` (`16px`). Linear vertical stack with persistent compact top-dock navigation.

### Vertical Cadence
- Major portfolio sections (Experience, Architecture Showcase, Open Source, Certifications) use `space-3xl` (`6rem`) margins for structural separation.
- Component internals maintain an 8pt atomic cadence (`space-xs` through `space-xl`), ensuring visual tension between dense code blocks and airy project descriptions.

## Elevation & Depth

This system avoids heavy drop shadows, opting instead for **optical luminosity, dark glassmorphism, and low-contrast edge refraction**. Depth is achieved through backdrop filtering and subtle radial gradient underglows that emanate from behind key cards.

### Layering Architecture
- **Layer 0 (Canvas Void)**: Base color `#090D16` with a faint CSS-generated radial gradient spotlight (`rgba(99, 102, 241, 0.05)` at top-center) and an optional 1px grid pattern overlay at 3% opacity.
- **Layer 1 (Frosted Glass Container)**: Background `rgba(15, 23, 42, 0.65)` with `backdrop-filter: blur(16px)` and a continuous border of `1px solid rgba(148, 163, 184, 0.08)`.
- **Layer 2 (Floating Interactivity)**: Hovering cards elevate by transitioning the background to `rgba(30, 41, 59, 0.8)`, brightening the border to `rgba(99, 102, 241, 0.35)`, and casting a subtle accent bloom: `0 0 24px -4px rgba(99, 102, 241, 0.12)`.
- **Layer 3 (Overlays & Modals)**: Modals and flyouts use `rgba(15, 23, 42, 0.92)` with `backdrop-filter: blur(24px)`, enclosed by `1px solid rgba(56, 189, 248, 0.2)` and a soft shadow: `0 20px 40px -15px rgba(0, 0, 0, 0.8)`.

## Shapes

The design system employs **Soft (`1`)** roundedness to evoke an industrial, machine-tooled software feel. Soft radii communicate engineering precision without the severe harshness of 0px rectangles or the casual friendliness of bubbly curves.

### Curvature Tokens
- **Micro Elements (Tech badges, tags, code chips)**: `0.25rem` (`4px`). Compact, rectangular, and architectural.
- **Interactive Controls (Buttons, input fields, dropdown toggles)**: `0.375rem` (`6px`). Sharp enough to feel technical, soft enough to feel interactive.
- **Structural Surfaces (Project cards, code playground windows, modal frames)**: `0.5rem` (`8px`) to `0.75rem` (`12px`).
- **Pill Exceptions**: Reserved exclusively for "Live/Status" indicators (e.g., an animated ping dot beside "Available for hire" or "Maintained").

## Components

### Buttons
- **Primary Action**: Gradient fill from `#6366F1` to `#8B5CF6`, text `#F8FAFC`, radius `0.375rem`, padding `0.625rem 1.25rem`. On hover, subtle luminance boost and `box-shadow: 0 0 16px rgba(99, 102, 241, 0.4)`.
- **Secondary Action / Ghost**: Background `rgba(15, 23, 42, 0.6)`, border `1px solid rgba(148, 163, 184, 0.15)`, text `#F8FAFC`. On hover, border tint shifts to `#6366F1`, background to `rgba(30, 41, 59, 0.8)`.
- **Icon / Terminal Button**: Square aspect ratio (`36px x 36px`), monospaced glyph, border `1px solid rgba(148, 163, 184, 0.12)`.

### Tech Badges & Chips
- Designed with `JetBrains Mono` at `0.75rem` (`label-tech`).
- Base chip: Background `rgba(15, 23, 42, 0.8)`, border `1px solid rgba(148, 163, 184, 0.12)`, text `#94A3B8`.
- Highlight/Skill chip (e.g., TypeScript, Rust, Go): Background `rgba(99, 102, 241, 0.08)`, border `1px solid rgba(99, 102, 241, 0.25)`, text `#818CF8`.
- Telemetry chip (e.g., Production, Uptime): Prefixed by an animated glowing cyan dot (`#38BDF8`).

### Project Cards
- Enclosed glassmorphism surface (`Layer 1`), padded with `space-lg`.
- Top header featuring project moniker, GitHub star metric (monospaced), and a minimal external link chevron.
- Embedded terminal/code preview container with a slate background `#070A10`, 1px internal border, and syntax-highlighted code with cyan and violet tokens.
- Footer featuring a horizontal wrap of technology badges and interactive live-demo anchor.

### Timeline & Experience Node
- Vertical line `1px solid rgba(148, 163, 184, 0.12)` running down the left axis.
- Timeline nodes rendered as `8px` square diamonds with border `1px solid #6366F1` and dark fill `#090D16`. Active or current roles illuminate the diamond with an inner cyan beacon.
- Role and enterprise name highlighted in `Geist`, tenure duration rendered in `JetBrains Mono` (`#475569`).

### Code Snippet & Terminal Blocks
- Window title bar including decorative triple window control pips (`#EF4444`, `#F59E0B`, `#10B981` at reduced 60% opacity) and centered file path in `label-tech` (`src/distributed/consensus.go`).
- Line numbering aligned to the left, styled in `JetBrains Mono` `#334155`.
- Copy-to-clipboard button floating top-right, transitioning to `#38BDF8` upon success.

### Inputs & Contact Form
- Background `rgba(15, 23, 42, 0.7)`, border `1px solid rgba(148, 163, 184, 0.15)`, text `#F8FAFC`, placeholder `#475569`.
- Focus state triggers an electric violet border transition (`rgba(139, 92, 246, 0.6)`) with a non-intrusive outer ring: `0 0 0 1px rgba(139, 92, 246, 0.3)`.