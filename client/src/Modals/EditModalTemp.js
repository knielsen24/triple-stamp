import ButtonCloseModalX from "../Components/Buttons/ButtonCloseModalX";
import AddInspectionForm from "../Forms/AddInspectionForm";
import EditInspectionForm from "../Forms/EditInspectionForm";
import EditProfileForm from "../Forms/EditProfileForm";
import EditPropertyForm from "../Forms/EditPropertyForm";
import EditUnitForm from "../Forms/EditUnitForm";

function EditModalTemp({ modalId, header, buttonText }) {
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
    if (modalId === "edit-inspections-form") {
        renderForm = <EditInspectionForm />;
    }
    if (modalId === "add-inspections-form") {
        renderForm = <AddInspectionForm />;
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
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={modalId}>
                                {header}
                                <div>
                                    <p id="modal-subtext">
                                        {buttonText}
                                    </p>
                                </div>
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

export default EditModalTemp;
