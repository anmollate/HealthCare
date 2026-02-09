# 🏥 ModernCare - Professional Healthcare Landing Page

[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)](https://vitejs.dev/)
[![Lucide](https://img.shields.io/badge/Icons-Lucide--React-orange)](https://lucide.dev/)
[![License](https://img.shields.io/badge/License-Private-red)](README.md)

ModernCare is a state-of-the-art, responsive healthcare landing page meticulously crafted to bridge the gap between patients and medical professionals. Featuring a sleek glassmorphism UI/UX, integrated AI assistance, and seamless multilingual support, it represents the future of digital healthcare portals.

---

## 🚀 Key Features

- **🤖 AI Health Assistant**: A dedicated page featuring an innovative AI-powered chat interface. Users can get instant answers to health-related queries using a modern, interactive messaging system.
- **📅 Smart Appointment Booking**: A streamlined, user-friendly appointment form with responsive feedback, making medical scheduling effortless for both patients and staff.
- **🌍 Global Accessibility (Multilingual)**: Fully integrated with Google Translate API, allowing users to navigate the entire platform in their preferred language with a single click.
- **👨‍⚕️ Specialist Directory**: A curated showcase of specialized doctors with professional profile cards, helping patients find the right expert for their needs.
- **💎 Premium UI/UX**: Built with modern "ModernCare" aesthetics, utilizing glassmorphism, smooth CSS transitions, and a mobile-first responsive grid.
- **⚡ High Performance**: Optimized for speed and reliability using the Vite build system and efficient React component architecture.

---

## 🛠️ Tech Stack

- **Core Framework**: [React 19](https://react.dev/)
- **Module Bundler**: [Vite 7](https://vite.dev/)
- **UI Architecture**: Component-based architecture with Vanilla CSS & CSS Modules.
- **Navigation**: [React Router DOM v7](https://reactrouter.com/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Localization**: Google Translate Services

---

## 📁 Project Structure

```text
modern-care-landing/
├── public/              # Static assets (favicons, etc.)
├── src/
│   ├── assets/          # Project-wide images and style assets
│   ├── components/      # Modular UI components
│   │   ├── Appointment  # Modular booking form logic & styles
│   │   ├── Doctors      # Interactive doctor listing component
│   │   ├── Hero         # Dynamic hero section with Call-to-Actions
│   │   ├── Navbar       # Responsive navigation with scroll logic
│   │   └── Services     # Feature showcase grid
│   ├── pages/           # View-level page containers
│   │   ├── Home.jsx     # Master landing page layout
│   │   └── AIHealthAssistant.jsx # Standalone AI chat interface
│   ├── App.jsx          # Root component & routing definitions
│   ├── main.jsx         # Application bootstrapping
│   └── index.css        # Global design tokens and resets
├── package.json         # Runtime dependencies and build scripts
└── vite.config.js       # Vite build-time configuration
```

---

## 👥 Meet the Team

| Team Member | Role |
| :--- | :--- |
| **Sanika Choughule** | Development & Design |
| **Sneha Dhumal** | Development & Design |
| **Anushka Naik** | Development & Design |
| **Anmol Late** | Development & Design |

---

## 🏁 Installation & Development

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **Package Manager**: npm or yarn

### 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/anmollate/HealthCare.git
   ```
2. **Navigate to project directory**
   ```bash
   cd modern-care-landing
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Start Development Server**
   ```bash
   npm run dev
   ```
   *The app will be available at `http://localhost:5173`*

---

## 🌐 Deployment (Render)

To deploy this project to [Render](https://render.com), use the following configuration for guaranteed success:

- **Service Type**: Static Site (Recommended)
- **Root Directory**: `modern-care-landing`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Node Version**: `18.x` or higher

---

## 🎥 Demo Video

> [!TIP]
> **[Watch the Demo Video (Placeholder)](https://github.com/anmollate/HealthCare)**
> *Bonus section for deployment walkthrough and feature demonstration.*

---

## 📄 License

This project is private and intended for internal submission. All rights reserved. © 2026.
