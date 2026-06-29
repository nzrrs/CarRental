import React, { useState } from 'react'

const SocialMediaCard = ({ data, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedSocials, setEditedSocials] = useState({
    facebook: data.socialMedia.facebook,
    instagram: data.socialMedia.instagram,
    linkedin: data.socialMedia.linkedin,
    twitter: data.socialMedia.twitter
  })

  const handleSave = () => {
    onUpdate({ socialMedia: editedSocials })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedSocials({
      facebook: data.socialMedia.facebook,
      instagram: data.socialMedia.instagram,
      linkedin: data.socialMedia.linkedin,
      twitter: data.socialMedia.twitter
    })
    setIsEditing(false)
  }

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <h3>Social Media</h3>
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
              <label>Facebook</label>
              <input 
                type="text" 
                value={editedSocials.facebook} 
                onChange={e => setEditedSocials({ ...editedSocials, facebook: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Instagram</label>
              <input 
                type="text" 
                value={editedSocials.instagram} 
                onChange={e => setEditedSocials({ ...editedSocials, instagram: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>LinkedIn</label>
              <input 
                type="text" 
                value={editedSocials.linkedin} 
                onChange={e => setEditedSocials({ ...editedSocials, linkedin: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>X (Twitter)</label>
              <input 
                type="text" 
                value={editedSocials.twitter} 
                onChange={e => setEditedSocials({ ...editedSocials, twitter: e.target.value })}
              />
            </div>
          </div>
        ) : (
          <div className="social-links-list">
            <div className="social-row">
              <div className="social-icon facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </div>
              <div className="social-info">
                <span className="social-platform">Facebook</span>
                <a href={`https://${data.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer" className="social-link-value">
                  {data.socialMedia.facebook}
                </a>
              </div>
            </div>

            <div className="social-row">
              <div className="social-icon instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="social-info">
                <span className="social-platform">Instagram</span>
                <a href={`https://${data.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer" className="social-link-value">
                  {data.socialMedia.instagram}
                </a>
              </div>
            </div>

            <div className="social-row">
              <div className="social-icon linkedin">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <div className="social-info">
                <span className="social-platform">LinkedIn</span>
                <a href={`https://${data.socialMedia.linkedin}`} target="_blank" rel="noopener noreferrer" className="social-link-value">
                  {data.socialMedia.linkedin}
                </a>
              </div>
            </div>

            <div className="social-row">
              <div className="social-icon twitter">
                {/* Modern X/Twitter Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className="social-info">
                <span className="social-platform">X (Twitter)</span>
                <a href={`https://${data.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer" className="social-link-value">
                  {data.socialMedia.twitter}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SocialMediaCard
