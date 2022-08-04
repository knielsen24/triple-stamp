import PropertyDropDown from "../DropDownMenus/PropertyDropDown";
import AddPropertyModal from "../Modals/AddPropertyModal";
import DashBoardNav from "./DashboardNav";
import PropertyCard from "./PropertyCard";
import { Route, Routes } from "react-router-dom";
import UnitsContainer from "../Dashboard/UnitsContainer";
import InspectionsContainer from "../InspectionsPage/InspectionsContainer";
import EditModalTemp from "../Modals/EditModalTemp";
import DashboardMain from "./DashboardMain";
import buildingIcon from "../assets/building-icon.svg";
import { useFetchUserQuery } from "../app/api/userApiSlice";
import ProfileHome from "./ProfileHome";
import ItemsContainer from "./ItemsContainer";

function DashboardContainer() {
    const { data: user, isError, isLoading } = useFetchUserQuery();

    return (
        <div className="container ">
            <EditModalTemp
                modalId={"add-inspection-form"}
                header={"Add inspection"}
                buttonText={""}
            />
            <div className="row ">
                <div className="col mt-3 border rounded min-vh-100 vw-25 ">
                    <p className="text-start user-select-none mt-3 mb-2 ms-2 ps-0 fw-bold ">
                        My property{" "}
                        <img
                            src={buildingIcon}
                            alt="edit-icon"
                            className="align-middle mb-1"
                        />
                    </p>
                    <div className="row mw-100 mb-3 justify-content-center ">
                        <PropertyDropDown />
                        <AddPropertyModal />
                    </div>
                    <hr className="w-auto m-0" />
                    <UnitsContainer />
                </div>
                <div className="col-md-9 p-0 mx-1 mt-2 vw-75 rounded bg-gradient bg-opacity-25 col-m-12">
                    <div className="row ms-3">
                        <p className="text-center user-select-none mb-1"></p>
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
                                    !user || isError ? null : <ProfileHome />
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
