import { useSelector } from "react-redux";
import { setSelectProperty } from "../app/features/propertySlice";
import { useFetchPropInspectionsQuery } from "../app/api/propertyApiSlice";
import PropInspectsTable from "../Tables/PropInspectsTable";
import { skipToken } from "@reduxjs/toolkit/dist/query";

function PropSemiInspects() {
    const property = useSelector(setSelectProperty);
    const { data: propInspections, isSuccess } = useFetchPropInspectionsQuery(
        property ? property.id : skipToken
    );

    let inspectionList;

    if (isSuccess) {
        inspectionList = propInspections.filter((inspect) => {
            return inspect.type_name === "semi-annual";
        });
    }
    console.log(inspectionList)

    return (
        <div className="accordion-item ">
            <h2 className="accordion-header" id="panelsStayOpen-prop-semi-annual">
                <button
                    className="accordion-button collapsed accordian-purple-muted-bg fw-bold text-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-prop-collapse-semi-annual"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-prop-collapse-semi-annual"
                >
                    Semi-Annual
                </button>
            </h2>
            <div
                id="panelsStayOpen-prop-collapse-semi-annual"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-prop-semi-annual"
            >
                <div className="accordion-body p-0">
                    <PropInspectsTable propInspections={inspectionList} />
                </div>
            </div>
        </div>
    );
}

export default PropSemiInspects;
