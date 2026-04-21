import './Footer.css';
import footerLogo from '../images/FooterLogo.png';

function Footer() {
    return (
        <div>
            <div className="contact-section">
                <div>
                    <img src={footerLogo} alt="Footer Logo" className="contact-section-logo" />
                </div>
                <div>
                    <h2>Website Navigation</h2>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#highlights">Highlights</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Contact Information</h2>
                    <p>Email: info@mywebsite.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Main St, Anytown, USA</p>
                </div>
                <div>
                    <h2>Follow Us</h2>
                    <ul className="flex space-x-4">
                        <li><a href="https://facebook.com">Facebook</a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                        <li><a href="https://instagram.com">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <footer className="footer-section">
                <p>&copy; 2024 My Website. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;