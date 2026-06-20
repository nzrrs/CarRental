import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cars from '../../pages/Cars'
import Dashboard from '../../pages/Dashboard'
import Reservations from '../../pages/Reservations'
import AgencyProfil from '../../pages/AgencyProfil'

const RRoutesAG = () => {
  return (
     <Routes>
              <Route path="/agencyCars" element={<Cars />} />
              <Route path="/agency" element={<Dashboard />} />
              <Route path="/agencyReservations" element={<Reservations />} />
              <Route path="/agencyProfil" element={<AgencyProfil/>}/>
    </Routes>
  )
}

export default RRoutesAG
