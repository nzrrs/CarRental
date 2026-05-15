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
  { id: 1, nom: "FastCar Rentals", adresse: "Casablanca", email: "fastcar@mail.com", telephone: "0522000001", statut: true, fleetSize: 45, logo: null, villeId: 1 },
  { id: 2, nom: "Speedy Drive", adresse: "Rabat", email: "speedy@mail.com", telephone: "0522000002", statut: true, fleetSize: 32, logo: null, villeId: 2 },
  { id: 3, nom: "Urban Wheels", adresse: "Marrakech", email: "urban@mail.com", telephone: "0522000003", statut: false, fleetSize: 12, logo: null, villeId: 3 },
  { id: 4, nom: "Elite Motors", adresse: "Tanger", email: "elite@mail.com", telephone: "0522000004", statut: true, fleetSize: 27, logo: null, villeId: 4 },
  { id: 5, nom: "Prime Rentals", adresse: "Agadir", email: "prime@mail.com", telephone: "0522000005", statut: true, fleetSize: 54, logo: null, villeId: 5 },
  { id: 6, nom: "DriveNow", adresse: "Fès", email: "drive@mail.com", telephone: "0522000006", statut: false, fleetSize: 9, logo: null, villeId: 6 },
  { id: 7, nom: "AutoFlex", adresse: "Oujda", email: "autoflex@mail.com", telephone: "0522000007", statut: true, fleetSize: 21, logo: null, villeId: 7 },
  { id: 8, nom: "CityRide", adresse: "Kénitra", email: "cityride@mail.com", telephone: "0522000008", statut: true, fleetSize: 16, logo: null, villeId: 8 },
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
// 6. VOITURES (Cars)
// -------------------------------------------------------
export const voitures = [
  {
    id: 1, matricule: "ABC-1234", marque: "BMW", modele: "X5",
    anneeModele: 2023, kilometrage: 15000, nombrePlaces: 5,
    prixJournalier: 1500,
    estDisponible: true,
    motorisation: "Diesel", transmission: "Automatique",
    equipements: ["Climatisation", "GPS", "Bluetooth", "Sièges cuir", "Caméra de recul", "Toit panoramique"],
    image: "bmw-x5.jpg", agenceId: 1, villeId: 1, categorieId: 1,
  },
  {
    id: 2, matricule: "DEF-5678", marque: "Mercedes", modele: "C-Class",
    anneeModele: 2022, kilometrage: 22000, nombrePlaces: 5,
    prixJournalier: 1200,
    estDisponible: false,
    motorisation: "Diesel", transmission: "Automatique",
    equipements: ["Climatisation", "GPS", "Bluetooth", "Sièges cuir", "Capteurs de stationnement"],
    image: "mercedes-c-class.jpg", agenceId: 4, villeId: 4, categorieId: 1,
  },
  {
    id: 3, matricule: "GHI-9012", marque: "Audi", modele: "A4",
    anneeModele: 2023, kilometrage: 18000, nombrePlaces: 5,
    prixJournalier: 1100,
    estDisponible: true,
    motorisation: "Diesel", transmission: "Automatique",
    equipements: ["Climatisation", "GPS", "Bluetooth", "Sièges chauffants", "Toit ouvrant"],
    image: "audi-a4.jpg", agenceId: 1, villeId: 1, categorieId: 1,
  },
  {
    id: 4, matricule: "JKL-3456", marque: "Range Rover", modele: "Evoque",
    anneeModele: 2022, kilometrage: 12000, nombrePlaces: 5,
    prixJournalier: 1800,
    estDisponible: true,
    motorisation: "Hybride", transmission: "Automatique",
    equipements: ["Climatisation", "GPS", "Bluetooth", "Sièges cuir", "Caméra 360°", "Toit panoramique"],
    image: "range-rover-evoque.jpg", agenceId: 5, villeId: 5, categorieId: 1,
  },
  {
    id: 5, matricule: "MNO-7890", marque: "Toyota", modele: "Land Cruiser",
    anneeModele: 2023, kilometrage: 30000, nombrePlaces: 7,
    prixJournalier: 2000,
    estDisponible: false,
    motorisation: "Diesel", transmission: "Automatique",
    equipements: ["Climatisation", "GPS", "Bluetooth", "Sièges cuir", "Caméra de recul", "4x4 intégral"],
    image: "toyota-land-cruiser.jpg", agenceId: 2, villeId: 2, categorieId: 3,
  },
  {
    id: 6, matricule: "PQR-1234", marque: "Nissan", modele: "Patrol",
    anneeModele: 2024, kilometrage: 8000, nombrePlaces: 7,
    prixJournalier: 2200,
    estDisponible: true,
    motorisation: "Essence", transmission: "Automatique",
    equipements: ["Climatisation", "GPS", "Bluetooth", "Sièges cuir", "Caméra 360°", "Toit panoramique", "4x4 intégral"],
    image: "nissan-patrol.jpg", agenceId: 4, villeId: 4, categorieId: 3,
  },
  {
    id: 7, matricule: "STU-5678", marque: "Hyundai", modele: "Tucson",
    anneeModele: 2023, kilometrage: 25000, nombrePlaces: 5,
    prixJournalier: 800,
    estDisponible: true,
    motorisation: "Diesel", transmission: "Manuelle",
    equipements: ["Climatisation", "Bluetooth", "Caméra de recul", "Écran tactile"],
    image: "hyundai-tucson.jpg", agenceId: 8, villeId: 8, categorieId: 3,
  },
  {
    id: 8, matricule: "VWX-9012", marque: "Kia", modele: "Sportage",
    anneeModele: 2022, kilometrage: 35000, nombrePlaces: 5,
    prixJournalier: 750,
    estDisponible: false,
    motorisation: "Diesel", transmission: "Automatique",
    equipements: ["Climatisation", "GPS", "Bluetooth", "Caméra de recul"],
    image: "kia-sportage.jpg", agenceId: 6, villeId: 6, categorieId: 3,
  },
  {
    id: 9, matricule: "YZA-3456", marque: "Dacia", modele: "Duster",
    anneeModele: 2023, kilometrage: 40000, nombrePlaces: 5,
    prixJournalier: 500,
    estDisponible: true,
    motorisation: "Diesel", transmission: "Manuelle",
    equipements: ["Climatisation", "Bluetooth", "Régulateur de vitesse"],
    image: "dacia-duster.jpg", agenceId: 7, villeId: 7, categorieId: 3,
  },
  {
    id: 10, matricule: "BCD-7890", marque: "Ford", modele: "Territory",
    anneeModele: 2024, kilometrage: 5000, nombrePlaces: 5,
    prixJournalier: 900,
    estDisponible: true,
    motorisation: "Essence", transmission: "Automatique",
    equipements: ["Climatisation", "GPS", "Bluetooth", "Caméra 360°", "Écran tactile"],
    image: "ford-territory.jpg", agenceId: 5, villeId: 5, categorieId: 3,
  },
  {
    id: 11, matricule: "EFG-1234", marque: "Toyota", modele: "RAV4",
    anneeModele: 2023, kilometrage: 20000, nombrePlaces: 5,
    prixJournalier: 1000,
    estDisponible: false,
    motorisation: "Hybride", transmission: "Automatique",
    equipements: ["Climatisation", "GPS", "Bluetooth", "Caméra de recul", "Toit panoramique"],
    image: "toyota-rav4.jpg", agenceId: 1, villeId: 1, categorieId: 3,
  },
  {
    id: 12, matricule: "HIJ-5678", marque: "Dacia", modele: "Logan",
    anneeModele: 2023, kilometrage: 45000, nombrePlaces: 5,
    prixJournalier: 300,
    estDisponible: true,
    motorisation: "Essence", transmission: "Manuelle",
    equipements: ["Climatisation", "Bluetooth", "Aide au stationnement"],
    image: "dacia-logan.jpg", agenceId: 3, villeId: 3, categorieId: 2,
  },
  {
    id: 13, matricule: "KLM-9012", marque: "Dacia", modele: "Sandero",
    anneeModele: 2024, kilometrage: 10000, nombrePlaces: 5,
    prixJournalier: 350,
    estDisponible: true,
    motorisation: "Essence", transmission: "Manuelle",
    equipements: ["Climatisation", "Bluetooth", "Écran tactile"],
    image: "dacia-sandero.jpg", agenceId: 7, villeId: 7, categorieId: 2,
  },
  {
    id: 14, matricule: "NOP-3456", marque: "Renault", modele: "Clio",
    anneeModele: 2023, kilometrage: 28000, nombrePlaces: 5,
    prixJournalier: 400,
    estDisponible: false,
    motorisation: "Essence", transmission: "Manuelle",
    equipements: ["Climatisation", "Bluetooth", "GPS", "Aide au stationnement"],
    image: "renault-clio.jpg", agenceId: 2, villeId: 2, categorieId: 2,
  },
  {
    id: 15, matricule: "QRS-7890", marque: "Peugeot", modele: "208",
    anneeModele: 2024, kilometrage: 9000, nombrePlaces: 5,
    prixJournalier: 450,
    estDisponible: true,
    motorisation: "Essence", transmission: "Manuelle",
    equipements: ["Climatisation", "Bluetooth", "Écran tactile", "Caméra de recul"],
    image: "peugeot-208.jpg", agenceId: 8, villeId: 8, categorieId: 2,
  },
  {
    id: 16, matricule: "TUV-1234", marque: "Volkswagen", modele: "Polo",
    anneeModele: 2022, kilometrage: 32000, nombrePlaces: 5,
    prixJournalier: 500,
    estDisponible: false,
    motorisation: "Essence", transmission: "Manuelle",
    equipements: ["Climatisation", "Bluetooth", "Régulateur de vitesse"],
    image: "volkswagen-polo.jpg", agenceId: 6, villeId: 6, categorieId: 2,
  },
  {
    id: 17, matricule: "WXY-5678", marque: "Hyundai", modele: "i10",
    anneeModele: 2023, kilometrage: 15000, nombrePlaces: 5,
    prixJournalier: 250,
    estDisponible: true,
    motorisation: "Essence", transmission: "Manuelle",
    equipements: ["Climatisation", "Bluetooth", "Direction assistée"],
    image: "hyundai-i10.jpg", agenceId: 3, villeId: 3, categorieId: 2,
  },
  {
    id: 18, matricule: "ZAB-9012", marque: "Toyota", modele: "Yaris",
    anneeModele: 2024, kilometrage: 7000, nombrePlaces: 5,
    prixJournalier: 450,
    estDisponible: true,
    motorisation: "Hybride", transmission: "Automatique",
    equipements: ["Climatisation", "GPS", "Bluetooth", "Écran tactile"],
    image: "toyota-yaris.jpg", agenceId: 1, villeId: 1, categorieId: 2,
  },
  {
    id: 19, matricule: "CDE-3456", marque: "Hyundai", modele: "i10",
    anneeModele: 2023, kilometrage: 20000, nombrePlaces: 5,
    prixJournalier: 200,
    estDisponible: true,
    motorisation: "Essence", transmission: "Manuelle",
    equipements: ["Climatisation", "Bluetooth"],
    image: "hyundai-i10-city.jpg", agenceId: 2, villeId: 2, categorieId: 5,
  },
  {
    id: 20, matricule: "FGH-7890", marque: "Renault", modele: "Sandero",
    anneeModele: 2024, kilometrage: 12000, nombrePlaces: 5,
    prixJournalier: 250,
    estDisponible: true,
    motorisation: "Essence", transmission: "Manuelle",
    equipements: ["Climatisation", "Bluetooth", "Direction assistée"],
    image: "renault-sandero.jpg", agenceId: 3, villeId: 3, categorieId: 5,
  },
  {
    id: 21, matricule: "IJK-1234", marque: "Dacia", modele: "Logan",
    anneeModele: 2023, kilometrage: 55000, nombrePlaces: 5,
    prixJournalier: 220,
    estDisponible: false,
    motorisation: "Essence", transmission: "Manuelle",
    equipements: ["Climatisation", "Bluetooth"],
    image: "dacia-logan-economique.jpg", agenceId: 7, villeId: 7, categorieId: 5,
  },
  {
    id: 22, matricule: "LMN-5678", marque: "Suzuki", modele: "Alto",
    anneeModele: 2024, kilometrage: 5000, nombrePlaces: 4,
    prixJournalier: 180,
    estDisponible: true,
    motorisation: "Essence", transmission: "Manuelle",
    equipements: ["Direction assistée", "Bluetooth"],
    image: "suzuki-alto.jpg", agenceId: 8, villeId: 8, categorieId: 5,
  },
  {
    id: 23, matricule: "OPQ-9012", marque: "Renault", modele: "Kangoo",
    anneeModele: 2022, kilometrage: 60000, nombrePlaces: 2,
    prixJournalier: 350,
    estDisponible: true,
    motorisation: "Diesel", transmission: "Manuelle",
    equipements: ["Climatisation", "Bluetooth", "Espace de chargement"],
    image: "renault-kangoo.jpg", agenceId: 5, villeId: 5, categorieId: 4,
  },
  {
    id: 24, matricule: "RST-3456", marque: "Citroën", modele: "Berlingo",
    anneeModele: 2023, kilometrage: 30000, nombrePlaces: 2,
    prixJournalier: 400,
    estDisponible: true,
    motorisation: "Diesel", transmission: "Manuelle",
    equipements: ["Climatisation", "Bluetooth", "GPS", "Espace de chargement"],
    image: "citroen-berlingo.jpg", agenceId: 4, villeId: 4, categorieId: 4,
  },
  {
    id: 25, matricule: "UVW-7890", marque: "Peugeot", modele: "Partner",
    anneeModele: 2024, kilometrage: 8000, nombrePlaces: 2,
    prixJournalier: 380,
    estDisponible: false,
    motorisation: "Diesel", transmission: "Manuelle",
    equipements: ["Climatisation", "Bluetooth", "Caméra de recul", "Espace de chargement"],
    image: "peugeot-partner.jpg", agenceId: 6, villeId: 6, categorieId: 4,
  },
];

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
export default { utilisateurs, agences, administrateurs, voitures, reservations, villes, categories };
