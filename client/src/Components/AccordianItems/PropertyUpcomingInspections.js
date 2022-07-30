import PropertyAllInspecitonsTable from "../Tables/PropertyAllInspecitonsTable";

function PropertyUpcomingInspections() {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-prop-upcoming">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-prop-collapseUpcoming"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-prop-collapseUpcoming"
                >
                    Upcoming
                </button>
            </h2>
            <div
                id="panelsStayOpen-prop-collapseUpcoming"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-prop-upcoming"
            >
                <div className="accordion-body bg-light bg-opacity-50">
                    <PropertyAllInspecitonsTable />
                </div>
            </div>
        </div>
    );
}

export default PropertyUpcomingInspections;
