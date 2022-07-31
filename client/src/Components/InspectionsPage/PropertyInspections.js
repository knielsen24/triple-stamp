import PropertyAllInspectionsList from "../AccordianItems/PropertyAllInspectionsList";
import PropertyUpcomingInspections from "../AccordianItems/PropertyUpcomingInspections";

function PropertyInspections() {
    return (
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                    >
                        Accordion Item #1
                    </button>
                </h2>
                <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                >
                    <div className="accordion-body">
                        <strong>
                            This is the first item's accordion body.
                        </strong>{" "}
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                    </div>
                </div>
            </div>

            <PropertyUpcomingInspections />
            <PropertyAllInspectionsList />
        </div>
    );
}

export default PropertyInspections;
