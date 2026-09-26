# FitLog — Workout Library

FitLog is a dark and responsive workout library built with Next.js and TypeScript. Users can browse workouts, search by workout name or muscle group, sort workouts, view workout details, save workouts, and create a daily workout plan.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify

## Key Features

1. **Workout Library** — Browse workouts fetched from an external API.
2. **Search Workouts** — Search by workout name or muscle-group tag.
3. **Workout Sorting** — Sort by Duration, Calories, or Rating.
4. **My Plan & Saved Workouts** — Add, save, remove, and persist workouts using localStorage.
5. **Workout Details** — View workout information, instructions, and perform workout actions.

## Project Structure

```text
src/
├── app/
│   ├── my-plan/
│   ├── workouts/[id]/
│   ├── page.tsx
│   └── layout.tsx
│
├── components/
│   ├── myPlan/
│   └── shared/
│       ├── homepage/
│       ├── Navbar.tsx
│       ├── Footer.tsx
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