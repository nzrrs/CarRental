const brands = [
  "bmw",
  "audi",
  "mercedes",
  "toyota",
  "volkswagen",
  "renault",
  "dacia",
  "peugeot",
  "ford",
  "hyundai",
  "kia",
  "jeep",
  "nissan",
  "honda",
  "fiat",
  "landrover",
  "ferrari",
  "lamborghini",
];

export default function BrandsAnimation() {
  return (
   <div className="container banner">
  <div className="container track">
    <div className="group-banner">
      {brands.map((b, i) => (
        <img key={i+1} src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${b}.svg`} alt={b} />
      ))}
    </div>

    <div className="group-banner">
      {brands.map((b, i) => (
        <img key={i+1} src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${b}.svg`} alt={b} />
      ))}
    </div>
  </div>
</div>
  );
}
