import React, { useState, useEffect } from 'react'
import { carAssets, defaultReservations } from '../agencyData'
import './reservation.css'

const defaultFormState = {
  customerName: '',
  customerEmail: '',
  carName: 'Tesla Model 3',
  dateFrom: '',
  dateTo: '',
  totalPrice: '',
  status: 'Pending'
}

// Format date range helper (e.g., '2024-01-15', '2024-01-20' -> 'Jan 15 - Jan 20' + '5 days')
const formatDateRange = (fromStr, toStr) => {
  if (!fromStr || !toStr) return { rangeText: '-', days: 0 }
  const from = new Date(fromStr)
  const to = new Date(toStr)
  if (isNaN(from.getTime()) || isNaN(to.getTime())) return { rangeText: `${fromStr} - ${toStr}`, days: 0 }

  const options = { month: 'short', day: 'numeric' }
  const fromFormatted = from.toLocaleDateString('en-US', options)
  const toFormatted = to.toLocaleDateString('en-US', options)
  
  const diffTime = Math.abs(to - from)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  return {
    rangeText: `${fromFormatted} - ${toFormatted}`,
    days: diffDays
  }
}

const Reservations = () => {
  const [reservations, setReservations] = useState(() => {
    const saved = localStorage.getItem('rentflow_reservations')
    return saved ? JSON.parse(saved) : defaultReservations
  })

  useEffect(() => {
    localStorage.setItem('rentflow_reservations', JSON.stringify(reservations))
  }, [reservations])

  // Filters State
  const [filters, setFilters] = useState({
    search: '',
    status: 'All Status',
    dateFrom: '',
    dateTo: '',
    sort: 'Newest First'
  })

  // Modals & Selection States
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isViewOpen, setIsViewOpen] = useState(false)
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false)
  const [selectedRes, setSelectedRes] = useState(null)
  
  // Form State
  const [formData, setFormData] = useState(defaultFormState)
  const [isEditMode, setIsEditMode] = useState(false)

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Auto calculate total price when car or dates change in Add/Edit form
  useEffect(() => {
    if (formData.dateFrom && formData.dateTo && formData.carName) {
      const from = new Date(formData.dateFrom)
      const to = new Date(formData.dateTo)
      if (!isNaN(from.getTime()) && !isNaN(to.getTime()) && to >= from) {
        const diffTime = Math.abs(to - from)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1
        const dailyRate = carAssets[formData.carName]?.price || 100
        setFormData(prev => ({ ...prev, totalPrice: diffDays * dailyRate }))
      }
    }
  }, [formData.dateFrom, formData.dateTo, formData.carName])

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
    setCurrentPage(1) // Reset page to 1 when filters change
  }

  // Handle Form Change
  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Handle Open Add Modal
  const openAddModal = () => {
    setIsEditMode(false)
    setSelectedRes(null)
    setFormData({
      ...defaultFormState,
      dateFrom: new Date().toISOString().split('T')[0],
      dateTo: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0] // default 3 days
    })
    setIsModalOpen(true)
  }

  // Handle Open Edit Modal
  const openEditModal = (res, e) => {
    e.stopPropagation()
    setIsEditMode(true)
    setSelectedRes(res)
    setFormData({
      customerName: res.customerName,
      customerEmail: res.customerEmail,
      carName: res.carName,
      dateFrom: res.dateFrom,
      dateTo: res.dateTo,
      totalPrice: res.totalPrice,
      status: res.status
    })
    setIsModalOpen(true)
  }

  // Open View Modal
  const openViewModal = (res) => {
    setSelectedRes(res)
    setIsViewOpen(true)
  }

  // Open Invoice Modal
  const openInvoiceModal = (res, e) => {
    e.stopPropagation()
    setSelectedRes(res)
    setIsInvoiceOpen(true)
  }

  // Delete Reservation
  const handleDelete = (id, e) => {
    e.stopPropagation()
    if (confirm('Are you sure you want to delete this reservation?')) {
      setReservations(prev => prev.filter(item => item.id !== id))
    }
  }

  // Form Submit (Add or Save Edit)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.customerName.trim() || !formData.customerEmail.trim()) {
      alert('Please fill out all required fields.')
      return
    }

    const updatedCarType = carAssets[formData.carName]?.type || 'Standard'

    if (isEditMode && selectedRes) {
      setReservations(prev => prev.map(item => {
        if (item.id === selectedRes.id) {
          return {
            ...item,
            customerName: formData.customerName.trim(),
            customerEmail: formData.customerEmail.trim(),
            carName: formData.carName,
            carType: updatedCarType,
            dateFrom: formData.dateFrom,
            dateTo: formData.dateTo,
            totalPrice: Number(formData.totalPrice),
            status: formData.status
          }
        }
        return item
      }))
    } else {
      // Create a unique Booking ID starting from max current or 2024-1248
      const baseNum = reservations.reduce((max, item) => {
        const parts = item.id.split('-')
        if (parts.length === 3) {
          const num = parseInt(parts[2], 10)
          return num > max ? num : max
        }
        return max
      }, 1241)

      const newId = `BK-2024-${baseNum + 1}`
      // Assign random elegant avatar from Unsplash
      const randomAvatars = [
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150'
      ]
      const avatarUrl = randomAvatars[Math.floor(Math.random() * randomAvatars.length)]

      const newReservation = {
        id: newId,
        customerName: formData.customerName.trim(),
        customerEmail: formData.customerEmail.trim(),
        customerAvatar: avatarUrl,
        carName: formData.carName,
        carType: updatedCarType,
        dateFrom: formData.dateFrom,
        dateTo: formData.dateTo,
        totalPrice: Number(formData.totalPrice),
        status: formData.status
      }

      setReservations(prev => [newReservation, ...prev])
    }

    setIsModalOpen(false)
    setSelectedRes(null)
  }

  // Stat Calculations (Base numbers from the image + dynamic adjustments)
  const activeCount = 154 + reservations.filter(r => r.status === 'Active').length
  const pendingCount = 37 + reservations.filter(r => r.status === 'Pending').length
  const completedCount = 891 + reservations.filter(r => r.status === 'Completed').length
  
  // Calculate dynamic Revenue ($44,345 base from image + all active/completed/confirmed prices from state)
  const stateRevenue = reservations
    .filter(r => r.status !== 'Cancelled')
    .reduce((sum, r) => sum + Number(r.totalPrice), 0)
  const totalRevenueK = ((44345 + stateRevenue) / 1000).toFixed(1)

  // Filters logic
  const filteredReservations = reservations.filter(res => {
    // 1. Search filter
    const searchVal = filters.search.trim().toLowerCase()
    const matchesSearch = !searchVal || 
      res.id.toLowerCase().includes(searchVal) ||
      res.customerName.toLowerCase().includes(searchVal) ||
      res.customerEmail.toLowerCase().includes(searchVal) ||
      res.carName.toLowerCase().includes(searchVal)

    // 2. Status filter
    const matchesStatus = filters.status === 'All Status' || res.status === filters.status

    // 3. Date range filters
    let matchesDate = true
    if (filters.dateFrom) {
      matchesDate = matchesDate && (res.dateFrom >= filters.dateFrom)
    }
    if (filters.dateTo) {
      matchesDate = matchesDate && (res.dateTo <= filters.dateTo)
    }

    return matchesSearch && matchesStatus && matchesDate
  })

  // Sort logic
  const sortedReservations = [...filteredReservations].sort((a, b) => {
    if (filters.sort === 'Newest First') {
      return b.id.localeCompare(a.id)
    }
    if (filters.sort === 'Oldest First') {
      return a.id.localeCompare(b.id)
    }
    if (filters.sort === 'Price: High to Low') {
      return b.totalPrice - a.totalPrice
    }
    if (filters.sort === 'Price: Low to High') {
      return a.totalPrice - b.totalPrice
    }
    return 0
  })

  // Pagination logic
  const totalItems = sortedReservations.length
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = sortedReservations.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <div className="page">
      {/* Header Panel */}
      <div className="page-header">
        <div>
          <h1>Reservations</h1>
          <p>Manage all customer bookings and reservations</p>
        </div>
        <button className="primary-button" type="button" onClick={openAddModal}>
          + New Reservation
        </button>
      </div>

      {/* Dynamic Summary Cards Grid */}
      <section className="res-stats-grid">
        <div className="res-stat-card">
          <span className="res-stat-badge res-badge-green">+12%</span>
          <div className="res-stat-icon-wrapper res-icon-blue">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div className="res-stat-val">{activeCount}</div>
          <div className="res-stat-lbl">Active Bookings</div>
        </div>

        <div className="res-stat-card">
          <span className="res-stat-badge res-badge-blue">24 today</span>
          <div className="res-stat-icon-wrapper res-icon-orange">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="res-stat-val">{pendingCount}</div>
          <div className="res-stat-lbl">Pending</div>
        </div>

        <div className="res-stat-card">
          <span className="res-stat-badge res-badge-green">+8%</span>
          <div className="res-stat-icon-wrapper res-icon-green">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div className="res-stat-val">{completedCount}</div>
          <div className="res-stat-lbl">Completed</div>
        </div>

        <div className="res-stat-card">
          <span className="res-stat-badge res-badge-green">+18%</span>
          <div className="res-stat-icon-wrapper res-icon-purple">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="res-stat-val">${totalRevenueK}K</div>
          <div className="res-stat-lbl">This Month</div>
        </div>
      </section>

      {/* Filter Options Controls */}
      <section className="filters" style={{ gridTemplateColumns: '1.2fr 1fr 1fr 1fr 1fr' }}>
        <div className="filter-group">
          <label htmlFor="search">Search</label>
          <div style={{ position: 'relative' }}>
            <input
              id="search"
              name="search"
              type="search"
              placeholder="Customer or booking..."
              value={filters.search}
              onChange={handleFilterChange}
              style={{ paddingLeft: '34px' }}
            />
            <svg 
              viewBox="0 0 24 24" 
              width="14" 
              height="14" 
              stroke="#94a3b8" 
              strokeWidth="2.5" 
              fill="none" 
              style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        <div className="filter-group">
          <label htmlFor="status">Status</label>
          <select id="status" name="status" value={filters.status} onChange={handleFilterChange}>
            <option>All Status</option>
            <option>Active</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="dateFrom">Date From</label>
          <input 
            id="dateFrom" 
            name="dateFrom" 
            type="date" 
            value={filters.dateFrom} 
            onChange={handleFilterChange} 
          />
        </div>

        <div className="filter-group">
          <label htmlFor="dateTo">Date To</label>
          <input 
            id="dateTo" 
            name="dateTo" 
            type="date" 
            value={filters.dateTo} 
            onChange={handleFilterChange} 
          />
        </div>

        <div className="filter-group">
          <label htmlFor="sort">Sort By</label>
          <select id="sort" name="sort" value={filters.sort} onChange={handleFilterChange}>
            <option>Newest First</option>
            <option>Oldest First</option>
            <option>Price: High to Low</option>
            <option>Price: Low to High</option>
          </select>
        </div>
      </section>

      {/* Bookings Table Container */}
      <section className="table-card" style={{ padding: '0 0 12px 0', overflow: 'hidden' }}>
        <div className="res-table-head">
          <div>Booking ID</div>
          <div>Customer</div>
          <div>Car</div>
          <div>Dates</div>
          <div>Total</div>
          <div>Status</div>
          <div style={{ textAlign: 'right', paddingRight: '12px' }}>Actions</div>
        </div>

        {currentItems.length > 0 ? (
          currentItems.map((res) => {
            const dateDetails = formatDateRange(res.dateFrom, res.dateTo)
            const carDetails = carAssets[res.carName] || { type: res.carType, image: '' }
            
            return (
              <div 
                className="res-table-row" 
                key={res.id}
                onClick={() => openViewModal(res)}
              >
                {/* Booking ID */}
                <div style={{ fontWeight: '700', fontSize: '13px', color: '#0f172a' }}>
                  #{res.id}
                </div>

                {/* Customer */}
                <div className="res-cust-cell">
                  <img className="res-cust-avatar" src={res.customerAvatar} alt={res.customerName} />
                  <div className="res-cust-info">
                    <span className="res-cust-name">{res.customerName}</span>
                    <span className="res-cust-email">{res.customerEmail}</span>
                  </div>
                </div>

                {/* Car */}
                <div className="res-car-cell">
                  <div 
                    className="res-car-img" 
                    style={carDetails.image ? { backgroundImage: `url(${carDetails.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
                  />
                  <div className="res-car-info">
                    <span className="res-car-title">{res.carName}</span>
                    <span className="res-car-type">{res.carType}</span>
                  </div>
                </div>

                {/* Dates */}
                <div className="res-dates-cell">
                  <span className="res-dates-range">{dateDetails.rangeText}</span>
                  <span className="res-dates-days">{dateDetails.days} {dateDetails.days === 1 ? 'day' : 'days'}</span>
                </div>

                {/* Total */}
                <div className="res-price-cell">
                  ${res.totalPrice.toLocaleString()}
                </div>

                {/* Status */}
                <div>
                  <span className={`status-pill res-${res.status.toLowerCase()}`}>
                    {res.status}
                  </span>
                </div>

                {/* Actions */}
                <div className="action-buttons" style={{ justifyContent: 'flex-end', gap: '8px' }} onClick={e => e.stopPropagation()}>
                  {/* View Details Eye */}
                  <button
                    className="action-button"
                    type="button"
                    title="View Details"
                    onClick={() => openViewModal(res)}
                  >
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>

                  {/* Edit Pencil (only visible for non-completed/non-cancelled) */}
                  {res.status !== 'Completed' && res.status !== 'Cancelled' && (
                    <button
                      className="action-button"
                      type="button"
                      title="Edit Booking"
                      onClick={(e) => openEditModal(res, e)}
                    >
                      <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </button>
                  )}

                  {/* Print Invoice File (only for Completed status) */}
                  {res.status === 'Completed' && (
                    <button
                      className="action-button"
                      type="button"
                      title="Print Invoice"
                      style={{ color: '#475569' }}
                      onClick={(e) => openInvoiceModal(res, e)}
                    >
                      <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    </button>
                  )}

                  {/* Delete (only for Active/Confirmed/Pending) */}
                  {res.status !== 'Completed' && res.status !== 'Cancelled' && (
                    <button
                      className="action-button delete"
                      type="button"
                      title="Cancel/Delete Booking"
                      onClick={(e) => handleDelete(res.id, e)}
                    >
                      <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            )
          })
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: '#64748b' }}>
            <p style={{ margin: 0, fontWeight: '600', fontSize: '15px' }}>No bookings found</p>
            <p style={{ margin: '4px 0 0', fontSize: '13px' }}>Try adjusting your search query or filters</p>
          </div>
        )}

        {/* Footer Navigation Panel */}
        {totalItems > 0 && (
          <div className="table-footer" style={{ borderTop: '1px solid #f1f5f9', marginTop: '4px' }}>
            <div>
              Showing <span>{indexOfFirstItem + 1}</span>-<span>{Math.min(indexOfLastItem, totalItems)}</span> of <span>{totalItems}</span> reservations
            </div>
            <div className="pagination">
              <button 
                type="button" 
                className="page-btn" 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                style={currentPage === 1 ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  type="button"
                  className={`page-btn${currentPage === page ? ' active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}

              <button 
                type="button" 
                className="page-btn" 
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                style={currentPage === totalPages ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </section>

      {/* CREATE / EDIT MODAL DIALOG */}
      {isModalOpen && (
        <div 
          className="modal-backdrop" 
          role="presentation" 
          onClick={() => setIsModalOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.55)', display: 'grid', placeItems: 'center', zIndex: 50 }}
        >
          <div 
            className="modal" 
            role="dialog" 
            aria-modal="true" 
            onClick={e => e.stopPropagation()}
            style={{ width: 'min(560px, 92vw)', borderRadius: '16px', padding: '24px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '14px' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.25rem' }}>
                  {isEditMode ? `Edit Booking #${selectedRes?.id}` : 'Create New Reservation'}
                </h2>
                <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '0.9rem' }}>
                  {isEditMode ? 'Modify reservation parameters below.' : 'Input the booking credentials to save in the ledger.'}
                </p>
              </div>
              <button 
                type="button" 
                onClick={() => setIsModalOpen(false)}
                style={{ border: 'none', background: 'transparent', fontSize: '1.5rem', cursor: 'pointer', color: '#64748b' }}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="res-form-grid">
                <div className="filter-group res-form-full">
                  <label htmlFor="customerName">Customer Name *</label>
                  <input
                    id="customerName"
                    name="customerName"
                    type="text"
                    required
                    value={formData.customerName}
                    onChange={handleFormChange}
                    placeholder="e.g. Sarah Johnson"
                  />
                </div>

                <div className="filter-group res-form-full">
                  <label htmlFor="customerEmail">Customer Email *</label>
                  <input
                    id="customerEmail"
                    name="customerEmail"
                    type="email"
                    required
                    value={formData.customerEmail}
                    onChange={handleFormChange}
                    placeholder="e.g. sarah.j@email.com"
                  />
                </div>

                <div className="filter-group">
                  <label htmlFor="carName">Select Car</label>
                  <select id="carName" name="carName" value={formData.carName} onChange={handleFormChange}>
                    {Object.keys(carAssets).map(car => (
                      <option key={car} value={car}>{car} (${carAssets[car].price}/day)</option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label htmlFor="resStatus">Booking Status</label>
                  <select id="resStatus" name="status" value={formData.status} onChange={handleFormChange}>
                    <option value="Active">Active</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label htmlFor="dateFrom">Date From</label>
                  <input
                    id="dateFrom"
                    name="dateFrom"
                    type="date"
                    required
                    value={formData.dateFrom}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="filter-group">
                  <label htmlFor="dateTo">Date To</label>
                  <input
                    id="dateTo"
                    name="dateTo"
                    type="date"
                    required
                    value={formData.dateTo}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="filter-group res-form-full">
                  <label htmlFor="totalPrice">Total Price ($) - <small style={{ color: '#2563eb' }}>Auto-calculated based on days</small></label>
                  <input
                    id="totalPrice"
                    name="totalPrice"
                    type="number"
                    required
                    value={formData.totalPrice}
                    onChange={handleFormChange}
                    placeholder="e.g. 445"
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '10px', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                <button type="button" className="page-btn" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="primary-button">
                  {isEditMode ? 'Update Reservation' : 'Create Reservation'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DETAILED VIEW MODAL */}
      {isViewOpen && selectedRes && (
        <div 
          className="modal-backdrop" 
          role="presentation" 
          onClick={() => setIsViewOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.55)', display: 'grid', placeItems: 'center', zIndex: 50 }}
        >
          <div className="res-detail-dialog" onClick={e => e.stopPropagation()}>
            <div className="res-detail-header">
              <div>
                <h3 style={{ margin: 0, fontSize: '18px' }}>Booking Details</h3>
                <span style={{ fontSize: '12px', color: '#94a3b8' }}>ID: #{selectedRes.id}</span>
              </div>
              <button 
                type="button" 
                onClick={() => setIsViewOpen(false)}
                style={{ border: 'none', background: 'transparent', fontSize: '1.5rem', cursor: 'pointer', color: '#ffffff' }}
              >
                &times;
              </button>
            </div>
            
            <div className="res-detail-body">
              {/* Customer section */}
              <div className="res-detail-section">
                <div className="res-detail-title">Customer Information</div>
                <div className="res-cust-cell" style={{ marginBottom: '12px' }}>
                  <img className="res-cust-avatar" src={selectedRes.customerAvatar} alt={selectedRes.customerName} style={{ width: '46px', height: '46px' }} />
                  <div className="res-cust-info">
                    <span className="res-cust-name" style={{ fontSize: '15px' }}>{selectedRes.customerName}</span>
                    <span className="res-cust-email" style={{ fontSize: '13px' }}>{selectedRes.customerEmail}</span>
                  </div>
                </div>
              </div>

              {/* Rental Parameters */}
              <div className="res-detail-section">
                <div className="res-detail-title">Rental Parameters</div>
                <div className="res-detail-row">
                  <span className="res-detail-lbl">Vehicle Booked:</span>
                  <span className="res-detail-val">{selectedRes.carName}</span>
                </div>
                <div className="res-detail-row">
                  <span className="res-detail-lbl">Category / Segment:</span>
                  <span className="res-detail-val">{selectedRes.carType}</span>
                </div>
                <div className="res-detail-row">
                  <span className="res-detail-lbl">Start Date (From):</span>
                  <span className="res-detail-val">{new Date(selectedRes.dateFrom).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="res-detail-row">
                  <span className="res-detail-lbl">End Date (To):</span>
                  <span className="res-detail-val">{new Date(selectedRes.dateTo).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="res-detail-row">
                  <span className="res-detail-lbl">Duration Count:</span>
                  <span className="res-detail-val">{formatDateRange(selectedRes.dateFrom, selectedRes.dateTo).days} Days</span>
                </div>
              </div>

              {/* Financial Breakdown */}
              <div className="res-detail-section">
                <div className="res-detail-title">Status & Ledger</div>
                <div className="res-detail-row">
                  <span className="res-detail-lbl">Booking Status:</span>
                  <span className={`status-pill res-${selectedRes.status.toLowerCase()}`}>{selectedRes.status}</span>
                </div>
                <div className="res-detail-row" style={{ marginTop: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
                  <span className="res-detail-lbl" style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>Grand Total Charged:</span>
                  <span className="res-detail-val" style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb' }}>${selectedRes.totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                <button type="button" className="primary-button" style={{ background: '#0f172a' }} onClick={() => setIsViewOpen(false)}>
                  Close File
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PRINT INVOICE MODAL */}
      {isInvoiceOpen && selectedRes && (
        <div 
          className="modal-backdrop" 
          role="presentation" 
          onClick={() => setIsInvoiceOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.55)', display: 'grid', placeItems: 'center', zIndex: 50 }}
        >
          <div className="invoice-card" onClick={e => e.stopPropagation()}>
            <div className="invoice-header">
              <div>
                <h2 style={{ margin: 0, color: '#2563eb', fontFamily: 'Space Grotesk', fontWeight: '700' }}>RentFlow Invoice</h2>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Receipt Reference: {selectedRes.id}</span>
              </div>
              <button 
                type="button" 
                className="page-btn" 
                onClick={() => window.print()} 
                style={{ background: '#2563eb', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px', border: 'none' }}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none">
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
                Print
              </button>
            </div>

            <div className="invoice-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                <div>
                  <h4 style={{ margin: '0 0 6px 0', color: '#64748b', fontSize: '11px', textTransform: 'uppercase' }}>Billed To</h4>
                  <div style={{ fontWeight: '700', color: '#0f172a' }}>{selectedRes.customerName}</div>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>{selectedRes.customerEmail}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <h4 style={{ margin: '0 0 6px 0', color: '#64748b', fontSize: '11px', textTransform: 'uppercase' }}>Invoice Date</h4>
                  <div style={{ fontWeight: '600', color: '#0f172a' }}>{new Date(selectedRes.dateTo).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                </div>
              </div>

              <table className="invoice-items">
                <thead>
                  <tr>
                    <th>Vehicle Details</th>
                    <th style={{ textAlign: 'right' }}>Daily Rate</th>
                    <th style={{ textAlign: 'center' }}>Duration</th>
                    <th style={{ textAlign: 'right' }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div style={{ fontWeight: '600', color: '#0f172a' }}>{selectedRes.carName}</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>{selectedRes.carType}</div>
                    </td>
                    <td style={{ textAlign: 'right' }}>${(carAssets[selectedRes.carName]?.price || 100).toLocaleString()}/day</td>
                    <td style={{ textAlign: 'center' }}>{formatDateRange(selectedRes.dateFrom, selectedRes.dateTo).days} days</td>
                    <td style={{ textAlign: 'right', fontWeight: '600' }}>${selectedRes.totalPrice.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                <div style={{ width: '200px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: '13px', color: '#64748b' }}>
                    <span>Subtotal</span>
                    <span>${selectedRes.totalPrice.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: '13px', color: '#64748b' }}>
                    <span>Tax (0%)</span>
                    <span>$0.00</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0 6px 0', borderTop: '1px solid #e2e8f0', marginTop: '8px', fontWeight: '800', fontSize: '16px', color: '#2563eb' }}>
                    <span>Total Paid</span>
                    <span>${selectedRes.totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '40px', borderTop: '1px solid #f1f5f9', paddingTop: '20px', textAlign: 'center', fontSize: '12px', color: '#94a3b8' }}>
                Thank you for renting with RentFlow! Safe travels on the road.
              </div>
            </div>
            
            <div style={{ padding: '20px 30px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end' }}>
              <button type="button" className="page-btn" onClick={() => setIsInvoiceOpen(false)}>
                Close Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Reservations
