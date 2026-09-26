# 🏋️ FitLog — Workout Library

FitLog is a dark and responsive workout library built with Next.js and TypeScript. Users can browse workouts, search by workout name or muscle group, sort workouts, view workout details, save workouts, and create a daily workout plan.

## 🚀 Live Demo

🔗 **Live Website:** [FitLog](https://fitlog-mdriyan143.vercel.app/) <br> 

  **Vercel Link:** https://fitlog-mdriyan143.vercel.app/

## 🛠️ Technologies Used

- ⚛️ Next.js
- ⚛️ React
- 📘 TypeScript
- 🎨 Tailwind CSS
- 🌼 DaisyUI
- 🔗 React Icons
- 🔔 React Toastify

## ✨ Key Features

### 1. 🏋️ Workout Library

- Browse workout exercises fetched from an external API.
- Responsive workout cards with exercise information.

### 2. 🔍 Search Workouts

- Search the library by workout name.
- Search by muscle-group tags.

### 3. 📊 Workout Sorting

- Sort workouts by **Duration**, **Calories**, or **Rating**.
- Duration is selected by default.
- Sorting applies to the current filtered list.

### 4. 📋 My Plan & Saved Workouts

- Add workouts to Today's Plan.
- Save workouts for later.
- Plan and Saved counters update dynamically.
- Workout data persists using localStorage.
- Today's Plan supports a maximum of five workouts.

### 5. 📖 Workout Details & Actions

- View detailed workout information and instructions.
- Mark workouts as completed.
- Remove workouts from the plan or saved list.
- Toast notifications provide feedback for user actions.

## 📁 Project Structure

```text
src/
├── app/
│   ├── my-plan/
│   │   └── page.tsx
│   ├── workouts/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── myPlan/
│   │   ├── EmptyState.tsx
│   │   ├── PlanListItem.tsx
│   │   ├── PlanStats.tsx
│   │   └── PlanTabs.tsx
│   │
│   └── shared/
│       ├── homepage/
│       │   ├── Banner.tsx
│       │   ├── LibrarySortDropdown.tsx
│       │   ├── WorkoutLibrary.tsx
│       │   └── Workouts.tsx
│       ├── Footer.tsx
│       ├── Navbar.tsx
│       ├── SortDropdown.tsx
│       └── WorkoutCard.tsx
│
├── context/
│   └── PlanContext.tsx
│
├── types/
│   └── workout.type.ts
│
└── assets/
```

## 👨‍💻 Author

**Md Riyan Biswas**

🔗 **GitHub:** [mdriyan143](https://github.com/mdriyan143)

📁 **FitLog Repository:** https://github.com/mdriyan143/NextJs_Assignment-06
