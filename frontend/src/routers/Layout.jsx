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
          <span>CarRental</span>
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
