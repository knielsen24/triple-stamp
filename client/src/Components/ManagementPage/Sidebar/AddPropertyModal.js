import ButtonCancelModal from "../../Buttons/ButtonCancelModal";
import ButtonCloseModalX from "../../Buttons/ButtonCloseModalX";
import AddPropertyForm from "./AddPropertyForm";

function AddPropertyModal() {
    return (
        <div>
            <div
                class="modal fade"
                id="add-property-form"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="add-property-form"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="add-property-form">
                                Create property
                            </h5>
                            <ButtonCloseModalX />
                        </div>
                        <div class="modal-body">
                            <AddPropertyForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPropertyModal;
