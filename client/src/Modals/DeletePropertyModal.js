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
    const [deleteProperty] = useDeletePropertyMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inititialState = {
        name: "",
        id: "",
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
                        <div className="modal-header bg-light">
                            <h6
                                className="modal-title"
                                id="delete-property-form"
                            >
                                Are you sure you want to delete this property?
                            </h6>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <p className="float-start">
                                    {property.name} at {property.address}
                                </p>
                                <p className="float-start">
                                    By clicking "Delete" will
                                    permantly remove this property from your account including all
                                    associated information.
                                </p>
                            </div>
                            <div className="float-end">
                                <ButtonCancelModal />
                                <ButtonDeleteItem
                                    id={property.id}
                                    handleDelete={handleDeleteProperty}
                                    text={"delete"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeletePropertyModal;
