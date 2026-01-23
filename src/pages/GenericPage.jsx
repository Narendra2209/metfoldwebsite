export default function GenericPage({ title, content }) {
    return (
        <div className="generic-page">
            <div className="page-header section-padding bg-light">
                <div className="container text-center">
                    <h1>{title}</h1>
                    <div className="separator"><i className="fas fa-hammer"></i></div>
                </div>
            </div>
            <div className="container section-padding">
                <p>{content || `Welcome to the ${title} page. This is a placeholder for the functionality demonstration.`}</p>
            </div>
        </div>
    );
}
