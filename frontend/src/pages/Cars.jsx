import React from 'react'

const stats = [
  { label: 'Total Cars', value: '48', icon: 'C' },
  { label: 'Available', value: '32', icon: 'A' },
  { label: 'Rented', value: '12', icon: 'R' },
  { label: 'Maintenance', value: '4', icon: 'M' },
]

const cars = [
  {
    name: 'Tesla Model 3',
    type: 'Electric Sedan',
    category: 'Sedan',
    year: '2023',
    price: '$89',
    status: 'available',
  },
  {
    name: 'BMW X5',
    type: 'Luxury SUV',
    category: 'SUV',
    year: '2024',
    price: '$129',
    status: 'rented',
  },
  {
    name: 'Porsche 911',
    type: 'Sports Car',
    category: 'Sports',
    year: '2023',
    price: '$299',
    status: 'available',
  },
  {
    name: 'Mercedes S-Class',
    type: 'Luxury Sedan',
    category: 'Luxury',
    year: '2024',
    price: '$199',
    status: 'maintenance',
  },
  {
    name: 'Audi A4',
    type: 'Premium Sedan',
    category: 'Sedan',
    year: '2023',
    price: '$79',
    status: 'available',
  },
  {
    name: 'Range Rover Sport',
    type: 'Luxury SUV',
    category: 'SUV',
    year: '2024',
    price: '$159',
    status: 'rented',
  },
]

const Cars = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Manage Cars</h1>
          <p>Add, edit, and manage your vehicle inventory</p>
        </div>
        <button className="primary-button" type="button">
          Add New Car
        </button>
      </div>

      <section className="stat-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="filters">
        <div className="filter-group">
          <label htmlFor="search">Search</label>
          <input id="search" type="search" placeholder="Search by make, model..." />
        </div>
        <div className="filter-group">
          <label htmlFor="status">Status</label>
          <select id="status">
            <option>All Status</option>
            <option>Available</option>
            <option>Rented</option>
            <option>Maintenance</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="category">Category</label>
          <select id="category">
            <option>All Categories</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Sports</option>
            <option>Luxury</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="sort">Sort By</label>
          <select id="sort">
            <option>Newest First</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </section>

      <section className="table-card">
        <div className="table-head">
          <div>Car</div>
          <div>Category</div>
          <div>Year</div>
          <div>Price/Day</div>
          <div>Status</div>
          <div>Actions</div>
        </div>

        {cars.map((car) => (
          <div className="table-row" key={car.name}>
            <div className="car-cell">
              <div className="car-thumb" />
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
              <button className="action-button" type="button" aria-label="Edit">
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
              <button className="action-button delete" type="button" aria-label="Delete">
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

        <div className="table-footer">
          <span>Showing 1-6 of 48 cars</span>
          <div className="pagination">
            <button className="page-btn" type="button">Previous</button>
            <button className="page-btn active" type="button">1</button>
            <button className="page-btn" type="button">2</button>
            <button className="page-btn" type="button">3</button>
            <button className="page-btn" type="button">Next</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cars
