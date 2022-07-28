import React from 'react'

function DeleteUnitModal() {
    return (
        <div>
            <div
                className="modal fade"
                id="delete-unit-form"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="delete-unit-form"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="delete-unit-form">
                                Are you sure you want to delete your account?
                            </h5>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                            <p className="float-start m-0" id="modal-subtext">
                                By clicking "Delete My Account" will permantly
                                remove your account with tripleStamp and your
                                information will not be recoverable.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <ButtonCancelModal text={"cancel"} />
                            <ButtonDeleteUser
                                id={user.id}
                                handleDeleteUser={handleDeleteUser}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteUnitModal
