---
name: Kinetic Portfolio System
colors:
  surface: '#fcf8ff'
  surface-dim: '#dbd8e4'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2fe'
  surface-container: '#efecf8'
  surface-container-high: '#e9e6f3'
  surface-container-highest: '#e4e1ed'
  on-surface: '#1b1b23'
  on-surface-variant: '#464554'
  inverse-surface: '#303038'
  inverse-on-surface: '#f2effb'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#904900'
  on-tertiary: '#ffffff'
  tertiary-container: '#b55d00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#fcf8ff'
  on-background: '#1b1b23'
  surface-variant: '#e4e1ed'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  section-padding: 120px
  element-gap: 24px
---

## Brand & Style

This design system is built for the modern software engineer who balances technical rigor with aesthetic clarity. It moves away from the traditional dark-mode "hacker" tropes in favor of a **Corporate-Tech Modern** aesthetic that emphasizes transparency, precision, and high-end craftsmanship. 

The brand personality is **Sophisticated, Visionary, and Reliable**. The UI utilizes a "Safe" visual identity—a crisp, high-contrast environment where Electric Indigo serves as a high-energy focal point. This creates a professional atmosphere that feels premium rather than utilitarian. Key stylistic drivers include:
- **Spaciousness:** Generous padding and wide margins to allow content to breathe.
- **Glassmorphism:** Substrate layers use backdrop blurs to simulate depth without heavy shadows.
- **Precision:** Perfect alignment and consistent geometric shapes reflecting clean code.

## Colors

The palette is anchored by **Electric Indigo (#6366F1)**, a vibrant hue that signifies innovation and energy. This is balanced against a **Light Mode** foundation of Slate grays and pure whites.

- **Primary:** Electric Indigo is reserved for primary actions, active navigation states, and critical highlights.
- **Neutral/Surface:** We use Slate-50 (#F8FAFC) for the base background and pure white for elevated cards to create a subtle but perceptible hierarchy.
- **Typography:** Deep Slate (#1E293B) provides maximum readability for body text, while a lighter Slate (#64748B) is used for secondary metadata and captions.
- **Interaction:** Hover states for primary elements should shift toward a deeper indigo or increase in saturation to provide tactile feedback.

## Typography

The typography system creates a clear distinction between **Display (Montserrat)** and **Utility (Inter)**. 

Montserrat provides a geometric, bold confidence for headlines, establishing a "tech-forward" and professional tone. Inter is utilized for all body copy and UI labels due to its exceptional legibility and neutral, systematic appearance.

**Scale & Hierarchy:**
- Large display headings use tighter letter spacing and aggressive weights to anchor landing sections.
- Body copy maintains a generous line height (1.6) to ensure long-form project descriptions remain readable and airy.
- Labels use a slight tracking increase and uppercase styling to differentiate small-scale metadata from standard body text.

## Layout & Spacing

This design system employs a **Fluid Grid** model centered on an 8px base unit. The layout philosophy is "Maximalist Whitespace," where space is used as a structural element to separate distinct thoughts and projects.

- **Desktop:** 12-column grid with 32px gutters. Section vertical padding is set to 120px to create a sense of premium gallery-style pacing.
- **Tablet:** 8-column grid with 24px gutters and 64px margins.
- **Mobile:** 4-column grid with 16px gutters. Display fonts scale down significantly (e.g., `display-lg` to 40px) to ensure no horizontal overflow.

**Motion & Flow:**
Scroll behaviors must be implemented with a smooth-step easing (`cubic-bezier(0.65, 0, 0.35, 1)`) to mimic high-end hardware acceleration. Hover states utilize a 200ms duration for snappy yet refined feedback.

## Elevation & Depth

Hierarchy is achieved through a combination of **Tonal Layering** and **Glassmorphism**. Rather than using heavy black shadows, this system uses ambient, indigo-tinted blurs.

- **Level 0 (Base):** Slate-50 background.
- **Level 1 (Cards):** Pure white surface with a 1px border (#E2E8F0) and a very soft, diffused shadow (Blur: 20px, Spread: -5px, Opacity: 4% Indigo).
- **Level 2 (Glass Overlays):** Used for navigation bars and floating modals. Components use a `backdrop-filter: blur(12px)` and a white background at 70% opacity. A subtle inner stroke (0.5px white) enhances the "edge" of the glass.
- **Interactive Depth:** On hover, cards should slightly lift (transform: translateY(-4px)) and the shadow density should increase to 8% opacity.

## Shapes

The shape language is defined as **Soft (1)**. This ensures the interface feels approachable and modern without becoming overly playful or "bubbly."

- **Small Components:** Buttons and input fields use a `0.25rem` (4px) radius.
- **Standard Cards:** Project previews and containers use `rounded-lg` at `0.5rem` (8px).
- **Large Sections:** Hero background containers or large imagery use `rounded-xl` at `0.75rem` (12px).
- **Full Rounds:** Only used for profile avatars or icon backgrounds to create a distinct visual anchor point.

## Components

### Buttons
- **Primary:** Solid Electric Indigo with white text. High-contrast, no shadow on rest, slight glow effect on hover.
- **Secondary:** Ghost style. 1px Slate-200 border, Slate-800 text. Fills with a very light Indigo wash on hover.

### Cards
- Portfolio project cards feature a "Glass Footer." The image extends to the top and sides, while the title and tags sit on a blurred glass element at the bottom of the card.

### Input Fields
- Ultra-minimal. Only a bottom border (#E2E8F0) that transforms into a 2px Indigo line upon focus. Labels use the `label-sm` typography spec and sit above the field.

### Chips/Tags
- Small, uppercase text. Light gray backgrounds (#F1F5F9) with no border. On hover, the background changes to a light Indigo tint (#EEF2FF) and the text shifts to the primary Indigo.

### Lists
- Skill lists use a custom bullet: a 4px Electric Indigo square, aligned to the cap-height of the text, emphasizing the geometric nature of the system.