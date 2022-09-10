import PropertyDropDown from "../DropDownMenus/PropertyDropDown";
import DashBoardNav from "./DashboardNav";
import PropertyCard from "./PropertyCard";
import { Route, Routes } from "react-router-dom";
import UnitsContainer from "../Dashboard/UnitsContainer";
import InspectionsContainer from "../InspectionsPage/InspectionsContainer";
import EditAddModal from "../Modals/EditAddModal";
import DashboardMain from "./DashboardMain";
import buildingIcon from "../assets/building-icon.svg";
import { useFetchUserQuery } from "../app/api/userApiSlice";
import ProfileCard from "./ProfileCard";
import ItemsContainer from "./ItemsContainer";
import DeleteProfileModal from "../Modals/DeleteProfileModal";
import DeletePropertyModal from "../Modals/DeletePropertyModal";
import DeleteUnitModal from "../Modals/DeleteUnitModal";
import DeleteInspectionModal from "../Modals/DeleteInspectionModal";
import ModalsContainer from "./ModalsContainer";

function DashboardContainer() {
    const { data: user, isError, isLoading } = useFetchUserQuery();

    return (
        <div className="container dashboard-containter ">
            <ModalsContainer />
            <div className="row mh-100">
                <div className="col dash-height units-container border rounded shadow-sm mt-1 overflow-x-0 sticky-top mw-100">
                    <div className="row sticky-top bg-white mb-0">
                        <div className="text-start user-select-none mt-3 mb-2 ms-4 ps-0 fw-bold sticky-top">
                            <img
                                src={buildingIcon}
                                alt="edit-icon"
                                className="mb-1 me-2"
                            />
                            My property
                        </div>
                        <div className="row justify-content-center">
                            <PropertyDropDown />
                        </div>
                        <hr className="align-items-center mx-1 mt-3 mb-0"></hr>
                    </div>
                    <UnitsContainer />
                </div>
                <div className="col-md-9 dash-height rounded bg-gradient bg-opacity-25 col-m-12 mt-1 sticky-top overflow-auto">
                    <div className="row ms-1">
                        <DashBoardNav />
                        <Routes>
                            <Route path="/main" element={<DashboardMain />} />
                            <Route
                                path="/inspections/*"
                                element={<InspectionsContainer />}
                            />
                            <Route path="/items" element={<ItemsContainer />} />
                            <Route path="/details" element={<PropertyCard />} />
                            <Route
                                path="/profile"
                                element={
                                    !user || isError ? null : <ProfileCard />
                                }
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardContainer;
