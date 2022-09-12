import { useSelector } from "react-redux";
import { setSelectProperty } from "../app/features/propertySlice";
import { useFetchPropInspectionsQuery } from "../app/api/propertyApiSlice";
import PropInspectsTable from "../Tables/PropInspectsTable";
import { skipToken } from "@reduxjs/toolkit/dist/query";

function PropMoveInInspects() {
    const property = useSelector(setSelectProperty);
    const { data: propInspections, isSuccess } = useFetchPropInspectionsQuery(
        property ? property.id : skipToken
    );

    let inspectionList;

    if (isSuccess) {
        inspectionList = propInspections.filter((inspect) => {
            return inspect.type_name === "move-in";
        });
    }
    console.log(inspectionList)

    return (
        <div className="accordion-item ">
            <h2 className="accordion-header" id="panelsStayOpen-prop-move-in">
                <button
                    className="accordion-button bg-info bg-opacity-25 fw-bold text-secondary py-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-prop-collapse-move-in"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-prop-collapse-move-in"
                >
                    Move-In
                </button>
            </h2>
            <div
                id="panelsStayOpen-prop-collapse-move-in"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-prop-move-in"
            >
                <div className="accordion-body p-0">
                    <PropInspectsTable propInspections={inspectionList} />
                </div>
            </div>
        </div>
    );
}

export default PropMoveInInspects;
