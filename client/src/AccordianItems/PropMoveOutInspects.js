import { useSelector } from "react-redux";
import { setSelectProperty } from "../app/features/propertySlice";
import { useFetchPropInspectionsQuery } from "../app/api/propertyApiSlice";
import PropInspectsTable from "../Tables/PropInspectsTable";
import { skipToken } from "@reduxjs/toolkit/dist/query";

function PropMoveOutInspects() {
    const property = useSelector(setSelectProperty);
    const { data: propInspections, isSuccess } = useFetchPropInspectionsQuery(
        property ? property.id : skipToken
    );

    let inspectionList;

    if (isSuccess) {
        inspectionList = propInspections.filter((inspect) => {
            return inspect.type_name === "move-out";
        });
    }
    console.log(inspectionList)

    return (
        <div className="accordion-item ">
            <h2 className="accordion-header" id="panelsStayOpen-prop-move-out">
                <button
                    className="accordion-button collapsed bg-warning bg-opacity-25 fw-bold text-secondary py-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-prop-collapse-move-out"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-prop-collapse-move-out"
                >
                    Move-Out
                </button>
            </h2>
            <div
                id="panelsStayOpen-prop-collapse-move-out"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-prop-move-out"
            >
                <div className="accordion-body p-0">
                    <PropInspectsTable propInspections={inspectionList} />
                </div>
            </div>
        </div>
    );
}

export default PropMoveOutInspects;
