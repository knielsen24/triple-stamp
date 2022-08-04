import PropertyDropDown from "../DropDownMenus/PropertyDropDown";
import AddPropertyModal from "../Modals/AddPropertyModal";
import DashBoardNav from "./DashboardNav";
import PropertyCard from "../DetailsPage/PropertyCard";
import { Route, Routes } from "react-router-dom";
import UnitsContainer from "../Dashboard/UnitsContainer";
import InspectionsContainer from "../InspectionsPage/InspectionsContainer";
import EditModalTemp from "../Modals/EditModalTemp";
import DashboardMain from "./DashboardMain";

function DashboardContainer() {
    return (
        <div className="container min-vh-100">
            <EditModalTemp
                modalId={"add-inspection-form"}
                header={"Add inspection"}
                buttonText={"Click update to save changes"}
            />
            <div className="row my-2">
                <div className="col mt-3 border rounded min-vh-100 vw-25">
                    <p className="text-start user-select-none mt-3 mb-2 ms-2 ps-0">
                        My property
                    </p>
                    <div className="row mw-100 mb-3 justify-content-center">
                        <PropertyDropDown />
                        <AddPropertyModal />
                    </div>
                    <hr className="w-auto m-0" />
                    <UnitsContainer />
                </div>
                <div className="col-9 p-0 mx-3 mt-3 vw-75 bg-secondary rounded bg-gradient bg-opacity-25">
                    <div className="row mx-3 mt-5">
                        <p className="text-center user-select-none mb-1"></p>
                        <DashBoardNav />
                        <Routes>
                            <Route path="/main" element={<DashboardMain />} />
                            <Route
                                path="/inspections/*"
                                element={<InspectionsContainer />}
                            />
                            <Route path="/tasks" />
                            <Route path="/details" element={<PropertyCard />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardContainer;
