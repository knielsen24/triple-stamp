import { useSelector } from "react-redux";
import { setSelectProperty } from "../app/features/propertySlice";
import { useFetchPropInspectionsQuery } from "../app/api/propertyApiSlice";
import PropInspectsTable from "../Tables/PropInspectsTable";
import { skipToken } from "@reduxjs/toolkit/dist/query";

function PropCompletedInspects() {
    const property = useSelector(setSelectProperty);
    const { data: propInspections, isSuccess } = useFetchPropInspectionsQuery(
        property ? property.id : skipToken
    );

    let completedList;

    if (isSuccess) {
        completedList = propInspections.filter((inspect) => {
            return inspect.status === "completed";
        });
    }

    return (
        <div className="accordion-item">
            <h2
                className="accordion-header"
                id="open-prop-completed-inspections"
            >
                <button
                    className="accordion-button collapsed bg-light text-success fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#open-prop-completed-inspections-collapse"
                    aria-expanded="false"
                    aria-controls="open-prop-completed-inspections-collapse"
                >
                    Completed
                </button>
            </h2>
            <div
                id="open-prop-completed-inspections-collapse"
                className="accordion-collapse collapse"
                aria-labelledby="open-prop-completed-inspections"
            >
                <div className="accordion-body bg-light bg-opacity-50">
                    <PropInspectsTable propInspections={completedList} />
                </div>
            </div>
        </div>
    );
}

export default PropCompletedInspects;
