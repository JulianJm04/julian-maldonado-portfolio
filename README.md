# Portfolio | Julián Maldonado

---

## 🛠 Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

---

## Project Structure

```text
portfolio-julian
├── public/                       # Static assets and analog photography
└── app/                          # Next.js root directory (App Router)
    ├── components/               # UI components directory
    │   └── PortfolioHybrid.tsx   # Core interactive logic (Analog/Tech split)
    ├── globals.css               # Base styles and Tailwind configuration
    ├── layout.tsx                # Font configuration and metadata
    └── page.tsx                  # Main entry point (Home)
├── next.config.ts                # Next.js framework configuration
├── package.json                  # Dependencies and scripts
├── tailwind.config.ts            # Design configuration and millimetric grid system
└── tsconfig.json                 # TypeScript configuration