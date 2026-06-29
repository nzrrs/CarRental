import React from 'react'
import { defaultAgencyData, defaultReservations } from '../agencyData'
import StatsOverviewCard from '../coponements/agency/StatsOverviewCard'

const Dashboard = () => {
  const { stats } = defaultAgencyData
  
  // Get top 3 recent reservations for the dashboard summary
  const recentReservations = defaultReservations.slice(0, 3)

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening with your agency today.</p>
        </div>
      </div>

      {/* Main Statistics Overview */}
      <StatsOverviewCard stats={stats} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Recent Reservations Summary */}
        <section className="table-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ margin: 0 }}>Recent Reservations</h3>
            <a href="/reservations" style={{ fontSize: '13px', color: 'var(--brand)', textDecoration: 'none', fontWeight: '600' }}>View All</a>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {recentReservations.map((res) => (
              <div 
                key={res.id} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  padding: '12px', 
                  borderRadius: '12px', 
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)'
                }}
              >
                <img 
                  src={res.customerAvatar} 
                  alt={res.customerName} 
                  style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} 
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '600', fontSize: '14px' }}>{res.customerName}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{res.carName}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: '700', fontSize: '14px' }}>${res.totalPrice}</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{res.status}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Agency Quick Info */}
        <section className="table-card" style={{ padding: '24px' }}>
          <h3 style={{ margin: '0 0 20px 0' }}>Agency Info</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#eef2ff', display: 'grid', placeItems: 'center', color: 'var(--brand)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Location</div>
                <div style={{ fontWeight: '600', fontSize: '14px' }}>{defaultAgencyData.city}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#eef2ff', display: 'grid', placeItems: 'center', color: 'var(--brand)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2 Spot></line></svg>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Working Hours</div>
                <div style={{ fontWeight: '600', fontSize: '14px' }}>{defaultAgencyData.workingHours}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#eef2ff', display: 'grid', placeItems: 'center', color: 'var(--brand)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Email Support</div>
                <div style={{ fontWeight: '600', fontSize: '14px' }}>{defaultAgencyData.email}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard
