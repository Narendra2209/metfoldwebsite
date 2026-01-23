import ServicePage from '../components/ServicePage';

export default function Cladding() {
    const products = [
        {
            title: "Standing Seam",
            description: "A popular choice for modern architectural projects, offering clean vertical lines and concealed fixings. Available in 25mm and 38mm rib heights.",
            image: "/assets/img/cladding.png"
        },
        {
            title: "Nail Strip",
            description: "An easy-to-install system that doesn't require specialized tools for closing the seams. Creates a similar aesthetic to Standing Seam.",
        },
        {
            title: "Interlocking Panel",
            description: "A versatile system providing a flat, recessed joint appearance. Ideal for both vertical and horizontal applications.",
        }
    ];

    return (
        <ServicePage
            title="Architectural Cladding"
            subtitle="Modern & Durable"
            heroImage="/assets/img/cladding.png"
            introText="Transform the look of your building with our range of architectural metal wall cladding systems. Metfold provides precise fabrication of diverse profiles in Colorbond, Zincalume, Copper, and Zinc."
            products={products}
            orderFormText="Cladding Order Form"
        />
    );
}
