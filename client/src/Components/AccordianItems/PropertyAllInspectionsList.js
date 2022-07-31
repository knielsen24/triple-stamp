import PropertyAllInspecitonsTable from "../Tables/PropertyAllInspecitonsTable";

function PropertyAllInspectionsList() {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="open-prop-all-inspections">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#open-prop-all-inspections-collapse"
                    aria-expanded="false"
                    aria-controls="open-prop-all-inspections-collapse"
                >
                    All
                </button>
            </h2>
            <div
                id="open-prop-all-inspections-collapse"
                className="accordion-collapse collapse"
                aria-labelledby="open-prop-all-inspections"
            >
                <div className="accordion-body bg-light bg-opacity-50">
                    <PropertyAllInspecitonsTable />
                </div>
            </div>
        </div>
    );
}

export default PropertyAllInspectionsList;
