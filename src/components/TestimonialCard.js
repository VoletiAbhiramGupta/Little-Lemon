function TestimonialCard(props) {
    console.log(props.rating);
    const renderStars = (rating) => {
        return '\u2605'.repeat(rating) + '\u2606'.repeat(5 - rating);
    };
    return (
        <div>
            <div className="testimonial-card">
                <div className="testimonial-card-profile">
                    <img src={props.image} alt={props.name} />
                    <h3>{props.name}</h3>
                </div>
                <p className='stars'>{renderStars(props.rating)}</p>
                <p>{props.review}</p>
            </div>
        </div>
    )
}

export default TestimonialCard;