import "../../../App.css";
import {
    selectProperty,
    setSelectProperty,
} from "../../../app/features/propertySlice";
import homeIcon from "../../../assets/home-icon.svg";
import DeleteProfileModal from "../../ProfilePage/DeleteProfileModal";
import ButtonManageAccountModals from "../../Buttons/ButtonManageAccountModals";
import { useSelector } from "react-redux";

function PropertyCard() {
    const property = useSelector(setSelectProperty);

    return (
        <div class="container align-content-items-center">
            <div id="profile-main-card-container" class="card m-3">
                <div class="text-center" id="profile-card-bg">
                    <div class="m-2 p-1">
                        <img
                            src={homeIcon}
                            class="img-thumbnail"
                            alt="profileIcon"
                            width="150px"
                        />
                    </div>
                    <div class="header text-center text-white">
                        <h5 class="card-title">{property.name}</h5>
                    </div>
                </div>

                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            Address: {property.address}
                        </li>
                        <li class="list-group-item">City: {property.city} </li>
                        <li class="list-group-item">State: {property.state} </li>
                        <li class="list-group-item">Zip code: {property.postal_code} </li>
                        <li class="list-group-item">Country: {property.country} </li>
                        <li class="list-group-item"># Units: {property.units} </li>
                    </ul>
                </div>
                <div class="card-footer bg-white text-muted text-center">
                    <ButtonManageAccountModals
                        target={""}
                        text={"Edit Details"}
                    />
                    <ButtonManageAccountModals
                        target={""}
                        text={"Delete Property"}
                    />
                </div>
                {/* <EditProfileModal /> */}
                <DeleteProfileModal />
            </div>
        </div>
    );
}

export default PropertyCard;
