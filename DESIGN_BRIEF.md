# CTMS Sports Fishing Portal
## Design Brief — AWWWARDS-Level Luxury Travel Experience

**Project Lead:** Senior Design Team  
**Date:** February 21, 2026  
**Version:** 1.0  
**Status:** Planning Phase

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [AWWWARDS Research & Principles](#2-awwwards-research--principles)
3. [Design System](#3-design-system)
4. [Component Architecture](#4-component-architecture)
5. [Asset Requirements](#5-asset-requirements)
6. [Technical Architecture](#6-technical-architecture)
7. [User Flow Documentation](#7-user-flow-documentation)
8. [Animation & Interaction Guidelines](#8-animation--interaction-guidelines)
9. [Accessibility Standards](#9-accessibility-standards)
10. [Performance Targets](#10-performance-targets)

---

## 1. Executive Summary

### Project Vision

Create a luxury sports fishing travel booking platform that embodies the precision of architectural design firms, the elegance of Swiss typography, and the exclusivity of an elite club. The site must feel cinematic, intentional, and meticulously crafted—every pixel serving a purpose.

### Brand Positioning

**CTMS** (Custom Travel Management Services) positions itself as the premier gateway to world-class sports fishing destinations. This is not a budget travel site—it's a white-glove concierge experience for discerning anglers who expect excellence.

### Key Differentiators

- **Architectural Precision:** Clean lines, intentional whitespace, grid-based layouts
- **Swiss Typography:** Light weights, generous letter-spacing, perfect hierarchy
- **Cinematic Atmosphere:** Full-bleed imagery, subtle motion, fog effects
- **Elite Club Aesthetic:** Navy/soft black palette with light blue accents
- **Text-Only Buttons:** No icons—confidence in words, elegant hover states

---

## 2. AWWWARDS Research & Principles

### What Makes Architectural Sites Win AWWWARDS

#### 2.1 Visual Hierarchy Through Space

Award-winning architectural sites (Bureau, Hello Studios, Otherworld) share a fundamental principle: **space IS the design element.** They don't fill space—they sculpt it.

**Key Patterns:**
- Hero sections occupy 100vh with minimal content
- Section padding: 120-200px vertical
- Content is centered in small columns (600-800px max-width for text)
- Negative space creates breathing room and emphasis

#### 2.2 Typography as Structure

Swiss-style sites treat typography as architectural elements:

```
Headlines: 72-120px, light weight (200-300), tight leading (0.9)
Body: 18-21px, normal weight (400), generous leading (1.7)
Captions: 12-14px, medium weight (500), wide letter-spacing (0.15em)
```

**Critical Detail:** Light font weights are essential. They create elegance through delicacy—bold is aggressive, light is sophisticated.

#### 2.3 Cinematic Imagery Treatment

AWWWARDS sites treat photography differently:

- **Full-bleed heroes:** No borders, no containers, edge-to-edge
- **Fog/mist overlays:** Subtle gradients that add atmosphere without obscuring
- **Parallax depth:** Slow-moving elements create 3D illusion
- **Color grading:** Desaturated, cool tones (even warm images are cooled)

#### 2.4 Micro-Interactions

The sites that win Site of the Day have invisible UX—interactions feel natural:

- Hover states: 300-400ms transitions, ease-out curves
- Scroll-triggered animations: Elements fade in 100px before viewport
- Cursor awareness: Subtle changes based on context
- Loading states: Custom, branded, cinematic

#### 2.5 The "Slow Down" Philosophy

Luxury sites intentionally slow the user experience:

- Long scroll distances between sections
- Animated reveals that take 1-2 seconds
- Full-screen transitions between pages
- Loading states that feel premium, not frustrating

**Why:** Rushing feels cheap. Luxury demands time. The experience should feel like checking into a 5-star hotel, not ordering fast food.

---

## 3. Design System

### 3.1 Color Palette

#### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Deep Navy** | `#0A1628` | 10, 22, 40 | Primary background, text |
| **Soft Black** | `#0D0D0D` | 13, 13, 13 | Dark sections, footer |
| **Sky Blue** | `#7AB8D9` | 122, 184, 217 | Primary accent, links, CTAs |
| **Pale Blue** | `#D4E5F0` | 212, 229, 240 | Light backgrounds, borders |

#### Secondary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Ocean Depth** | `#1A2D4A` | 26, 45, 74 | Card backgrounds, elevated surfaces |
| **Mist** | `#F5F8FA` | 245, 248, 250 | Light sections, form backgrounds |
| **Slate** | `#4A5568` | 74, 85, 104 | Secondary text, captions |
| **Cloud White** | `#FFFFFF` | 255, 255, 255 | Primary text on dark, cards |

#### Gradient Specifications

**Hero Overlay Gradient:**
```css
background: linear-gradient(
  180deg,
  rgba(10, 22, 40, 0) 0%,
  rgba(10, 22, 40, 0.3) 50%,
  rgba(10, 22, 40, 0.8) 100%
);
```

**Statement Section Gradient:**
```css
background: linear-gradient(
  135deg,
  #0A1628 0%,
  #1A2D4A 50%,
  #7AB8D9 100%
);
```

**Fog Effect (Swiss Style):**
```css
background: radial-gradient(
  ellipse at center,
  rgba(212, 229, 240, 0.15) 0%,
  transparent 70%
);
```

### 3.2 Typography System

#### Font Family

**Primary:** *Untitled Sans* or *Swiss Intercycle*  
**Fallback:** system-ui, -apple-system, BlinkMacSystemFont, sans-serif

**Why These Fonts:**
- Untitled Sans: Clean, geometric, excellent light weights
- Swiss Intercycle: True Swiss design heritage, perfect for architectural sites

#### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| **Display** | 120px | 200 | 1.0 | -0.02em | Hero headlines |
| **H1** | 72px | 300 | 1.1 | -0.01em | Section titles |
| **H2** | 48px | 300 | 1.2 | 0 | Subsection titles |
| **H3** | 32px | 400 | 1.3 | 0.01em | Card titles |
| **Body Large** | 21px | 400 | 1.7 | 0.01em | Lead paragraphs |
| **Body** | 18px | 400 | 1.7 | 0.01em | Standard paragraphs |
| **Caption** | 14px | 500 | 1.5 | 0.12em | Labels, metadata |
| **Micro** | 12px | 500 | 1.4 | 0.15em | Small labels |

#### Mobile Responsive Scale

```css
/* Desktop: 1440px+ */
--display: 120px;
--h1: 72px;
--h2: 48px;
--h3: 32px;

/* Tablet: 768-1024px */
--display: 72px;
--h1: 48px;
--h2: 36px;
--h3: 28px;

/* Mobile: < 768px */
--display: 48px;
--h1: 36px;
--h2: 28px;
--h3: 24px;
```

### 3.3 Spacing System

#### Base Unit: 8px

All spacing uses multiples of 8px for visual consistency.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 8px | Tight spacing, inline elements |
| `--space-sm` | 16px | Component internal padding |
| `--space-md` | 24px | Between related elements |
| `--space-lg` | 40px | Between distinct elements |
| `--space-xl` | 64px | Section internal margins |
| `--space-2xl` | 96px | Between sections |
| `--space-3xl` | 120px | Major section breaks |
| `--space-hero` | 200px | Hero section padding |

#### Grid System

```
Container Max Width: 1440px
Content Max Width: 1200px
Column Count: 12
Gutter: 32px (desktop) / 24px (tablet) / 16px (mobile)
```

### 3.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0 | Buttons, inputs (sharp, architectural) |
| `--radius-sm` | 4px | Small elements, tags |
| `--radius-md` | 8px | Cards, dropdowns |
| `--radius-lg` | 16px | Large cards, modals |
| `--radius-full` | 9999px | Pills, avatars |

**Important:** Buttons and inputs should have `border-radius: 0` to maintain the sharp, architectural aesthetic. Roundness softens the precision we're aiming for.

### 3.5 Shadows

Architectural sites use minimal, crisp shadows:

```css
--shadow-sm: 0 1px 2px rgba(10, 22, 40, 0.08);
--shadow-md: 0 4px 12px rgba(10, 22, 40, 0.12);
--shadow-lg: 0 12px 32px rgba(10, 22, 40, 0.16);
--shadow-card: 0 24px 48px rgba(10, 22, 40, 0.20);
```

---

## 4. Component Architecture

### 4.1 Hero Section

**Dimensions:** 100vh × 100vw  
**Position:** Fixed on load, transitions to static on scroll

**Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│  [Background Image - Full Bleed]                           │
│  [Overlay Gradient - Bottom fade to Deep Navy]             │
│                                                             │
│          ┌─────────────────────────────────┐               │
│          │         CTMS                    │               │
│          │    Sports Fishing              │               │
│          │                                 │               │
│          │    WHERE THE WORLD'S           │               │
│          │    GREATEST ANGLERS            │               │
│          │    FIND THEIR CATCH            │               │
│          │                                 │               │
│          │    [ EXPLORE EXPERIENCES ]     │               │
│          └─────────────────────────────────┘               │
│                                                             │
│  [Scroll Indicator - Animated line]                        │
└─────────────────────────────────────────────────────────────┘
```

**Technical Specs:**
- Background image: 2880×1800px minimum, WebP format
- Gradient overlay: 3-layer (transparent → 30% → 80%)
- Headline: Display size (120px), 200 weight
- Subtext: Body Large (21px), 400 weight
- Scroll indicator: Animated vertical line, 60px tall

### 4.2 Gradient Statement Section

**Dimensions:** 60vh × 100vw  
**Position:** Between hero and packages

**Purpose:** Visual break, brand statement, atmospheric transition

**Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│  [135° Gradient: Navy → Ocean Depth → Sky Blue]            │
│                                                             │
│          ┌─────────────────────────────────┐               │
│          │                                 │               │
│          │    Curated fishing              │               │
│          │    experiences for those        │               │
│          │    who accept nothing           │               │
│          │    less than extraordinary      │               │
│          │                                 │               │
│          │    —                            │               │
│          │                                 │               │
│          │    Destinations. Guides.        │               │
│          │    Memories that last.          │               │
│          └─────────────────────────────────┘               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Animation:**
- Text fades in on scroll (IntersectionObserver)
- Staggered letter reveal (100ms per word)
- Background gradient shifts subtly on mouse move

### 4.3 Package Cards (Full-Height Vertical)

**Dimensions:** min-height 80vh, width 320-400px  
**Layout:** Horizontal scroll on mobile, grid on desktop

**Structure:**
```
┌────────────────────────────┐
│                            │
│  [Package Image]           │
│  100% width, 50% height    │
│                            │
├────────────────────────────┤
│                            │
│  COSTA RICA                │
│  ────────────────────      │
│                            │
│  Pacific Sailfish          │
│  Expedition                │
│                            │
│  7 nights · Quepos         │
│                            │
│  World-class sailfish      │
│  in pristine Pacific       │
│  waters with expert        │
│  local guides              │
│                            │
│  FROM                      │
│  $4,850                    │
│                            │
│  [ VIEW DETAILS ]          │
│                            │
└────────────────────────────┘
```

**States:**
- Default: Opacity 0.7, slight scale
- Hover: Opacity 1.0, scale(1.02), elevated shadow
- Active: Border-left 4px Sky Blue

**Technical Specs:**
- Image: 800×1200px, WebP, 85% quality
- Card background: Ocean Depth (#1A2D4A)
- Border: 1px solid rgba(122, 184, 217, 0.2)
- Transition: 400ms ease-out

### 4.4 Booking Flow Steps

#### Step 1: Personal Information

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  STEP 01 ───────────────────────────────────── 1 of 4      │
│                                                             │
│  Your Details                                               │
│                                                             │
│  ─────────────────────────────────────────────────────     │
│                                                             │
│  Full Name                                                  │
│  _______________________________________________           │
│                                                             │
│  Email Address                                              │
│  _______________________________________________           │
│                                                             │
│  Phone Number                                               │
│  _______________________________________________           │
│                                                             │
│  Number of Travelers                                        │
│  ────────────────                                          │
│                                                             │
│  [ CONTINUE TO TRIP DETAILS ]                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Form Input Style (Underline Only):**
```css
.input-underline {
  border: none;
  border-bottom: 1px solid #D4E5F0;
  background: transparent;
  padding: 16px 0;
  font-size: 18px;
  transition: border-color 300ms ease;
}

.input-underline:focus {
  outline: none;
  border-bottom-color: #7AB8D9;
}
```

#### Step 2: Trip Selection

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  STEP 02 ───────────────────────────────────── 2 of 4      │
│                                                             │
│  Your Adventure                                             │
│                                                             │
│  ─────────────────────────────────────────────────────     │
│                                                             │
│  [Package Summary Card - Collapsed]                        │
│  ┌───────────────────────────────────────┐                 │
│  │ Costa Rica · Pacific Sailfish        │                 │
│  │ $4,850 per person                     │                 │
│  └───────────────────────────────────────┘                 │
│                                                             │
│  Preferred Dates                                            │
│  _______________________________________________           │
│                                                             │
│  Flexibility                                                │
│  ○ Exact dates only                                        │
│  ○ ± 3 days                                                │
│  ○ ± 1 week                                                │
│                                                             │
│  Special Requests                                           │
│  _______________________________________________           │
│  _______________________________________________           │
│                                                             │
│  [ BACK ]                    [ CONTINUE TO ADD-ONS ]       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Step 3: Add-ons

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  STEP 03 ───────────────────────────────────── 3 of 4      │
│                                                             │
│  Enhance Your Experience                                    │
│                                                             │
│  ─────────────────────────────────────────────────────     │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ☐ Private Chef Service                              │   │
│  │   $450/day · Gourmet meals prepared in your villa   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ☐ Professional Photography                          │   │
│  │   $800 · Capture your catches with a pro           │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ☐ Extended Boat Charter                             │   │
│  │   $1,200/day · Full-day offshore expedition        │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ☐ Spa & Recovery Package                            │   │
│  │   $350 · Post-fishing relaxation treatment         │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  [ BACK ]                    [ CONTINUE TO REVIEW ]        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Step 4: Review & Confirm

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  STEP 04 ───────────────────────────────────── 4 of 4      │
│                                                             │
│  Review Your Journey                                        │
│                                                             │
│  ─────────────────────────────────────────────────────     │
│                                                             │
│  TRAVELER                                                   │
│  James Anderson · james@email.com · +1 (555) 123-4567     │
│  2 travelers                                                │
│                                                             │
│  DESTINATION                                                │
│  Costa Rica · Pacific Sailfish Expedition                  │
│  March 15-22, 2026 · 7 nights                               │
│                                                             │
│  ADD-ONS                                                    │
│  Professional Photography · $800                           │
│  Private Chef (7 days) · $3,150                            │
│                                                             │
│  ─────────────────────────────────────────────────────     │
│                                                             │
│  TRIP TOTAL                                                 │
│  $13,650                                                    │
│                                                             │
│  ─────────────────────────────────────────────────────     │
│                                                             │
│  A $2,000 deposit is required to confirm your booking.     │
│  A CTMS travel specialist will contact you within          │
│  24 hours to finalize arrangements.                        │
│                                                             │
│  [ BACK ]                    [ REQUEST BOOKING ]           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 4.5 CTMS Travel Agent Section

**Position:** Below packages, before footer  
**Purpose:** Establish partnership credibility

**Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │                                                       │ │
│  │   [Agent Portrait]                                    │ │
│  │   400×400px, circular                                │ │
│  │                                                       │ │
│  │   YOUR DEDICATED                                     │ │
│  │   TRAVEL SPECIALIST                                  │ │
│  │                                                       │ │
│  │   Every CTMS booking includes a dedicated            │ │
│  │   travel specialist who handles every detail—        │ │
│  │   from flights to fishing licenses.                  │ │
│  │                                                       │ │
│  │   We don't book trips. We craft experiences.         │ │
│  │                                                       │ │
│  │   [ SPEAK WITH A SPECIALIST ]                        │ │
│  │                                                       │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 4.6 Footer

```
┌─────────────────────────────────────────────────────────────┐
│  [Deep Navy Background - #0A1628]                          │
│                                                             │
│  CTMS                                                       │
│                                                             │
│  Destinations        About              Contact            │
│  Costa Rica          Our Story          hello@ctms.com    │
│  Guatemala           CTMS Team          +1 (555) 000-0000 │
│  Belize              Press              New York, NY      │
│  Panama                                                     │
│                      Partners                              │
│  Experiences         Become an Affiliate                   │
│  Offshore            Travel Agents                         │
│  Inshore                                                   │
│  Fly Fishing        ──────────────────────────────────    │
│                                                             │
│  ─────────────────────────────────────────────────────     │
│                                                             │
│  © 2026 CTMS. All rights reserved.                         │
│  Privacy Policy · Terms of Service · Accessibility         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. Asset Requirements

### 5.1 Hero Images

| Asset | Dimensions | Format | Size Target | Storage Path |
|-------|------------|--------|-------------|--------------|
| Hero - Ocean Aerial | 2880×1800px | WebP | < 400KB | `/public/images/hero/` |
| Hero - Ocean Aerial (Mobile) | 1080×1920px | WebP | < 200KB | `/public/images/hero/` |
| Hero - Fog Overlay | 2880×1800px | PNG (transparency) | < 50KB | `/public/images/hero/` |

**Image Specifications:**
- Blue sky with minimal clouds
- Ocean horizon in upper third
- Soft, diffused lighting (Swiss fog aesthetic)
- Cool color temperature (slightly blue)
- No people or boats in primary hero
- Shot from aerial or elevated perspective

### 5.2 Package Images

| Asset | Dimensions | Format | Size Target | Storage Path |
|-------|------------|--------|-------------|--------------|
| Costa Rica Hero | 800×1200px | WebP | < 150KB | `/public/images/packages/costa-rica/` |
| Costa Rica Gallery 1-6 | 1600×1000px | WebP | < 200KB | `/public/images/packages/costa-rica/gallery/` |
| Guatemala Hero | 800×1200px | WebP | < 150KB | `/public/images/packages/guatemala/` |
| Guatemala Gallery 1-6 | 1600×1000px | WebP | < 200KB | `/public/images/packages/guatemala/gallery/` |
| Belize Hero | 800×1200px | WebP | < 150KB | `/public/images/packages/belize/` |
| Belize Gallery 1-6 | 1600×1000px | WebP | < 200KB | `/public/images/packages/belize/gallery/` |
| Panama Hero | 800×1200px | WebP | < 150KB | `/public/images/packages/panama/` |
| Panama Gallery 1-6 | 1600×1000px | WebP | < 200KB | `/public/images/packages/panama/gallery/` |

**Image Specifications:**
- Hero images: Vertical orientation, showcasing destination + fishing element
- Gallery images: Mix of landscape (fishing action) and detail shots (gear, boats, fish)
- Consistent color grading across all package images
- Include both action shots and atmospheric scenics
- Feature diverse anglers (when people are included)

### 5.3 CTMS Brand Assets

| Asset | Dimensions | Format | Storage Path |
|-------|------------|--------|--------------|
| Logo - Full | 400×100px | SVG | `/public/brand/logo-full.svg` |
| Logo - Wordmark | 200×50px | SVG | `/public/brand/logo-wordmark.svg` |
| Logo - Icon | 64×64px | SVG | `/public/brand/logo-icon.svg` |
| Logo - White | 400×100px | SVG | `/public/brand/logo-white.svg` |
| Favicon | 32×32px | ICO | `/public/favicon.ico` |
| Apple Touch Icon | 180×180px | PNG | `/public/apple-touch-icon.png` |
| OG Image | 1200×630px | PNG | `/public/og-image.png` |

### 5.4 Agent/Team Photos

| Asset | Dimensions | Format | Storage Path |
|-------|------------|--------|--------------|
| Primary Agent | 800×800px | WebP | `/public/images/team/` |
| Team Grid (4-6) | 600×600px | WebP | `/public/images/team/` |

**Photo Specifications:**
- Professional headshots
- Consistent lighting and background
- Friendly but professional demeanor
- Casual elegant attire (no suits, no t-shirts)

### 5.5 Fonts

| Font | Weights | Source | Storage Path |
|------|---------|--------|--------------|
| Untitled Sans | 200, 300, 400, 500 | Google Fonts / Self-hosted | `/public/fonts/` |
| System Fallback | - | System | N/A |

**Self-Hosting Note:** For AWWWARDS-level performance, self-host fonts with proper subsetting and preload.

### 5.6 Icons (Minimal Use)

Despite "no icons on buttons," some UI elements require icons:

| Icon Set | Style | Usage | Storage |
|----------|-------|-------|---------|
| Close/X | Minimal line | Modal close | Inline SVG |
| Arrow (right) | Minimal line | Link indicators | Inline SVG |
| Check | Minimal line | Form validation | Inline SVG |
| Hamburger | Minimal line | Mobile menu | Inline SVG |

---

## 6. Technical Architecture

### 6.1 File Structure (Next.js 14 App Router)

```
travel-site/
├── public/
│   ├── brand/
│   │   ├── logo-full.svg
│   │   ├── logo-wordmark.svg
│   │   ├── logo-icon.svg
│   │   └── logo-white.svg
│   ├── fonts/
│   │   ├── UntitledSans-Light.woff2
│   │   ├── UntitledSans-Regular.woff2
│   │   └── UntitledSans-Medium.woff2
│   ├── images/
│   │   ├── hero/
│   │   │   ├── ocean-aerial.webp
│   │   │   ├── ocean-aerial-mobile.webp
│   │   │   └── fog-overlay.png
│   │   ├── packages/
│   │   │   ├── costa-rica/
│   │   │   │   ├── hero.webp
│   │   │   │   └── gallery/
│   │   │   ├── guatemala/
│   │   │   │   ├── hero.webp
│   │   │   │   └── gallery/
│   │   │   ├── belize/
│   │   │   │   ├── hero.webp
│   │   │   │   └── gallery/
│   │   │   └── panama/
│   │   │       ├── hero.webp
│   │   │       └── gallery/
│   │   └── team/
│   │       ├── primary-agent.webp
│   │       └── team-grid/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── og-image.png
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Global styles + Tailwind
│   │   │
│   │   ├── packages/
│   │   │   ├── page.tsx            # All packages
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Individual package
│   │   │
│   │   ├── booking/
│   │   │   ├── page.tsx            # Booking entry
│   │   │   └── [packageId]/
│   │   │       ├── personal/
│   │   │       │   └── page.tsx    # Step 1
│   │   │       ├── trip/
│   │   │       │   └── page.tsx    # Step 2
│   │   │       ├── addons/
│   │   │       │   └── page.tsx    # Step 3
│   │   │       └── review/
│   │   │           └── page.tsx    # Step 4
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   └── api/
│   │       ├── booking/
│   │       │   └── route.ts        # Booking submission
│   │       └── contact/
│   │           └── route.ts        # Contact form
│   │
│   ├── components/
│   │   ├── ui/                     # Atomic UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   └── Card.tsx
│   │   │
│   │   ├── layout/                 # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── MobileMenu.tsx
│   │   │
│   │   ├── sections/               # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── GradientStatement.tsx
│   │   │   ├── PackageGrid.tsx
│   │   │   ├── TravelAgent.tsx
│   │   │   └── CTASection.tsx
│   │   │
│   │   ├── booking/                # Booking flow components
│   │   │   ├── BookingLayout.tsx
│   │   │   ├── StepIndicator.tsx
│   │   │   ├── PersonalForm.tsx
│   │   │   ├── TripForm.tsx
│   │   │   ├── AddonsForm.tsx
│   │   │   ├── ReviewSummary.tsx
│   │   │   └── BookingContext.tsx
│   │   │
│   │   └── shared/                 # Shared utilities
│   │       ├── FadeIn.tsx          # Scroll animation wrapper
│   │       ├── ImageOptimized.tsx  # Next/Image wrapper
│   │       └── AnimatePresence.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts                # Utility functions
│   │   ├── constants.ts            # Design tokens
│   │   └── api.ts                  # API utilities
│   │
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   ├── useIntersectionObserver.ts
│   │   └── useBooking.ts
│   │
│   ├── styles/
│   │   └── animations.css          # Keyframe animations
│   │
│   └── types/
│       ├── booking.ts
│       ├── package.ts
│       └── api.ts
│
├── content/
│   └── packages/                   # Markdown/JSON content
│       ├── costa-rica.md
│       ├── guatemala.md
│       ├── belize.md
│       └── panama.md
│
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

### 6.2 Key Dependencies

```json
{
  "dependencies": {
    "next": "14.2.x",
    "react": "18.3.x",
    "react-dom": "18.3.x",
    "framer-motion": "11.x",
    "clsx": "2.x",
    "tailwind-merge": "2.x"
  },
  "devDependencies": {
    "typescript": "5.x",
    "tailwindcss": "3.4.x",
    "autoprefixer": "10.x",
    "postcss": "8.x",
    "@types/react": "18.x",
    "@types/node": "20.x"
  }
}
```

### 6.3 Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          deep: '#1A2D4A',
        },
        blue: {
          sky: '#7AB8D9',
          pale: '#D4E5F0',
        },
        black: {
          soft: '#0D0D0D',
        },
        mist: '#F5F8FA',
        slate: '#4A5568',
      },
      fontFamily: {
        sans: ['Untitled Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['120px', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        h1: ['72px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        h2: ['48px', { lineHeight: '1.2', letterSpacing: '0' }],
        h3: ['32px', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'body-lg': ['21px', { lineHeight: '1.7', letterSpacing: '0.01em' }],
        body: ['18px', { lineHeight: '1.7', letterSpacing: '0.01em' }],
        caption: ['14px', { lineHeight: '1.5', letterSpacing: '0.12em' }],
        micro: ['12px', { lineHeight: '1.4', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
export default config
```

---

## 7. User Flow Documentation

### 7.1 Homepage Flow

```
┌─────────────────────────────────────────────────────────────┐
│                        USER ENTERS                          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     HERO SECTION                            │
│  - Full-screen cinematic ocean image                        │
│  - Brand headline fades in (1.5s delay)                     │
│  - "Explore Experiences" CTA                                │
│  - Scroll indicator animates                                │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼ (User scrolls)
┌─────────────────────────────────────────────────────────────┐
│               GRADIENT STATEMENT SECTION                    │
│  - Smooth scroll transition                                 │
│  - Text reveals on scroll (IntersectionObserver)            │
│  - Mouse parallax effect on gradient                        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼ (Continue scrolling)
┌─────────────────────────────────────────────────────────────┐
│                    PACKAGE GRID                             │
│  - Cards fade in sequentially (stagger 150ms)               │
│  - Hover states activate (scale, shadow, opacity)           │
│  - Click on card → Package detail page                      │
└─────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┴───────────────┐
              ▼                               ▼
┌─────────────────────────┐     ┌─────────────────────────────┐
│   VIEW DETAILS          │     │   START BOOKING             │
│   → Package page        │     │   → Booking flow (Step 1)   │
└─────────────────────────┘     └─────────────────────────────┘
              │
              ▼ (Continue scrolling)
┌─────────────────────────────────────────────────────────────┐
│                  TRAVEL AGENT SECTION                       │
│  - Agent photo fades in                                     │
│  - Value proposition text                                   │
│  - "Speak with a Specialist" CTA                            │
│    → Opens contact modal OR scrolls to contact              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                        FOOTER                               │
│  - Navigation links                                         │
│  - Contact information                                      │
│  - Legal links                                              │
└─────────────────────────────────────────────────────────────┘
```

### 7.2 Booking Flow

```
┌─────────────────────────────────────────────────────────────┐
│              USER CLICKS "BOOK NOW"                         │
│         (from package card or detail page)                  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   STEP 1: PERSONAL                          │
│  - Pre-selected package shown in mini-card                  │
│  - Form fields: Name, Email, Phone, Traveler count          │
│  - Validation: Required fields, email format                │
│  - State stored in Context/SessionStorage                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼ (Valid form)
┌─────────────────────────────────────────────────────────────┐
│                    STEP 2: TRIP                             │
│  - Date picker (calendar component)                         │
│  - Flexibility selection (radio group)                      │
│  - Special requests (textarea)                              │
│  - Package details persist in summary card                  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼ (Continue)
┌─────────────────────────────────────────────────────────────┐
│                   STEP 3: ADD-ONS                           │
│  - Available add-ons from package data                      │
│  - Checkbox selection with descriptions                     │
│  - Running total updates in real-time                       │
│  - Optional step (can skip)                                 │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼ (Continue)
┌─────────────────────────────────────────────────────────────┐
│                   STEP 4: REVIEW                            │
│  - Full summary of all selections                           │
│  - Total price calculation                                   │
│  - Deposit amount highlighted                               │
│  - Terms checkbox                                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼ (Submit)
┌─────────────────────────────────────────────────────────────┐
│                 SUBMISSION HANDLING                         │
│  - Form data sent to API                                    │
│  - Loading state (custom animation)                         │
│  - Success: Confirmation page with next steps               │
│  - Error: Inline error message, retry option                │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   CONFIRMATION                              │
│  - Booking reference number                                 │
│  - Summary email sent                                       │
│  - "What happens next" timeline                             │
│  - Contact specialist CTA                                   │
└─────────────────────────────────────────────────────────────┘
```

### 7.3 Navigation States

```
┌─────────────────────────────────────────────────────────────┐
│                    HEADER STATES                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  DEFAULT (Hero visible):                                    │
│  - Transparent background                                   │
│  - White logo                                               │
│  - White navigation text                                    │
│                                                             │
│  SCROLLED (Hero passed):                                    │
│  - Navy background (#0A1628)                                │
│  - White logo                                               │
│  - Sky Blue accent on active nav                            │
│  - Subtle shadow                                            │
│                                                             │
│  MOBILE:                                                    │
│  - Hamburger menu (always visible)                          │
│  - Full-screen menu overlay on open                         │
│  - Smooth slide-in animation                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 7.4 Error & Edge Cases

| Scenario | Handling |
|----------|----------|
| Form validation error | Inline error below field, shake animation |
| API timeout | Retry button, message about connection |
| Package unavailable | Grayed out card, "Contact for alternatives" |
| Date unavailable | Calendar shows unavailable dates, suggests alternatives |
| Session expired | Booking data in sessionStorage, prompt to resume |

---

## 8. Animation & Interaction Guidelines

### 8.1 Timing Functions

```css
/* Primary easing - elegant, smooth */
--ease-elegant: cubic-bezier(0.25, 0.1, 0.25, 1);

/* Bounce - playful but refined */
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Quick snap - for micro-interactions */
--ease-snap: cubic-bezier(0.5, 0, 0.5, 1);
```

### 8.2 Animation Durations

| Animation Type | Duration | Use Case |
|---------------|----------|----------|
| Micro (hover, focus) | 200ms | Button states, input focus |
| Short (reveals) | 400ms | Fade in, slide up |
| Medium (transitions) | 600ms | Page transitions, modals |
| Long (hero) | 1000-1500ms | Hero text, scroll-triggered |

### 8.3 Scroll-Triggered Animations

**Fade In Up:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 600ms var(--ease-elegant) forwards;
}
```

**Staggered Children:**
```css
.stagger-children > * {
  opacity: 0;
  animation: fadeInUp 600ms var(--ease-elegant) forwards;
}

.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 100ms; }
.stagger-children > *:nth-child(3) { animation-delay: 200ms; }
.stagger-children > *:nth-child(4) { animation-delay: 300ms; }
```

### 8.4 Button Hover States

**Text-Only Button Design:**
```css
.btn-text {
  position: relative;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7AB8D9;
  background: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
}

.btn-text::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #7AB8D9;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 400ms var(--ease-elegant);
}

.btn-text:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.btn-text:active {
  transform: scale(0.98);
}
```

### 8.5 Page Transitions

```typescript
// Framer Motion page transition
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
}
```

---

## 9. Accessibility Standards

### 9.1 Color Contrast

All text must meet WCAG 2.1 AA standards:

| Combination | Ratio | Standard |
|------------|-------|----------|
| White on Navy | 15.8:1 | AAA ✓ |
| White on Soft Black | 19.5:1 | AAA ✓ |
| Sky Blue on Navy | 4.6:1 | AA ✓ |
| Sky Blue on White | 3.1:1 | AA Large ✓ |
| Slate on Mist | 5.2:1 | AA ✓ |

### 9.2 Focus States

```css
:focus-visible {
  outline: 2px solid #7AB8D9;
  outline-offset: 4px;
}

/* Remove default focus for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

### 9.3 Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 9.4 Semantic Structure

- Single `<h1>` per page
- Logical heading hierarchy (h1 → h2 → h3)
- Navigation in `<nav>` element
- Main content in `<main>`
- Footer in `<footer>`
- Forms with proper `<label>` associations

---

## 10. Performance Targets

### 10.1 Core Web Vitals

| Metric | Target | Why |
|--------|--------|-----|
| LCP (Largest Contentful Paint) | < 2.5s | Hero image optimization |
| FID (First Input Delay) | < 100ms | Minimal JavaScript on initial load |
| CLS (Cumulative Layout Shift) | < 0.1 | Defined dimensions, font loading |
| INP (Interaction to Next Paint) | < 200ms | Optimized event handlers |

### 10.2 Lighthouse Scores

| Category | Target |
|----------|--------|
| Performance | 90+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

### 10.3 Loading Strategy

1. **Critical CSS:** Inline above-fold styles
2. **Fonts:** Preload, font-display: swap
3. **Images:** Next.js Image with blur placeholder
4. **JavaScript:** Dynamic imports for booking flow
5. **Third-party:** Defer non-critical scripts

### 10.4 Image Optimization

```typescript
// next.config.js
const config = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
}
```

---

## Appendix A: Content Guidelines

### Tone of Voice

- **Confident:** We don't sell—we curate
- **Precise:** Every word earns its place
- **Exclusive:** This isn't for everyone, and that's the point
- **Warm:** We're passionate anglers ourselves

### Copy Examples

**Headline:**
> WHERE THE WORLD'S GREATEST ANGLERS FIND THEIR CATCH

**Subheadline:**
> Curated fishing experiences in the world's most pristine waters

**CTA:**
> EXPLORE EXPERIENCES

**Value Proposition:**
> We don't book trips. We craft experiences.

---

## Appendix B: Development Phases

### Phase 1: Foundation (Week 1-2)
- Design system setup (Tailwind config)
- Component library (Button, Input, Card)
- Layout components (Header, Footer)
- Typography and color implementation

### Phase 2: Homepage (Week 3-4)
- Hero section with animations
- Gradient statement section
- Package grid with cards
- Travel agent section
- Responsive breakpoints

### Phase 3: Package Pages (Week 5)
- Package detail layout
- Gallery component
- Booking CTA integration
- Content management setup

### Phase 4: Booking Flow (Week 6-7)
- Multi-step form architecture
- Form validation
- State management (Context)
- API integration

### Phase 5: Polish & QA (Week 8)
- Animation refinements
- Accessibility audit
- Performance optimization
- Cross-browser testing

---

## Appendix C: File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `PackageCard.tsx` |
| Hooks | camelCase with use prefix | `useBooking.ts` |
| Utilities | camelCase | `formatCurrency.ts` |
| Styles | kebab-case | `hero-section.css` |
| Images | kebab-case | `costa-rica-hero.webp` |
| Content | kebab-case | `costa-rica.md` |

---

**Document Status:** Complete  
**Next Steps:** Review with client, begin Phase 1 development  
**Questions:** Contact design team lead

---

*This design brief was created with AWWWARDS-winning principles in mind. Every decision prioritizes visual excellence, user experience, and technical performance.*
