import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicePage.css';

/* Reusable Service Page Component matching Metfold's style */
export default function ServicePage({
    title,
    subtitle,
    heroImage,
    introText,
    products,
    orderFormText = "Download Order Form",
    orderFormLink = "#"
}) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="service-page"
        >
            {/* 1. Page Banner */}
            <div
                className="page-banner"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,31,63,0.7), rgba(0,31,63,0.7)), url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px', // Increased height for impact
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    color: 'white',
                    textAlign: 'center',
                    backgroundAttachment: 'fixed' // Parallax effect
                }}
            >
                <div className="container">
                    <motion.p
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="page-subtitle"
                        style={{ color: '#ed2124', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '2px' }}
                    >
                        {subtitle || "Your Local Supplier"}
                    </motion.p>
                    <motion.h1
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ fontSize: '56px', margin: 0, textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
                    >
                        {title}
                    </motion.h1>
                </div>
            </div>

            {/* 2. Breadcrumb (Simple) */}
            <div className="breadcrumb-bar" style={{ backgroundColor: '#f1f5f9', padding: '15px 0', borderBottom: '1px solid #e2e8f0' }}>
                <div className="container" style={{ fontSize: '14px', color: '#64748b' }}>
                    <Link to="/" style={{ fontWeight: '500' }}>Home</Link> &gt; <span style={{ color: '#001f3f', fontWeight: 'bold' }}>{title}</span>
                </div>
            </div>

            {/* 3. Main Content */}
            <div className="page-content section-padding">
                <div className="container">
                    <div className="content-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 3fr) 1fr', gap: '50px' }}>

                        {/* Left Column: Product Info */}
                        <div className="main-info">
                            {/* Intro */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="intro-text"
                                style={{ fontSize: '19px', marginBottom: '50px', lineHeight: '1.8', color: '#334155' }}
                            >
                                {introText}
                            </motion.div>

                            {/* Product List */}
                            <motion.div
                                className="product-list"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {products && products.map((product, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="product-item"
                                        style={{
                                            marginBottom: '40px',
                                            borderBottom: '1px solid #eee',
                                            paddingBottom: '30px',
                                            backgroundColor: 'white'
                                        }}
                                    >
                                        <h3 style={{ color: '#001f3f', fontSize: '28px', marginBottom: '15px', position: 'relative', display: 'inline-block' }}>
                                            {product.title}
                                            <span style={{ display: 'block', width: '40px', height: '3px', background: '#ed2124', marginTop: '5px' }}></span>
                                        </h3>
                                        {(product.image && product.image !== heroImage) && (
                                            <div style={{ overflow: 'hidden', borderRadius: '8px', margin: '25px 0', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                                                <motion.img
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.5 }}
                                                    src={product.image}
                                                    alt={product.title}
                                                    style={{ width: '100%', display: 'block' }}
                                                />
                                            </div>
                                        )}
                                        <div style={{ color: '#475569', fontSize: '16px' }}>{product.description}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right Column: Sidebar / Order Form */}
                        <div className="sidebar">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="sidebar-widget order-widget"
                                style={{ backgroundColor: '#fff', padding: '35px', borderTop: '4px solid #ed2124', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                            >
                                <h4 style={{ color: '#001f3f', marginBottom: '20px', fontSize: '20px' }}>Order Forms</h4>
                                <p style={{ fontSize: '15px', marginBottom: '25px', color: '#64748b' }}>Download our order forms to get your project started right.</p>
                                <a href={orderFormLink} className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '15px', borderRadius: '6px', fontWeight: 'bold' }}>
                                    <i className="fas fa-file-pdf" style={{ marginRight: '10px' }}></i>
                                    {orderFormText}
                                </a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="sidebar-widget contact-widget"
                                style={{ marginTop: '30px', padding: '35px', background: 'linear-gradient(135deg, #001f3f 0%, #0a3154 100%)', color: 'white', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,31,63,0.3)' }}
                            >
                                <h4 style={{ color: 'white', marginBottom: '15px' }}>Need Expert Advice?</h4>
                                <p style={{ fontSize: '15px', marginBottom: '25px', color: '#cbd5e1', lineHeight: '1.6' }}>Speak to our expert team for advice on your next project.</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '20px', fontWeight: 'bold' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'rgba(237, 33, 36, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ed2124' }}>
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    (03) 1234 5678
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    );
}
