import { useState } from 'react'
import './agencyProfil.css'
import { defaultAgencyData } from '../../../agencyData'
import ProfileHeader from '../coponements/agency/ProfileHeader'
import ContactInfoCard from '../coponements/agency/ContactInfoCard'
import SocialMediaCard from '../coponements/agency/SocialMediaCard'
import DocumentsCard from '../coponements/agency/DocumentsCard'
import StatsOverviewCard from '../coponements/agency/StatsOverviewCard'
import PreferencesCard from '../coponements/agency/PreferencesCard'
import ChangePasswordCard from '../coponements/agency/ChangePasswordCard'

const AgencyProfil = () => {
  const [agencyData, setAgencyData] = useState(defaultAgencyData)

  const handleUpdate = (updatedFields) => {
    setAgencyData(prev => ({
      ...prev,
      ...updatedFields
    }))
  }

  return (
    <div className="agency-profile-page">
      {/* Page Title Header */}
      <div className="page-header-title-section">
        <h1 className="main-page-title">Agency Profile</h1>
        <p className="page-subtitle">Manage your agency information and preferences</p>
      </div>

      
      <ProfileHeader data={agencyData} onUpdate={handleUpdate} />


      <div className="profile-modular-grid">
        <div className="grid-column">
          <ContactInfoCard data={agencyData} onUpdate={handleUpdate} />
          <StatsOverviewCard stats={agencyData.stats} />
        </div>

        
        <div className="grid-column">
          <SocialMediaCard data={agencyData} onUpdate={handleUpdate} />
          <PreferencesCard data={agencyData} onUpdate={handleUpdate} />
        </div>

        
        <div className="grid-column">
          <DocumentsCard data={agencyData} onUpdate={handleUpdate} />
          <ChangePasswordCard />
        </div>
      </div>
    </div>
  )
}

export default AgencyProfil
