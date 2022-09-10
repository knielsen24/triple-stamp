import { useSelector } from "react-redux";
import { setSelectProperty } from "../app/features/propertySlice";
import { useFetchPropInspectionsQuery } from "../app/api/propertyApiSlice";
import PropInspectsTable from "../Tables/PropInspectsTable";
import { skipToken } from "@reduxjs/toolkit/dist/query";

function PropUpcomingInspects() {
    const property = useSelector(setSelectProperty);
    const { data: propInspections, isSuccess } = useFetchPropInspectionsQuery(
        property ? property.id : skipToken
    );

    let upcomingList;

    if (isSuccess) {
        upcomingList = propInspections.filter((inspect) => {
            return inspect.status === "upcoming";
        });
    }

    return (
        <div className="accordion-item ">
            <h2 className="accordion-header" id="panelsStayOpen-prop-upcoming">
                <button
                    className="accordion-button bg-info bg-opacity-25 fw-bold text-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-prop-collapseUpcoming"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-prop-collapseUpcoming"
                >
                    Upcoming
                </button>
            </h2>
            <div
                id="panelsStayOpen-prop-collapseUpcoming"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-prop-upcoming"
            >
                <div className="accordion-body p-0">
                    <PropInspectsTable propInspections={upcomingList} />
                </div>
            </div>
        </div>
    );
}

export default PropUpcomingInspects;
