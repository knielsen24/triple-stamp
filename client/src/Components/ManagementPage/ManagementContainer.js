import PropertyDropDown from "../DropDownMenus/PropertyDropDown";
import AddPropertyModal from "../Modals/AddPropertyModal";
import DeleteUnitModal from "../Modals/DeleteUnitModal";
import DashBoardNav from "../Dashboard/DashBoardNav";
import PropertyCard from "../Dashboard/PropertyCard";
import AddUnitsModal from "../Modals/AddUnitModal";
import { Route, Routes } from "react-router-dom";
import UnitsContainer from "./UnitsContainer";

function PropertiesContainer() {
    return (
        <div className="container border-endtext-center min-vh-100">
            <div className="row my-3">
                <div className="col-4 vstack p-0 border-end min-vh-100 ">
                    <p className="text-start user-select-none">
                        Select Property
                    </p>
                    <div className="row mw-100 mb-3 align-content-items-center">
                        <PropertyDropDown />
                        <AddPropertyModal />
                        <AddUnitsModal />
                        <DeleteUnitModal />
                    </div>
                    <hr className="w-auto" />
                    <UnitsContainer />
                </div>
                <div className="col-8 p-0">
                    <div className="row mx-3">
                        <p className="text-center user-select-none">
                            Dashboard
                        </p>
                        <DashBoardNav />
                    </div>
                    <Routes>
                        <Route path="inspections" />
                        <Route path="tasks" />
                        <Route
                            path="property-details"
                            element={<PropertyCard />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default PropertiesContainer;
