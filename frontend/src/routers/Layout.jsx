import React from 'react'
import Cars from '../pages/Cars'
import Dashboard from '../pages/Dashboard'
import Reservations from '../pages/Reservations'
import { Routes, Route, NavLink } from 'react-router-dom'
import logo from '../assets/LOCAMAROC (1).png'
import '../App.css'

const Layout = () => {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <img src={logo} alt="LOGO" />
          <span>RentFlow</span>
        </div>
        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span className="nav-dot" />
            Dashboard
          </NavLink>
          <NavLink
            to="/cars"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span className="nav-dot" />
            Cars
          </NavLink>
          <NavLink
            to="/reservations"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span className="nav-dot" />
            Reservations
          </NavLink>
          <div className="nav-section">Customers</div>
          <div className="nav-link muted">
            <span className="nav-dot" />
            Reports
          </div>
        </nav>
        <div className="sidebar-footer">
          <div className="nav-link muted">
            <span className="nav-dot" />
            Agency Profile
          </div>
          <div className="nav-link muted">
            <span className="nav-dot" />
            Settings
          </div>
          <div className="nav-link logout">
            <span className="nav-dot" />
            Logout
          </div>
        </div>
      </aside>
      <div className="content">
        <header className="topbar">
          <div className="search">
            <input
              type="search"
              placeholder="Search cars, customers, or bookings..."
            />
          </div>
          <div className="topbar-actions">
            <button className="icon-button" aria-label="Notifications">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M15 17H9m9-5a6 6 0 10-12 0c0 4-2 5-2 5h16s-2-1-2-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="user-chip">
              <div className="user-text">
                <span>Alex Morgan</span>
                <small>Admin</small>
              </div>
              <div className="avatar">AM</div>
            </div>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/cars" element={<Cars />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/reservations" element={<Reservations />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default Layout
