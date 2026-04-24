function StepThree({ setCurrentStep }) {
    return (
        <div>
            <h2>Step Three</h2>
            <button onClick={() => setCurrentStep(1)}>Restart</button>
        </div>
    );
}

export default StepThree;