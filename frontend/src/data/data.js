// ============================================================
// data.js — Central fake backend for CarRental React App
// All data is relational, Moroccan-context, and immediately
// usable by existing React components without transformation.
// ============================================================

// -------------------------------------------------------
// 1. VILLES (Moroccan cities)
// -------------------------------------------------------
export const villes = [
  { id: 1, nom: "Casablanca", codePostal: "20000", region: "Casablanca-Settat" },
  { id: 2, nom: "Rabat", codePostal: "10000", region: "Rabat-Salé-Kénitra" },
  { id: 3, nom: "Marrakech", codePostal: "40000", region: "Marrakech-Safi" },
  { id: 4, nom: "Tanger", codePostal: "90000", region: "Tanger-Tétouan-Al Hoceïma" },
  { id: 5, nom: "Agadir", codePostal: "80000", region: "Souss-Massa" },
  { id: 6, nom: "Fès", codePostal: "30000", region: "Fès-Meknès" },
  { id: 7, nom: "Oujda", codePostal: "60000", region: "L'Oriental" },
  { id: 8, nom: "Kénitra", codePostal: "14000", region: "Rabat-Salé-Kénitra" },
  { id: 9, nom: "Meknès", codePostal: "50000", region: "Fès-Meknès" },
  { id: 10, nom: "Tétouan", codePostal: "93000", region: "Tanger-Tétouan-Al Hoceïma" },
];

// -------------------------------------------------------
// 2. CATEGORIES (Voiture categories)
// -------------------------------------------------------
export const categories = [
  { id: 1, nom: "Luxe", description: "Véhicules haut de gamme pour un confort exceptionnel" },
  { id: 2, nom: "Citadine", description: "Idéales pour la ville, faciles à garer et économiques" },
  { id: 3, nom: "SUV", description: "Espaces généreux et robustesse pour toutes les routes" },
  { id: 4, nom: "Utilitaire", description: "Pour le transport de marchandises et charges lourdes" },
  { id: 5, nom: "Économique", description: "Location à petit budget sans sacrifier la qualité" },
];

// -------------------------------------------------------
// 3. AGENCES (Rental agencies)
// -------------------------------------------------------
export const agences = [
  {
    id: 1,
    nom: "FastCar Rentals",
    adresse: "Casablanca",
    email: "fastcar@mail.com",
    telephone: "0522000001",
    whatsapp: "0522000001",
    statut: false,
    fleetSize: 45,
    logo: null,
    villeId: 1,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
    bio: "FastCar Rentals offers premium SUVs and sedans with flexible pickup options across Casablanca.",
    supportTime: "Mon - Sat 09:00 - 19:00",
  },
  {
    id: 2,
    nom: "Speedy Drive",
    adresse: "Rabat",
    email: "speedy@mail.com",
    telephone: "0522000002",
    whatsapp: "0522000002",
    statut: true,
    fleetSize: 32,
    logo: null,
    villeId: 2,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=800&auto=format&fit=crop",
    bio: "Speedy Drive specializes in city-friendly vehicles for business and weekend trips in Rabat.",
    supportTime: "Daily 08:30 - 20:00",
  },
  {
    id: 3,
    nom: "Urban Wheels",
    adresse: "Marrakech",
    email: "urban@mail.com",
    telephone: "0522000003",
    whatsapp: "0522000003",
    statut: false,
    fleetSize: 12,
    logo: null,
    villeId: 3,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
    bio: "Urban Wheels brings reliable compact cars and hybrids for downtown Marrakech.",
    supportTime: "Mon - Fri 09:00 - 18:00",
  },
  {
    id: 4,
    nom: "Elite Motors",
    adresse: "Tanger",
    email: "elite@mail.com",
    telephone: "0522000004",
    whatsapp: "0522000004",
    statut: true,
    fleetSize: 27,
    logo: null,
    villeId: 4,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=800&auto=format&fit=crop",
    bio: "Elite Motors offers executive cars with concierge-style service in Tanger.",
    supportTime: "Daily 09:00 - 21:00",
  },
  {
    id: 5,
    nom: "Prime Rentals",
    adresse: "Agadir",
    email: "prime@mail.com",
    telephone: "0522000005",
    whatsapp: "0522000005",
    statut: true,
    fleetSize: 54,
    logo: null,
    villeId: 5,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop",
    bio: "Prime Rentals provides family SUVs and beach-ready options in Agadir.",
    supportTime: "Daily 09:00 - 22:00",
  },
  {
    id: 6,
    nom: "DriveNow",
    adresse: "Fès",
    email: "drive@mail.com",
    telephone: "0522000006",
    whatsapp: "0522000006",
    statut: false,
    fleetSize: 9,
    logo: null,
    villeId: 6,
    rating: 4,
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=800&auto=format&fit=crop",
    bio: "DriveNow focuses on affordable rentals with quick pickup in Fès.",
    supportTime: "Mon - Sat 09:00 - 18:00",
  },
  {
    id: 7,
    nom: "AutoFlex",
    adresse: "Oujda",
    email: "autoflex@mail.com",
    telephone: "0522000007",
    whatsapp: "0522000007",
    statut: true,
    fleetSize: 21,
    logo: null,
    villeId: 7,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop",
    bio: "AutoFlex delivers flexible rental plans and SUV options for Oujda travelers.",
    supportTime: "Daily 09:00 - 19:30",
  },
  {
    id: 8,
    nom: "CityRide",
    adresse: "Kénitra",
    email: "cityride@mail.com",
    telephone: "0522000008",
    whatsapp: "0522000008",
    statut: true,
    fleetSize: 16,
    logo: null,
    villeId: 8,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=800&auto=format&fit=crop",
    bio: "CityRide offers clean, efficient rentals with transparent pricing in Kénitra.",
    supportTime: "Mon - Fri 08:00 - 18:00",
  },
];

// -------------------------------------------------------
// 4. UTILISATEURS (Base users — parent of clients & admins)
// -------------------------------------------------------
export const utilisateurs = [
  { id: 1, nom: "Youssef El Amrani", email: "youssef.elamrani@carrental.ma", telephone: "0612345678", motDePasse: "admin123", dateInscription: "2024-01-15", password: "admin123", status: "active", estActif: true },
  { id: 2, nom: "Fatima Benali", email: "fatima.benali@carrental.ma", telephone: "0612345679", motDePasse: "admin123", dateInscription: "2024-01-20", password: "admin123", status: "active", estActif: true },
  { id: 3, nom: "Karim Idrissi", email: "karim.idrissi@carrental.ma", telephone: "0612345680", motDePasse: "admin123", dateInscription: "2024-02-01", password: "admin123", status: "active", estActif: true },
  { id: 4, nom: "Ahmed Bennani", email: "ahmed.bennani@email.ma", telephone: "0623456781", motDePasse: "123456", dateInscription: "2025-06-01", password: "123456", status: "active", estActif: true },
  { id: 5, nom: "Salma Ouazzani", email: "salma.ouazzani@email.ma", telephone: "0623456782", motDePasse: "123456", dateInscription: "2025-06-05", password: "123456", status: "active", estActif: true },
  { id: 6, nom: "Hicham Benkirane", email: "hicham.benkirane@email.ma", telephone: "0623456783", motDePasse: "123456", dateInscription: "2025-06-10", password: "123456", status: "blocked", estActif: false },
  { id: 7, nom: "Nadia Tazi", email: "nadia.tazi@email.ma", telephone: "0623456784", motDePasse: "123456", dateInscription: "2025-06-15", password: "123456", status: "active", estActif: true },
  { id: 8, nom: "Omar Fassi", email: "omar.fassi@email.ma", telephone: "0623456785", motDePasse: "123456", dateInscription: "2025-07-01", password: "123456", status: "active", estActif: true },
  { id: 9, nom: "Leila Berrada", email: "leila.berrada@email.ma", telephone: "0623456786", motDePasse: "123456", dateInscription: "2025-07-10", password: "123456", status: "blocked", estActif: false },
  { id: 10, nom: "Said Balafrej", email: "said.balafrej@email.ma", telephone: "0623456787", motDePasse: "123456", dateInscription: "2025-07-15", password: "123456", status: "active", estActif: true },
  { id: 11, nom: "Amina Sekkat", email: "amina.sekkat@email.ma", telephone: "0623456788", motDePasse: "123456", dateInscription: "2025-08-01", password: "123456", status: "active", estActif: true },
  { id: 12, nom: "Reda El Khayat", email: "reda.elkhayat@email.ma", telephone: "0623456789", motDePasse: "123456", dateInscription: "2025-08-10", password: "123456", status: "blocked", estActif: false },
  { id: 13, nom: "Mounia Lahlou", email: "mounia.lahlou@email.ma", telephone: "0623456790", motDePasse: "123456", dateInscription: "2025-08-15", password: "123456", status: "active", estActif: true },
  { id: 14, nom: "Driss Amrani", email: "driss.amrani@email.ma", telephone: "0623456791", motDePasse: "123456", dateInscription: "2025-09-01", password: "123456", status: "active", estActif: true },
  { id: 15, nom: "Khadija Tber", email: "khadija.tber@email.ma", telephone: "0623456792", motDePasse: "123456", dateInscription: "2025-09-05", password: "123456", status: "active", estActif: true },
  { id: 16, nom: "Rachid Belmekki", email: "rachid.belmekki@email.ma", telephone: "0623456793", motDePasse: "123456", dateInscription: "2025-09-15", password: "123456", status: "blocked", estActif: false },
  { id: 17, nom: "Sanaa El Haddad", email: "sanaa.elhaddad@email.ma", telephone: "0623456794", motDePasse: "123456", dateInscription: "2025-10-01", password: "123456", status: "active", estActif: true },
  { id: 18, nom: "Hamza Naciri", email: "hamza.naciri@email.ma", telephone: "0623456795", motDePasse: "123456", dateInscription: "2025-10-10", password: "123456", status: "active", estActif: true },
  { id: 19, nom: "Imane Skalli", email: "imane.skalli@email.ma", telephone: "0623456796", motDePasse: "123456", dateInscription: "2025-10-15", password: "123456", status: "active", estActif: true },
  { id: 20, nom: "Anas Benjelloun", email: "anas.benjelloun@email.ma", telephone: "0623456797", motDePasse: "123456", dateInscription: "2025-11-01", password: "123456", status: "blocked", estActif: false },
  { id: 21, nom: "Lamia Regragui", email: "lamia.regragui@email.ma", telephone: "0623456798", motDePasse: "123456", dateInscription: "2025-11-10", password: "123456", status: "active", estActif: true },
  { id: 22, nom: "Mehdi El Fassi", email: "mehdi.elfassi@email.ma", telephone: "0623456799", motDePasse: "123456", dateInscription: "2025-11-15", password: "123456", status: "active", estActif: true },
  { id: 23, nom: "Nawal Cherkaoui", email: "nawal.cherkaoui@email.ma", telephone: "0623456800", motDePasse: "123456", dateInscription: "2025-12-01", password: "123456", status: "active", estActif: true },
];


// -------------------------------------------------------
// 5. ADMINISTRATEURS
// -------------------------------------------------------
export const administrateurs = [
  { id: 1, utilisateurId: 1, nom: "Youssef El Amrani", email: "youssef.elamrani@carrental.ma", motDePasse: "admin123", role: "super_admin" },
  { id: 2, utilisateurId: 2, nom: "Fatima Benali", email: "fatima.benali@carrental.ma", motDePasse: "admin123", role: "manager" },
  { id: 3, utilisateurId: 3, nom: "Karim Idrissi", email: "karim.idrissi@carrental.ma", motDePasse: "admin123", role: "manager" },
];

// -------------------------------------------------------
// 6. VEHICLES
// -------------------------------------------------------
const vehiclesBase = [
  {
    id: 1,
    agencyId: 1,
    title: "BMW X5 2023",
    type: "SUV",
    rating: 4.8,
    description: "High-end SUV combining power, comfort, and technology.",
    img: "/vehicles/bmw-x5.jpg",
    pricePerDay: 1500,
    location: {
      city: "Casablanca",
      address: "Maarif, Casablanca",
      lat: 33.5731,
      lng: -7.5898,
    },
    specs: {
      brand: "BMW",
      model: "X5",
      year: 2023,
      mileage: 15000,
      seats: 5,
      plateNumber: "ABC-1234",
    },
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      ac: true,
    },
    equipment: [
      { name: "GPS Navigation", type: "navigation" },
      { name: "Bluetooth", type: "connectivity" },
    ],
    availability: {
      isAvailable: true,
      availableFrom: "2026-01-01",
      availableTo: "2026-12-31",
      bookedDates: [],
    },
  },

  {
    id: 2,
    agencyId: 2,
    title: "Mercedes C-Class 2022",
    type: "Sedan",
    rating: 4.5,
    description: "Comfort-focused sedan with premium interior.",
    img: "/vehicles/mercedes-c-class.jpg",
    pricePerDay: 1200,
    location: {
      city: "Rabat",
      address: "Agdal, Rabat",
      lat: 34.0209,
      lng: -6.8416,
    },
    specs: {
      brand: "Mercedes",
      model: "C-Class",
      year: 2022,
      mileage: 22000,
      seats: 5,
      plateNumber: "DEF-5678",
    },
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      ac: true,
    },
    equipment: [
      { name: "Parking Sensors", type: "safety" },
      { name: "Bluetooth", type: "connectivity" },
    ],
    availability: {
      isAvailable: false,
      availableFrom: "2026-01-01",
      availableTo: "2026-12-31",
      bookedDates: [{ from: "2026-05-10", to: "2026-05-20" }],
    },
  },

  {
    id: 3,
    agencyId: 1,
    title: "Audi A4 2023",
    type: "Sedan",
    rating: 4.6,
    description: "Balanced performance and comfort sedan.",
    img: "/vehicles/audi-a4.jpg",
    pricePerDay: 1100,
    location: {
      city: "Casablanca",
      address: "Ain Diab, Casablanca",
      lat: 33.5928,
      lng: -7.6638,
    },
    specs: {
      brand: "Audi",
      model: "A4",
      year: 2023,
      mileage: 18000,
      seats: 5,
      plateNumber: "GHI-9012",
    },
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      ac: true,
    },
    equipment: [
      { name: "Touch Screen", type: "tech" },
      { name: "Heated Seats", type: "comfort" },
    ],
    availability: {
      isAvailable: true,
      availableFrom: "2026-01-01",
      availableTo: "2026-12-31",
      bookedDates: [],
    },
  },

  {
    id: 4,
    agencyId: 3,
    title: "Range Rover Evoque 2022",
    type: "SUV",
    rating: 4.9,
    description: "Premium SUV with advanced comfort features.",
    img: "/vehicles/range-rover-evoque.jpg",
    pricePerDay: 1800,
    location: {
      city: "Marrakech",
      address: "Guéliz, Marrakech",
      lat: 31.6295,
      lng: -7.9811,
    },
    specs: {
      brand: "Range Rover",
      model: "Evoque",
      year: 2022,
      mileage: 12000,
      seats: 5,
      plateNumber: "JKL-3456",
    },
    features: {
      fuel: "Hybrid",
      transmission: "Automatic",
      ac: true,
    },
    equipment: [
      { name: "360 Camera", type: "safety" },
      { name: "Panoramic Roof", type: "luxury" },
    ],
    availability: {
      isAvailable: true,
      availableFrom: "2026-01-01",
      availableTo: "2026-12-31",
      bookedDates: [],
    },
  },

  {
    id: 5,
    agencyId: 4,
    title: "Toyota Land Cruiser 2023",
    type: "SUV",
    rating: 4.7,
    description: "Reliable off-road SUV with strong performance.",
    img: "/vehicles/toyota-land-cruiser.jpg",
    pricePerDay: 2000,
    location: {
      city: "Ouarzazate",
      address: "Centre Ville, Ouarzazate",
      lat: 30.9335,
      lng: -6.937,
    },
    specs: {
      brand: "Toyota",
      model: "Land Cruiser",
      year: 2023,
      mileage: 30000,
      seats: 7,
      plateNumber: "MNO-7890",
    },
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      ac: true,
    },
    equipment: [
      { name: "4x4 Drive", type: "performance" },
      { name: "Rear Camera", type: "safety" },
    ],
    availability: {
      isAvailable: false,
      availableFrom: "2026-01-01",
      availableTo: "2026-12-31",
      bookedDates: [{ from: "2026-06-01", to: "2026-06-10" }],
    },
  },

  {
    id: 6,
    agencyId: 2,
    title: "Nissan Patrol 2024",
    type: "SUV",
    rating: 4.9,
    description: "Luxury SUV with powerful engine.",
    img: "/vehicles/nissan-patrol.jpg",
    pricePerDay: 2200,
    location: {
      city: "Tangier",
      address: "Malabata, Tangier",
      lat: 35.7595,
      lng: -5.834,
    },
    specs: {
      brand: "Nissan",
      model: "Patrol",
      year: 2024,
      mileage: 8000,
      seats: 7,
      plateNumber: "PQR-1234",
    },
    features: {
      fuel: "Petrol",
      transmission: "Automatic",
      ac: true,
    },
    equipment: [
      { name: "360 Camera", type: "safety" },
      { name: "GPS Navigation", type: "navigation" },
    ],
    availability: {
      isAvailable: true,
      availableFrom: "2026-01-01",
      availableTo: "2026-12-31",
      bookedDates: [],
    },
  },

  {
    id: 7,
    agencyId: 5,
    title: "Hyundai Tucson 2023",
    type: "SUV",
    rating: 4.3,
    description: "Comfortable SUV with good efficiency.",
    img: "/vehicles/hyundai-tucson.jpg",
    pricePerDay: 800,
    location: {
      city: "Fes",
      address: "Ville Nouvelle, Fes",
      lat: 34.0331,
      lng: -5.0003,
    },
    specs: {
      brand: "Hyundai",
      model: "Tucson",
      year: 2023,
      mileage: 25000,
      seats: 5,
      plateNumber: "STU-5678",
    },
    features: {
      fuel: "Diesel",
      transmission: "Manual",
      ac: true,
    },
    equipment: [
      { name: "Bluetooth", type: "connectivity" },
      { name: "Rear Camera", type: "safety" },
    ],
    availability: {
      isAvailable: true,
      availableFrom: "2026-01-01",
      availableTo: "2026-12-31",
      bookedDates: [],
    },
  },

  {
    id: 8,
    agencyId: 3,
    title: "Kia Sportage 2022",
    type: "SUV",
    rating: 4.4,
    description: "Stylish SUV perfect for family trips.",
    img: "/vehicles/kia-sportage.jpg",
    pricePerDay: 750,
    location: {
      city: "Marrakech",
      address: "Hivernage, Marrakech",
      lat: 31.621,
      lng: -7.999,
    },
    specs: {
      brand: "Kia",
      model: "Sportage",
      year: 2022,
      mileage: 35000,
      seats: 5,
      plateNumber: "VWX-9012",
    },
    features: {
      fuel: "Diesel",
      transmission: "Automatic",
      ac: true,
    },
    equipment: [
      { name: "GPS Navigation", type: "navigation" },
      { name: "Bluetooth", type: "connectivity" },
    ],
    availability: {
      isAvailable: false,
      availableFrom: "2026-01-01",
      availableTo: "2026-12-31",
      bookedDates: [{ from: "2026-05-15", to: "2026-05-18" }],
    },
  },

  {
    id: 9,
    agencyId: 5,
    title: "Dacia Duster 2023",
    type: "SUV",
    rating: 4.2,
    description: "Reliable and budget-friendly SUV.",
    img: "/vehicles/dacia-duster.jpg",
    pricePerDay: 500,
    location: {
      city: "Meknes",
      address: "Hamria, Meknes",
      lat: 33.8935,
      lng: -5.5473,
    },
    specs: {
      brand: "Dacia",
      model: "Duster",
      year: 2023,
      mileage: 40000,
      seats: 5,
      plateNumber: "YZA-3456",
    },
    features: {
      fuel: "Diesel",
      transmission: "Manual",
      ac: true,
    },
    equipment: [{ name: "Bluetooth", type: "connectivity" }],
    availability: {
      isAvailable: true,
      availableFrom: "2026-01-01",
      availableTo: "2026-12-31",
      bookedDates: [],
    },
  },

  {
    id: 10,
    agencyId: 1,
    title: "Volkswagen Golf 8 2023",
    type: "Hatchback",
    rating: 4.5,
    description: "Compact hatchback with modern tech.",
    img: "/vehicles/vw-golf-8.jpg",
    pricePerDay: 700,
    location: {
      city: "Casablanca",
      address: "Sidi Maarouf, Casablanca",
      lat: 33.533,
      lng: -7.641,
    },
    specs: {
      brand: "Volkswagen",
      model: "Golf 8",
      year: 2023,
      mileage: 17000,
      seats: 5,
      plateNumber: "BCD-1122",
    },
    features: {
      fuel: "Petrol",
      transmission: "Automatic",
      ac: true,
    },
    equipment: [
      { name: "Apple CarPlay", type: "tech" },
      { name: "Bluetooth", type: "connectivity" },
    ],
    availability: {
      isAvailable: true,
      availableFrom: "2026-01-01",
      availableTo: "2026-12-31",
      bookedDates: [],
    },
  },

  // Continue same structure up to id: 20
];

const agenceById = new Map(agences.map((agence) => [agence.id, agence]));

const makeAgencySnapshot = (agence, agencyId) => {
  if (!agence) {
    return {
      id: agencyId,
      name: "Unknown",
      nom: "Unknown",
      logo: null,
    };
  }

  return {
    id: agence.id,
    name: agence.nom,
    nom: agence.nom,
    logo: agence.logo,
    adresse: agence.adresse,
    email: agence.email,
    telephone: agence.telephone,
    statut: agence.statut,
    fleetSize: agence.fleetSize,
    villeId: agence.villeId,
    rating: agence.rating,
    image: agence.image,
    bio: agence.bio,
    supportTime: agence.supportTime,
  };
};

export const vehicles = vehiclesBase.map((vehicle) => ({
  ...vehicle,
  agency: makeAgencySnapshot(agenceById.get(vehicle.agencyId), vehicle.agencyId),
}));

// -------------------------------------------------------
// 7. RESERVATIONS (Bookings)
//    Statuses: EN_ATTENTE, CONFIRMEE, REFUSEE, EN_COURS, TERMINEE, ANNULEE
// -------------------------------------------------------
export const reservations = [
  { id: "R-1001", clientId: 4, voitureId: 1, dateDebut: "2026-05-10", dateFin: "2026-05-13", prixTotal: 4500, statut: "TERMINEE", dateReservation: "2026-05-01", nombreJours: 3, estPayee: true },
  { id: "R-1002", clientId: 5, voitureId: 3, dateDebut: "2026-04-20", dateFin: "2026-04-25", prixTotal: 5500, statut: "TERMINEE", dateReservation: "2026-04-10", nombreJours: 5, estPayee: true },
  { id: "R-1003", clientId: 6, voitureId: 5, dateDebut: "2026-05-01", dateFin: "2026-05-04", prixTotal: 6000, statut: "TERMINEE", dateReservation: "2026-04-15", nombreJours: 3, estPayee: true },
  { id: "R-1004", clientId: 7, voitureId: 7, dateDebut: "2026-05-14", dateFin: "2026-05-18", prixTotal: 3200, statut: "EN_COURS", dateReservation: "2026-05-05", nombreJours: 4, estPayee: true },
  { id: "R-1005", clientId: 8, voitureId: 9, dateDebut: "2026-05-20", dateFin: "2026-05-23", prixTotal: 1500, statut: "CONFIRMEE", dateReservation: "2026-05-08", nombreJours: 3, estPayee: false },
  { id: "R-1006", clientId: 9, voitureId: 2, dateDebut: "2026-03-10", dateFin: "2026-03-14", prixTotal: 4800, statut: "TERMINEE", dateReservation: "2026-02-28", nombreJours: 4, estPayee: true },
  { id: "R-1007", clientId: 10, voitureId: 12, dateDebut: "2026-06-01", dateFin: "2026-06-05", prixTotal: 1200, statut: "EN_ATTENTE", dateReservation: "2026-05-14", nombreJours: 4, estPayee: false },
  { id: "R-1008", clientId: 11, voitureId: 4, dateDebut: "2026-05-25", dateFin: "2026-05-28", prixTotal: 5400, statut: "CONFIRMEE", dateReservation: "2026-05-10", nombreJours: 3, estPayee: false },
  { id: "R-1009", clientId: 12, voitureId: 15, dateDebut: "2026-04-05", dateFin: "2026-04-07", prixTotal: 900, statut: "ANNULEE", dateReservation: "2026-03-25", nombreJours: 2, estPayee: false },
  { id: "R-1010", clientId: 13, voitureId: 6, dateDebut: "2026-06-10", dateFin: "2026-06-15", prixTotal: 11000, statut: "EN_ATTENTE", dateReservation: "2026-05-12", nombreJours: 5, estPayee: false },
  { id: "R-1011", clientId: 14, voitureId: 18, dateDebut: "2026-05-12", dateFin: "2026-05-14", prixTotal: 900, statut: "TERMINEE", dateReservation: "2026-05-02", nombreJours: 2, estPayee: true },
  { id: "R-1012", clientId: 15, voitureId: 20, dateDebut: "2026-02-15", dateFin: "2026-02-20", prixTotal: 1250, statut: "TERMINEE", dateReservation: "2026-02-01", nombreJours: 5, estPayee: true },
  { id: "R-1013", clientId: 16, voitureId: 8, dateDebut: "2026-01-10", dateFin: "2026-01-12", prixTotal: 1500, statut: "REFUSEE", dateReservation: "2026-01-01", nombreJours: 2, estPayee: false },
  { id: "R-1014", clientId: 17, voitureId: 10, dateDebut: "2026-06-05", dateFin: "2026-06-09", prixTotal: 3600, statut: "CONFIRMEE", dateReservation: "2026-05-15", nombreJours: 4, estPayee: false },
  { id: "R-1015", clientId: 18, voitureId: 13, dateDebut: "2026-05-16", dateFin: "2026-05-18", prixTotal: 700, statut: "EN_COURS", dateReservation: "2026-05-06", nombreJours: 2, estPayee: true },
  { id: "R-1016", clientId: 19, voitureId: 17, dateDebut: "2026-03-20", dateFin: "2026-03-25", prixTotal: 1250, statut: "TERMINEE", dateReservation: "2026-03-05", nombreJours: 5, estPayee: true },
  { id: "R-1017", clientId: 20, voitureId: 11, dateDebut: "2026-04-01", dateFin: "2026-04-03", prixTotal: 2000, statut: "ANNULEE", dateReservation: "2026-03-15", nombreJours: 2, estPayee: false },
  { id: "R-1018", clientId: 21, voitureId: 22, dateDebut: "2026-06-15", dateFin: "2026-06-17", prixTotal: 360, statut: "EN_ATTENTE", dateReservation: "2026-05-20", nombreJours: 2, estPayee: false },
  { id: "R-1019", clientId: 22, voitureId: 14, dateDebut: "2026-04-10", dateFin: "2026-04-14", prixTotal: 1600, statut: "TERMINEE", dateReservation: "2026-03-28", nombreJours: 4, estPayee: true },
  { id: "R-1020", clientId: 23, voitureId: 19, dateDebut: "2026-05-10", dateFin: "2026-05-12", prixTotal: 400, statut: "TERMINEE", dateReservation: "2026-04-25", nombreJours: 2, estPayee: true },
  { id: "R-1021", clientId: 4, voitureId: 16, dateDebut: "2026-05-30", dateFin: "2026-06-02", prixTotal: 1500, statut: "CONFIRMEE", dateReservation: "2026-05-18", nombreJours: 3, estPayee: false },
  { id: "R-1022", clientId: 6, voitureId: 21, dateDebut: "2026-02-01", dateFin: "2026-02-05", prixTotal: 880, statut: "TERMINEE", dateReservation: "2026-01-20", nombreJours: 4, estPayee: true },
  { id: "R-1023", clientId: 8, voitureId: 23, dateDebut: "2026-06-20", dateFin: "2026-06-22", prixTotal: 700, statut: "EN_ATTENTE", dateReservation: "2026-06-01", nombreJours: 2, estPayee: false },
  { id: "R-1024", clientId: 10, voitureId: 24, dateDebut: "2026-04-25", dateFin: "2026-04-28", prixTotal: 1200, statut: "TERMINEE", dateReservation: "2026-04-10", nombreJours: 3, estPayee: true },
  { id: "R-1025", clientId: 13, voitureId: 25, dateDebut: "2026-03-05", dateFin: "2026-03-08", prixTotal: 1140, statut: "REFUSEE", dateReservation: "2026-02-20", nombreJours: 3, estPayee: false },
  { id: "R-1026", clientId: 15, voitureId: 1, dateDebut: "2026-07-01", dateFin: "2026-07-05", prixTotal: 6000, statut: "EN_ATTENTE", dateReservation: "2026-05-25", nombreJours: 4, estPayee: false },
  { id: "R-1027", clientId: 17, voitureId: 6, dateDebut: "2026-05-18", dateFin: "2026-05-20", prixTotal: 4400, statut: "EN_COURS", dateReservation: "2026-05-08", nombreJours: 2, estPayee: true },
  { id: "R-1028", clientId: 19, voitureId: 4, dateDebut: "2026-06-25", dateFin: "2026-06-28", prixTotal: 5400, statut: "EN_ATTENTE", dateReservation: "2026-05-22", nombreJours: 3, estPayee: false },
  { id: "R-1029", clientId: 21, voitureId: 11, dateDebut: "2026-03-15", dateFin: "2026-03-18", prixTotal: 3000, statut: "TERMINEE", dateReservation: "2026-03-01", nombreJours: 3, estPayee: true },
  { id: "R-1030", clientId: 23, voitureId: 2, dateDebut: "2026-04-15", dateFin: "2026-04-18", prixTotal: 3600, statut: "TERMINEE", dateReservation: "2026-04-01", nombreJours: 3, estPayee: true },
  { id: "R-1031", clientId: 5, voitureId: 8, dateDebut: "2026-05-05", dateFin: "2026-05-07", prixTotal: 1500, statut: "TERMINEE", dateReservation: "2026-04-20", nombreJours: 2, estPayee: true },
  { id: "R-1032", clientId: 9, voitureId: 14, dateDebut: "2026-06-12", dateFin: "2026-06-15", prixTotal: 1200, statut: "CONFIRMEE", dateReservation: "2026-05-30", nombreJours: 3, estPayee: false },
  { id: "R-1033", clientId: 12, voitureId: 17, dateDebut: "2026-05-22", dateFin: "2026-05-24", prixTotal: 500, statut: "EN_ATTENTE", dateReservation: "2026-05-12", nombreJours: 2, estPayee: false },
  { id: "R-1034", clientId: 14, voitureId: 22, dateDebut: "2026-04-28", dateFin: "2026-04-30", prixTotal: 360, statut: "TERMINEE", dateReservation: "2026-04-15", nombreJours: 2, estPayee: true },
  { id: "R-1035", clientId: 18, voitureId: 18, dateDebut: "2026-07-05", dateFin: "2026-07-10", prixTotal: 2250, statut: "EN_ATTENTE", dateReservation: "2026-06-01", nombreJours: 5, estPayee: false },
];

// Default export
export default { utilisateurs, agences, administrateurs, vehicles, reservations, villes, categories };
