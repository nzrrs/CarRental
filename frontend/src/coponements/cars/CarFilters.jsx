import React from 'react'

const CarFilters = ({ filters, handleFilterChange }) => {
  return (
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
  )
}

export default CarFilters
