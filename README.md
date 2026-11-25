# Disaster Relief & Resource Management System (Node + Express + MongoDB)

This is a PHP/MySQL-to-Node.js migration. The original CSS, JS and images are retained in `public/`; PHP source is retained only under `migration-reference/` and is NOT executed. The public landing page and authentication pages have been ported to EJS. Core MongoDB models and REST endpoints are provided. Some legacy admin/victim/volunteer page workflows still need UI-by-UI migration; do not treat this as a complete production deployment yet.

## Requirements
- Node.js 20+ (your Node 24 is fine)
- MongoDB Community Server running locally, or MongoDB Atlas URI

## Setup (Windows CMD)
```cmd
npm install
copy .env.example .env
````
Edit `.env` and set `MONGODB_URI` and a long random `SESSION_SECRET`. Then:
```cmd
npm run check
npm run dev
```
Open http://localhost:5000 and http://localhost:5000/api/health.

## Routes
- `/` landing page
- `/login`, `/register`, `/logout`
- `/:role/dashboard` (Admin/Victim/Volunteer)
- `/admin/resources`, `/admin/requests`, `/admin/reports`
- `/victim/requests`, `/volunteer/requests`
- API: `/api/resources`, `/api/requests`, `/api/reports`, `/api/health`

## Important
- No PHP, XAMPP, MySQL or phpMyAdmin is required by this Node app.
- Existing MySQL records are not automatically imported. `disaster.sql` is retained in migration-reference only; migrate data separately if needed.
- For first Admin account, create one manually using a one-time seed script or MongoDB Compass; public registration intentionally allows only Victim and Volunteer.
- Configure MongoDB Atlas + Render for deployment. Never commit `.env`.


## Original frontend restoration
The original `Team-collaboration` repository's landing-page content, login/register layout, dashboard styles, and sidebar navigation have been carried into the Express/EJS application. Original CSS files are kept in `public/css/`. The original PHP repository is preserved under `migration-reference/` for reference only; it is not executed by Node.js.
