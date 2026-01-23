import ServicePage from '../components/ServicePage';

export default function Fabrication() {
    const products = [
        {
            title: "Heavy Gauge Folding",
            description: "We can cut and fold mild steel, aluminium, and stainless steel up to 3.0mm thickness.",
            image: "/assets/img/hero1.png"
        },
        {
            title: "Custom Projects",
            description: "From planter boxes to custom architectural features, our skilled fabricators can bring your design to life.",
        }
    ];

    return (
        <ServicePage
            title="Custom Fabrication"
            subtitle="Heavy Gauge Services"
            heroImage="/assets/img/hero1.png"
            introText="Our workshop is equipped with the latest CNC machinery, allowing us to handle complex fabrication tasks with precision and speed."
            products={products}
            orderFormText="Fabrication Order Form"
        />
    );
}
