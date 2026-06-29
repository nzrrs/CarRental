import { useState } from 'react'
import RRoutesAG from '../../../routes/AgencyRoutes/RRoutesAG'
import '../../../App.css'
import Asideagency from './Asideagency'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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
    <RRoutesAG/>      
        </main>
      </div>
    </div>
  )
}

export default Layout
