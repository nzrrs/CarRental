import React from 'react'
import { useState } from 'react';




const buildStats = (cars) => {
  const availableCount = cars.filter((car) => car.status === 'available').length;
  const rentedCount = cars.filter((car) => car.status === 'rented').length;
  const maintenanceCount = cars.filter((car) => car.status === 'maintenance').length;

  return [
    { label: 'Total Cars', value: String(cars.length), icon: 'C' },
    { label: 'Available', value: String(availableCount), icon: 'A' },
    { label: 'Rented', value: String(rentedCount), icon: 'R' },
    { label: 'Maintenance', value: String(maintenanceCount), icon: 'M' },
  ];
};

const defaultFormState = {
  name: '',
  type: '',
  category: 'Sedan',
  year: '2024',
  price: '',
  status: 'available',
};

const defaultFilters = {
  search: '',
  status: 'all',
  category: 'all',
  sort: 'newest',
};

const getPriceValue = (price) => {
  const numeric = Number(String(price).replace(/[^0-9.]/g, ''));
  return Number.isNaN(numeric) ? 0 : numeric;
};

const Cars = () => {
  const [cars, setCars] = useState([
    {
      id: 1,
      name: 'Tesla Model 3',
      type: 'Electric Sedan',
      category: 'Sedan',
      year: '2023',
      price: '$89',
      status: 'available',
    },
    {
      id: 2,
      name: 'BMW X5',
      type: 'Luxury SUV',
      category: 'SUV',
      year: '2024',
      price: '$129',
      status: 'rented',
    },
    {
      id: 3,
      name: 'Porsche 911',
      type: 'Sports Car',
      category: 'Sports',
      year: '2023',
      price: '$299',
      status: 'available',
    },
    {
      id: 4,
      name: 'Mercedes S-Class',
      type: 'Luxury Sedan',
      category: 'Luxury',
      year: '2024',
      price: '$199',
      status: 'maintenance',
    },
    {
      id: 5,
      name: 'Audi A4',
      type: 'Premium Sedan',
      category: 'Sedan',
      year: '2023',
      price: '$79',
      status: 'available',
    },
    {
      id: 6,
      name: 'Range Rover Sport',
      type: 'Luxury SUV',
      category: 'SUV',
      year: '2024',
      price: '$159',
      status: 'rented',
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCarId, setEditingCarId] = useState(null);
  const [formData, setFormData] = useState(defaultFormState);
  const [filters, setFilters] = useState(defaultFilters);
  const stats = buildStats(cars);

  const handleOpenModal = () => {
    setEditingCarId(null);
    setFormData(defaultFormState);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCarId(null);
  };

  const handleEditCar = (car) => {
    setEditingCarId(car.id);
    setFormData({
      name: car.name,
      type: car.type,
      category: car.category,
      year: car.year,
      price: car.price,
      status: car.status,
    });
    setIsModalOpen(true);
  };

  const handleDeleteCar = (carId) => {
    setCars((prevCars) => prevCars.filter((car) => car.id !== carId));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCar = (event) => {
    event.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedType = formData.type.trim();
    const trimmedPrice = formData.price.trim();

    if (!trimmedName || !trimmedType || !trimmedPrice || !formData.year.trim()) {
      return;
    }

    setCars((prevCars) => {
      const normalizedPrice = trimmedPrice.startsWith('$') ? trimmedPrice : `$${trimmedPrice}`;

      if (editingCarId !== null) {
        return prevCars.map((car) =>
          car.id === editingCarId
            ? {
                ...car,
                name: trimmedName,
                type: trimmedType,
                category: formData.category,
                year: formData.year.trim(),
                price: normalizedPrice,
                status: formData.status,
              }
            : car
        );
      }

      const nextId = prevCars.reduce((maxId, car) => Math.max(maxId, car.id), 0) + 1;
      const newCar = {
        id: nextId,
        name: trimmedName,
        type: trimmedType,
        category: formData.category,
        year: formData.year.trim(),
        price: normalizedPrice,
        status: formData.status,
      };

      return [newCar, ...prevCars];
    });

    setIsModalOpen(false);
    setEditingCarId(null);
    setFormData(defaultFormState);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredCars = cars
    .filter((car) => {
      const searchValue = filters.search.trim().toLowerCase();
      if (!searchValue) {
        return true;
      }

      return (
        car.name.toLowerCase().includes(searchValue) ||
        car.type.toLowerCase().includes(searchValue) ||
        car.category.toLowerCase().includes(searchValue)
      );
    })
    .filter((car) => (filters.status === 'all' ? true : car.status === filters.status))
    .filter((car) => (filters.category === 'all' ? true : car.category === filters.category))
    .sort((a, b) => {
      if (filters.sort === 'price-low') {
        return getPriceValue(a.price) - getPriceValue(b.price);
      }

      if (filters.sort === 'price-high') {
        return getPriceValue(b.price) - getPriceValue(a.price);
      }

      return Number(b.year) - Number(a.year);
    });
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Manage Cars</h1>
          <p>Add, edit, and manage your vehicle inventory</p>
        </div>
        <button className="primary-button" type="button" onClick={handleOpenModal}>
          Add New Car
        </button>
      </div>

      {isModalOpen && (
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
            aria-label="Add new car"
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
      )}

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
          <input
            id="search"
            name="search"
            type="search"
            placeholder="Search by make, model..."
            value={filters.search}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="status">Status</label>
          <select id="status" name="status" value={filters.status} onChange={handleFilterChange}>
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="rented">Rented</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" value={filters.category} onChange={handleFilterChange}>
            <option value="all">All Categories</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Sports">Sports</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="sort">Sort By</label>
          <select id="sort" name="sort" value={filters.sort} onChange={handleFilterChange}>
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
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

        {filteredCars.map((car) => (
          <div className="table-row" key={car.id}>
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
    </div>
  )
}

export default Cars
