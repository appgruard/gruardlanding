# Design Guidelines: Grúa RD Landing Page

## Design Approach
**Reference-Based Approach:** Drawing inspiration from Uber and modern SaaS landing pages (Stripe, Linear) with ride-hailing service aesthetics. This is a dual-sided marketplace connecting clients with tow truck operators, requiring clear value propositions for each audience.

**Key Principles:**
- Emergency-ready clarity with high contrast
- Caribbean-optimized (bright sunlight readable)
- Trust-building through social proof
- Mobile-first responsive design

---

## Brand Colors
- **Navy Blue Primary:** `#0F2947` / `hsl(210, 65%, 17%)` - Headers, primary buttons, navigation
- **Orange Accent:** `#F59E0B` / `hsl(38, 91%, 55%)` - CTAs, highlights, active states, badges
- **Supporting Neutrals:** White backgrounds, light grays for cards (`#F9FAFB`, `#E5E7EB`), dark gray text (`#1F2937`)

---

## Typography
**Font Family:** Inter (Google Fonts)
- **Hero Headline:** 3xl-4xl (mobile) / 5xl-6xl (desktop), font-bold, navy blue
- **Section Headers:** 2xl-3xl, font-bold, navy blue
- **Subheadings:** xl, font-semibold
- **Body Text:** base-lg, font-normal, gray-700
- **CTAs:** lg, font-semibold

---

## Layout System
**Spacing Units:** 4, 6, 8, 12, 16, 20, 24, 32 (Tailwind scale)
- Section vertical padding: py-16 (mobile) / py-24 (desktop)
- Container: max-w-7xl, px-4 (mobile) / px-6 (desktop)
- Card spacing: p-6 to p-8
- Grid gaps: gap-6 to gap-8

---

## Page Structure

### 1. Hero Section (100vh on desktop, auto on mobile)
- **Layout:** Full-width background with centered content
- **Background:** Large hero image showing tow truck in action or map interface with vehicles
- **Content:** Logo, powerful headline ("Asistencia Vial Cuando Más La Necesitas"), subheadline, dual CTAs
- **CTAs:** Two prominent buttons with blurred backgrounds:
  - Primary (Orange): "Descargar App" with Google Play/App Store badges below
  - Secondary (Navy outline): "Ver Demo"
- **Visual:** Floating phone mockup showing app interface on right side (desktop only)

### 2. Servicios Principales (3-column grid)
- **Cards:** Icon (truck/wrench/building), title, 3-4 bullet points
- **Columns:** 
  - Para Clientes: Solicitud rápida, GPS en tiempo real, pagos flexibles
  - Para Operadores: Dashboard, Wallet, navegación Waze
  - Para Empresas: Portal B2B, facturación, gestión de flota

### 3. Características Técnicas (2-column split)
- **Left:** Large phone mockup with app screenshots carousel
- **Right:** Feature list with checkmarks:
  - PWA + Apps Nativas (iOS/Android)
  - Notificaciones Push
  - Verificación OCR de Cédula
  - Disponible Offline
  - Seguimiento GPS Preciso

### 4. Cómo Funciona (Horizontal timeline - 3 steps)
- **Layout:** Three cards side-by-side with connecting lines
- **Content per card:** Number badge (orange circle), icon, title, brief description
- **Steps:** 1) Solicita el servicio → 2) Rastreamos en tiempo real → 3) Paga y califica

### 5. Testimonios (3-column cards)
- **Cards:** Avatar, name, role (Cliente/Operador), star rating, quote
- **Background:** Light gray section (bg-gray-50)

### 6. Cobertura (Full-width map section)
- **Visual:** Stylized map of Dominican Republic with location markers
- **Overlay:** Stats in floating cards (150+ Operadores, 10,000+ Servicios Completados)

### 7. Descarga (Centered CTA section)
- **Background:** Navy blue
- **Content:** White text, app store badges, QR code for instant download
- **Layout:** Centered content with phone mockup on sides (desktop)

### 8. Footer
- **Columns:** 4-column grid (mobile stacks)
  - Logo + tagline
  - Navegación (Clientes, Operadores, Empresas, Soporte)
  - Descargas (badges)
  - Legal + Social icons
- **Background:** Dark navy (#0F2947)
- **Text:** White/gray-300

---

## Component Specifications

**Buttons:**
- Primary (Orange): h-12, rounded-lg, px-8, shadow-lg, font-semibold
- Secondary (Navy): h-12, rounded-lg, px-8, border-2, transparent bg
- On image CTAs: backdrop-blur-md, bg-white/10, border border-white/20

**Cards:**
- Rounded-xl, shadow-md on hover, p-6 to p-8
- Feature cards: Icon in orange circle (w-12 h-12), title (text-xl), description (text-gray-600)

**Icons:**
- Use Heroicons via CDN
- Size: w-6 h-6 (inline), w-12 h-12 (feature icons)

---

## Images

**Hero Background:** 
- Full-width image of tow truck on Dominican highway or app map interface with multiple service points
- Overlay: Dark gradient from bottom (rgba(15, 41, 71, 0.7))

**Phone Mockups:**
- Show actual app interface (login, service request, GPS tracking screens)
- Position: Floating at slight angle, drop shadow

**Feature Icons:**
- Use icon library + orange accent color
- GPS pin, wallet, truck, mobile phone, shield (security)

**Testimonial Avatars:**
- Circular, w-16 h-16, border-2 border-orange

**Map Section:**
- Simplified illustration or actual Mapbox embed of Dominican Republic with markers

---

## Animations
- Hero CTA pulse effect (subtle)
- Cards scale on hover (scale-105)
- Scroll-triggered fade-ins for sections (Framer Motion)
- Phone mockup parallax in hero
- Number counter animations for stats

---

## Multi-Column Strategy
- **3-column:** Servicios (desktop), Testimonios
- **2-column:** Características técnicas (image + features)
- **4-column:** Footer
- **Mobile:** All stack to single column with proper spacing