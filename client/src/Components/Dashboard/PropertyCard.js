import "../../App.css";
import { setSelectProperty } from "../../app/features/propertySlice";
import homeIcon from "../../assets/home-icon.svg";
import ButtonManageAccountModals from "../Buttons/ButtonManageAccountModals";
import { useSelector } from "react-redux";
import DeletePropertyModal from "../Modals/DeletePropertyModal";
import EditPropertyModal from "../Modals/EditPropertyModal";

function PropertyCard() {
    const property = useSelector(setSelectProperty);

    let numberofUnits;
    if(property){
        numberofUnits = property.units.length
    }

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
                        <h5 className="card-title user-select-none">{property.name}</h5>
                    </div>
                </div>

                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item user-select-none">
                            Address: {property.address}
                        </li>
                        <li className="list-group-item user-select-none">
                            City: {property.city}{" "}
                        </li>
                        <li className="list-group-item user-select-none">
                            State: {property.state}{" "}
                        </li>
                        <li className="list-group-item user-select-none">
                            Zip code: {property.postal_code}{" "}
                        </li>
                        <li className="list-group-item user-select-none">
                            Country: {property.country}{" "}
                        </li>
                        <li className="list-group-item user-select-none">
                            No. of Units: {numberofUnits}{" "}
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
                            target={"#delete-property"}
                            text={"Delete Property"}
                        />
                    )}
                </div>
                <EditPropertyModal property={property} />
                <DeletePropertyModal />
            </div>
        </div>
    );
}

export default PropertyCard;
