import React from 'react'
import Cars from '../pages/Cars'
import Dashboard from '../pages/Dashboard'
import Reservations from '../pages/Reservations'
import {Routes,Route,Link}  from 'react-router-dom'

const Layout = () => {
  return (
    <div className='container'>
      <nav>
        <Link to="/">dashboard</Link>
        <Link to="/cars">cars</Link>
        <Link to="/reservations">reservations</Link>
      </nav>
      <main>
        <Routes>
        <Route path="/cars" element={<Cars/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/reservations" element={<Reservations/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default Layout
