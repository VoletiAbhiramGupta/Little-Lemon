import './Hero.css';
import heroImage from '../images/hero-image.jpg';

function Hero() {
    return (
        <section className="hero">
            <div>
                <h1 className='hero-title'>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button className='btn-reserve-table'>Reserve a Table</button>
            </div>
            <div className='hero-image-section'>
                <img src={heroImage} alt='hero-image' className='hero-image'/>
            </div>
        </section>
    );
}

export default Hero;