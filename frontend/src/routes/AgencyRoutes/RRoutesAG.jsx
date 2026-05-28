import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cars from '../../pages/Cars'
import Dashboard from '../../pages/Dashboard'
import Reservations from '../../pages/Reservations'

const RRoutesAG = () => {
  return (
     <Routes>
              <Route path="/cars" element={<Cars />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/reservations" element={<Reservations />} />
    </Routes>
  )
}

export default RRoutesAG
