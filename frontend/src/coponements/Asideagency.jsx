import React from 'react'
import logo from '../assets/LOCAMAROC (1).png'
import { NavLink } from 'react-router-dom'

const Asideagency = ({ onNavigate }) => {
  return (
       <aside className="sidebar" id="agency-sidebar">
        <div className="brand">
          <img src={logo} alt="LOGO" />
          <span>CarRental</span>
        </div>
        <nav className="nav">
          <NavLink
            to="/"
            end
            onClick={onNavigate}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span className="nav-dot" />
            Dashboard
          </NavLink>
          <NavLink
            to="/cars"
            onClick={onNavigate}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span className="nav-dot" />
            Cars
          </NavLink>
          <NavLink
            to="/reservations"
            onClick={onNavigate}
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
  )
}

export default Asideagency
