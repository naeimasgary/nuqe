# Nuqlei UX Flow & Design System — Complete Summary

> **Source**: Figma canvas `UX Flow` (node `52643:22421`, section `52788:33360`)
> **Product**: Nuqlei — A vetted B2B marketplace for industrial automation instrumentation and programming services.
> **Last updated**: March 2026 (reflects latest Figma design pass)

---

## 1. Product Overview

Nuqlei is a two-sided B2B marketplace connecting **Buyers** (industrial companies sourcing instrumentation and programming services) with **Sellers** (vendors, integrators, service providers). The core differentiators are:

- **Vetted access** — buyers require admin approval before the platform is fully unlocked
- **Anonymous communication** — identities stay hidden until both parties choose to reveal
- **Reputation + trust layer** — verified credentials, transaction history, reputation scores
- **Project-centric workflow** — all procurement activity is organized around "Projects" created by buyers

---

## 2. User Roles

| Role | Description |
|------|-------------|
| **Buyer** | Creates Projects, sources vendors, sends quote requests, manages anonymous chats |
| **Seller** | Lists services, receives quote requests, responds via anonymous chat, gets paid |
| **Admin** | Verifies/approves accounts, manages the directory (implied, not yet shown in UI) |

---

## 3. Complete UX Flow (Updated)

### 3.1 Public / Pre-Authentication

```
Landing Page (Home Page)
    │
    ├─► [Sign In] ────────────────────────► Sign In Page
    │   (button in navbar)                      │
    │                                           └─► Dashboard (if credentials valid)
    │
    └─► [Create Project] in navbar
              │
              ▼
    Create Account — Role Selection
    (Radio: "I am a Buyer" | "I am a Seller")
    ─── Email field shown ───
    ─── Alert: "Buyer Vetting Required" (if Buyer selected) ───
    ─── [Apply] button ───
              │
              ▼
    Create Account — Set Password
    (Password + Retype Password with validation)
    ─── "Passwords matching" ✓ / "Passwords must match" ✗ ───
              │
              ▼
    Create Account — Verification (Thank you)
    "Thank you for applying"
    "Verification might take 12 to 24 hours."
              │
              ▼
    Sign In (once approved by admin)
              │
              ▼
    Welcome Screen — "Welcome to Nuqlei"
    "Lets build your first project!"
    ─── Inline: [Project name input] [Create] ───
              │
              ▼
    Create Project (inside Dashboard shell)
    "Create your first project"
    ─── Project Name, Project Category (search), Postal Code ───
              │
              ▼
    Search All Sellers (inside Dashboard shell)
    ─── Category filter + search ───
    ─── Top 3 results (Company + distance + URL + checkbox) ───
    ─── [Send project to sellers] ───
              │
              ▼
    Waiting Screen / Loading Screen
    "Waiting screen — Project loading in Dashboard"
              │
              ▼
    Dashboard (Project Dashboard)
```

---

### 3.2 Authentication & Onboarding Flow — Detailed Pages

| Step | Page Name (Figma) | Figma Node | Key Content |
|------|-------------------|-----------|-------------|
| 1 | **Sign In** | `52646:30366` | Split layout: Left = dark hero (brand copy "Start selling" + neon visual); Right = white card with Nuqlei symbol, "Welcome / Sign in", email + password, [Sign in] button, "Don't have an account? Create Account" |
| 2 | **Create Account — Role Select** | `52646:29212` | Split layout: Left = dark hero ("Apply to start creating Projects..."); Right = white panel with "Join / The Nuqlei Network", radio buttons (Buyer/Seller), email field, "Buyer Vetting Required" alert box, [Apply] button |
| 3 | **Create Account — Verification** | `52669:15188` | Split layout: Left = dark hero; Right = "Thank you for applying / You have successfully applied to the Nuqlei network." + "Please be patient..." + "Verification might take 12 to 24 hours." |
| 4 | **Set Password** | `52764:9291` | Split layout: Left = dark hero; Right = white card "Set your password", Password + Retype Password fields, password validation indicators (matching / must match), [Create Password] button |
| 5 | **Welcome / Project Name** | `52677:4284` | Full-screen dark background with neon: centered "Welcome to Nuqlei / Lets build your first project!" + inline [Project name input] + [Create] button |
| 6 | **Create Project (Onboarding)** | `52677:4365` | Split dark layout: Left = hero "Tell us about your project"; Right = white card "Create your first project" — Postal Code, Project Category (search), Postal Code again, [Next] button |
| 7 | **Waiting Screen** | `52764:9210` | Full-screen dark: centered Nuqlei logo + "Waiting screen" + "Project loading in Dashboard" |

**Key Changes from Previous Version:**
- The old multi-step onboarding (Business Name → Step 1/3 category chips → Verification) has been **redesigned**
- Registration is now: **Role Select + Email → Set Password → Verification confirmation**
- A new **"Welcome to Nuqlei"** screen prompts immediate project creation
- The **project creation** flow now happens within the dashboard shell (not a standalone page)
- New **"Set Password"** step with real-time validation indicators
- The "Buyer Vetting Required" info box is shown inline on the registration form

---

### 3.3 Authenticated App — Dashboard Shell

All authenticated pages share the same **dashboard shell layout** (232px sidebar + fluid main area):

```
┌──────────────────────────────────────────────────────────────────┐
│  Sidebar (232px)                │  Main Content Area             │
│  ┌──────────────────────────┐   │  ┌────────────────────────┐   │
│  │ [Nuqlei Logo]            │   │  │ Dashboard Header       │   │
│  │                          │   │  │ [Search ⌘K] [Calendar] │   │
│  ├──────────────────────────┤   │  │ [🔔] [🌐] [User ▼]    │   │
│  │ Dashboard                │   │  ├────────────────────────┤   │
│  │  • Dashboard             │   │  │                        │   │
│  │  • Projects  [active]    │   │  │   Page Content         │   │
│  │  • Chats     [badge: 3]  │   │  │                        │   │
│  ├──────────────────────────┤   │  └────────────────────────┘   │
│  │ General                  │   │                                │
│  │  • Settings              │   │                                │
│  │  • Help Center           │   │                                │
│  ├──────────────────────────┤   │                                │
│  │ ┌────────────────────┐   │   │                                │
│  │ │ Provide your       │   │   │                                │
│  │ │ feedback           │   │   │                                │
│  │ │ [Send Feedback]    │   │   │                                │
│  │ └────────────────────┘   │   │                                │
│  └──────────────────────────┘   │                                │
└──────────────────────────────────────────────────────────────────┘
```

**Key Update — Sidebar Changes:**
- Navigation is simplified to: **Dashboard, Projects, Chats** (under "Dashboard" group)
- "Quotes" is **removed from the sidebar** — quote data is now part of the Dashboard overview
- "General" group has **Settings** and **Help Center** only
- The **"Upgrade Plan"** card has been **replaced** by a **"Provide your feedback / Send Feedback"** card at the bottom of the sidebar
- **Chat badge** shows unread count (e.g., "3" in red)

---

### 3.4 Dashboard Pages (Authenticated — Updated)

#### Page 1: Dashboard (Overview)
- **Route**: `/dashboard`
- **Layout**: Full-width card container
- **Content**: Summary widgets and activity (TBD — design in progress)

#### Page 2: Projects List
- **Route**: `/dashboard/projects`
- **Layout**: Standard shell
- **Content**:
  - Page title "Projects" + subtitle "Create a new project to get started"
  - **Multi-column project creation form** (inside the main card):
    - Row 1: Project Name | Project Category (search) | Postal Code
    - Row 2: Budget ($) | Delivery Date (calendar)
    - Row 3: Project Description (large textarea)
    - Row 4: File upload area + 6 image upload slots (3×2 grid)
  - This is the **Create New Project** form embedded directly in the Projects page

#### Page 3: Search All Sellers (Step 2 of project creation)
- **Route**: `/dashboard/projects/new/sellers` (or sub-step)
- **Layout**: Standard shell
- **Content**:
  - Title "Search all sellers"
  - Filter bar: **[Category ▼]** + search input
  - Filter pills: **[Distance ▼]** | **[Ascending ▼]**
  - Result summary: "Top 3 results" | "3 Sellers Selected"
  - Seller cards (selectable with checkbox):
    - Company Name + City, Province + Distance (km) + website URL
    - Selected sellers highlighted with blue border
  - Bottom CTA: **[Send project to sellers]**

#### Page 4: Chats (Narrow — compact view)
- **Route**: `/dashboard/chats`
- **Layout**: Standard shell, **2-column chat layout** inside main area
  - **Left column (321px)**: Chat list panel — avatar + name + last message preview + unread badge
  - **Right column (757px)**: Active conversation panel
    - Conversation header (avatar + name + action icons)
    - Message thread (buyer messages left-aligned, seller messages right-aligned with avatar)
    - Message input bar at bottom

#### Page 5: Settings
- **Route**: `/dashboard/settings`
- Placeholder — design TBD

#### Page 6: Help Center
- **Route**: `/dashboard/help`
- Placeholder — design TBD

---

### 3.5 Landing Page — Sections (Updated Copy)

The landing page copy has been refined:

| Section | Key Content |
|---------|-------------|
| **Hero Banner** | "Source Industrial Automation with Confidence" — "The vetted B2B marketplace where buyers and sellers of instrumentation and programming services connect anonymously — with trust built in." |
| **Built for Industrial B2B** | 4 feature pillars: Vetted Buyers Only, Anonymous Communication, Trust & Authenticity, Smart Directory |
| **How It Works** | Accordion: Apply & Get Vetted, Browse & Discover, Connect Anonymously |
| **Dashboard Preview** | Interactive product screenshot with data widgets (stat cards, marketing report) |
| **Testimonials** | "What our users think." — Jenny Wilson, CEO & Head of Comp Inc. |
| **Trusted By** | Intel, Oracle, Dell, Samsung, Infosys, Capgemini logos |
| **FAQ** | 7 accordion items |
| **Footer** | Platform links (Directory, Get started, About, Contact) + Resources (News room, Privacy policy, Terms of service) + "All rights reserved. Nuqlei 2026. Produced by CTH Controls" |

---

## 4. Full Page Inventory (Updated)

### Public / Marketing Pages

| # | Page | Path | Figma Node | Status |
|---|------|------|-----------|--------|
| 1 | **Home / Landing Page** | `/` | `52643:27243` | ✅ Built |
| 2 | Home Page — Mobile | `/` (responsive) | `52643:28263` | ⬜ Pending |

### Authentication & Onboarding Pages

| # | Page | Path | Figma Node | Status |
|---|------|------|-----------|--------|
| 3 | **Sign In** | `/sign-in` | `52646:30366` | ✅ Built (needs review) |
| 4 | **Create Account — Role Select** | `/register` | `52646:29212` | ✅ Built (needs review) |
| 5 | **Create Account — Verification** | `/register/verification` | `52669:15188` | ✅ Built (needs update) |
| 6 | **Set Password** | `/register/set-password` | `52764:9291` | ⬜ NEW — Not built |
| 7 | **Welcome / Project Name** | `/onboarding/welcome` | `52677:4284` | ⬜ Needs update |
| 8 | **Waiting Screen** | `/onboarding/loading` | `52764:9210` | ⬜ NEW — Not built |

> **Note**: Old onboarding pages (BusinessName, OnboardingStep1, separate Seller flow) have been replaced/consolidated. The new flow is: Register → Set Password → Verification confirmation → Welcome → Create Project → Waiting Screen.

### Dashboard / App Pages

| # | Page | Path | Figma Node | Status |
|---|------|------|-----------|--------|
| 9 | **Dashboard Overview** | `/dashboard` | TBD | ✅ Built (placeholder) |
| 10 | **Projects / Create Project** | `/dashboard/projects` | `52676:5164` | ✅ Built (needs update) |
| 11 | **Search All Sellers** | `/dashboard/projects/sellers` | `52764:11037` | ⬜ NEW — Not built |
| 12 | **Chats / Inbox** | `/dashboard/chats` | TBD | ✅ Built |
| 13 | **Settings** | `/dashboard/settings` | TBD | ✅ Built (placeholder) |
| 14 | **Help Center** | `/dashboard/help` | TBD | ✅ Built (placeholder) |

> **Removed from scope**: Quotes page as standalone nav item — quotes data is surfaced through Dashboard Overview widgets.

---

## 5. Key UI Components Identified

### Layout Components
| Component | Description | Status |
|-----------|-------------|--------|
| `BannerHeader` | Dark top announcement bar with badge + message | ✅ Built |
| `SiteHeader` / `Navbar` | Sticky navigation with logo, nav links + CTA buttons (public) | ✅ Built |
| `DashboardLayout` | 232px sidebar + top header shell | ✅ Built |
| `Sidebar` | Grouped nav: Dashboard / General sections + Feedback card at bottom | ✅ Built (needs update) |
| `DashboardHeader` | Top bar (search ⌘K, calendar, notifications, language, user) | ✅ Built |

### Auth Layout Components
| Component | Description | Status |
|-----------|-------------|--------|
| `AuthLayout` | Two-column split: dark hero (left) + white form card (right) | ✅ Built |
| `SetPasswordForm` | Password + Retype with live validation indicators | ⬜ NEW |
| `WelcomeScreen` | Full-screen dark with centered inline project name input | ⬜ NEW |
| `WaitingScreen` | Full-screen dark loading state with logo | ⬜ NEW |

### Form Components
| Component | Description | Status |
|-----------|-------------|--------|
| `InputField` | Text input with label + helper text + validation states | ✅ Built |
| `Checkbox` | Checkbox with label | ✅ Built |
| `RadioGroup` | Buyer/Seller role selector (radio buttons) | ⬜ NEW |
| `AlertBox` | Inline info/warning box (e.g., "Buyer Vetting Required") | ⬜ NEW |
| `FileUpload` | Drag-drop upload area + image slot grid (3×2) | ⬜ NEW |
| `DatePicker` | Calendar date input | ⬜ NEW |
| `SearchableSelect` | Dropdown with search (project category) | ⬜ NEW |

### Data Display Components
| Component | Description | Status |
|-----------|-------------|--------|
| `DataTable` | Full table with sortable columns, checkbox rows, pagination | ✅ Built |
| `SellerCard` | Selectable seller listing (name, location, distance, URL) | ⬜ NEW |
| `SellerSearchBar` | Category filter + search input combo | ⬜ NEW |
| `StatCard` | Metric card with value, trend badge, mini chart | ✅ Built |

### Chat Components
| Component | Description | Status |
|-----------|-------------|--------|
| `ChatList` | Scrollable list of conversations with avatar + preview + unread | ✅ Built |
| `ChatMessage` | Individual message bubble | ✅ Built |
| `ChatInput` | Message compose bar with send button | ✅ Built |

### Feedback & Navigation Components
| Component | Description | Status |
|-----------|-------------|--------|
| `StatusBadge` | Colored inline status tag (New, Pending, Declined, etc.) | ✅ Built |
| `Avatar` | User avatar (round, multiple sizes) | ✅ Built |
| `NuqleiLogo` | SVG logo component with color variants (default/white/black) | ✅ Built |
| `Button` | Primary/Secondary/Danger variants with hover/focus/disabled states | ✅ Built |

---

## 6. Color Semantics Used in the App

| Color | Semantic meaning |
|-------|-----------------|
| `#FF6692` (rose/pink) | Warning — indicates items needing attention |
| `#00CEB6` (teal/success) | Success — positive states, completed items |
| `#FFB900` (amber) | Alert — moderate priority items |
| `#00A6F4` (skyBrand-500) | Primary brand — buttons, active states, CTAs |
| `#0F172B` (slate-900) | Dark background (auth pages, hero panels, waiting screen) |
| `#F8FAFC` (slate-50) | Page backgrounds |
| `#262626` (neutral-800) | Primary text |
| `#737373` (neutral-500) | Secondary text |
| `#E5E5E5` (neutral-200) | Borders, dividers |

---

## 7. Development Phases Roadmap (Updated)

### Phase 1 — Landing Page ✅ Complete
- Public landing page with all sections
- Design token system (Tailwind CSS v4 + TypeScript tokens)
- Vite + React + TypeScript project setup
- `BannerHeader`, `SiteHeader`, `NuqleiLogo` components

### Phase 2 — Authentication Pages ✅ Partially Complete
**Done:**
- Sign In page (needs design review vs Figma)
- Create Account page (needs design review vs Figma)
- Verification/pending page

**Needs work:**
- Set Password page (NEW — not built)
- Welcome screen (NEW design — currently shows old onboarding)
- Waiting Screen (NEW — not built)
- Old onboarding pages (BusinessName, Step1, etc.) should be removed/replaced

### Phase 3 — Dashboard Shell ✅ Complete
- Sidebar with navigation
- Dashboard header
- Routing via React Router

### Phase 4 — Dashboard Pages ✅ Partially Complete
**Done:**
- Dashboard Overview (placeholder)
- Projects Page (needs redesign — should be Create Project form, not table)
- Chats Page (built)
- Settings / Help Center (placeholders)

**Needs work:**
- Projects page should show the full Create Project form (not a DataTable)
- Search All Sellers page (NEW — not built)
- Dashboard Overview with real widget content
- Quotes has been removed as a standalone nav item

### Phase 5 — Project Creation Flow ⬜ In Progress
- Create Project form (inside dashboard Projects page)
- Search & Select Sellers page (with filters, checkboxes, distance)
- Send project to sellers → Waiting Screen

### Phase 6 — Polish & Refinement ⬜ Pending
- Mobile responsive views (landing page + auth)
- Sidebar updates (remove Upgrade Plan card, add Feedback card)
- Route cleanup (remove old onboarding routes)
- Storybook stories for all new components

---

## 8. Technical Architecture Notes

### Routing Structure (Updated)
```
/                               → LandingPage
/sign-in                        → SignInPage
/register                       → CreateAccount (role select + email)
/register/set-password          → SetPasswordPage  ← NEW
/register/verification          → VerificationPage (thank you state)
/onboarding/welcome             → WelcomeScreen (project name)  ← REDESIGNED
/onboarding/loading             → WaitingScreen  ← NEW
/dashboard                      → DashboardLayout (protected)
  /dashboard/                   → DashboardHome
  /dashboard/projects           → ProjectsPage (Create Project form)
  /dashboard/projects/sellers   → SearchSellersPage  ← NEW
  /dashboard/chats              → ChatsPage
  /dashboard/chats/:id          → ChatConversationPage
  /dashboard/settings           → SettingsPage
  /dashboard/help               → HelpPage
```

### Removed Routes
```
/register/buyer                 → consolidated into /register
/register/seller                → consolidated into /register
/onboarding/name                → replaced by /onboarding/welcome
/onboarding/step-1              → removed (category chips flow removed)
/onboarding/step-2              → removed
/onboarding/step-3              → removed
/verify/pending                 → replaced by /register/verification
/verify/success                 → removed (flow simplified)
/verify/failed                  → removed (flow simplified)
/dashboard/quotes               → removed from nav (merged into dashboard)
```

### Key New Pages to Build
```
src/pages/
├── auth/
│   ├── SignIn.tsx               ✅ (needs review)
│   ├── CreateAccount.tsx        ✅ (needs review)
│   ├── SetPassword.tsx          ⬜ NEW
│   └── VerificationPending.tsx  ✅ (needs update)
├── onboarding/
│   ├── WelcomeScreen.tsx        ⬜ NEW (replaces old BusinessName + Step1-3)
│   └── WaitingScreen.tsx        ⬜ NEW
└── dashboard/
    ├── DashboardHome.tsx        ✅
    ├── ProjectsPage.tsx         ✅ (needs redesign as Create Project form)
    ├── SearchSellersPage.tsx    ⬜ NEW
    ├── ChatsPage.tsx            ✅
    ├── SettingsPage.tsx         ✅ (placeholder)
    └── HelpPage.tsx             ✅ (placeholder)

src/components/
├── form/
│   ├── RadioGroup.tsx           ⬜ NEW
│   ├── AlertBox.tsx             ⬜ NEW
│   ├── FileUpload.tsx           ⬜ NEW
│   ├── DatePicker.tsx           ⬜ NEW
│   └── SearchableSelect.tsx     ⬜ NEW
└── project/
    ├── SellerCard.tsx           ⬜ NEW
    └── SellerSearchBar.tsx      ⬜ NEW
```

---

## 9. Summary of Key Changes (Latest Figma Pass)

| Area | Previous Design | New Design |
|------|----------------|------------|
| Registration flow | Multi-step (role → buyer/seller details → business name → category chips → 3 verification states) | Simplified (role + email → set password → verification thank you) |
| Password setup | Combined with registration form | **Separate "Set Password" step** with live validation |
| Post-verification onboarding | "Business name" + "Tell us about your business" category chips | **"Welcome to Nuqlei"** — direct project name entry + Create |
| Project creation | Separate flow (pre-dashboard) | **Inside Dashboard** — Projects page IS the Create Project form |
| After project creation | Redirect to dashboard | **Search All Sellers** → select sellers → Send → **Waiting Screen** |
| Dashboard sidebar | Overview, Quotes, Projects, Chats + Tools + Upgrade Plan upsell | Dashboard, Projects, Chats + Settings, Help Center + Feedback card |
| Quotes | Standalone nav page | Removed from sidebar; data surfaces in Dashboard Overview |
| Loading/transition state | Not designed | **Full-screen Waiting Screen** during project load |

---

*This document was last updated after a full Figma canvas review of nodes `52643:22421` and `52788:33360` in March 2026.*
