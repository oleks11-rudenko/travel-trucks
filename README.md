Ти правий — вибач 🙏 Ти **не просив змінювати мову**, моя помилка. Дякую, що вказав.

Нижче — **той самий текст англійською**, але **акуратно відформатований**, щоб **без проблем
вставити в `README.md`** (чистий Markdown, без зламаних блоків).

---

````md
# 🚐 Travel Trucks

**Travel Trucks** is a web application for camper rentals in Ukraine. The project allows users to
browse a catalog of recreational vehicles (RVs), filter them by features, add them to favorites, and
book the trip of their dreams.

🔗 **Live Demo:** https://travel-trucks-kohl-beta.vercel.app/

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Author](#author)

---

## 📖 About

This application is designed to simplify the search and rental process for campers. The main goal is
to provide users with an intuitive interface to select a vehicle, explore its details and
configuration, and quickly submit a booking request.

The project is built using modern frontend technologies, focusing on performance, clean code
architecture, and user experience (UI/UX).

---

## ✨ Features

### 🏠 Home Page

- Hero section with a call-to-action banner.
- Quick navigation to the catalog.

### 🚐 Catalog

- **Card Display:** A list of available campers with photos, pricing, ratings, and descriptions.
- **Pagination / Load More:** "Load More" button to fetch additional items (optimizing network
  usage).
- **Filtering:**
  - By equipment (AC, Kitchen, TV, Shower, etc.).
  - By vehicle type (Van, Fully Integrated, Alcove).
  - By location.

### ❤️ Favorites

- Ability to add campers to a "Favorites" list.
- **Persistence:** The list is saved locally (Local Storage), so favorite items remain available
  after refreshing the page.

### 📝 Camper Details

- Comprehensive description and technical specifications.
- **Gallery:** Scrollable view of interior and exterior photos.
- **Reviews:** User reviews list with ratings.
- **Booking Form:** Validated form for rental requests, including a calendar for date selection.

---

## 🛠 Tech Stack

The project is built on **Next.js** using **TypeScript**.

- **Core:** Next.js 14+, React
- **Language:** TypeScript
- **State Management:** Zustand (with `persist` middleware for favorites)
- **Backend / API:** MockAPI (data source for campers and reviews)
- **Styling:** CSS Modules
- **Forms:** React Hook Form
- **HTTP Client:** Axios
- **UI Components:** Custom reusable components + SVG icons
- **Deployment:** Vercel

---

## 🚀 Installation & Setup

To run the project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/oleks11-rudenko/travel-trucks.git
```
````

2. **Navigate to the project directory:**

```bash
cd travel-trucks
```

3. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

4. **Start the development server:**

```bash
npm run dev
```

5. **Open in browser:**

Visit [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```bash
travel-trucks/
├── app/        # Next.js App Router (pages and layouts)
├── components/ # Reusable UI components (Buttons, Cards, Modals)
├── constants/  # Constants
├── lib/        # Utility functions (API requests, formatting) and Zustand store (state management & favorites logic)
├── public/     # Static assets (images, icons)
└── types/      # TypeScript interfaces and types

```

---

## 👨‍💻 Author

**Oleksii Rudenko**

- GitHub: [https://github.com/oleks11-rudenko](https://github.com/oleks11-rudenko)

---

⭐️ Thank you for checking out the project! If you like it, please give it a star on GitHub.

```

```
