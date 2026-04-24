import NavLogo from '../logos/Logo-1.png';
import './Nav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <li className="nav-item" onClick={handleNavLinkClick}><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item"><Link to="/menu">Menu</Link></li>
                    <li className="nav-item"><Link to="/reservations">Reservations</Link></li>
                    <li className="nav-item"><Link to="/order-online">Order Online</Link></li>
                    <li className="nav-item"><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;