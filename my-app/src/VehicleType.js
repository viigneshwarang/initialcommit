// VehicleType.js
import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  centeredContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  formContainer: {
    width: '400px',
    textAlign: 'center',
  },
  radioButtonGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  vehicleImage: {
    maxWidth: '100%',
    maxHeight: '200px',
  },
}));

const VehicleType = ({ numberOfWheels, onNext }) => {
  const classes = useStyles();
  const [selectedType, setSelectedType] = useState('');

  const handleNext = () => {
    if (!selectedType) {
      alert('Please select a vehicle type.');
      return;
    }
    onNext(selectedType);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <Box className={classes.centeredContent}>
      <Box className={classes.formContainer}>
        <Typography variant="h5">Type of Vehicle</Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="vehicleType"
            name="vehicleType"
            value={selectedType}
            onChange={handleTypeChange}
            className={classes.radioButtonGroup}
          >
            {numberOfWheels === '2' && (
              <FormControlLabel value="Bike" control={<Radio />} label="Bike" />
            )}
            {numberOfWheels === '4' && (
              <FormControlLabel value="Car" control={<Radio />} label="Car" />
            )}
            {numberOfWheels === '6' && (
              <>
                <FormControlLabel value="Bus" control={<Radio />} label="Bus" />
              </>
            )}
          </RadioGroup>
        </FormControl>
        {selectedType === 'Bike' && (
          <img src={`${process.env.PUBLIC_URL}/Bike.jpg`} alt="Bike" className={classes.vehicleImage} />
        )}
        {selectedType === 'Car' && numberOfWheels === '4' && (
          <img src={`${process.env.PUBLIC_URL}/Car.jpg`} alt="Car" className={classes.vehicleImage} />
        )}
        {selectedType === 'Bus' && (
          <img src={`${process.env.PUBLIC_URL}/Bus.jpg`} alt="Bus" className={classes.vehicleImage} />
        )}
        <Button variant="contained" color="primary" onClick={handleNext} style={{ marginTop: '20px' }}>Next</Button>
      </Box>
    </Box>
  );
};

export default VehicleType;
