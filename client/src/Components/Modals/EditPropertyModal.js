import ButtonCloseModalX from "../Buttons/ButtonCloseModalX";
import EditPropertyForm from "../Forms/EditPropertyForm";

function EditPropertyModal() {
    return (
        <div>
            <div
                className="modal fade"
                id="edit-property-form"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="edit-property-form"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="edit-property-form"
                            >
                                Edit your property information
                                <div>
                                    <p id="modal-subtext">
                                        Click save changes to update
                                    </p>
                                </div>
                            </h5>

                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                            <EditPropertyForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditPropertyModal;
