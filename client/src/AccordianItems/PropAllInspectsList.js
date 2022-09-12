import { useFetchPropInspectionsQuery } from "../app/api/propertyApiSlice";
import PropInspectsTable from "../Tables/PropInspectsTable";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useSelector } from "react-redux";
import { setSelectProperty } from "../app/features/propertySlice";

function PropAllInspectsList({ tableHeight }) {
    const property = useSelector(setSelectProperty);

    const { data: propInspections, isSuccess } = useFetchPropInspectionsQuery(
        property ? property.id : skipToken
    );

    let completeList;

    if (isSuccess) {
        completeList = propInspections;
    }

    return (
        <div className="accordion p-0" id="accordionPanelsStayOpenExample">
            <div className="accordion-item ">
                <h2
                    className="accordion-header"
                    id="open-prop-all-inspections"
                >
                    <button
                        className="accordion-button accordian-purple-muted-bg text-secondary fw-bold py-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#open-prop-all-inspections-collapse"
                        aria-expanded="true"
                        aria-controls="open-prop-all-inspections-collapse"
                    >
                        All
                    </button>
                </h2>
                <div
                    id="open-prop-all-inspections-collapse"
                    className="accordion-collapse collapse show "
                    aria-labelledby="open-prop-all-inspections"
                >
                    <div className="accordion-body p-0 table-height-all overflow-auto">
                        <PropInspectsTable propInspections={completeList} tableHeight={tableHeight} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropAllInspectsList;
