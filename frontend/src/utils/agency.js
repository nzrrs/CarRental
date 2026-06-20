export function normalizeText(value) {
  return value?.toString().trim().toLowerCase() ?? "";
}

export function getAgencyImage(agency) {
  return agency.logo || agency.image || null;
}

export function getAgencyVehicles(agency, vehicles) {
  return vehicles.filter((v) => {
    if (v.agencyId != null && agency.id != null) {
      return String(v.agencyId) === String(agency.id);
    }
    return normalizeText(v.agency?.name) === normalizeText(agency.nom);
  });
}

export function getAgencyCarTypes(agency, vehicles) {
  return [...new Set(getAgencyVehicles(agency, vehicles).map((v) => normalizeText(v.type)))];
}