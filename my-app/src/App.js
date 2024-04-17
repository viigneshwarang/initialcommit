// App.js
import React, { useState, useEffect } from 'react';
import NameInput from './NameInput';
import NumberOfWheels from './NumberOfWheels';
import VehicleType from './VehicleType';
import VehicleModel from './VehicleModel';
import DateRangePicker from './DateRangePicker';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [selectedWheels, setSelectedWheels] = useState('');
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleNumberOfWheelsNext = (selectedOption) => {
    setSelectedWheels(selectedOption);
    handleNext({ numberOfWheels: selectedOption });
  };

  const handleVehicleTypeNext = (selectedType) => {
    setSelectedVehicleType(selectedType);
    handleNext({ vehicleType: selectedType });
  };

  const handleFormSubmit = () => {
    setShowPopup(true);
    setFormSubmitted(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <NameInput onNext={handleNext} />;
      case 2:
        return <NumberOfWheels onNext={handleNumberOfWheelsNext} />;
      case 3:
        return <VehicleType numberOfWheels={selectedWheels} onNext={handleVehicleTypeNext} />;
      case 4:
        return <VehicleModel vehicleType={selectedVehicleType} onNext={handleNext} />;
      case 5:
        return <DateRangePicker formData={formData} onNext={handleFormSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Booking Form</h1>
      {renderStep()}

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Form Submitted</h2>
            <p>Your form has been submitted successfully!</p>
            <button onClick={closePopup}>Close</button>
            {formSubmitted && <button onClick={() => console.log("Printing...")}>Print</button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
