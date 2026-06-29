import React, { useState } from 'react'

const ContactInfoCard = ({ data, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedData, setEditedData] = useState({
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    city: data.city,
    website: data.website,
    workingHours: data.workingHours
  })

  const handleSave = () => {
    onUpdate(editedData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedData({
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      website: data.website,
      workingHours: data.workingHours
    })
    setIsEditing(false)
  }

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <h3>Contact Information</h3>
        {!isEditing ? (
          <button className="card-edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
        ) : (
          <div className="card-edit-actions">
            <button className="card-save-btn" onClick={handleSave}>Save</button>
            <button className="card-cancel-btn" onClick={handleCancel}>Cancel</button>
          </div>
        )}
      </div>

      <div className="profile-card-body">
        {isEditing ? (
          <div className="card-form-grid">
            <div className="form-group">
              <label>Agency Name</label>
              <input 
                type="text" 
                value={editedData.name} 
                onChange={e => setEditedData({ ...editedData, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={editedData.email} 
                onChange={e => setEditedData({ ...editedData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input 
                type="text" 
                value={editedData.phone} 
                onChange={e => setEditedData({ ...editedData, phone: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input 
                type="text" 
                value={editedData.address} 
                onChange={e => setEditedData({ ...editedData, address: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input 
                type="text" 
                value={editedData.city} 
                onChange={e => setEditedData({ ...editedData, city: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Website</label>
              <input 
                type="text" 
                value={editedData.website} 
                onChange={e => setEditedData({ ...editedData, website: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Working Hours</label>
              <input 
                type="text" 
                value={editedData.workingHours} 
                onChange={e => setEditedData({ ...editedData, workingHours: e.target.value })}
              />
            </div>
          </div>
        ) : (
          <div className="info-list">
            <div className="info-row">
              <div className="info-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Agency Name</span>
              </div>
              <div className="info-value">{data.name}</div>
            </div>

            <div className="info-row">
              <div className="info-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Email</span>
              </div>
              <div className="info-value">{data.email}</div>
            </div>

            <div className="info-row">
              <div className="info-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Phone Number</span>
              </div>
              <div className="info-value">{data.phone}</div>
            </div>

            <div className="info-row">
              <div className="info-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Address</span>
              </div>
              <div className="info-value">{data.address}</div>
            </div>

            <div className="info-row">
              <div className="info-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>City</span>
              </div>
              <div className="info-value">{data.city}</div>
            </div>

            <div className="info-row">
              <div className="info-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span>Website</span>
              </div>
              <div className="info-value">{data.website}</div>
            </div>

            <div className="info-row">
              <div className="info-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Working Hours</span>
              </div>
              <div className="info-value">{data.workingHours}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactInfoCard
