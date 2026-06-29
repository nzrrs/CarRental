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
            to="/agencyCars"
            onClick={onNavigate}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span className="nav-dot" />
            <img src={checkingImg} alt="checkimg" />
            Cars
          </NavLink>
          <NavLink
            to="/agencyReservations"
            onClick={onNavigate}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span className="nav-dot" />
            <img src={bookImg} alt="book" />
            booking-orders
          </NavLink>
         
        </nav>

        <div className="sidebar-footer">
          <NavLink
            to="/agencyProfil"
            onClick={onNavigate}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span className="nav-dot" />
            <img src={profilImg} alt="profil" />
            Agency Profile
          </NavLink>
          <div className="nav-link logout" onClick={()=>{confirm("are you sure ?")}} >
            <span className="nav-dot" />
            <img src={logoutImg} alt="logout" />
            Logout
          </div>
        </div>
      </aside>
  )
}

export default Asideagency
