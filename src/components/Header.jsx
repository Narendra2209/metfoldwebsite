import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleDropdown = (e, index) => {
        if (window.innerWidth < 992) {
            e.preventDefault();
            setActiveDropdown(activeDropdown === index ? null : index);
        }
    };

    return (
        <>
            <div className="top-bar">
                <div className="container top-bar-inner">
                    <div className="top-contact">
                        <a href="mailto:info@metfold.com.au"><i className="fas fa-envelope"></i> info@metfold.com.au</a>
                        <span className="divider">|</span>
                        <a href="#"><i className="fas fa-phone"></i> (03) 1234 5678</a>
                    </div>
                    <div className="top-actions">
                        <a href="#" className="btn btn-primary btn-sm">Order Forms</a>
                    </div>
                </div>
            </div>

            <header className={`site-header ${scrolled ? 'scrolled' : ''}`} style={scrolled ? { boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" } : {}}>
                <div className="container header-inner">
                    <div className="logo">
                        <Link to="/">
                            <img src="/assets/img/metfold-logo.png" alt="Metfold Sheet Metal" className="logo-image" />
                        </Link>
                    </div>

                    <button
                        className="mobile-menu-toggle"
                        aria-label="Toggle Menu"
                        onClick={toggleMobileMenu}
                    >
                        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>

                    <nav className={`main-nav ${mobileMenuOpen ? 'active' : ''}`}>
                        <ul className="menu">
                            <li><Link to="/" className="active">Home</Link></li>
                            <li><Link to="/flashings">Flashings</Link></li>
                            <li><Link to="/cladding">Cladding</Link></li>
                            <li className={`has-dropdown ${activeDropdown === 1 ? 'active' : ''}`}>
                                <a href="#" onClick={(e) => toggleDropdown(e, 1)}>Roofing <i className="fas fa-chevron-down"></i></a>
                                <ul className="dropdown">
                                    <li><Link to="/roofing/corrugated">Corrugated</Link></li>
                                    <li><Link to="/roofing/decking">Decking</Link></li>
                                </ul>
                            </li>
                            <li className={`has-dropdown ${activeDropdown === 2 ? 'active' : ''}`}>
                                <a href="#" onClick={(e) => toggleDropdown(e, 2)}>Rainwater Goods <i className="fas fa-chevron-down"></i></a>
                                <ul className="dropdown">
                                    <li><Link to="/rainwater/gutters">Gutters</Link></li>
                                    <li><Link to="/rainwater/downpipes">Downpipes</Link></li>
                                </ul>
                            </li>
                            <li className={`has-dropdown ${activeDropdown === 3 ? 'active' : ''}`}>
                                <a href="#" onClick={(e) => toggleDropdown(e, 3)}>Fabrication <i className="fas fa-chevron-down"></i></a>
                                <ul className="dropdown">
                                    <li><Link to="/fabrication">Custom Works</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/accessories">Accessories</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
