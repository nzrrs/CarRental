import React from 'react'
import Cars from '../pages/Cars'
import Dashboard from '../pages/Dashboard'
import Reservations from '../pages/Reservations'
import { Routes, Route } from 'react-router-dom'

import '../App.css'
import Asideagency from './Asideagency'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  return (
    <div className={`app-shell${isSidebarOpen ? ' sidebar-open' : ''}`}>
      {isSidebarOpen && (
        <button
          className="sidebar-backdrop"
          type="button"
          aria-label="Close menu"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <Asideagency onNavigate={() => setIsSidebarOpen(false)} />
      <div className="content">
        <header className="topbar">
          <button
            className="icon-button sidebar-toggle"
            type="button"
            aria-label="Open menu"
            aria-expanded={isSidebarOpen}
            aria-controls="agency-sidebar"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            <span className="hamburger" aria-hidden="true" />
          </button>
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
