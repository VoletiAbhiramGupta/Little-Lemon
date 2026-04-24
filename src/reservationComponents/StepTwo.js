import { useState } from "react";
import Nav from "../components/Nav";

function StepTwo({ setCurrentStep, bookingData, setBookingData }) {
    const [firstName, setFirstName] = useState(bookingData.firstName || "");
    const [lastName, setLastName] = useState(bookingData.lastName || "");
    const [email, setEmail] = useState(bookingData.email || "");
    const [phone, setPhone] = useState(bookingData.phone || "");
    const [specialRequests, setSpecialRequests] = useState(bookingData.specialRequests || "");
    const [subscribeOffers, setSubscribeOffers] = useState(false);
    const [errors, setErrors] = useState({});

    const formatDate = (date) => {
        if (!date) return "N/A";
        return new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    };

    const validate = () => {
        const newErrors = {};
        if (!firstName.trim()) newErrors.firstName = "First name is required";
        if (!lastName.trim()) newErrors.lastName = "Last name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Please enter a valid email";
        if (!phone.trim()) newErrors.phone = "Phone number is required";
        return newErrors;
    };

    const handleConfirm = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setBookingData({ ...bookingData, firstName, lastName, email, phone, specialRequests });
        setCurrentStep(3);
    };

    return (
        <>
            <Nav />
            <div className="reservations-header">
                <div>
                    <button className="back-button" onClick={() => setCurrentStep(1)}>&lt; Back</button>
                    <h2>Your Details</h2>
                    <p>Little Lemon · Almost there!</p>
                </div>
                <div className="progress-container">
                    <div className="progress-bars">
                        <span className="progress-step active"></span>
                        <span className="progress-step active"></span>
                        <span className="progress-step"></span>
                    </div>
                    <p className="progress-step-counter">Step 2 of 3</p>
                </div>
            </div>

            <main className="step-one-layout">
                <form className="step-one-form">
                    <section className="form-section">
                        <h3 className="section-title">Contact Information</h3>

                        <div className="input-row">
                            <div className="input-group">
                                <label className="input-label" htmlFor="firstName">First Name *</label>
                                <input
                                    id="firstName"
                                    className={`form-input ${errors.firstName ? "form-input--error" : ""}`}
                                    type="text"
                                    placeholder="Adrian"
                                    value={firstName}
                                    onChange={e => { setFirstName(e.target.value); setErrors({...errors, firstName: null}); }}
                                />
                                {errors.firstName && <span className="input-error">{errors.firstName}</span>}
                            </div>
                            <div className="input-group">
                                <label className="input-label" htmlFor="lastName">Last Name *</label>
                                <input
                                    id="lastName"
                                    className={`form-input ${errors.lastName ? "form-input--error" : ""}`}
                                    type="text"
                                    placeholder="Rosario"
                                    value={lastName}
                                    onChange={e => { setLastName(e.target.value); setErrors({...errors, lastName: null}); }}
                                />
                                {errors.lastName && <span className="input-error">{errors.lastName}</span>}
                            </div>
                        </div>

                        <div className="input-row">
                            <div className="input-group">
                                <label className="input-label" htmlFor="email">Email Address *</label>
                                <input
                                    id="email"
                                    className={`form-input ${errors.email ? "form-input--error" : ""}`}
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={e => { setEmail(e.target.value); setErrors({...errors, email: null}); }}
                                />
                                {errors.email && <span className="input-error">{errors.email}</span>}
                                <span className="input-hint">Confirmation will be sent here</span>
                            </div>
                            <div className="input-group">
                                <label className="input-label" htmlFor="phone">Phone Number *</label>
                                <input
                                    id="phone"
                                    className={`form-input ${errors.phone ? "form-input--error" : ""}`}
                                    type="tel"
                                    placeholder="+1 (312) 000-0000"
                                    value={phone}
                                    onChange={e => { setPhone(e.target.value); setErrors({...errors, phone: null}); }}
                                />
                                {errors.phone && <span className="input-error">{errors.phone}</span>}
                                <span className="input-hint">In case we need to reach you</span>
                            </div>
                        </div>

                        <div className="input-group">
                            <label className="input-label" htmlFor="specialRequests">Special Requests</label>
                            <textarea
                                id="specialRequests"
                                className="form-textarea"
                                placeholder="Dietary restrictions, allergies, accessibility needs, high chair, birthday cake, window table preference..."
                                value={specialRequests}
                                onChange={e => setSpecialRequests(e.target.value)}
                                rows={4}
                            />
                        </div>
                    </section>

                    <section className="form-section subscribe-section">
                        <label className="subscribe-label">
                            <input
                                type="checkbox"
                                className="subscribe-checkbox"
                                checked={subscribeOffers}
                                onChange={e => setSubscribeOffers(e.target.checked)}
                            />
                            <div>
                                <p className="subscribe-title">Stay in the loop with Little Lemon</p>
                                <p className="subscribe-desc">Get exclusive offers, seasonal menus and event invitations. Unsubscribe anytime.</p>
                            </div>
                        </label>
                    </section>

                    <div className="privacy-notice">
                        <span className="privacy-icon">&#9741;</span>
                        <p><strong>Your privacy matters.</strong> By confirming your reservation you agree to our reservation policy. We hold tables for 15 minutes past your booking time. Your details are only used to manage this reservation.</p>
                    </div>

                    <button type="button" className="next-button" onClick={handleConfirm}>
                        Confirm My Reservation &rsaquo;
                    </button>
                </form>

                <aside className="step-one-right">
                    <div className="your-selection">
                        <p className="your-selection__title">BOOKING SUMMARY</p>
                        <div className="selection-item">
                            <span className="selection-item__label">Date</span>
                            <span className="selection-item__value selection-item__value--filled">{formatDate(bookingData.date)}</span>
                        </div>
                        <div className="selection-item">
                            <span className="selection-item__label">Time</span>
                            <span className="selection-item__value selection-item__value--filled">{bookingData.time}</span>
                        </div>
                        <div className="selection-item">
                            <span className="selection-item__label">Guests</span>
                            <span className="selection-item__value selection-item__value--filled">{bookingData.guests} guests</span>
                        </div>
                        <div className="selection-item">
                            <span className="selection-item__label">Seating</span>
                            <span className="selection-item__value selection-item__value--filled">{bookingData.seating}</span>
                        </div>
                        {bookingData.occasion && (
                            <div className="selection-item">
                                <span className="selection-item__label">Occasion</span>
                                <span className="selection-item__value selection-item__value--filled">{bookingData.occasion}</span>
                            </div>
                        )}
                        <button type="button" className="edit-booking-btn" onClick={() => setCurrentStep(1)}>
                            ← Edit Booking Details
                        </button>
                    </div>

                    <div className="restaurant-info form-section">
                        <h4 className="restaurant-info__name">Little Lemon Chicago</h4>
                        <p className="restaurant-info__detail">📍 123 W Chicago Ave, Chicago IL 60610</p>
                        <p className="restaurant-info__detail">📞 +1 (312) 555-0127</p>
                        <p className="restaurant-info__detail">🕐 Mon–Sun · Lunch &amp; Dinner</p>
                    </div>
                </aside>
            </main>
        </>
    );
}

export default StepTwo;