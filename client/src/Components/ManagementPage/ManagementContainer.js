import React from "react";
import PropertyDropDown from "./PropertyList/PropertyDropDown";

function PropertiesContainer() {
    return (
        <div class="container m-3 text-center">
            <div class="row">
                <div class=" col-5 border-end" >
                    <PropertyDropDown />
                </div>
                <div class="col-7">Property Details</div>
            </div>
        </div>
    );
}

export default PropertiesContainer;
