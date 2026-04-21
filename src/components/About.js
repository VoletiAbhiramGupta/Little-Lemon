import './About.css';
import restaurant from '../images/restaurant.jpg';


function About() {
    const aboutUsContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return (
        <div className="about-section">
            <div>
                <h1>About Us</h1>
                <p>{aboutUsContent}</p>
            </div>
            <div>
                <img src={restaurant} alt="Restaurant" />
            </div>
        </div>
    );
}

export default About;