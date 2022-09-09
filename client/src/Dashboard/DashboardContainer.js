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

function DashboardContainer() {
    const { data: user, isError, isLoading } = useFetchUserQuery();

    return (
        <div className="container h-100 dashboard-containter ">
            <EditAddModal
                modalId={"add-inspection-form"}
                header={"Add inspection"}
            />
            <EditAddModal
                modalId={"add-property-form"}
                header={"Add property"}
            />
            <div className="row mh-100">
                <div className="col border rounded vw-25 shadow-sm mt-1 ">
                    <div className="row sticky-top" >
                        <div className="text-start user-select-none mt-3 mb-2 ms-4 ps-0 fw-bold position-relative">
                            <img
                                src={buildingIcon}
                                alt="edit-icon"
                                className="align-middle mb-1 me-2"
                            />
                            My property
                        </div>
                        <div className="row mw-100 mb-3 justify-content-center">
                            <PropertyDropDown />
                        </div>
                    </div>

                    <hr className="w-auto m-0" />
                    <UnitsContainer />
                </div>
                <div className="col-md-9 rounded bg-gradient bg-opacity-25 col-m-12 mt-1 sticky-top">
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
