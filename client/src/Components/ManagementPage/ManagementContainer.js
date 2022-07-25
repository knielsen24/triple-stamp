import React from "react";
import AddPropertyModal from "./Sidebar/AddPropertyModal";
import PropertyDropDown from "./Sidebar/PropertyDropDown";

function PropertiesContainer() {
    return (
        <div class="container border-endtext-center min-vh-100">
            <div class="row">
                <div class="col-4 w-auto p-0 border-end min-vh-100">
                    <p class="text-start">Property</p>
                    <div class="row mb-3">
                        <PropertyDropDown />
                        <AddPropertyModal />
                    </div>
                    <hr class="w-auto"/>
                </div>
                <div class="col-8 p-0">
                    <p class="text-start">Property Details</p>
                </div>
            </div>
        </div>
    );
}

export default PropertiesContainer;
