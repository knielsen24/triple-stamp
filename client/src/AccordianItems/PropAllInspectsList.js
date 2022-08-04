import { useFetchPropInspectionsQuery } from "../app/api/propertyApiSlice";
import PropInspectsTable from "../Tables/PropInspectsTable";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useSelector } from "react-redux";
import { setSelectProperty } from "../app/features/propertySlice";

function PropAllInspectsList() {
    const property = useSelector(setSelectProperty);

    const {
        data: propInspections,
        isSuccess,
        isLoading,
    } = useFetchPropInspectionsQuery(property ? property.id : skipToken);

    let completeList;

    if (isSuccess) {
        completeList = propInspections
    }

    return (
        <div className="accordion-item ">
            <h2 className="accordion-header" id="open-prop-all-inspections">
                <button
                    className="accordion-button collapsed ts-primary-orange text-white fw-bold"
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
                    <PropInspectsTable propInspections={completeList} />
                </div>
            </div>
        </div>
    );
}

export default PropAllInspectsList;
