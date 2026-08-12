# CarRentalApp

## Overview

CarRentalApp is a modern frontend web application built for a car rental platform. It enables users to browse rental agencies, explore available vehicles, view detailed car information, and contact agencies directly for rental inquiries.

The application includes dedicated interfaces for users, agencies, and administrators, providing an organized experience for each role.

---

## Features

### User

* Browse rental agencies
* Explore available vehicles
* Search and filter cars
* View detailed vehicle information
* Contact rental agencies
* Manage personal profile

### Agency

* Manage agency profile
* Manage vehicle listings
* View agency dashboard

### Administrator

* Dashboard with statistics
* Manage users
* Manage agencies
* Manage vehicles
* Manage reservations

---

## Technologies

| Technology   | Purpose                 |
| ------------ | ----------------------- |
| React        | Frontend framework      |
| Tailwind CSS | UI styling              |
| React Router | Client-side routing     |
| React Icons  | Icons                   |
| Recharts     | Dashboard charts        |
| Node.js      | Development environment |
| npm          | Package management      |

---

## Installation

### Prerequisites

* Node.js (v18 or later)
* npm

### Setup

Clone the repository.

```bash
git clone <repository-url>
cd CarRentalApp
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Build for production.

```bash
npm run build
```

Preview the production build.

```bash
npm run preview
```

---

## Project Structure

```text
src/
├── assets/
│   ├── icons/
│   └── images/
├── components/
│   ├── layout/
│   └── ui/
├── data/
├── lib/
├── pages/
│   ├── admin/
│   ├── agency/
│   ├── authentification/
│   ├── client/
│   └── public/
│       ├── about/
│       ├── agencies/
│       ├── contact/
│       ├── details/
│       ├── home/
│       └── vehicles/
├── routes/
├── utils/
├── index.css
├── main.jsx
```

### Directory Description

| Directory    | Description                                          |
| ------------ | ---------------------------------------------------- |
| `assets`     | Images and SVG icons used throughout the application |
| `components` | Reusable UI components and layouts                   |
| `data`       | Mock and static application data                     |
| `lib`        | Shared helper functions                              |
| `pages`      | Application pages grouped by role and feature        |
| `routes`     | Route configuration                                  |
| `utils`      | Utility functions                                    |
| `main.jsx`   | Application entry point                              |

---

## User Roles

| Role   | Capabilities                                                             |
| ------ | ------------------------------------------------------------------------ |
| User   | Browse agencies, search vehicles, view car details, contact agencies     |
| Agency | Manage agency information and vehicle listings                           |
| Admin  | Manage users, agencies, vehicles, reservations, and dashboard statistics |

---

## License

This project was developed for educational purposes.
