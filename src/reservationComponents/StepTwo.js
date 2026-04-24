function StepTwo({ setCurrentStep }) {
    return (
        <div>
            <h2>Step Two</h2>
            <button onClick={() => setCurrentStep(3)}>Next</button>
        </div>
    );
}

export default StepTwo;