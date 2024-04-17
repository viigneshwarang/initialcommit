// DateRangePicker.js

import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const DateRangePicker = ({ formData, onNext }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleNext = () => {
    if (startDate && endDate) {
      onNext({ startDate, endDate });
      setShowPopup(true);
      setFormSubmitted(true);
    } else {
      alert('Please select both start date and end date.');
    }
  };

  const handlePrint = () => {
    html2canvas(formRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
      // Include form data in PDF
      const formDataString = JSON.stringify(formData, null, 2);
      pdf.text(formDataString, 10, imgHeight + 10);

      pdf.save('form.pdf');
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div ref={formRef}>
        <h3>Date Range Picker</h3>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="End Date"
          />
        </div>
        <button onClick={handleNext}>Next</button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Form Submitted</h2>
            <p>Your form has been submitted successfully!</p>
            {formSubmitted && <button onClick={handlePrint}>Print</button>}
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
