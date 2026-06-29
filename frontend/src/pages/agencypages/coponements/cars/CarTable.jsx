import React from 'react'

const CarTable = ({ filteredCars, handleEditCar, handleDeleteCar }) => {
  return (
    <section className="table-card">
      <div className="table-head">
        <div>Car</div>
        <div>Category</div>
        <div>Year</div>
        <div>Price/Day</div>
        <div>Status</div>
        <div>Actions</div>
      </div>

      {filteredCars.map((car) => (
        <div className="table-row" key={car.id}>
          <div className="car-cell">
            <div
              className="car-thumb"
              style={
                car.imageUrl
                  ? { backgroundImage: `url(${car.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                  : undefined
              }
            />
            <div className="car-meta">
              <span>{car.name}</span>
              <small>{car.type}</small>
            </div>
          </div>
          <div>{car.category}</div>
          <div>{car.year}</div>
          <div>{car.price}</div>
          <div>
            <span
              className={`status-pill status-${car.status}`}
            >
              {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
            </span>
          </div>
          <div className="action-buttons">
            <button
              className="action-button"
              type="button"
              aria-label="Edit"
              onClick={() => handleEditCar(car)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 20h4l10-10a2.5 2.5 0 10-4-4L4 16v4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="action-button delete"
              type="button"
              aria-label="Delete"
              onClick={() => handleDeleteCar(car.id)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6 7h12M9 7V5h6v2m-7 0l1 12h8l1-12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

export default CarTable
