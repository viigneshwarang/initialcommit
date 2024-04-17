import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const [vehicleModels, setVehicleModels] = useState([]);

  useEffect(() => {
    // Fetch vehicle types on component mount
    fetchVehicleTypes();
  }, []);

  // Function to fetch vehicle types from backend API
  const fetchVehicleTypes = async () => {
    try {
      const response = await axios.get('https://octalogic-test-frontend.vercel.app/api/v1/vehicleTypes');
      setVehicleTypes(response.data);
    } catch (error) {
      console.error('Error fetching vehicle types:', error);
    }
  };

  // Function to fetch vehicle models for a selected vehicle type
  const fetchVehicleModels = async (typeId) => {
    try {
      const response = await axios.get(`https://octalogic-test-frontend.vercel.app/api/v1/vehicleTypes/${typeId}/vehicles`);
      setVehicleModels(response.data);
    } catch (error) {
      console.error('Error fetching vehicle models:', error);
    }
  };

  // Handle vehicle type selection
  const handleVehicleTypeChange = (event) => {
    setSelectedVehicleType(event.target.value);
    fetchVehicleModels(event.target.value);
  };

  return (
    <div>
      {/* Display vehicle types */}
      <div>
        <h3>Type of vehicle</h3>
        {vehicleTypes.map(type => (
          <div key={type.id}>
            <input
              type="radio"
              name="vehicleType"
              value={type.id}
              checked={selectedVehicleType === type.id}
              onChange={handleVehicleTypeChange}
            />
            <label>{type.title}</label>
          </div>
        ))}
      </div>

      {/* Display vehicle models */}
      <div>
        <h3>Specific Model</h3>
        {vehicleModels.map(model => (
          <div key={model.id}>
            <input
              type="radio"
              name="vehicleModel"
              value={model.id}
              // Implement the logic for displaying model name and image here
            />
            <label>{model.name}</label>
            <img src={model.image.publicURL} alt={model.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
