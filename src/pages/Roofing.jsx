import ServicePage from '../components/ServicePage';

export default function Roofing() {
    const products = [
        {
            title: "Corrugated Iron",
            description: "The classic Australian roof profile. Durable, versatile, and suitable for traditional and contemporary homes. 762mm cover width.",
            image: "/assets/img/roofing.png"
        },
        {
            title: "Decking / Trimdek",
            description: "A subtle square-fluted steel cladding. Long spanning capabilities make it ideal for industrial applications and low-pitch roofs.",
        }
    ];

    return (
        <ServicePage
            title="Metal Roofing Supplies"
            subtitle="Metfold Roofing"
            heroImage="/assets/img/roofing.png"
            introText="We supply the full range of BlueScope Steel roofing profiles. Whether you need the timeless look of Corrugated or the strength of Decking profiles, we have you covered."
            products={products}
            orderFormText="Roofing Order Form"
        />
    );
}
