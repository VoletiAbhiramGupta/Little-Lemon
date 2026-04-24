import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

function generateBookingRef() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let ref = "LL-";
    for (let i = 0; i < 6; i++) {
        ref += chars[Math.floor(Math.random() * chars.length)];
    }
    return ref;
}

function StepThree({ setCurrentStep, bookingData }) {
    const [bookingRef] = useState(generateBookingRef);

    const formatDate = (date) => {
        if (!date) return "N/A";
        return new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    };

    return (
        <>
            <Nav />
            <div className="reservations-header">
                <div>
                    <h2>You're all set!</h2>
                    <p>Little Lemon · Your table is reserved</p>
                </div>
                <div className="progress-container">
                    <div className="progress-bars">
                        <span className="progress-step active"></span>
                        <span className="progress-step active"></span>
                        <span className="progress-step active"></span>
                    </div>
                    <p className="progress-step-counter">Step 3 of 3</p>
                </div>
            </div>

            <main className="step-one-layout">
                <div className="step-one-form">

                    <div className="booking-ref-card">
                        <p className="booking-ref-card__label">BOOKING REFERENCE</p>
                        <p className="booking-ref-card__code">{bookingRef}</p>
                        <p className="booking-ref-card__hint">Please present this reference when you arrive</p>
                    </div>

                    <section className="form-section">
                        <h3 className="section-title">Reservation Details</h3>
                        <table className="reservation-details-table">
                            <tbody>
                                <tr>
                                    <td className="details-label">Date</td>
                                    <td className="details-value">{formatDate(bookingData.date)}</td>
                                    <td className="details-label">Time</td>
                                    <td className="details-value">{bookingData.time}</td>
                                </tr>
                                <tr>
                                    <td className="details-label">Guests</td>
                                    <td className="details-value">{bookingData.guests} guests</td>
                                    <td className="details-label">Seating</td>
                                    <td className="details-value">{bookingData.seating}</td>
                                </tr>
                                <tr>
                                    <td className="details-label">Name</td>
                                    <td className="details-value" colSpan={3}>{bookingData.firstName} {bookingData.lastName}</td>
                                </tr>
                                <tr>
                                    <td className="details-label">Email</td>
                                    <td className="details-value" colSpan={3}>{bookingData.email}</td>
                                </tr>
                                <tr>
                                    <td className="details-label">Phone</td>
                                    <td className="details-value" colSpan={3}>{bookingData.phone}</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section className="form-section what-to-expect">
                        <h3 className="section-title">What to Expect</h3>
                        <div className="expect-grid">
                            <div className="expect-item">
                                <p className="expect-item__title">Email Confirmation</p>
                                <p className="expect-item__desc">Sent to your inbox within 2 minutes</p>
                            </div>
                            <div className="expect-item">
                                <p className="expect-item__title">Table Hold Policy</p>
                                <p className="expect-item__desc">We hold your table for 15 minutes</p>
                            </div>
                            <div className="expect-item">
                                <p className="expect-item__title">We May Call You</p>
                                <p className="expect-item__desc">For large groups or special requests</p>
                            </div>
                            <div className="expect-item">
                                <p className="expect-item__title">Free Cancellation</p>
                                <p className="expect-item__desc">Cancel up to 24 hours before</p>
                            </div>
                        </div>
                    </section>
                </div>

                <aside className="step-one-right">
                    <Link to="/">
                        <button className="next-button" style={{ width: "100%", marginBottom: "12px" }}>
                            Back to Home
                        </button>
                    </Link>
                    <button
                        type="button"
                        className="edit-booking-btn"
                        style={{ width: "100%", marginBottom: "12px", textAlign: "center" }}
                        onClick={() => setCurrentStep(1)}
                    >
                        Make Another Reservation
                    </button>
                    <button
                        type="button"
                        className="print-btn"
                        onClick={() => window.print()}
                    >
                        Print Confirmation
                    </button>

                    <div className="restaurant-info form-section" style={{ marginTop: "16px" }}>
                        <h4 className="restaurant-info__name">Little Lemon Chicago</h4>
                        <p className="restaurant-info__detail">📍 123 W Chicago Ave</p>
                        <p className="restaurant-info__detail">Chicago, IL 60610</p>
                        <p className="restaurant-info__detail">📞 +1 (312) 555-0127</p>
                        <p className="restaurant-info__detail restaurant-info__directions">Get Directions →</p>
                    </div>
                </aside>
            </main>
        </>
    );
}

export default StepThree;