import { useSelector } from "react-redux";
import { setSelectProperty } from "../app/features/propertySlice";
import { setSelectUnit } from "../app/features/unitSlice";
import { useFetchPropInspectionsQuery } from "../app/api/propertyApiSlice";
import PropInspectsTable from "../Tables/PropInspectsTable";

function UnitAllInspects() {
    const property = useSelector(setSelectProperty);
    // const { data: propInspections } = useFetchPropInspectionsQuery(
    //     property.id || ""
    // );
    const unitState = useSelector(setSelectUnit);

    let upcomingList;
    // if (propInspections) {
    //     upcomingList = propInspections.filter((inspect) => {
    //         return inspect.status === "upcoming";
    //     });
    // }

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-prop-upcoming">
                <button
                    className="accordion-button"
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
                <div className="accordion-body bg-light bg-opacity-50">
                    <PropInspectsTable
                    // propInspections={upcomingList}
                    />
                </div>
            </div>
        </div>
    );
}

export default UnitAllInspects;
