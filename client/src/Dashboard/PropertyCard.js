import { setSelectProperty } from "../app/features/propertySlice";
import { setUnitsList } from "../app/features/unitsListSlice";
import { useSelector } from "react-redux";
import ButtonManageAccountModals from "../Components/Buttons/ButtonManageAccountModals";
import homeIcon from "../assets/home-icon.svg";
import {
    useFetchPropertyQuery,
    useFetchPropInspectionsQuery,
} from "../app/api/propertyApiSlice";
import { skipToken } from "@reduxjs/toolkit/dist/query";

function PropertyCard() {
    const property = useSelector(setSelectProperty);
    const unitsListState = useSelector(setUnitsList);
    const { data: propInspections, isSuccess } = useFetchPropInspectionsQuery(
        property ? property.id : skipToken
    );

    const { data: propertyFetch, isError } = useFetchPropertyQuery(
        property ? property.id : skipToken
    );

    console.log(property);

    return (
        <div className="container align-content-items-center rounded p-0 mt-3 shadow-sm dash-page-mt">
            <div className="card" id="profile-main-card-container">
                <div className="text-center rounded-top  " id="profile-card-bg">
                    <div className="bg-light rounded-top m-4 mb-0 p-2 justify-content-center border">
                        <img
                            className="rounded"
                            src={property.image ? property.image : homeIcon}
                            alt="profileIcon"
                            width="130px"
                        />
                    </div>
                    <div className="header bg-secondary bg-gradient mx-4 rounded-bottom text-center shadow-sm">
                        <div className="w-auto ts-primary-green accent-trim-profile-card "></div>
                        <h5 className="card-title text-white p-2">
                            {property.name !== "" ? property.name : ""}{" "}
                            {property.address ? `| ${property.address}` : ""}
                        </h5>
                    </div>
                </div>
                <div className="card-body p-1 mx-4">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item ">
                            <div className="row d-flex justify-content-center">
                                <div className="col-5 text-start">
                                    <h6 className="fw-bold">Property Facts</h6>
                                    <div className="row d-flex ">
                                        <div className="col">Square/feet:</div>
                                        <div className="col">
                                            {propertyFetch && !isError
                                                ? propertyFetch.total_square_feet
                                                : "0"}{" "}
                                        </div>
                                    </div>
                                    <div className="row d-flex ">
                                        <div className="col">No. Units:</div>
                                        <div className="col">
                                            {property
                                                ? unitsListState.length
                                                : ""}
                                        </div>
                                    </div>
                                    <div className="row d-flex">
                                        <div className="col">
                                            No. Inspections:
                                        </div>
                                        <div className="col">
                                            {propInspections
                                                ? propInspections.length
                                                : "0"}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-5 text-start">
                                    <h6 className="fw-bold">Full Address</h6>
                                    <div className="row ms-1 d-flex ">
                                        <div className="col">
                                            <div className="row ">Street:</div>
                                            <div className="row">City:</div>
                                            <div className="row">
                                                State, Zip:
                                            </div>
                                            {/* <div className="row">Country:</div> */}
                                        </div>
                                        <div className="col">
                                            <div className="row ">
                                                {property
                                                    ? property.address
                                                    : ""}
                                            </div>
                                            <div className="row">
                                                {property ? property.city : ""}
                                            </div>
                                            <div className="row">
                                                {property.state !== "" &&
                                                property.postal_code !== ""
                                                    ? `${property.state}, ${property.postal_code}`
                                                    : ""}
                                            </div>
                                            {/* <div className="row ">
                                                {property
                                                    ? property.country
                                                    : ""}
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card-footer bg-white text-muted text-center mx-4">
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
