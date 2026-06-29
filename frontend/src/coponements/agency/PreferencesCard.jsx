import React from 'react'

const PreferencesCard = ({ data, onUpdate }) => {
  const togglePref = (key) => {
    onUpdate({
      preferences: {
        ...data.preferences,
        [key]: !data.preferences[key]
      }
    })
  }

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <h3>Preferences</h3>
      </div>

      <div className="profile-card-body">
        <div className="preferences-list">
          <div className="preference-item">
            <div className="preference-details">
              <span className="pref-title">Email notifications</span>
            </div>
            <button 
              type="button"
              className={`toggle-switch ${data.preferences.emailNotifications ? 'active' : ''}`}
              onClick={() => togglePref('emailNotifications')}
            >
              <span className="toggle-slider" />
            </button>
          </div>

          <div className="preference-item">
            <div className="preference-details">
              <span className="pref-title">SMS notifications</span>
            </div>
            <button 
              type="button"
              className={`toggle-switch ${data.preferences.smsNotifications ? 'active' : ''}`}
              onClick={() => togglePref('smsNotifications')}
            >
              <span className="toggle-slider" />
            </button>
          </div>

          <div className="preference-item">
            <div className="preference-details">
              <span className="pref-title">Show phone number publicly</span>
            </div>
            <button 
              type="button"
              className={`toggle-switch ${data.preferences.showPhonePublicly ? 'active' : ''}`}
              onClick={() => togglePref('showPhonePublicly')}
            >
              <span className="toggle-slider" />
            </button>
          </div>

          <div className="preference-item">
            <div className="preference-details">
              <span className="pref-title">Show email publicly</span>
            </div>
            <button 
              type="button"
              className={`toggle-switch ${data.preferences.showEmailPublicly ? 'active' : ''}`}
              onClick={() => togglePref('showEmailPublicly')}
            >
              <span className="toggle-slider" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreferencesCard
