// NumberOfWheels.js
import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button, Box } from '@material-ui/core';
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
}));

const NumberOfWheels = ({ onNext }) => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState('');

  const handleNext = () => {
    if (!selectedOption) {
      alert('Please select the number of wheels.');
      return;
    }
    onNext(selectedOption);
  };

  return (
    <Box className={classes.centeredContent}>
      <Box className={classes.formContainer}>
        <h3>Number of Wheels</h3>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="wheels"
            name="wheelOption"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className={classes.radioButtonGroup}
          >
            <FormControlLabel value="2" control={<Radio />} label="2 Wheeler" />
            <FormControlLabel value="4" control={<Radio />} label="4 Wheeler" />
            <FormControlLabel value="6" control={<Radio />} label="6 Wheeler" />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleNext} style={{ marginTop: '20px' }}>Next</Button>
      </Box>
    </Box>
  );
};

export default NumberOfWheels;
