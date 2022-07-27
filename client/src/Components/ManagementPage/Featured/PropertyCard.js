import "../../../App.css";
import {
    selectProperty,
    setSelectProperty,
} from "../../../app/features/propertySlice";
import homeIcon from "../../../assets/home-icon.svg";
import DeleteProfileModal from "../../ProfilePage/DeleteProfileModal";
import ButtonManageAccountModals from "../../Buttons/ButtonManageAccountModals";
import { useSelector } from "react-redux";
import DeletePropertyModal from "./DeletePropertyModal";
import EditPropertyModal from "./EditPropertyModal";

function PropertyCard() {
    const property = useSelector(setSelectProperty);

    return (
        <div className="container align-content-items-center">
            <div id="profile-main-card-container" className="card m-3">
                <div className="text-center" id="profile-card-bg">
                    <div className="m-2 p-1">
                        <img
                            src={homeIcon}
                            className="img-thumbnail"
                            alt="profileIcon"
                            width="150px"
                        />
                    </div>
                    <div className="header text-center text-white">
                        <h5 className="card-title">{property.name}</h5>
                    </div>
                </div>

                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Address: {property.address}
                        </li>
                        <li className="list-group-item">
                            City: {property.city}{" "}
                        </li>
                        <li className="list-group-item">
                            State: {property.state}{" "}
                        </li>
                        <li className="list-group-item">
                            Zip code: {property.postal_code}{" "}
                        </li>
                        <li className="list-group-item">
                            Country: {property.country}{" "}
                        </li>
                        <li className="list-group-item">
                            # Units: {property.units}{" "}
                        </li>
                    </ul>
                </div>
                <div className="card-footer bg-white text-muted text-center">
                    {property.name === "Select Property" ? null : (
                        <ButtonManageAccountModals
                            target={"#edit-property-form"}
                            text={"Edit Details"}
                        />
                    )}
                    {property.name === "Select Property" ? null : (
                        <ButtonManageAccountModals
                            target={"#delete-property"}
                            text={"Delete Property"}
                        />
                    )}
                </div>
                <EditPropertyModal />
                <DeletePropertyModal />
            </div>
        </div>
    );
}

export default PropertyCard;
