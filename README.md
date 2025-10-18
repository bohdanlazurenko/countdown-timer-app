# Countdown Timer App

A simple and elegant countdown timer application built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Set custom countdown time in minutes and seconds
- Start, pause, and reset functionality
- Clean and modern UI with dark theme
- Responsive design
- Real-time countdown display

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hooks

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Enter the desired countdown time using the minute and second input fields
2. Click the "Start" button to begin the countdown
3. Use "Pause" to temporarily stop the timer
4. Click "Reset" to clear the timer and set a new time

## Project Structure

```
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── TimeInput.tsx
│   ├── TimerControls.tsx
│   └── TimerDisplay.tsx
├── hooks/
│   └── useTimer.ts
├── lib/
│   └── utils.ts
├── .gitignore
├── README.md
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint