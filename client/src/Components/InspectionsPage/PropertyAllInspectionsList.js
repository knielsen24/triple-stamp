import React from "react";
import { useSelector } from "react-redux";
import { setSelectProperty } from "../../app/features/propertySlice";
import { useFetchPropInspectionsQuery } from "../../app/services/propertyApiSlice";

function PropertyAllInspectionsList() {
    const property = useSelector(setSelectProperty);
    const { data: propInspections } = useFetchPropInspectionsQuery(
        property.id || ""
    );

    let allPropInspect;

    if (propInspections) {
        console.log(propInspections);
        allPropInspect = propInspections.map((inspect) => {
            return (
                <ul
                    className="list-group list-group-horizontal"
                    key={inspect.id}
                >
                    <li className="list-group-item flex-fill rounded-0">
                        {inspect.title}
                    </li>
                    <li className="list-group-item flex-fill rounded-0">
                        {inspect.type_name}
                    </li>
                    <li className="list-group-item flex-fill rounded-0">
                        {inspect.status}
                    </li>
                    <li className="list-group-item flex-fill rounded-0">
                        {inspect.scheduled_date}
                    </li>
                </ul>
            );
        });
    }

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                >
                    All
                </button>
            </h2>
            <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
            >
                <div className="accordion-body bg-light bg-opacity-75">
                    <ul className="list-group list-group-horizontal flex-fill text-center">
                        <li className="list-group-item bg-secondary rounded-0 bg-opacity-50 flex-fill ">
                            Title
                        </li>
                        <li className="list-group-item bg-secondary rounded-0 bg-opacity-50 flex-fill">
                            Type
                        </li>
                        <li className="list-group-item bg-secondary rounded-0 bg-opacity-50 flex-fill">
                            Status
                        </li>
                        <li className="list-group-item bg-secondary rounded-0 bg-opacity-50 flex-fill">
                            Date
                        </li>{" "}
                    </ul>
                    {allPropInspect}
                </div>
            </div>
        </div>
    );
}

export default PropertyAllInspectionsList;
