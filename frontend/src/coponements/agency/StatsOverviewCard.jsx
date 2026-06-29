import React from 'react'

const StatsOverviewCard = ({ stats }) => {
  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <h3>Statistics Overview</h3>
      </div>

      <div className="profile-card-body">
        <div className="stats-grid">
          {/* Total Cars */}
          <div className="stat-box">
            <div className="stat-icon-container bg-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" ry="2"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <div className="stat-value">{stats.totalCars}</div>
            <div className="stat-label">Total Cars</div>
          </div>

          {/* Total Bookings */}
          <div className="stat-box">
            <div className="stat-icon-container bg-green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div className="stat-value">{stats.totalBookings}</div>
            <div className="stat-label">Total Bookings</div>
          </div>

          {/* Available Cars */}
          <div className="stat-box">
            <div className="stat-icon-container bg-orange">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="7" cy="17" r="3"></circle>
                <circle cx="17" cy="17" r="3"></circle>
                <path d="M5 17h14v-6H5V17z M5 11l4-7h6l4 7H5z"></path>
              </svg>
            </div>
            <div className="stat-value">{stats.availableCars}</div>
            <div className="stat-label">Available Cars</div>
          </div>

          {/* Total Customers */}
          <div className="stat-box">
            <div className="stat-icon-container bg-purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="stat-value">{stats.totalCustomers}</div>
            <div className="stat-label">Total Customers</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsOverviewCard
