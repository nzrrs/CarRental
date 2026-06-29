import React from 'react'

const CarModal = ({ isOpen, editingCarId, formData, handleChange, handleImageChange, handleAddCar, handleCloseModal }) => {
  if (!isOpen) return null

  return (
    <div
      className="modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.55)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
      role="presentation"
      onClick={handleCloseModal}
    >
      <div
        className="modal-card"
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '24px',
          width: 'min(520px, 92vw)',
          boxShadow: '0 20px 45px rgba(15, 23, 42, 0.18)',
        }}
        role="dialog"
        aria-modal="true"
        aria-label={editingCarId === null ? 'Add new car' : 'Edit car'}
        onClick={(event) => event.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.25rem' }}>
              {editingCarId === null ? 'Add New Car' : 'Edit Car'}
            </h2>
            <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '0.95rem' }}>
              {editingCarId === null
                ? 'Fill the details to add a car to inventory.'
                : 'Update the details and save your changes.'}
            </p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={handleCloseModal}
            style={{
              border: 'none',
              background: 'transparent',
              fontSize: '1.25rem',
              cursor: 'pointer',
            }}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleAddCar} style={{ marginTop: '20px', display: 'grid', gap: '12px' }}>
          <div className="filter-group">
            <label htmlFor="carImage">Car image</label>
            <input id="carImage" type="file" accept="image/*" onChange={handleImageChange} />
            <label htmlFor="carName">Car Name</label>
            <input
              id="carName"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Tesla Model S"
              required
            />
          </div>
          <div className="filter-group">
            <label htmlFor="carType">Type</label>
            <input
              id="carType"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="e.g. Electric Sedan"
              required
            />
          </div>
          <div className="filter-group">
            <label htmlFor="carCategory">Category</label>
            <select id="carCategory" name="category" value={formData.category} onChange={handleChange}>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Sports</option>
              <option>Luxury</option>
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="carYear">Year</label>
            <input
              id="carYear"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="2024"
              required
            />
          </div>
          <div className="filter-group">
            <label htmlFor="carPrice">Price per day</label>
            <input
              id="carPrice"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="89 or $89"
              required
            />
          </div>
          <div className="filter-group">
            <label htmlFor="carStatus">Status</label>
            <select id="carStatus" name="status" value={formData.status} onChange={handleChange}>
              <option value="available">Available</option>
              <option value="rented">Rented</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '8px' }}>
            <button type="button" className="page-btn" onClick={handleCloseModal}>
              Cancel
            </button>
            <button type="submit" className="primary-button">
              {editingCarId === null ? 'Save Car' : 'Update Car'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CarModal
