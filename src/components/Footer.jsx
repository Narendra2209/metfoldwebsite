import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <img src="/assets/img/metfold-logo.png" alt="Metfold Sheet Metal" className="footer-logo-image" />
                        <p>Your premier supplier for metal roofing, wall cladding, and custom rainwater goods. Dedicated to quality and service.</p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
                            <li><Link to="/about"><i className="fas fa-chevron-right"></i> About Us</Link></li>
                            <li><Link to="/services"><i className="fas fa-chevron-right"></i> Services</Link></li>
                            <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Contact</Link></li>
                            <li><a href="#"><i className="fas fa-chevron-right"></i> Order Forms</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Products</h3>
                        <ul className="footer-links">
                            <li><Link to="/flashings"><i className="fas fa-chevron-right"></i> Flashings</Link></li>
                            <li><Link to="/cladding"><i className="fas fa-chevron-right"></i> Cladding</Link></li>
                            <li><Link to="/roofing"><i className="fas fa-chevron-right"></i> Roofing</Link></li>
                            <li><Link to="/rainwater"><i className="fas fa-chevron-right"></i> Rainwater Goods</Link></li>
                            <li><Link to="/fabrication"><i className="fas fa-chevron-right"></i> Fabrication</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <ul className="footer-links">
                            <li><i className="fas fa-map-marker-alt"></i> 123 Industrial Ave, Melbourne VIC</li>
                            <li><a href="tel:0312345678"><i className="fas fa-phone"></i> (03) 1234 5678</a></li>
                            <li><a href="mailto:info@metfold.com.au"><i className="fas fa-envelope"></i> info@metfold.com.au</a></li>
                            <li><i className="fas fa-clock"></i> Mon-Fri: 7:00 AM - 5:00 PM</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Metfold Sheet Metal. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
