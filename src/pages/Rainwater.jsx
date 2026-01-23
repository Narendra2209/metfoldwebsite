import ServicePage from '../components/ServicePage';

export default function Rainwater() {
    const products = [
        {
            title: "Quad Gutter",
            description: "A classic gutter profile suited to traditional homes. High capacity and available with slots for overflow protection.",
            image: "/assets/img/rainwater.png"
        },
        {
            title: "Half Round Gutter",
            description: "A modern, self-cleaning profile. Perfect for contemporary architectural designs.",
        },
        {
            title: "Downpipes",
            description: "Round and rectangular downpipes in various sizes (75mm, 90mm, 100mm) to verify water flow efficiency.",
        }
    ];

    return (
        <ServicePage
            title="Rainwater Goods"
            subtitle="Gutters & Downpipes"
            heroImage="/assets/img/rainwater.png"
            introText="Protect your property from water damage with our high-quality rainwater goods. We manufacture and supply gutters, downpipes, and rainheads in all Colorbond colours."
            products={products}
            orderFormText="Rainwater Order Form"
        />
    );
}
