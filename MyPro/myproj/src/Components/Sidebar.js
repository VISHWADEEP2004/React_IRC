import React from 'react';

const Sidebar = () => {
  const petLocations = [
    'Location 1',
    'Location 2',
    'Location 3',
  ];

  return (
    <div className="sidebar">
      <h2>Pet Locations</h2>
      <ul>
        {petLocations.map((location, index) => (
          <li key={index}>{location}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
