import PropertyDropDown from "../DropDownMenus/PropertyDropDown";
import AddPropertyModal from "../Modals/AddPropertyModal";
import DashBoardNav from "./DashboardNav";
import PropertyCard from "../DetailsPage/PropertyCard";
import { Route, Routes } from "react-router-dom";
import UnitsContainer from "../ManagementPage/UnitsContainer";
import InspectionsContainer from "../InspectionsPage/InspectionsContainer";
import EditModalTemp from "../Modals/EditModalTemp";

function DashboardContainer() {
    return (
        <div className="container border-endtext-center min-vh-100">
            <EditModalTemp
                modalId={"add-inspections-form"}
                header={"Add inspection"}
            />
            <div className="row my-2">
                <div className="col px-2 border-end min-vh-100 vw-25">
                    <p className="text-center user-select-none mb-1">
                        Select Property
                    </p>
                    <div className="row mw-100 mb-3 align-content-items-center">
                        <PropertyDropDown />
                        <AddPropertyModal />
                    </div>
                    <hr className="w-auto m-0" />
                    <UnitsContainer />
                </div>
                <div className="col-9 p-0 mx-3 vw-75">
                    <div className="row mx-3">
                        <p className="text-center user-select-none mb-1">
                            Dashboard
                        </p>
                        <DashBoardNav />
                        <Routes>
                            <Route path="main" />
                            <Route
                                path="inspections/*"
                                element={<InspectionsContainer />}
                            />
                            <Route path="tasks" />
                            <Route path="details" element={<PropertyCard />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardContainer;
