import React from "react";
import PropertyCard from "./Featured/PropertyCard";
import AddPropertyModal from "./Sidebar/AddPropertyModal";
import PropertyDropDown from "./Sidebar/PropertyDropDown";
import UnitsContainer from "./UnitsContainer";

function PropertiesContainer() {
    return (
        <div className="container border-endtext-center min-vh-100">
            <div className="row">
                <div className="col-4 vstack p-0 border-end min-vh-100">
                    <p className="text-start">Select Property</p>
                    <div className="row mw-100 mb-3 align-content-items-center">
                        <PropertyDropDown />
                        <AddPropertyModal />

                    </div>
                    <hr className="w-auto"/>
                    <UnitsContainer />
                </div>
                <div className="col-8 p-0">
                    <PropertyCard />
                </div>
            </div>
        </div>
    );
}

export default PropertiesContainer;
