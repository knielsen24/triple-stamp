import React from "react";
import AddPropertyModal from "./Sidebar/AddPropertyModal";
import PropertyDropDown from "./Sidebar/PropertyDropDown";

function PropertiesContainer() {
    return (
        <div class="container m-3 border-endtext-center min-vh-100">
            <div class="row">
                <div class=" col-5 border-end min-vh-100" >
                    <PropertyDropDown />
                    <AddPropertyModal />

                </div>
                <div class="col-7">Property Details</div>
            </div>
        </div>
    );
}

export default PropertiesContainer;
