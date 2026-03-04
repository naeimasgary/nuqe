# Nuqlei UX Flow & Design System — Complete Summary

> **Source**: Figma canvas `UX Flow` (node `52643:22421`)  
> **Product**: Nuqlei — A vetted B2B marketplace for industrial automation instrumentation and programming services.  
> **Last studied**: March 2026

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

## 3. Complete UX Flow

### 3.1 Public / Pre-Authentication

```
Landing Page (Home Page)
    │
    ├─► [Sign in] ──────────────────────► Sign In Page
    │                                          │
    │                                          └─► Dashboard (if credentials valid)
    │
    └─► [Create Project] / [Apply Now] 
              │
              ▼
    Create Account — Role Selection
    (Buyer checkbox | Seller checkbox)
              │
    ┌─────────┴──────────┐
    ▼                    ▼
Create Account      Create Account
— Buyer             — Seller
(Name + Email       (Name + Email
 + Password)         + Password)
    │                    │
    ▼                    ▼
  Welcome Screen         │
"What is your business   │
 name?" (inline input)   │
    │                    │
    ▼                    ▼
Onboarding Step 1/3      │
"Tell us about your      │
 business" (chip select) │
    │                    │
    ▼                    ▼
[Verification States — branching]
    │
    ├─► "Thank you for applying!"
    │     (pending review — 12–24 hrs)
    │
    ├─► "You are already Verified" ✓
    │     → Go to Dashboard
    │
    └─► "Sorry, we can not verify your account" ✗
          → Contact us
```

---

### 3.2 Authentication Flow — Detailed Pages

| Step | Page Name (Figma) | Key Content |
|------|-------------------|-------------|
| 1 | **Create Account — Buyer** | Split layout: Left = hero/brand copy + "Apply to start creating Projects"; Right = Register form (Buyer / Seller checkboxes, email, password) |
| 2 | **Create Account — Seller** | Same split layout, seller-specific copy |
| 3 | **Business Name Entry** | Full-screen welcome with inline input "What is your business name?" |
| 4 | **Onboarding Step 1/3** | "Tell us about your business" — chip-select category grid (6 chips in 2 rows × 3 cols) |
| 5 | **Verification — Pending** | "Thank you for applying!" — confirmation message, 12–24 hr wait notice, CTA to sign in |
| 6 | **Verification — Verified** | Check badge + "You are already Verified" — directs to dashboard |
| 7 | **Verification — Failed** | Error icon + "Sorry, we cannot verify your account" — contact prompt |
| 8 | **Sign In** | Split layout: Left = hero brand; Right = email + password form, "Don't have an account? Create Account" link |

---

### 3.3 Authenticated App — Dashboard Shell

All authenticated pages share a consistent **shell layout**:

```
┌──────────────────────────────────────────────────────────┐
│  Sidebar (232px)           │  Main Content Area (1152px) │
│  ┌─────────────────────┐   │  ┌──────────────────────┐   │
│  │ Sidebar Header      │   │  │ Dashboard Header     │   │
│  │ (Logo + user)       │   │  │ (Breadcrumb/Search/  │   │
│  ├─────────────────────┤   │  │  User Actions)       │   │
│  │ Navigation          │   │  ├──────────────────────┤   │
│  │ Section: Dashboard  │   │  │                      │   │
│  │  • Overview         │   │  │   Page Content       │   │
│  │  • Quotes           │   │  │   (CardContainer)    │   │
│  │  • Projects         │   │  │                      │   │
│  │  • Chats            │   │  └──────────────────────┘   │
│  ├─────────────────────┤   │                             │
│  │ Section: General    │   │                             │
│  │  • Settings         │   │                             │
│  │  • [item 2]         │   │                             │
│  ├─────────────────────┤   │                             │
│  │ Section: Tools      │   │                             │
│  │  • [tool item]      │   │                             │
│  │  [New Project btn]  │   │                             │
│  ├─────────────────────┤   │                             │
│  │ Upgrade Plan promo  │   │                             │
│  │ (AI features CTA)   │   │                             │
│  └─────────────────────┘   │                             │
└──────────────────────────────────────────────────────────┘
```

**Sidebar navigation groups:**
1. **Dashboard** section — Overview, Quotes, Projects, Chats
2. **General** section — Settings-type items
3. **Tools** section — Additional utilities
4. **Footer area** — "Upgrade plan" upsell card (AI-powered replies, tag insights)

---

### 3.4 Dashboard Pages (Authenticated)

#### Page 1: Dashboard (Overview)
- **Route**: `/dashboard`
- **Layout**: Full-width card container (3 rows of panels)
- **Content panels**:
  - **Row 1**: Page title + "New Project" button
  - **Row 2 (full width)**: Large data panel — likely a summary table/feed of recent activity
  - **Row 3 (2-col split)**: Two analytics panels (charts/widgets)
  - **Row 4 (3-col split)**: Three smaller metric panels

#### Page 2: Quotes
- **Route**: `/dashboard/quotes`
- **Layout**: Standard shell with rich data panels
- **Content panels**:
  - Page header + action buttons
  - **Top widgets row**: 2 stat widget cards (left column) + 3 widgets right side (2 top + 1 wide table-style)
  - **Bottom panel**: Quote data table with columns + pagination
    - Table columns: Checkbox, Name/Title, Status, Category, Priority, Date, Actions
    - Multiple table rows (6+ rows shown)
- **Key insight**: Quotes have statuses — New, Pending, Declined (color-coded: warning=pink, success=green)

#### Page 3: Projects
- **Route**: `/dashboard/projects`
- **Layout**: Standard shell
- **Content panels**:
  - Page title + **"Create New Project"** + **"Import"** action buttons
  - Tab filter row: **All Projects** (with count badge) | **Active**
  - Large data table with columns + multiple rows
  - Table panel with search, filter, export controls

#### Page 4: Chats (Narrow — compact view)
- **Route**: `/dashboard/chats`
- **Layout**: Standard shell, **2-column chat layout** inside main area
  - **Left column (321px)**: Chat list panel — avatar + name + last message preview + unread badge
  - **Right column (757px)**: Active conversation panel
    - Conversation header (avatar + name + action icons)
    - Message thread (buyer messages left-aligned, seller messages right-aligned with avatar)
    - Message input bar at bottom

#### Page 5: Chats (Wide — expanded view)
- **Route**: `/dashboard/chats` (alternate or expanded state)
- **Same structure** but wider chat list (353px) and wider message panel (725px)
- Shows search + "New Chat" button in header

#### Page 6: Create New Project (Modal/Page — Inline form)
- **Route**: `/dashboard/projects/new` or modal
- **Two variants seen**:
  - **Variant A** (node `52669:15696`): Full dashboard-shell page with form
  - **Variant B** (node `52676:5164`): Same, slightly different layout
- **Content**: Multi-step project creation form embedded in the main content area

---

### 3.5 Additional / Supporting Pages

#### Email Notifications (Seller Flow)
- Documented in the **Seller Flow** section of the canvas
- **Email — First Touch**: 3-step email sequence (step 1–3 with body copy placeholders)
- **Registration Confirmation emails** (node `52668:5652`, `52668:6357`): HTML email templates, full width and mobile-width

#### Onboarding / Project Setup (multi-step)
- **Step 1/3**: Category selection (chip UI, 2 rows × 3 chips)
- **Step 2/3** & **Step 3/3**: (implied but not fully rendered in visible frames)
- Back/Next navigation buttons at each step

#### Mobile Versions
- **Home Page — Mobile** (node `52643:28263`, width 420px): Full responsive version of the landing page, same content sections stacked vertically

---

## 4. Full Page Inventory

### Public / Marketing Pages

| # | Page | Path | Status |
|---|------|------|--------|
| 1 | **Home / Landing Page** | `/` | ✅ Built |
| 2 | Home Page — Mobile | `/` (responsive) | ⬜ Pending |

### Authentication Pages

| # | Page | Path | Status |
|---|------|------|--------|
| 3 | **Sign In** | `/sign-in` | ⬜ Pending |
| 4 | **Create Account — Role Select** | `/register` | ⬜ Pending |
| 5 | **Create Account — Buyer** | `/register/buyer` | ⬜ Pending |
| 6 | **Create Account — Seller** | `/register/seller` | ⬜ Pending |
| 7 | **Onboarding — Business Name** | `/onboarding/name` | ⬜ Pending |
| 8 | **Onboarding Step 1/3 — Category** | `/onboarding/step-1` | ⬜ Pending |
| 9 | **Onboarding Step 2/3** | `/onboarding/step-2` | ⬜ Pending |
| 10 | **Onboarding Step 3/3** | `/onboarding/step-3` | ⬜ Pending |
| 11 | **Verification — Pending** | `/verify/pending` | ⬜ Pending |
| 12 | **Verification — Verified** | `/verify/success` | ⬜ Pending |
| 13 | **Verification — Failed** | `/verify/failed` | ⬜ Pending |

### Dashboard / App Pages

| # | Page | Path | Status |
|---|------|------|--------|
| 14 | **Dashboard Overview** | `/dashboard` | ⬜ Pending |
| 15 | **Quotes** | `/dashboard/quotes` | ⬜ Pending |
| 16 | **Projects List** | `/dashboard/projects` | ⬜ Pending |
| 17 | **Create New Project** | `/dashboard/projects/new` | ⬜ Pending |
| 18 | **Project Detail** | `/dashboard/projects/:id` | ⬜ Pending |
| 19 | **Chats / Inbox** | `/dashboard/chats` | ⬜ Pending |
| 20 | **Chat Conversation** | `/dashboard/chats/:id` | ⬜ Pending |
| 21 | **Settings** | `/dashboard/settings` | ⬜ Pending |
| 22 | **Directory / Browse** | `/dashboard/directory` | ⬜ Pending |

---

## 5. Key UI Components Identified

### Layout Components
| Component | Description |
|-----------|-------------|
| `BannerHeader` | Dark top announcement bar with badge + message |
| `Navbar` | Sticky navigation with logo, nav links + CTA buttons (public) |
| `Sidebar` | 232px collapsible sidebar with grouped nav items + upsell card |
| `DashboardHeader` | Top bar within authenticated pages (breadcrumb, search, user) |
| `DashboardShell` | Full authenticated layout (Sidebar + DashboardHeader + main content) |

### Form Components
| Component | Description |
|-----------|-------------|
| `InputField` | Text input with label + helper text + validation states |
| `Checkbox` | Checkbox with label |
| `Chips` | Selectable category chips (multi-select) |
| `Accordion` | Expandable Q&A / FAQ rows |

### Data Display Components
| Component | Description |
|-----------|-------------|
| `DataTable` | Full table with sortable columns, checkbox rows, pagination |
| `TableColumn` | Header row with sort indicators |
| `TableRow` | Data row with multiple cell types |
| `Widget` | Stat card / metric display (with trend tags) |
| `Panel` | Bordered content container with title bar + action icons |
| `StatCard` | Metric card with value, trend badge, mini chart |

### Chat Components
| Component | Description |
|-----------|-------------|
| `ChatList` | Scrollable list of chat conversations with avatar + preview |
| `ChatMessage` | Individual message bubble (left = counterparty, right = user) |
| `ChatInput` | Message compose bar with send button |

### Navigation Components
| Component | Description |
|-----------|-------------|
| `SidenavItems` | Individual sidebar nav link with icon + label + active state |
| `ButtonGroup` | Horizontal group of segmented buttons (tab switcher) |
| `Badge` | Status indicator (colored dot + count) |

### Feedback Components
| Component | Description |
|-----------|-------------|
| `Tag / StatusBadge` | Colored inline status tag (New, Pending, Declined, etc.) |
| `Avatar` | User avatar (round, multiple sizes: 24/32/48/56px) |
| `VerificationState` | Full-page state: pending/success/failed with icon + CTA |

---

## 6. Color Semantics Used in the App

From the Figma design context:

| Color | Semantic meaning |
|-------|-----------------|
| `#FF6692` (rose/pink) | Warning — indicates items needing attention |
| `#00CEB6` (teal/success) | Success — positive states, completed items |
| `#FFB900` (amber) | Alert — moderate priority items |
| `#00A6F4` (skyBrand-500) | Primary brand — buttons, active states, CTAs |
| `#0F172B` (slate-900) | Dark background (banner, sidebar dark variant) |
| `#F8FAFC` (slate-50) | Page backgrounds, hero sections |
| `#262626` (neutral-800) | Primary text |
| `#737373` (neutral-500) | Secondary text |
| `#E5E5E5` (neutral-200) | Borders, dividers |

---

## 7. Development Phases Roadmap

### Phase 1 — Landing Page ✅ (Complete)
- Public landing page with all 8 sections
- Design token system (CSS variables + TypeScript tokens)
- Vite + React + TypeScript project setup

### Phase 2 — Authentication Pages
- Sign In, Create Account (Buyer/Seller), Verification states
- Onboarding multi-step flow
- Form components: InputField, Checkbox, Chips

### Phase 3 — Dashboard Shell
- Sidebar component with navigation groups
- Dashboard Header (search, notifications, user)
- DashboardShell layout wrapper
- Routing setup (React Router)

### Phase 4 — Dashboard Pages
- Dashboard Overview (widgets + summary table)
- Projects list page (DataTable)
- Quotes page (widgets + DataTable)

### Phase 5 — Chats / Messaging
- Chat inbox (split-panel layout)
- Real-time message thread
- Message input component

### Phase 6 — Project Creation Flow
- Create New Project multi-step form
- Category chips, project details form
- Project detail page

### Phase 7 — Polish & Components
- Settings page
- Directory/browse page
- Mobile responsive views
- Storybook component documentation

---

## 8. Technical Architecture Notes

### Routing Structure (Proposed)
```
/                           → LandingPage
/sign-in                    → SignInPage
/register                   → RegisterPage (role select)
/register/buyer             → RegisterBuyerPage
/register/seller            → RegisterSellerPage
/onboarding/*               → OnboardingFlow (multi-step)
/verify/:state              → VerificationPage (pending/success/failed)
/dashboard                  → DashboardLayout (protected)
  /dashboard/               → DashboardOverview
  /dashboard/quotes         → QuotesPage
  /dashboard/projects       → ProjectsPage
  /dashboard/projects/new   → CreateProjectPage
  /dashboard/projects/:id   → ProjectDetailPage
  /dashboard/chats          → ChatsPage
  /dashboard/chats/:id      → ChatConversationPage
  /dashboard/settings       → SettingsPage
  /dashboard/directory      → DirectoryPage
```

### Key Component Files (to create)
```
src/
├── pages/
│   ├── landing/              ✅ Done
│   ├── auth/
│   │   ├── SignInPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── VerificationPage.tsx
│   ├── onboarding/
│   │   └── OnboardingFlow.tsx
│   └── dashboard/
│       ├── DashboardLayout.tsx   ← Sidebar + Header shell
│       ├── OverviewPage.tsx
│       ├── QuotesPage.tsx
│       ├── ProjectsPage.tsx
│       ├── CreateProjectPage.tsx
│       ├── ChatsPage.tsx
│       └── SettingsPage.tsx
└── components/
    ├── layout/
    │   ├── Sidebar.tsx
    │   ├── DashboardHeader.tsx
    │   └── Navbar.tsx          ✅ Done (landing)
    ├── data/
    │   ├── DataTable.tsx
    │   ├── Panel.tsx
    │   └── Widget.tsx
    ├── chat/
    │   ├── ChatList.tsx
    │   ├── ChatMessage.tsx
    │   └── ChatInput.tsx
    ├── form/
    │   ├── InputField.tsx
    │   ├── Checkbox.tsx
    │   └── Chips.tsx
    └── feedback/
        ├── Badge.tsx
        ├── Avatar.tsx
        └── StatusTag.tsx
```

---

*This document will be updated as each phase is implemented.*
