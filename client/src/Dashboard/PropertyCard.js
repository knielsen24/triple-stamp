import { setSelectProperty } from "../app/features/propertySlice";
import { setUnitsList } from "../app/features/unitsListSlice";
import { useSelector } from "react-redux";
import ButtonManageAccountModals from "../Components/Buttons/ButtonManageAccountModals";
import DeletePropertyModal from "../Modals/DeletePropertyModal";
import homeIcon from "../assets/home-icon.svg";
import EditModalTemp from "../Modals/EditModalTemp";

function PropertyCard() {
    const property = useSelector(setSelectProperty);
    const unitsListState = useSelector(setUnitsList);

    return (
        <div className="container align-content-items-center rounded p-0">
            <EditModalTemp
                modalId={"edit-property-form"}
                header={"Edit your property information"}
                buttonText={"Click update to save changes"}
            />
            <DeletePropertyModal />
            <div id="profile-main-card-container " className="card">
                <div className="text-center" id="profile-card-bg">
                    <div className="m-2 p-1">
                        <img
                            src={homeIcon}
                            className="img-thumbnail"
                            alt="home-icon"
                            width="150px"
                        />
                    </div>
                    <div className="header text-center text-white m-2">
                        <h5 className="card-title">
                            {property.name}
                        </h5>
                    </div>
                </div>

                <div className="card-body">
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item ">
                            Address: {property.address}
                        </li>
                        <li className="list-group-item ">
                            City: {property.city}{" "}
                        </li>
                        <li className="list-group-item ">
                            State: {property.state}{" "}
                        </li>
                        <li className="list-group-item ">
                            Zip code: {property.postal_code}{" "}
                        </li>
                        <li className="list-group-item ">
                            Country: {property.country}{" "}
                        </li>
                        <li className="list-group-item ">
                            No. of Units: {unitsListState.length}{" "}
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
