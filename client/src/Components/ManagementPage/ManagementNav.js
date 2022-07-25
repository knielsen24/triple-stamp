import React from "react";
import PropertyCard from "./Featured/PropertyCard";
import AddPropertyModal from "./Sidebar/AddPropertyModal";
import PropertyDropDown from "./Sidebar/PropertyDropDown";

function ManagementNav() {
    return (
        <div class="container border-endtext-center min-vh-100">
            <div class="row">
                <div class="col-4 vstack p-0 border-end min-vh-100">
                    <p class="text-start">Property</p>
                    <div class="row mw-100 mb-3 align-content-items-center">
                        <PropertyDropDown />
                        <AddPropertyModal />
                    </div>
                    <hr class="w-auto"/>
                </div>
                <div class="col-8 p-0">
                    <PropertyCard />
                </div>
            </div>
        </div>
    );
}

export default ManagementNav;
