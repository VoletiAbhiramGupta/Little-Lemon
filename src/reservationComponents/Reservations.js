import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import './Reservations.css';

function Reservations() {
    const [currentStep, setCurrentStep] = React.useState(1);
    const [bookingData, setBookingData] = React.useState({
        date: null,
        time: null,
        guests: 2,
        seating: "Indoor",
        occasion: null,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        specialRequests: ""
    });

    return (
        <>
            {currentStep === 1 && (
                <StepOne
                    setCurrentStep={setCurrentStep}
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                />
            )}
            {currentStep === 2 && (
                <StepTwo
                    setCurrentStep={setCurrentStep}
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                />
            )}
            {currentStep === 3 && (
                <StepThree
                    setCurrentStep={setCurrentStep}
                    bookingData={bookingData}
                />
            )}
        </>
    );
}

export default Reservations;