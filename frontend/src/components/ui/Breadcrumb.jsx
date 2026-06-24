import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { vehicles, agences } from '../../data/data';

// Simple home icon using SVG
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

// Chevron separator icon
const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

// Function to get vehicle name by ID
const getVehicleName = (id) => {
  const vehicle = vehicles.find(v => String(v.id) === String(id));
  return vehicle ? vehicle.title : `Car ${id}`;
};

// Function to get agency name by ID
const getAgencyName = (id) => {
  const agency = agences.find(a => String(a.id) === String(id));
  return agency ? agency.nom : `Agency ${id}`;
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Don't show breadcrumb on home page
  if (location.pathname === '/' || location.pathname === '/home') {
    return null;
  }

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    ...pathnames.map((pathname, index) => {
      let path = `/${pathnames.slice(0, index + 1).join('/')}`;
      let name = pathname.charAt(0).toUpperCase() + pathname.slice(1);
      
      // Special handling for route names
      if (name === 'Vehicles') name = 'Vehicles';
      if (name === 'About') name = 'About Us';
      if (name === 'Contact') name = 'Contact Us';
      if (name === 'Agencies') name = 'Our Agencies';
      if (name === 'Car-details'){ name = 'Car Details'; path = ""}
      
      // Special handling for dynamic routes
      if (pathnames[index - 1] === 'car-details' && !isNaN(pathname)) {
        name = getVehicleName(pathname);
      } else if (pathnames[index - 1] === 'agencies' && !isNaN(pathname)) {
        name = getAgencyName(pathname);
      }
      
      return { name, path };
    })
  ];

  return (
    <nav>
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            <HomeIcon />
            Home
          </Link>
          {breadcrumbs.length > 1 && <ChevronRightIcon />}
        </li>
        {breadcrumbs.slice(1).map((breadcrumb, index) => (
          <li key={breadcrumb.path} className="flex items-center">
            {index < breadcrumbs.length - 2 ? (
              <>
                <Link 
                  to={breadcrumb.path} 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {breadcrumb.name}
                </Link>
                <ChevronRightIcon />
              </>
            ) : (
              <span className="text-gray-900 font-medium">{breadcrumb.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
