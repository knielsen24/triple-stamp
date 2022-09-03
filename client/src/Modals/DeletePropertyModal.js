import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    selectProperty,
    setSelectProperty,
} from "../app/features/propertySlice";
import { useDeletePropertyMutation } from "../app/api/propertyApiSlice";
import ButtonCancelModal from "../Components/Buttons/ButtonCancelModal";
import ButtonCloseModalX from "../Components/Buttons/ButtonCloseModalX";
import ButtonDeleteItem from "../Components/Buttons/ButtonDeleteItem";

function DeletePropertyModal() {
    const property = useSelector(setSelectProperty);
    const [deleteProperty, isLoading] = useDeletePropertyMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inititialState = {
        name: "",
        id: "",
        name: "",
        address: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
        units: [{ label: "name" }],
        user_id: "",
    };

    const handleDeleteProperty = (id) => {
        deleteProperty(id).then(() => {
            dispatch(selectProperty(inititialState));
            navigate("/dashboard/main");
        });
    };

    return (
        <div>
            <div
                className="modal fade"
                id="delete-property-form"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="delete-property-form"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-min-w">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="delete-property-form"
                            >
                                Are you sure you want to delete this property?
                            </h5>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                            <div>
                                <p className="float-start" id="modal-subtext">
                                    {property.name} at {property.address}
                                </p>
                            </div>
                            <p className="float-start m-0" id="modal-subtext">
                                By clicking "Delete This property" will
                                permantly remove the property and all associated
                                information will not be recoverable.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <ButtonCancelModal />
                            <ButtonDeleteItem
                                id={property.id}
                                handleDelete={handleDeleteProperty}
                                text={"Delete this property"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeletePropertyModal;
