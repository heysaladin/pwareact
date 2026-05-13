# Tamweel — Monorepo Setup

Tamweel adalah fake fintech ecosystem project yang terinspirasi dari TAMAWAL.

Project ini berisi:

- Landing page marketing site
- Simulasi SaaS backoffice system
- Simulasi mobile PWA app
- Shared UI & utilities
- Monorepo architecture menggunakan pnpm + Turborepo

---

# Stack

- Monorepo: Turborepo
- Package Manager: pnpm
- Frontend: Next.js
- Styling: Tailwind CSS
- Mobile Simulation: Next.js PWA
- Deployment: Vercel-ready

---

# Final Structure

```txt
tamweel/
│
├── apps/
│   ├── landing/
│   │   ├── index.html
│   │   ├── assets/
│   │   └── pages/
│   │
│   ├── backoffice/
│   │
│   └── mobile/
│
├── packages/
│   ├── ui/
│   ├── utils/
│   └── config/
│
├── node_modules/
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
1. Create Project
mkdir tamweel
cd tamweel
2. Initialize Root Package
pnpm init
3. Install Turborepo
pnpm add -D turbo
4. Create Workspace Config

Create:

pnpm-workspace.yaml

Content:

packages:
  - "apps/*"
  - "packages/*"
5. Create Turbo Config

Create:

turbo.json

Content:

{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "dev": {
      "cache": false,
      "persistent": true
    },
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    }
  }
}
6. Setup Root package.json

Replace root package.json with:

{
  "name": "tamweel",
  "private": true,
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build"
  },
  "devDependencies": {
    "turbo": "^2.0.0"
  },
  "packageManager": "pnpm@10.0.0"
}
7. Create Apps Folder
mkdir apps
mkdir packages
8. Create Landing App
mkdir apps/landing
cd apps/landing

Create:

index.html

Example:

<!DOCTYPE html>
<html>
<head>
  <title>Tamweel</title>
</head>
<body>
  <h1>Welcome to Tamweel</h1>
</body>
</html>

Optional package.json:

{
  "name": "landing",
  "scripts": {
    "dev": "npx live-server ."
  }
}
9. Create Backoffice App

From root:

npx create-next-app@latest apps/backoffice

Recommended:

TypeScript: YES
ESLint: YES
Tailwind: YES
App Router: YES
Turbopack: YES
10. Create Mobile App

From root:

npx create-next-app@latest apps/mobile

Recommended:

TypeScript: YES
ESLint: YES
Tailwind: YES
App Router: YES
Turbopack: YES

This app will simulate:

Tamawal customer mobile app
PWA experience
Mobile-first flows
11. Create Shared Packages
mkdir packages/ui
mkdir packages/utils
mkdir packages/config

Example:

packages/ui/button.tsx

This allows shared components between:

backoffice
mobile
12. Install Dependencies

From root:

pnpm install
13. Run All Apps
pnpm dev
14. Run Specific App

Backoffice:

pnpm --filter backoffice dev

Mobile:

pnpm --filter mobile dev

Landing:

pnpm --filter landing dev
Suggested Branding
Area	Name
Backoffice	Tamweel Nexus
Mobile App	Tamweel Pulse
Risk Engine	Tamweel Sentinel
Analytics	Tamweel Insight
Goal

This project is intended for:

UI/UX portfolio
Fake enterprise simulation
Fintech product exploration
SaaS dashboard experiments
Mobile app concepting
Design system showcase
Future Expansion

Possible future apps:

apps/
├── merchant-portal
├── cms
├── risk-system
├── ai-assistant
├── analytics
└── customer-support
Notes
Use monorepo architecture from the start
Keep shared UI inside packages/ui
Use consistent design tokens
Treat Tamweel like a real fintech ecosystem
Optimize for scalability and portfolio quality