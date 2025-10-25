# Person Manager Frontend

SvelteKit app for managing persons, integrating with the backend API.

## Setup

1. Clone the repo: `git clone <repo-url> person-manager-frontend`
2. Install dependencies: `npm install`
3. Copy `.env` and set VITE_API_URL to your backend URL.
4. Run dev server: `npm run dev` (opens at http://localhost:5173)
5. Build for production: `npm run build`

## Features

- Dynamic routing: / (list), /add, /edit/:id
- Responsive design: Mobile-friendly table and forms
- Toast notifications for CRUD actions
- Full CRUD via API calls

## Notes

- Ensure backend is running and CORS allows the frontend origin.
- Installs `svelte-french-toast` for notifications.
