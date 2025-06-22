# ✈️ Budget Travel Planner

A simple travel app built with **Next.js 14 (App Router)** and **TypeScript** that helps users find budget-friendly trip suggestions based on:

- Budget 💰
- Number of Travelers 👥
- Trip Type (family, solo, couple, friends) 🧳

---

## 🔧 Tech Stack

- **Next.js 14** with **App Router**
- **TypeScript**
- **Tailwind CSS**
- Client-side routing and filtering using `useSearchParams`
- Fully responsive and user-friendly UI

---

## 📸 Features

- 🌍 Form to input budget, number of people, and trip type
- 🔍 Displays matching trip suggestions
- 🏷️ Includes destination, cost, type, and highlights
- 🔁 “Back to Home” button for navigation
- ❌ Message if no trips match the input

---

## 📁 Folder Structure

travel-app/
├── app/
│ ├── page.tsx # Homepage with trip form
│ └── trips/
│ ├── page.tsx # Trips suggestion page (filtered)
│ └── [id]/page.tsx # (Optional) Trip detail page
├── data/
│ └── trips.ts # Static trip data (or simulate API)
├── public/
├── styles/
├── tailwind.config.ts
├── tsconfig.json
└── README.md



---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/your-username/budget-travel-app.git
cd budget-travel-app
2. Install dependencies

npm install
3. Run the app locally

npm run dev
Open your browser and visit:

arduino

http://localhost:3000
