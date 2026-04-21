function SpecialCard(props) {
    return (
        <div className="special-card">
            <img src={props.image} alt={props.title} />
            <div className="special-card-header">
                <h3>{props.title}</h3>
                <p className="special-card-price">{props.price}</p>
            </div>
            <div className="special-card-content">
                <p>{props.description}</p>
            </div>
            <div className="special-card-button-section">
                <button className="special-card-button">Order a delivery</button>
            </div>

        </div>
    );
}

export default SpecialCard;