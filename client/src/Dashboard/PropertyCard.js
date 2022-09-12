import { setSelectProperty } from "../app/features/propertySlice";
import { setUnitsList } from "../app/features/unitsListSlice";
import { useSelector } from "react-redux";
import ButtonManageAccountModals from "../Components/Buttons/ButtonManageAccountModals";
import homeIcon from "../assets/home-icon.svg";
import { useFetchPropInspectionsQuery } from "../app/api/propertyApiSlice";
import { skipToken } from "@reduxjs/toolkit/dist/query";

function PropertyCard() {
    const property = useSelector(setSelectProperty);
    const unitsListState = useSelector(setUnitsList);
    const { data: propInspections, isSuccess } = useFetchPropInspectionsQuery(
        property ? property.id : skipToken
    );

    console.log(propInspections);
    // console.log(property.units.length)
    // property.units.length is not updating state on the dom

    return (
        <div className="container align-content-items-center rounded p-0 mt-3 shadow-sm dash-page-mt">
            <div className="card" id="profile-main-card-container">
                <div className="text-center bg-light" id="profile-card-bg">
                    <div className="m-2 p-1">
                        <img src={homeIcon} alt="home-icon" width="115px" />
                    </div>
                    <div className="header text-center">
                        <h5 className="card-title text-dark m-2 p-1">
                            {property.name}
                        </h5>
                    </div>
                </div>

                <div className="card-body p-1">
                    <ul className="list-group list-group-flush ">
                        {/* <li className="list-group-item ">
                            <div className="row d-flex justify-content-center">

                                <div className="col-6 ">
                                    {property ? property.address : ""}
                                </div>
                            </div>
                        </li> */}
                        <li className="list-group-item ">
                            <div className="row d-flex justify-content-center">
                                <div className="col-3 text-end ">Address:</div>
                                <div className="col-3 text-start">
                                    <div className="row">
                                        {property ? property.address : ""}
                                    </div>
                                    <div className="row">
                                        {property ? property.city : ""}
                                    </div>
                                    <div className="row">
                                        {property.address
                                            ? property.state +
                                              (property.state ? ", " : "") +
                                              property.postal_code
                                            : ""}
                                    </div>
                                    <div className="row text-start">
                                        {property ? property.country : ""}
                                    </div>
                                </div>
                                <div className="col-2 text-start">
                                    <div className="row">Total sq/ft:</div>
                                    <div className="row">Total units:</div>
                                    <div className="row">
                                        Total Inspections:
                                    </div>
                                </div>
                                <div className="col-3 ">
                                    <div className="row text-start">
                                        {property ? unitsListState.length : ""}
                                    </div>
                                    <div className="row text-start">
                                        {property ? unitsListState.length : ""}
                                    </div>
                                    <div className="row text-start">
                                        {propInspections
                                            ? propInspections.length
                                            : ""}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card-footer bg-white text-muted text-center">
                    {property.name === "" ? null : (
                        <ButtonManageAccountModals
                            target={"#edit-property-form"}
                            text={"Edit Details"}
                        />
                    )}
                    {property.name === "" ? null : (
                        <ButtonManageAccountModals
                            target={"#delete-property-form"}
                            text={"Delete Property"}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;
