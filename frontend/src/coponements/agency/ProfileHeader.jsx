import React, { useState } from 'react'

const ProfileHeader = ({ data, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedData, setEditedData] = useState({
    name: data.name,
    city: data.city,
    phone: data.phone,
    email: data.email,
    website: data.website
  })

  const handleSave = () => {
    onUpdate(editedData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedData({
      name: data.name,
      city: data.city,
      phone: data.phone,
      email: data.email,
      website: data.website
    })
    setIsEditing(false)
  }

  const handleCoverChange = () => {
    const url = prompt("Enter new cover image URL (or leave blank to use default):", data.coverImage)
    if (url !== null) {
      onUpdate({ coverImage: url || 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&auto=format&fit=crop&q=80' })
    }
  }

  const handleLogoChange = () => {
    const url = prompt("Enter new logo image URL (or leave blank to use default):", data.logoImage)
    if (url !== null) {
      onUpdate({ logoImage: url || 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=150&auto=format&fit=crop&q=80' })
    }
  }

  return (
    <div className="profile-header-card">
      {/* Banner / Cover Photo */}
      <div 
        className="profile-cover" 
        style={{ backgroundImage: `url(${data.coverImage})` }}
      >
        <button className="cover-change-btn" onClick={handleCoverChange}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
          Change Cover
        </button>
      </div>

      {/* Main Info Row */}
      <div className="profile-main-info">
        <div className="profile-logo-container">
          <div className="profile-logo-wrapper">
            <img src={data.logoImage} alt="Agency Logo" className="agency-logo-img" />
          </div>
        </div>

        <div className="profile-details-section">
          {isEditing ? (
            <div className="profile-edit-fields">
              <div className="edit-row">
                <div className="input-group">
                  <label>Agency Name</label>
                  <input 
                    type="text" 
                    value={editedData.name} 
                    onChange={e => setEditedData({ ...editedData, name: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label>Location / City</label>
                  <input 
                    type="text" 
                    value={editedData.city} 
                    onChange={e => setEditedData({ ...editedData, city: e.target.value })}
                  />
                </div>
              </div>
              <div className="edit-row">
                <div className="input-group">
                  <label>Phone</label>
                  <input 
                    type="text" 
                    value={editedData.phone} 
                    onChange={e => setEditedData({ ...editedData, phone: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    value={editedData.email} 
                    onChange={e => setEditedData({ ...editedData, email: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label>Website</label>
                  <input 
                    type="text" 
                    value={editedData.website} 
                    onChange={e => setEditedData({ ...editedData, website: e.target.value })}
                  />
                </div>
              </div>
              <div className="edit-actions-row">
                <button className="btn-save" onClick={handleSave}>Save Details</button>
                <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <div className="profile-title-and-actions">
                <div>
                  <h2 className="agency-profile-name">{data.name}</h2>
                  <div className="profile-meta-item location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{data.city}</span>
                  </div>
                </div>
                <div className="profile-actions-buttons">
                  <button className="btn-secondary" onClick={handleLogoChange}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                    Change Logo
                  </button>
                  <button className="btn-primary" onClick={() => setIsEditing(true)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path>
                    </svg>
                    Edit Profile
                  </button>
                </div>
              </div>

              {/* Grid of basic contacts */}
              <div className="profile-contact-quickgrid">
                <div className="profile-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>{data.phone}</span>
                </div>
                <div className="profile-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href={`mailto:${data.email}`}>{data.email}</a>
                </div>
                <div className="profile-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <a href={`https://${data.website}`} target="_blank" rel="noopener noreferrer">{data.website}</a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
