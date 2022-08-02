import { useSelector } from "react-redux";
import { setSelectProperty } from "../app/features/propertySlice";
import { useFetchPropInspectionsQuery } from "../app/services/propertyApiSlice";
import PropInspectsTable from "../Tables/PropInspectsTable";

function PropInProgressInspects() {
    const property = useSelector(setSelectProperty);
    const { data: propInspections } = useFetchPropInspectionsQuery(
        property.id || ""
    );

    let inProgressList;
    if (propInspections) {
        inProgressList = propInspections.filter((inspect) => {
            return inspect.status === "in progress";
        });
    }

    return (
        <div className="accordion-item">
            <h2
                className="accordion-header"
                id="open-prop-inProgress-inspections"
            >
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#open-prop-inProgress-inspections-collapse"
                    aria-expanded="false"
                    aria-controls="open-prop-inProgress-inspections-collapse"
                >
                    In Progress
                </button>
            </h2>
            <div
                id="open-prop-inProgress-inspections-collapse"
                className="accordion-collapse collapse"
                aria-labelledby="open-prop-inProgress-inspections"
            >
                <div className="accordion-body bg-light bg-opacity-50">
                    <PropInspectsTable propInspections={inProgressList} />
                </div>
            </div>
        </div>
    );
}

export default PropInProgressInspects;
