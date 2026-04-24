import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

const OCCASIONS = ["Birthday", "Anniversary", "Date Night", "Business Lunch", "Family Gathering", "Other"];
const LUNCH_SLOTS = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM"];
const DINNER_SLOTS = ["6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"];
const GUEST_PRESETS = [1, 2, 3, 4, 5, 6, 8, 10, 12];

function StepOne({ setCurrentStep, bookingData, setBookingData }) {
    const [selectedDate, setSelectedDate] = useState(bookingData.date || null);
    const [selectedTime, setSelectedTime] = useState(bookingData.time || null);
    const [guestCount, setGuestCount] = useState(bookingData.guests || 2);
    const [seating, setSeating] = useState(bookingData.seating || "Indoor");
    const [occasion, setOccasion] = useState(bookingData.occasion || null);

    const formatDate = (date) => {
        if (!date) return "Not selected";
        return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    };

    const handleNext = () => {
        if (!selectedDate || !selectedTime) {
            alert("Please select a date and time before continuing.");
            return;
        }
        setBookingData({ ...bookingData, date: selectedDate, time: selectedTime, guests: guestCount, seating, occasion });
        setCurrentStep(2);
    };

    const decrementGuests = () => { if (guestCount > 1) setGuestCount(guestCount - 1); };
    const incrementGuests = () => { if (guestCount < 20) setGuestCount(guestCount + 1); };

    return (
        <>
            <Nav />
            <div className="reservations-header">
                <div>
                    <Link to="/">
                        <button className="back-button">&lt; Back to Home</button>
                    </Link>
                    <h2>Reserve a Table</h2>
                    <p>Little Lemon · Book your perfect dining experience</p>
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

                    {/* Date */}
                    <section className="calendar-section form-section">
                        <h3 className="section-title">Choose a Date</h3>
                        <Calendar
                            value={selectedDate}
                            onChange={setSelectedDate}
                            minDate={new Date()}
                        />
                    </section>

                    {/* Time */}
                    <section className="time-section form-section">
                        <h3 className="section-title">Choose a Time</h3>
                        <p className="service-label">Lunch Service</p>
                        <div className="time-slots">
                            {LUNCH_SLOTS.map(slot => (
                                <button
                                    key={slot}
                                    type="button"
                                    className={`time-slot ${selectedTime === slot ? "time-slot--active" : ""}`}
                                    onClick={() => setSelectedTime(slot)}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                        <p className="service-label">Dinner Service</p>
                        <div className="time-slots">
                            {DINNER_SLOTS.map(slot => (
                                <button
                                    key={slot}
                                    type="button"
                                    className={`time-slot ${selectedTime === slot ? "time-slot--active" : ""}`}
                                    onClick={() => setSelectedTime(slot)}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Guests + Seating */}
                    <div className="guests-and-seating-row">
                        <section className="guests-section form-section">
                            <h3 className="section-title">Guests</h3>
                            <div className="guest-count-section">
                                <button type="button" className="guest-count-button" onClick={decrementGuests}>−</button>
                                <div className="guest-count">
                                    <span className="guest-count__number">{guestCount}</span>
                                    <span className="guest-count__label">guests</span>
                                </div>
                                <button type="button" className="guest-count-button" onClick={incrementGuests}>+</button>
                            </div>
                            <div className="guest-presets">
                                {GUEST_PRESETS.map(n => (
                                    <button
                                        key={n}
                                        type="button"
                                        className={`guest-preset ${guestCount === n ? "guest-preset--active" : ""}`}
                                        onClick={() => setGuestCount(n)}
                                    >
                                        {n}
                                    </button>
                                ))}
                            </div>
                        </section>

                        <section className="seating-section form-section">
                            <h3 className="section-title">Seating</h3>
                            <button
                                type="button"
                                className={`seating-option ${seating === "Indoor" ? "seating-option--active" : ""}`}
                                onClick={() => setSeating("Indoor")}
                            >
                                <div className="seating-option__content">
                                    <p className="seating-option__name">Indoor</p>
                                    <span className="seating-option__desc">Air-conditioned dining room with ambient lighting</span>
                                </div>
                                {seating === "Indoor" && <span className="seating-check">✓</span>}
                            </button>
                            <button
                                type="button"
                                className={`seating-option ${seating === "Outdoor" ? "seating-option--active" : ""}`}
                                onClick={() => setSeating("Outdoor")}
                            >
                                <div className="seating-option__content">
                                    <p className="seating-option__name">Outdoor</p>
                                    <span className="seating-option__desc">Scenic patio with garden views and heaters</span>
                                </div>
                                {seating === "Outdoor" && <span className="seating-check">✓</span>}
                            </button>
                        </section>
                    </div>

                    {/* Occasion */}
                    <section className="occasion-section form-section">
                        <h3 className="section-title">Special Occasion? <span className="optional-label">(Optional)</span></h3>
                        <div className="occasion-chips">
                            {OCCASIONS.map(occ => (
                                <button
                                    key={occ}
                                    type="button"
                                    className={`occasion-chip ${occasion === occ ? "occasion-chip--active" : ""}`}
                                    onClick={() => setOccasion(occasion === occ ? null : occ)}
                                >
                                    {occ}
                                </button>
                            ))}
                        </div>
                    </section>

                    <button type="button" className="next-button" onClick={handleNext}>
                        Continue to Contact Details &rsaquo;
                    </button>
                </form>

                {/* Aside - Your Selection */}
                <aside className="step-one-right">
                    <div className="your-selection">
                        <p className="your-selection__title">YOUR SELECTION</p>
                        <div className="selection-item">
                            <span className="selection-item__label">Date</span>
                            <span className={`selection-item__value ${!selectedDate ? "selection-item__value--empty" : ""}`}>
                                {formatDate(selectedDate)}
                            </span>
                        </div>
                        <div className="selection-item">
                            <span className="selection-item__label">Time</span>
                            <span className={`selection-item__value ${!selectedTime ? "selection-item__value--empty" : ""}`}>
                                {selectedTime || "Not selected"}
                            </span>
                        </div>
                        <div className="selection-item">
                            <span className="selection-item__label">Guests</span>
                            <span className="selection-item__value selection-item__value--filled">{guestCount} guests</span>
                        </div>
                        <div className="selection-item">
                            <span className="selection-item__label">Seating</span>
                            <span className="selection-item__value selection-item__value--filled">{seating}</span>
                        </div>
                        {occasion && (
                            <div className="selection-item">
                                <span className="selection-item__label">Occasion</span>
                                <span className="selection-item__value selection-item__value--filled">{occasion}</span>
                            </div>
                        )}
                    </div>

                    <div className="good-to-know form-section">
                        <h4 className="good-to-know__title">Good to Know</h4>
                        <ul className="good-to-know__list">
                            <li>Tables held for 15 minutes</li>
                            <li>Free cancellation up to 24h prior</li>
                            <li>Special occasions noted to our team</li>
                            <li>Large groups (8+) may be contacted</li>
                        </ul>
                    </div>
                </aside>
            </main>
        </>
    );
}

export default StepOne;