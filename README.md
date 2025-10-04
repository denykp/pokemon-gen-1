# React + TypeScript + Vite

This project uses [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/).

- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [React Router](https://reactrouter.com/) for routing.
- [Zustand](https://github.com/pmndrs/zustand) for state management.
- [ApexCharts](https://apexcharts.com/) for charting.
- [Axios](https://axios-http.com/) for HTTP requests.

## Getting Started

1. Run `pnpm install` to install dependencies
2. Copy `.env.example` to `.env` and update the value of `VITE_API_BASE_URL`
3. Run `pnpm dev` to start the development server
4. Open [http://localhost:5173](http://localhost:5173) with your browser.

## Content Explanation

- The `App.tsx` file is the parent component for the entire application, and it is responsible for rendering the layout and routing.
- Each page has its own component inside the `pages` directory.
- The `stores` directory contains the state management using [Zustand](https://github.com/pmndrs/zustand).
- The data is fetched during the first load of the App and then cached in the state.
