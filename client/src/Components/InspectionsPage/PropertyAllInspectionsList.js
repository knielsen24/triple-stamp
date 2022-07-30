import React from "react";
import { useFetchPropInspectionsQuery } from "../../app/services/propertyApiSlice";

function PropertyAllInspectionsList() {

    const { data: propInspections } = useFetchPropInspectionsQuery();
    console.log(propInspections)

    let allPropInspect;

    if (propInspections) {
        allPropInspect = propInspections.map((inspect) => {
            <ul class="list-group list-group-horizontal" key={inspect.id} >
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item ">A second item</li>
                    <li class="list-group-item ">A third item</li>
                    <li class="list-group-item ">A third item</li>
            </ul>
        })
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
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item ">A second item</li>
                    <li class="list-group-item ">A third item</li>
                    <li class="list-group-item ">A third item</li>
                </ul>
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
