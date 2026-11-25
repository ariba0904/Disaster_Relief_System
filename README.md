
# Disaster Relief & Resource Management System

A web-based Disaster Relief & Resource Management System built with Node.js, Express.js, MongoDB, HTML, CSS, JavaScript, and EJS.

This project aims to simplify disaster relief operations by connecting administrators, victims, and volunteers through a centralized platform.

## Technology Stack

- Frontend: HTML, CSS, JavaScript, EJS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: Express Session and Password Hashing

## Features

- User authentication and registration
- Role-based access for Admin, Victim, and Volunteer
- Admin dashboard
- Victim resource request management
- Volunteer request and delivery management
- Disaster report management
- Resource management
- MongoDB database integration
- Responsive dashboard interface

## Project Structure

- `public/` – CSS, JavaScript, and static assets
- `views/` – EJS templates and frontend pages
- `src/models/` – MongoDB models
- `migration-reference/` – Original PHP project files kept for reference
- `server.js` – Express application entry point
- `reset-admin.js` – Admin account setup script

## Requirements

- Node.js 20+
- MongoDB Community Server or MongoDB Atlas
- Git

## Installation (Windows CMD)

Clone the repository:

```cmd
git clone https://github.com/ariba0904/Disaster_Relief_System.git
```

Open the project folder:

```cmd
cd Disaster_Relief_System
```

Install dependencies:

```cmd
npm install
```

Create your environment file:

```cmd
copy .env.example .env
```

Configure your `.env` file with your MongoDB connection string and a secure session secret.

Run the application:

```cmd
npm run dev
```

Open in your browser:

http://localhost:5000

## Database

This project uses MongoDB. It does not require PHP, XAMPP, MySQL, or phpMyAdmin.

Original PHP source files are preserved in `migration-reference/` for reference only. They are not executed by the Node.js application.

## Admin Account

Use the project's admin setup script to initialize the admin account:

```cmd
npm run reset-admin
```

Keep your credentials secure. Never publish passwords or `.env` files.

## Future Improvements

- Complete migration of all legacy dashboard workflows
- Improve role-based functionality
- Enhance request and delivery tracking
- Deploy the backend and database to cloud services

## Author

**Jannatul Maowa Ariba**

CSE Student | International Islamic University Chittagong (IIUC)

GitHub: https://github.com/ariba0904

Portfolio: https://j-m-ariba.vercel.app/

