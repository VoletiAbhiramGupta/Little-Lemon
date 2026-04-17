import NavLogo from '../logos/Logo-1.png';
import './Nav.css';
import { useState } from 'react';

function Nav() {
    const [navButtonOpen, setnavButtonOpen] = useState(false);

    const toggleNavButton = () =>  {
        setnavButtonOpen(!navButtonOpen);
    }

    const handleNavLinkClick = () => {
        setTimeout(() => {
            setnavButtonOpen(false);
        }, 300);
    }

    return (
        <nav>
            <div className='navigation-bar' >
                <img src={NavLogo} alt="Logo" className="nav-logo" />
                <button className='hamburger-button' onClick={toggleNavButton}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className={navButtonOpen ? 'nav-links open' : 'nav-links'}>
                    <li className="nav-item" onClick={handleNavLinkClick}><a href="#home">Home</a></li>
                    <li className="nav-item"><a href="#about">About</a></li>
                    <li className="nav-item"><a href="#menu">Menu</a></li>
                    <li className="nav-item"><a href="#reservations">Reservations</a></li>
                    <li className="nav-item"><a href="#order-online">Order Online</a></li>
                    <li className="nav-item"><a href="#login">Login</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;