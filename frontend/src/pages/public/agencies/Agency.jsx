export function normalizeText(value) {
  return value?.toString().trim().toLowerCase() ?? "";
}

export function getAgencyImage(agency) {
  return agency.logo || agency.image || null;
}

export function getAgencyVehicles(agency, vehicles) {
  const target = normalizeText(agency.nom);
  return vehicles.filter((v) => normalizeText(v.agency?.nom) === target);
}

export function getAgencyCarTypes(agency, vehicles) {
  return [...new Set(getAgencyVehicles(agency, vehicles).map((v) => normalizeText(v.type)))];
}