import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import './Reservations.css';

function Reservations() {
    const [currentStep, setCurrentStep] = React.useState(1);

    return (
        <>
            {currentStep === 1 && <StepOne setCurrentStep={setCurrentStep} />}
            {currentStep === 2 && <StepTwo setCurrentStep={setCurrentStep} />}
            {currentStep === 3 && <StepThree setCurrentStep={setCurrentStep} />}
        </>
    );
}

export default Reservations;