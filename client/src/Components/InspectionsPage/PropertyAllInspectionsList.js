import React from "react";
import { useSelector } from "react-redux";
import { setSelectProperty } from "../../app/features/propertySlice";
import { useFetchPropInspectionsQuery } from "../../app/services/propertyApiSlice";

function PropertyAllInspectionsList() {
    const property = useSelector(setSelectProperty);
    const { data: propInspections } = useFetchPropInspectionsQuery(property.id || "");

    let allPropInspect;

    if (propInspections) {
        console.log(propInspections);
        allPropInspect = propInspections.map((inspect) => {
            return (
                <ul className="list-group list-group-horizontal" key={inspect.id}>
                    <li className="list-group-item">{inspect.title}</li>
                    <li className="list-group-item ">A second item</li>
                    <li className="list-group-item ">A third item</li>
                    <li className="list-group-item ">A third item</li>
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
                {allPropInspect}
                {/* <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                    These classNamees control the overall appearance, as well as
                    the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML
                    can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                </div> */}
            </div>
        </div>
    );
}

export default PropertyAllInspectionsList;
