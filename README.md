# Razello

A simple, customizable project management tool inspired by Jira. Built with **Next.js 14**, **React 18**, and **Tailwind CSS**, featuring a modular architecture and customizable UI using **Shadcn UI**, **Radix Primitives**, and **Zod** validation. This project includes robust authentication flows and reusable UI components. 

Designed with love — especially for Razell. 💙

---

## ✨ Features

- 🔐 Authentication system (Sign In / Sign Up)
- 🎨 UI powered by Shadcn and Radix UI
- ✅ Form validation using React Hook Form and Zod
- 📦 Component-based architecture
- 🧱 Built-in custom components (e.g. Dotted Separator)
- 📊 Ready for features like charts, modals, sheets, etc.

---

## 🧾 Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/)
- **UI**: [React 18](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/en-US/)
- **Utils**: Class Variance Authority, clsx, date-fns

---

## 📂 Project Structure

src/
├── app/
│ └── auth/
│ ├── sign-in/
│ └── sign-up/
├── features/
│ └── auth/
│ └── components/
│ ├── sign-in-card.tsx
│ └── sign-up-card.tsx
├── components/
│ ├── ui/
│ │ ├── avatar.tsx
│ │ ├── badge.tsx
│ │ ├── button.tsx
│ │ ├── ...
│ │ └── textarea.tsx
│ └── dotted-separator.tsx

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/razello.git
cd razello

🚧 Upcoming Features
 -Boards and tasks
 -Team collaboration
 -Drag-and-drop tasks
 -User roles and permissions
