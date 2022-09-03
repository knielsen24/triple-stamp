import ButtonCloseModalX from "../Components/Buttons/ButtonCloseModalX";
import AddInspectionForm from "../Forms/AddInspectionForm";
import AddPropertyForm from "../Forms/AddPropertyForm";
import AddUnitForm from "../Forms/AddUnitForm";
import EditInspectionForm from "../Forms/EditInspectionForm";
import EditProfileForm from "../Forms/EditProfileForm";
import EditPropertyForm from "../Forms/EditPropertyForm";
import EditUnitForm from "../Forms/EditUnitForm";

function EditAddModal({ modalId, header }) {
    let renderForm;
    if (modalId === "edit-property-form") {
        renderForm = <EditPropertyForm />;
    }
    if (modalId === "update-profile-form") {
        renderForm = <EditProfileForm />;
    }
    if (modalId === "update-unit-form") {
        renderForm = <EditUnitForm />;
    }
    if (modalId === "edit-inspection-form") {
        renderForm = <EditInspectionForm />;
    }
    if (modalId === "add-inspection-form") {
        renderForm = <AddInspectionForm />;
    }
    if (modalId === "add-property-form") {
        renderForm = <AddPropertyForm />;
    }
    if (modalId === "add-unit-form") {
        renderForm = <AddUnitForm />;
    }

    return (
        <div>
            <div
                className="modal fade"
                id={modalId}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby={modalId}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-min-w">
                    <div className="modal-content">
                        <div className="modal-header bg-light">
                            <h5 className="modal-title" id={modalId}>
                                {header}
                            </h5>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">{renderForm}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditAddModal;
