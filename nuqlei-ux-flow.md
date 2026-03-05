# Nuqlei UX Flow & Design System — Complete Summary

> **Source**: Figma canvas `UX Flow` (node `52643:22421`, section `52788:33360`)
> **Product**: Nuqlei — A vetted B2B marketplace for industrial automation instrumentation and programming services.
> **Last updated**: March 2026 (reflects full buyer persona context + email flow)

---

## 1. Product Overview

Nuqlei is a two-sided B2B marketplace connecting **Buyers** (industrial companies sourcing instrumentation and programming services) with **Sellers** (vendors, integrators, service providers). The core differentiators are:

- **Vetted access** — buyers require admin approval before the platform is fully unlocked
- **Anonymous communication** — identities stay hidden until both parties choose to reveal
- **Reputation + trust layer** — verified credentials, transaction history, reputation scores
- **Project-centric workflow** — all procurement activity is organized around "Projects" created by buyers

---

## 2. User Personas

### Persona 1: Buyer (Primary — Landing page target)
The **landing page is built for buyers**. A buyer is an industrial company that wants to source products, instrumentation, or services. The primary landing page CTA is **"Create Project"**.

| Buyer Type | Description | Entry Point |
|------------|-------------|-------------|
| **New Buyer** | First-time visitor, no account | Clicks "Create Project" on landing page |
| **Returning Verified Buyer** | Has approved account | Clicks "Sign In" on landing/navbar |
| **Pending Buyer** | Applied but awaiting approval | Checks email, waits 18-24 hrs |

### Persona 2: Seller
The **seller flow is separate**. Sellers can select "I am a Seller" on the Create Account page. The landing page copy is still buyer-focused, but sellers can access registration through the same form.

### Persona 3: Admin
Approves/rejects buyer applications (not represented in the UI yet).

---

## 3. Complete UX Flow — Buyer Journey

### 3.1 New Buyer — Full Registration & First Project Flow

```
LANDING PAGE
    │
    └─► [Create Project] button  ──────────────────────────────────────────────┐
                                                                                │
    CREATE ACCOUNT page                                                         │
    • "I am a Buyer" pre-selected (default, because CTA was Create Project)    │
    • Enter email                                                               │
    • "Buyer Vetting Required" info box shown                                  │
    • Click [Apply]                                                             │
         │                                                                      │
         ├─► NEW TAB opens: Email #1 — "Thank you for applying"                │
         │   (Registration Confirmation email)                                  │
         │                                                                      │
         └─► VERIFICATION PENDING page                                          │
             "Thank you for applying / You have successfully applied"           │
                                                                                │
         ── 18–24 HOUR WAIT (admin reviews application) ──                     │
                                                                                │
         NEW TAB opens: Email #2 — "Congratulations! You are verified"         │
         • CTA button: "Create your first project"                              │
         • That button links to: SET PASSWORD page                              │
                                                                                │
    SET PASSWORD page (/register/set-password)                                  │
    • Enter password + confirm                                                  │
    • Live validation: "Passwords matching ✓" / "Passwords must match ✗"       │
    • Click [Create Password]                                                   │
         │                                                                      │
         └─► SIGN IN page                                                       │
                                                                                │
    SIGN IN (first time)                                                        │
    • Enter email + password                                                    │
    • Click [Sign in]                                                           │
         │                                                                      │
         └─► FIRST-TIME BUYER WALKTHROUGH (not dashboard directly)             │
                                                                                │
    WALKTHROUGH STEP 1: Welcome Screen                                          │
    "Welcome to Nuqlei / Lets build your first project!"                       │
    • Enter project name → [Next]                                               │
         │                                                                      │
    WALKTHROUGH STEP 2: Postal Code                                             │
    • Enter postal code → [Next]                                                │
         │                                                                      │
    WALKTHROUGH STEP 3: Project Category                                        │
    • Search/select category → [Next]                                           │
         │                                                                      │
    CREATE PROJECT page (Dashboard shell — PARTIALLY PRE-FILLED)               │
    • Project Name: pre-filled from walkthrough Step 1                          │
    • Postal Code: pre-filled from walkthrough Step 2                           │
    • Project Category: pre-filled from walkthrough Step 3                     │
    • Budget, Delivery Date, Description, Attachments: blank (optional)        │
    • Required: Project Name, Postal Code, Category                             │
    • Click [Find Sellers]                                                       │
         │                                                                      │
         └─► SUGGESTED SELLERS MODAL opens (over the Projects page)            │
             • Category filter + search bar (pre-filled with project category)  │
             • Distance / Ascending sort pills                                  │
             • "Top 3 results" — best sellers by distance + category           │
             • Each seller: Company Name, City/Province, Distance, Website     │
             • Checkboxes to select/deselect sellers                            │
             • [See all Sellers] → navigates to full All Sellers page           │
             • [Send project to sellers] → sends project, goes to Waiting Screen│
                                                                                │
    WAITING SCREEN (/onboarding/loading)                                        │
    "Waiting screen — Project loading in Dashboard"                             │
    • Auto-redirects to Dashboard after ~3 seconds                              │
         │                                                                      │
    DASHBOARD (Home)                                                            │
```

---

### 3.2 Returning Verified Buyer — Quick Sign In Flow

```
LANDING PAGE (or any page)
    │
    └─► [Sign In] link (in navbar)
             │
    SIGN IN page
    • Enter email + password → [Sign in]
             │
    DASHBOARD (directly — no walkthrough)
             │
    PROJECTS page (blank Create Project form — no pre-fill)
    • Fill in all fields manually
    • Click [Find Sellers]
             │
    SUGGESTED SELLERS MODAL (same as above)
```

---

### 3.3 Email Flow (Mocked — Opens as New Browser Tab)

Since this is a mockup website, emails are simulated by opening a new browser tab at key trigger points. This lets reviewers see the full cohesive flow including what emails were sent and when.

| # | Trigger | Email Content | Route |
|---|---------|---------------|-------|
| 1 | User clicks [Apply] on Create Account page | "Thank you for applying" — registration confirmation | `/email/registration-confirmation` |
| 2 | User's account is verified (simulated by "Simulate Verification" button on pending page) | "Congratulations! You have been approved" — with [Create your first project] CTA button linking to `/register/set-password` | `/email/account-verified` |

---

## 4. Authentication & Onboarding Pages — Detailed

| Step | Page Name | Route | Figma Node | Notes |
|------|-----------|-------|-----------|-------|
| 1 | **Create Account** | `/register` | `52646:29212` | "I am a Buyer" pre-selected; "Buyer Vetting Required" box; opens Email #1 on Apply |
| 2 | **Verification Pending** | `/register/verification` | `52669:15188` | Shows success message; "Simulate 24hr verification" button opens Email #2 in new tab |
| 3 | **Set Password** | `/register/set-password` | `52764:9291` | Reached from Email #2 CTA; password + confirm with live validation |
| 4 | **Sign In** | `/sign-in` | `52646:30366` | After set password; first-time users go to walkthrough |
| 5 | **Walkthrough Step 1** | `/onboarding/step/1` | `52677:4284` | Project name entry |
| 6 | **Walkthrough Step 2** | `/onboarding/step/2` | NEW | Postal code entry |
| 7 | **Walkthrough Step 3** | `/onboarding/step/3` | NEW | Category selection |
| 8 | **Create Project (pre-filled)** | `/dashboard/projects` | `52676:5164` | Dashboard shell; fields pre-filled from walkthrough |
| 9 | **Suggested Sellers Modal** | (modal on `/dashboard/projects`) | `52790:33545` | Opens on [Find Sellers] click; top 3 sellers by distance + category |
| 10 | **All Sellers Page** | `/dashboard/projects/sellers` | `52764:11037` | Full list; reached via [See all Sellers] in modal |
| 11 | **Waiting Screen** | `/onboarding/loading` | `52764:9210` | After sending to sellers; auto-redirects to dashboard |
| 12 | **Dashboard** | `/dashboard` | — | Main app home |

---

## 5. Project Creation — Key Details

### Required vs Optional Fields
| Field | Required | Notes |
|-------|----------|-------|
| Project Name | ✅ Yes | Pre-filled in first-time flow |
| Project Category | ✅ Yes | Pre-filled in first-time flow; search + select |
| Postal Code | ✅ Yes | Pre-filled in first-time flow; used for seller distance calc |
| Budget | ❌ Optional | $ currency input |
| Delivery Date | ❌ Optional | Calendar picker |
| Project Description | ❌ Optional | Textarea |
| Attachments | ❌ Optional | PDF/JPG/JPEG/PNG, up to 9 files, 600×600px |

### Find Sellers Button → Suggested Sellers Modal
- Opens as a **modal overlay** on the Projects page (not a separate page)
- Shows **top 3 suggested sellers** based on: buyer's postal code distance + project category
- Each seller card: Company Name, City, Province, Distance (km), Website URL, Checkbox
- **[See all Sellers]** button → navigates to full `/dashboard/projects/sellers` page
- **[Send project to sellers]** button → closes modal, shows Waiting Screen, then Dashboard
- Search within modal is pre-filled with the project's category
- Users can search for different companies / change selection before sending

### First-time vs Regular Project Creation
| Scenario | Project Name | Postal Code | Category | Other Fields |
|----------|-------------|-------------|----------|-------------|
| First-time buyer (via walkthrough) | ✅ Pre-filled | ✅ Pre-filled | ✅ Pre-filled | Blank |
| Returning buyer (clicks Create Project in dashboard) | Blank | Blank | Blank | Blank |

---

## 6. Dashboard Shell — Updated

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

---

## 7. Full Page Inventory (Updated)

### Public / Marketing Pages
| # | Page | Route | Status |
|---|------|-------|--------|
| 1 | Home / Landing Page | `/` | ✅ Built |

### Email Pages (Mockup — Opens in New Tab)
| # | Page | Route | Status |
|---|------|-------|--------|
| 2 | Registration Confirmation Email | `/email/registration-confirmation` | ⬜ NEW |
| 3 | Account Verified Email | `/email/account-verified` | ⬜ NEW |

### Authentication & Onboarding Pages
| # | Page | Route | Status |
|---|------|-------|--------|
| 4 | Sign In | `/sign-in` | ✅ Built |
| 5 | Create Account | `/register` | ✅ Updated |
| 6 | Verification Pending | `/register/verification` | ✅ Built (needs simulate button) |
| 7 | Set Password | `/register/set-password` | ✅ Built |
| 8 | Walkthrough Step 1 (Project Name) | `/onboarding/step/1` | ⬜ Update WelcomeScreen |
| 9 | Walkthrough Step 2 (Postal Code) | `/onboarding/step/2` | ⬜ NEW |
| 10 | Walkthrough Step 3 (Category) | `/onboarding/step/3` | ⬜ NEW |
| 11 | Waiting Screen | `/onboarding/loading` | ✅ Built |

### Dashboard / App Pages
| # | Page | Route | Status |
|---|------|-------|--------|
| 12 | Dashboard Home | `/dashboard` | ✅ Built |
| 13 | Projects (Create Project form) | `/dashboard/projects` | ✅ Updated (needs modal) |
| 14 | All Sellers Page | `/dashboard/projects/sellers` | ✅ Built |
| 15 | Chats | `/dashboard/chats` | ✅ Built |
| 16 | Settings | `/dashboard/settings` | ✅ Placeholder |
| 17 | Help Center | `/dashboard/help` | ✅ Placeholder |

---

## 8. Key UI Components

### Email Components (New)
| Component | Description |
|-----------|-------------|
| `EmailLayout` | Reusable email wrapper: Nuqlei logo header, illustration, content, footer with social icons |
| `RegistrationConfirmationEmail` | "Thank you for applying" email page |
| `AccountVerifiedEmail` | "Congratulations! You are verified" with [Create your first project] CTA |

### Modal Components (New)
| Component | Description |
|-----------|-------------|
| `SuggestedSellersModal` | Overlay modal on Projects page: category search, 3 seller cards with checkboxes, [See all Sellers] + [Send project to sellers] |

### Walkthrough Components (New/Updated)
| Component | Description |
|-----------|-------------|
| `WalkthroughStep` | Reusable step wrapper: dark neon background, progress indicator, question + input |
| `WelcomeScreen` | Step 1: project name |
| `WalkthroughPostal` | Step 2: postal code |
| `WalkthroughCategory` | Step 3: category search/select |

---

## 9. Technical Architecture — Routing (Updated)

```
/                                → LandingPage
  • [Create Project] CTA         → /register?from=create-project (pre-selects Buyer)
  • [Sign In]                    → /sign-in

/register                        → CreateAccount
  • [Apply]                      → opens /email/registration-confirmation in NEW TAB
                                 → navigates to /register/verification

/register/verification           → VerificationPending
  • [Simulate Verification]      → opens /email/account-verified in NEW TAB

/email/registration-confirmation → Email page #1 (mockup — opens in new tab)
/email/account-verified          → Email page #2 (mockup — "Create your first project" → /register/set-password)

/register/set-password           → SetPassword
  • [Create Password]            → /sign-in

/sign-in                         → SignIn
  • First-time buyer             → /onboarding/step/1
  • Returning buyer              → /dashboard

/onboarding/step/1               → Walkthrough: project name
/onboarding/step/2               → Walkthrough: postal code
/onboarding/step/3               → Walkthrough: category
  • All 3 steps complete         → /dashboard/projects?prefill=true

/dashboard/projects              → ProjectsPage (Create Project form)
  • If ?prefill=true             → fields pre-filled from walkthrough data
  • [Find Sellers]               → opens SuggestedSellersModal
    ├─ [See all Sellers]         → /dashboard/projects/sellers
    └─ [Send project to sellers] → /onboarding/loading

/onboarding/loading              → WaitingScreen (auto-redirects to /dashboard)
/dashboard                       → DashboardHome
/dashboard/projects/sellers      → AllSellersPage (full list)
/dashboard/chats                 → ChatsPage
/dashboard/settings              → SettingsPage
/dashboard/help                  → HelpPage
```

---

## 10. State Management for Walkthrough Pre-fill

The walkthrough captures 3 values that are passed to the Create Project page:
- `projectName` — from Step 1
- `postalCode` — from Step 2
- `projectCategory` — from Step 3

**Implementation**: Use `sessionStorage` (or React Context) to persist across the walkthrough steps. On the Projects page, check for `?prefill=true` query param and read from `sessionStorage` to pre-populate the form fields.

---

## 11. Summary of Changes vs Previous Version

| Area | Previous | Current |
|------|----------|---------|
| Landing CTA | "Create Project" → /register | "Create Project" → /register?from=create-project (pre-selects Buyer) |
| Registration | Checkboxes, manual role select | Radio buttons; Buyer pre-selected if coming from landing CTA |
| Apply action | Just navigates to verification page | Opens Email #1 in new tab + navigates to verification page |
| Verification page | Static thank you message | Shows message + "Simulate 24hr verification" button that opens Email #2 in new tab |
| Account verified | Not designed | Email #2: Congratulations + "Create your first project" → /register/set-password |
| Set Password | Routes to /onboarding/welcome | Routes to /sign-in |
| Post sign-in | Goes straight to dashboard | First-time: goes to 3-step walkthrough; Returning: goes to dashboard |
| Walkthrough | Single "Welcome to Nuqlei" screen | 3 steps: project name → postal code → category → pre-filled Create Project |
| Create Project | Standalone page, blank form | Dashboard shell; blank for returning users, pre-filled for first-time users |
| Find Sellers | Navigates to separate SearchSellers page | Opens as MODAL on top of Projects page |
| See all Sellers | N/A | "See all Sellers" link in modal → full AllSellersPage |
| Emails | Not implemented | Mocked as dedicated React pages that open in new browser tabs |

---

*Last updated March 2026 after full UX context review from product team.*
