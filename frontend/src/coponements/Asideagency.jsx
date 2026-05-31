import React from 'react'
import logo from '../assets/LOCAMAROC (1).png'
import { NavLink } from 'react-router-dom'
import dashboardImg from "../assets/dashboard (2).png";
import checkingImg from "../assets/checking.png";
import bookImg from "../assets/book.png";
import profilImg from "../assets/profile.png"
import logoutImg from "../assets/logout.png"

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
         <img src={dashboardImg} alt="Dashboard" />
            Dashboard
          </NavLink>
          <NavLink
            to="/cars"
            onClick={onNavigate}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span className="nav-dot" />
            <img src={checkingImg} alt="checkimg" />
            Cars
          </NavLink>
          <NavLink
            to="/reservations"
            onClick={onNavigate}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span className="nav-dot" />
            <img src={bookImg} alt="book" />
            booking-orders
          </NavLink>
         
        </nav>
        <div className="sidebar-footer">
          <div className="nav-link muted">
            <span className="nav-dot" />
            <img src={profilImg} alt="profil" />
            Agency Profile
          </div>
          <div className="nav-link logout">
            <span className="nav-dot" />
            <img src={logoutImg} alt="logout" />
            Logout
          </div>
        </div>
      </aside>
  )
}

export default Asideagency
