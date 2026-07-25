# Jst Kira — Portfolio

Personal developer portfolio for **Ibrahim Abdulbasit Ayomide (Jst Kira)** — Frontend Engineer, Mobile App Developer, Backend Developer, AI & ML Enthusiast, YouTuber & Content Writer.

Live at: [https://github.com/JstKiraOfficials/portfolio](https://github.com/JstKiraOfficials/portfolio)

---

## Tech Stack

- **React 19** — UI library
- **Vite 8** — build tool & dev server
- **React Router v7** — client-side routing
- **React Scroll** — smooth section navigation
- **React Icons** — icon library
- **CSS Modules (per-component)** — scoped styles with dark/light theme support

---

## Features

- Typewriter hero animation cycling through roles
- Dark / light theme toggle persisted via `data-theme` attribute
- Scroll-reveal animations using IntersectionObserver
- Dedicated pages: Home, All Projects (`/projects`), Resume (`/resume`)
- Sections: Hero, About, Skills, Projects, Timeline, Services, Content, Contact, Footer

---

## Projects Showcased

| Project | Category | Tech |
|---|---|---|
| TaskFlow — Productivity App | Web | React, Django, PostgreSQL, Supabase |
| ShopEase — Mobile Commerce | Mobile | Flutter, Dart, Firebase |
| Heart Disease Prediction | AI/ML | Python, SVM, PSO, Scikit-learn |
| DevBlog — Content Platform | Web | React, Vite, Firebase |
| AutoHub — Car Dealer Website | Web | HTML, CSS, JavaScript |
| SMS Spam Classifier | AI/ML | Python, Naive Bayes, Logistic Regression, NLP |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/     # All page sections and route pages
├── data/           # Project data (projects.js)
├── styles/         # Per-component CSS files + globals
├── App.jsx         # Routes and theme logic
└── main.jsx        # Entry point
```

---

## License

MIT
