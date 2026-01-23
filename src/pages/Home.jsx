import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    };

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <Slider {...settings} className="hero-slider">
                    <div className="slide-wrapper">
                        <div className="slide active" style={{ backgroundImage: "url('/assets/img/hero1.png')" }}>
                            <div className="overlay"></div>
                            <div className="container slide-content">
                                <h2>Trusted Metal Roofing <br /><span>Suppliers</span></h2>
                                <p>Metfold Sheet Metal - Your Local Metal Roofing Suppliers providing top-tier sheet metal solutions for residential and commercial projects.</p>
                                <div className="slide-buttons">
                                    <Link to="/products" className="btn btn-accent">View Products</Link>
                                    <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-wrapper">
                        <div className="slide" style={{ backgroundImage: "url('/assets/img/hero1.png')" }}>
                            <div className="overlay"></div>
                            <div className="container slide-content">
                                <h2>Precision & <br /><span>Durability</span></h2>
                                <p>Custom flashings and rainwater goods made to order with fast turnaround.</p>
                                <div className="slide-buttons">
                                    <Link to="/fabrication" className="btn btn-accent">Our Services</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>

            {/* Product Categories Grid */}
            <section className="product-categories section-padding">
                <div className="container">
                    <div className="categories-grid">
                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-layer-group"></i>
                            </div>
                            <h3>Roof Sheets</h3>
                            <p>Corrugated Roof Sheets</p>
                            <ul>
                                <li>Corrugated Roof Sheets</li>
                                <li>Decking Roof Sheets</li>
                                <li>Trimdek Roof Sheets</li>
                                <li>Kliplok Roof Sheets</li>
                            </ul>
                            <Link to="/roofing" className="btn-category">See More Information</Link>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-tools"></i>
                            </div>
                            <h3>Fascia & Gutter</h3>
                            <p>Fascia & Gutter Supplies</p>
                            <ul>
                                <li>Fascia Boards</li>
                                <li>Quad Gutters</li>
                                <li>Half Round Gutters</li>
                                <li>Box Gutters & Downpipes</li>
                            </ul>
                            <Link to="/rainwater" className="btn-category">See More Information</Link>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-building"></i>
                            </div>
                            <h3>Polycarbonate Roof Sheets</h3>
                            <p>Roofing Polycarbonate Roofing</p>
                            <ul>
                                <li>Lite Sheets</li>
                                <li>Suntuf Polycarbonate</li>
                                <li>Laserlite Polycarbonate</li>
                                <li>Greca Polycarbonate</li>
                            </ul>
                            <Link to="/roofing" className="btn-category">See More Information</Link>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-paint-brush"></i>
                            </div>
                            <h3>Colourbond</h3>
                            <p>Colourbond Steel Products</p>
                            <ul>
                                <li>Roofing Colourbond</li>
                                <li>Cladding Colourbond</li>
                                <li>Fencing Colourbond</li>
                                <li>Custom Colours</li>
                            </ul>
                            <Link to="/products" className="btn-category">See More Information</Link>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-home"></i>
                            </div>
                            <h3>Insulated Metal Cladding</h3>
                            <p>Insulated Cladding Solutions</p>
                            <ul>
                                <li>Wall Cladding</li>
                                <li>Roof Cladding</li>
                                <li>Insulated Panels</li>
                                <li>Fire Rated Options</li>
                            </ul>
                            <Link to="/cladding" className="btn-category">See More Information</Link>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-wrench"></i>
                            </div>
                            <h3>Flashings & Screws</h3>
                            <p>Custom Flashings & Screws</p>
                            <ul>
                                <li>Ridge Flashings</li>
                                <li>Barge Flashings</li>
                                <li>Tek Screws</li>
                                <li>Rivets & Fasteners</li>
                            </ul>
                            <Link to="/flashings" className="btn-category">See More Information</Link>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Custom Roof Flashings</h3>
                            <p>Custom Roof Flashing Supplies</p>
                            <ul>
                                <li>Valley Flashings</li>
                                <li>Apron Flashings</li>
                                <li>Step Flashings</li>
                                <li>Custom Fabrication</li>
                            </ul>
                            <Link to="/flashings" className="btn-category">See More Information</Link>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fas fa-cog"></i>
                            </div>
                            <h3>Accessories</h3>
                            <p>Wide Range of Roofing Accessories</p>
                            <ul>
                                <li>Ventilation</li>
                                <li>Insulation</li>
                                <li>Sealants</li>
                                <li>Safety Equipment</li>
                            </ul>
                            <Link to="/accessories" className="btn-category">See More Information</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="what-we-do-section section-padding bg-light">
                <div className="container">
                    <div className="what-we-do-grid">
                        <div className="what-we-do-content">
                            <h2>What We Do?</h2>
                            <p>As a leading Metal Roofing Company in Melbourne, we supply all types of metal roofing products for the Residential Roofing Products and Commercial Roofing Products. We also supply a wide variety of metal roofing made COLORBOND® steel, ZINCALUME® steel and Galvanised steel.</p>
                            <p>We're include range of products like roofing, wall cladding, and rainwater goods, all designed to meet your specific needs.</p>
                            <p>We understand that every project is different, which is why we offer custom fabrication services to ensure you get exactly what you need. Our experienced team is dedicated to providing high-quality products and exceptional customer service.</p>
                            <Link to="/about" className="btn btn-accent">Learn More</Link>
                        </div>
                        <div className="what-we-do-image">
                            <img src="/assets/img/flashings.png" alt="Metal Fabrication" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Shop Genuine Section */}
            <section className="shop-genuine-section section-padding">
                <div className="container">
                    <div className="shop-genuine-grid">
                        <div className="shop-genuine-image">
                            <img src="/assets/img/roofing.png" alt="Shop Genuine Australian COLORBOND" />
                        </div>
                        <div className="shop-genuine-content">
                            <h2>Shop Genuine Australian COLORBOND®</h2>
                            <p><strong>Metfold Sheet Metal</strong> is Melbourne's premier supplier of genuine Australian-made COLORBOND® steel. We stock an extensive range of profiles and colours to suit any project.</p>
                            <p>COLORBOND® steel is Australia's most trusted steel building product. It's designed and made in Australia to withstand our harsh climate, from coastal salt spray to extreme heat.</p>
                            <p><strong>We Stock and Distribute:</strong> we supply to most of your nearby locality with quality and cost-effective roofing, cladding, fencing and more – all with fast delivery and expert support.</p>
                            <Link to="/contact" className="btn btn-accent">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="why-choose-section section-padding bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why Choose <span>Metfold Sheetmetal</span> ?</h2>
                        <p className="section-subtitle">As a leading Metal Roofing Company in Melbourne, we supply all types of metal roofing products for the Residential Roofing Products and Commercial Roofing Products. We also supply a wide variety of metal roofing made COLORBOND® steel, ZINCALUME® steel and Galvanised steel. We stock and supply metal roofing products for your specific building or roofing requirements.</p>
                    </div>

                    <div className="value-props-grid">
                        <div className="value-prop-card">
                            <h3>100% Australian Made</h3>
                            <p>All our COLORBOND® and ZINCALUME® products are manufactured in Australia to the highest quality standards.</p>
                        </div>
                        <div className="value-prop-card">
                            <h3>Custom Cut-to-Size</h3>
                            <p>We offer precision cutting services to ensure your materials are ready to install, saving you time and reducing waste.</p>
                        </div>
                        <div className="value-prop-card">
                            <h3>Faster Turnaround Time</h3>
                            <p>With our efficient processes and local manufacturing, we deliver your orders quickly without compromising quality.</p>
                        </div>
                        <div className="value-prop-card">
                            <h3>Skilled Expertise</h3>
                            <p>Our experienced team provides expert advice and technical support to help you choose the right products for your project.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supplier Range Section */}
            <section className="supplier-range-section section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Supplier Range</h2>
                        <p className="section-subtitle">We partner with Australia's leading manufacturers to bring you the best quality products</p>
                    </div>

                    <div className="supplier-logos">
                        <div className="supplier-logo">
                            <div className="logo-placeholder">COLORBOND®</div>
                        </div>
                        <div className="supplier-logo">
                            <div className="logo-placeholder">METROLL</div>
                        </div>
                        <div className="supplier-logo">
                            <div className="logo-placeholder">STRATCO</div>
                        </div>
                        <div className="supplier-logo">
                            <div className="logo-placeholder">DULLSHEETS</div>
                        </div>
                        <div className="supplier-logo">
                            <div className="logo-placeholder">RAM MASTER</div>
                        </div>
                        <div className="supplier-logo">
                            <div className="logo-placeholder">MICK</div>
                        </div>
                        <div className="supplier-logo">
                            <div className="logo-placeholder">UNICOAT</div>
                        </div>
                        <div className="supplier-logo">
                            <div className="logo-placeholder">ROOF DOCTOR</div>
                        </div>
                        <div className="supplier-logo">
                            <div className="logo-placeholder">AQUATITE</div>
                        </div>
                        <div className="supplier-logo">
                            <div className="logo-placeholder">LASERLITE</div>
                        </div>
                        <div className="supplier-logo">
                            <div className="logo-placeholder">LYSAGHT</div>
                        </div>
                        <div className="supplier-logo">
                            <div className="logo-placeholder">WAZINC</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Banner */}
            <section className="cta-banner">
                <div className="container">
                    <div className="cta-content">
                        <h2>Sheet Metal <span>You Can Rely On</span></h2>
                        <p>Contact us today for a free quote on your next project. Our team is ready to help you find the perfect solution.</p>
                        <Link to="/contact" className="btn btn-light">Contact Us</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
