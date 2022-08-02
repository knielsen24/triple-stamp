import ButtonCloseModalX from "../Components/Buttons/ButtonCloseModalX";
import AddPropertyForm from "../Forms/AddPropertyForm";

function AddPropertyModal() {
    return (
        <div>
            <div
                className="modal fade"
                id="add-property-form"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="add-property-form"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="add-property-form">
                                Create property
                            </h5>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                            <AddPropertyForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPropertyModal;
