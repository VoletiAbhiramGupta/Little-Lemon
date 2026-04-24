import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

function StepOne({ setCurrentStep }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const availableLunchTimeSlots = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"];
    const availableDinnerTimeSlots = ["18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

    const guestsCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15];

    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedGuestCount, setSelectedGuestCount] = useState(2);

    return (
        <>
            <Nav />
            <div className="reservations-header">
                <div>
                    <Link to="/home">
                        <button className="back-button">&lt; Back to Home</button>
                    </Link>
                    <h2>Reserve a Table</h2>
                    <p>Little Lemon - Book you your perfect dining experience</p>
                </div>
                <div className="progress-container">
                    <div className="progress-bars">
                        <span className="progress-step active"></span>
                        <span className="progress-step"></span>
                        <span className="progress-step"></span>
                    </div>
                    <p className="progress-step-counter">Step 1 of 3</p>
                </div>
            </div>
            <main className="step-one-layout">
                <form className="step-one-form">
                    <section className="calendar-section form-section">
                        <h3>Choose a Date</h3>
                        <Calendar value={selectedDate} onChange={setSelectedDate}/>
                    </section>
                    <section className="time-section form-section">
                        <h3>Choose a Time</h3>
                        <p>Lunch Service</p>
                        <div className="time-slots">
                            {availableLunchTimeSlots.map(lunchServiceSlot => (
                                <button key={lunchServiceSlot} className="time-slot">{lunchServiceSlot}</button>
                            ))}
                        </div>
                        <p>Dinner Service</p>
                        <div className="time-slots">
                            {availableDinnerTimeSlots.map(dinnerServiceSlot => (
                                <button key={dinnerServiceSlot} className="time-slot">{dinnerServiceSlot}</button>
                            ))}
                        </div>
                    </section>
                    <div className="guests-and-seating-row">
                        <section className="guests-section form-section">
                            <h3>Guests</h3>
                            <div className="guest-count-section">
                                <button className="guest-count-button">-</button>
                                <div className="guest-count">
                                    <span>{selectedGuestCount}</span>
                                    <span>  guests</span>
                                </div>
                                <button className="guest-count-button">+</button>
                            </div>
                            <div className="time-slots guest-selection">
                                {guestsCount.map(guestCount => (
                                    <button className="time-slot">{guestCount}</button>
                                ))}
                            </div>
                        </section>
                        <section className="seating-section">
                            <div>
                                <h3>Seating</h3>
                            </div>
                            <div>
                                <button>
                                    <p>Indoor</p>
                                    <span>Air-conditioned dining room with ambient lighting</span>
                                </button>
                                <button>
                                    <p>Outdoor</p>
                                    <span>
                                        Scenic patio with garden views and heaters
                                    </span>
                                </button>
                            </div>
                        </section>
                    </div>
                    <section className="occasion-section"></section>
                    <button type="button" onClick={() => setCurrentStep(2)}>Next : Contact Details</button>
                </form>
                <aside className="step-one-right">

                </aside>
            </main>
        </>
    );
}

export default StepOne;