import React, { useState } from 'react'

const DocumentsCard = ({ data, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedDocs, setEditedDocs] = useState(data.documents)

  const handleSave = () => {
    onUpdate({ documents: editedDocs })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedDocs(data.documents)
    setIsEditing(false)
  }

  const handleDocNameChange = (id, newFilename) => {
    setEditedDocs(
      editedDocs.map(doc => doc.id === id ? { ...doc, filename: newFilename } : doc)
    )
  }

  const handleViewDoc = (doc) => {
    alert(`Viewing document: ${doc.name}\nFilename: ${doc.filename}\n(In a real production environment, this would open a PDF viewer or download the document securely.)`)
  }

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <h3>Documents</h3>
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
        <div className="documents-list">
          {data.documents.map((doc, idx) => {
            const currentEditedDoc = editedDocs.find(d => d.id === doc.id) || doc

            // Choose different icons based on document type
            let iconColor = 'blue'
            let svgPath = (
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            )
            
            if (doc.type === 'license') {
              iconColor = 'blue'
            } else if (doc.type === 'insurance') {
              iconColor = 'red'
            } else if (doc.type === 'id') {
              iconColor = 'green'
            }

            return (
              <div key={doc.id} className="document-row">
                <div className={`document-icon-wrapper ${iconColor}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {svgPath}
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                
                <div className="document-details">
                  <span className="document-name">{doc.name}</span>
                  {isEditing ? (
                    <input 
                      type="text" 
                      className="document-inline-input"
                      value={currentEditedDoc.filename} 
                      onChange={e => handleDocNameChange(doc.id, e.target.value)}
                    />
                  ) : (
                    <span className="document-filename">{doc.filename}</span>
                  )}
                </div>

                {!isEditing && (
                  <button className="btn-view-doc" onClick={() => handleViewDoc(doc)}>
                    View
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DocumentsCard
