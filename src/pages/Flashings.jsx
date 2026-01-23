import ServicePage from '../components/ServicePage';

export default function Flashings() {
    const products = [
        {
            title: "Standard Flashings",
            description: (
                <>
                    <p>We supply a wide range of standard Colorbond flashings suitable for all residential and commercial roofing applications. Our flashings are available in all Colorbond colours and Zincalume.</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                        <li>Ridge Capping</li>
                        <li>Valley Gutters</li>
                        <li>Barge Capping</li>
                        <li>Apron Flashings</li>
                    </ul>
                </>
            ),
            image: "/assets/img/flashings.png"
        },
        {
            title: "Custom Fabrication",
            description: "If you have specific requirements, our state-of-the-art folding machines can create custom flashings up to 8 meters in length. Just provide us with your drawings and specifications.",
        }
    ];

    return (
        <ServicePage
            title="Colorbond Flashings"
            subtitle="Metfold Sheet Metal"
            heroImage="/assets/img/flashings.png"
            introText="High-quality metal flashings are essential for weatherproofing your roof. At Metfold, we manufacture and supply premium quality flashings tailored to your exact needs, ensuring a perfect fit and long-lasting protection."
            products={products}
            orderFormText="Flashings Order Form"
        />
    );
}
