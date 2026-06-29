import { Routes, Route } from 'react-router-dom'
import Cars from '../../pages/agencypages/agenciespages/Cars'
import Dashboard from '../../pages/agencypages/agenciespages/Dashboard'
import Reservations from '../../pages/agencypages/agenciespages/Reservations'
import AgencyProfil from '../../pages/agencypages/agenciespages/AgencyProfil'

const RRoutesAG = () => {
  return (
     <Routes>
              <Route path="/agencyCars" element={<Cars />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/agencyReservations" element={<Reservations />} />
              <Route path="/agencyProfil" element={<AgencyProfil/>}/>
    </Routes>
  )
}

export default RRoutesAG
