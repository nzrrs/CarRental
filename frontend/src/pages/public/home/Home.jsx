import HomeHero from "./Hero";
import Info from "./Info";
import FeaturedCars from "./FeaturedCars";
import BrandsAnimation from "./BrandsAnimation";
import HowItWorks from "./HowItWorks";
import FactsInNumbers from "./FactsInNumbers";
export default function HomePage() {
  return (
    <div className="container">
        <HomeHero />
        <Info />
        <FeaturedCars />
        <BrandsAnimation />
        <HowItWorks />
        <FactsInNumbers />
    </div>
  )
}

// TO DO
// 1. Create helpers function to fetch data from backend and pass it to Info and FeaturedCars components
// 2. Create a loading state for both components while fetching data
// 3. Create error handling for both components in case of any errors while fetching data
// 4. Dark mode support
// 5. Add location helper
// 6. Change the car card styling and add favorites
