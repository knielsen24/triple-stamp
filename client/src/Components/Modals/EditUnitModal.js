import ButtonCloseModalX from "../Buttons/ButtonCloseModalX";


function EditUnitModal() {
    return (
        <div>
            <div
                className="modal fade"
                id="update-unit-form"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="update-unit-form"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="update-unit-form">
                                Edit unit information
                                <div>
                                    <p id="modal-subtext">
                                        Click save changes to update
                                    </p>
                                </div>
                            </h5>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                            {/* <EditProfileForm /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditUnitModal;
