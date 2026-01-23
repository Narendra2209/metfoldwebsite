import ServicePage from '../components/ServicePage';

export default function Accessories() {
    const products = [
        {
            title: "Fasteners & Screws",
            description: "A complete range of roofing screws for timber and metal battens, available in all Colorbond colours.",
            image: "/assets/img/hero1.png"
        },
        {
            title: "Sealants & Silicones",
            description: "High-performance roof and gutter silicones for a watertight finish.",
        },
        {
            title: "Insulation",
            description: "Roofing blanket and sisalation foil to improve thermal efficiency and condensation control.",
        }
    ];

    return (
        <ServicePage
            title="Roofing Accessories"
            subtitle="Everything You Need"
            heroImage="/assets/img/hero1.png"
            introText="Complete your project with our range of professional roofing accessories. We stock everything from screws and rivets to insulation and tools."
            products={products}
            orderFormText="Accessories List"
        />
    );
}
