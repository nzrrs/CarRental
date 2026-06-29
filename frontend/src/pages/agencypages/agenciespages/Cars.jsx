import { useState } from 'react'
import { defaultCars } from '../../../agencyData'
import CarModal from '../coponements/cars/CarModal'
import CarStatCard from '../coponements/cars/CarStatCard'
import CarFilters from '../coponements/cars/CarFilters'
import CarTable from '../coponements/cars/CarTable'

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
  imageUrl: '',
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
  const [cars, setCars] = useState(defaultCars)
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
      imageUrl: car.imageUrl || '',
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
                imageUrl: formData.imageUrl,
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
        imageUrl: formData.imageUrl,
      };

      return [newCar, ...prevCars];
    });

    setIsModalOpen(false);
    setEditingCarId(null);
    setFormData(defaultFormState);
  };

  const handleImageChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({ ...prev, imageUrl: String(reader.result || '') }));
    };
    reader.readAsDataURL(file);
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

      <CarModal
        isOpen={isModalOpen}
        editingCarId={editingCarId}
        formData={formData}
        handleChange={handleChange}
        handleImageChange={handleImageChange}
        handleAddCar={handleAddCar}
        handleCloseModal={handleCloseModal}
      />

      <section className="stat-grid">
        {stats.map((stat) => (
          <CarStatCard key={stat.label} {...stat} />
        ))}
      </section>

      <CarFilters filters={filters} handleFilterChange={handleFilterChange} />

      <CarTable
        filteredCars={filteredCars}
        handleEditCar={handleEditCar}
        handleDeleteCar={handleDeleteCar}
      />
    </div>
  )
}

export default Cars
