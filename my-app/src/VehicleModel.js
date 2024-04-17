import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file for styling

const VehicleModel = ({ onNext, vehicleType }) => {
  const [selectedModel, setSelectedModel] = useState('');
  const [vehicleModels, setVehicleModels] = useState([]);

  // Sample data for car models
  const carModels = [
    {
      id: 1,
      name: 'FAROZI',
      manufacturingYear: 2024,
      geartype: 'non-gear',
      maxSpeed: '230 km/h',
      engineCapability: '2500 cc',
      fuelType: 'Petrol/Gas',
    },
    {
      id: 2,
      name: 'FAROZI',
      manufacturingYear: 2022,
      geartype: 'with-gear',
      maxSpeed: '190 km/h',
      engineCapability: '2000 cc',
      fuelType: 'Petrol/Gas',
    },
  ];

  // Sample data for bike models
  const bikeModels = [
    {
      id: 1,
      name: 'MAXMAN',
      manufacturingYear: 2019,
      maxSpeed: '120 km/h',
      engineCapability: '150 cc',
      fuelType: 'Petrol',
    },
    {
      id: 2,
      name: 'MANMAN',
      manufacturingYear: 2020,
      maxSpeed: '130 km/h',
      engineCapability: '200 cc',
      fuelType: 'Petrol',
    },
  ];

  // Sample data for bus models
  const busModels = [
    {
      id: 1,
      name: 'TATA MOTORS',
      manufacturingYear: 2024,
      maxSpeed: '140 km/h',
      engineCapability: '3000 cc',
      fuelType: 'Diesel',
    },
    {
      id: 2,
      name: 'TATA MOTORS',
      manufacturingYear: 2022,
      maxSpeed: '120 km/h',
      engineCapability: '2700 cc',
      fuelType: 'Diesel',
    },
  ];

  // Load vehicle models based on the selected vehicle type
  useEffect(() => {
    if (vehicleType === 'Car') {
      setVehicleModels(carModels);
    } else if (vehicleType === 'Bike') {
      setVehicleModels(bikeModels);
    } else if (vehicleType === 'Bus') {
      setVehicleModels(busModels);
    }
  }, [vehicleType]);

  const handleNext = () => {
    if (!selectedModel) {
      alert('Please select a vehicle model.');
      return;
    }
    const selectedVehicleModel = vehicleModels.find(model => model.id === selectedModel);
    onNext(selectedVehicleModel);
  };

  return (
    <div className="center-container">
      <h3>Select {vehicleType} Model</h3>
      {vehicleModels.map(model => (
        <div key={model.id} className="vehicle-model-container" style={{ marginBottom: '20px' }}>
          <input
            type="radio"
            name="vehicleModel"
            value={model.id}
            checked={selectedModel === model.id}
            onChange={() => setSelectedModel(model.id)}
          />
          <label>{model.name}</label>
          <div className={`detail-box ${selectedModel === model.id ? 'selected' : ''}`}>
            <p><strong>Manufacturing Year:</strong> {model.manufacturingYear}</p>
            <p><strong>Max Speed:</strong> {model.maxSpeed}</p>
            <p><strong>Engine Capability:</strong> {model.engineCapability}</p>
            <p><strong>Fuel Type:</strong> {model.fuelType}</p>
          </div>
        </div>
      ))}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default VehicleModel;
