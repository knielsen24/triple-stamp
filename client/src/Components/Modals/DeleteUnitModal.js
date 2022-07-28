import React from 'react'
import ButtonCancelModal from '../Buttons/ButtonCancelModal';
import ButtonCloseModalX from '../Buttons/ButtonCloseModalX';
import ButtonDeleteUnit from '../Buttons/ButtonDeleteUnit';

function DeleteUnitModal() {

    const handleDeleteUnit = () => {

    }

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
                                Are you sure you want to delete this unit?
                            </h5>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                            <p className="float-start m-0" id="modal-subtext">
                                By clicking "Delete Unit" will permantly
                                remove this item and your
                                information will not be recoverable.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <ButtonCancelModal text={"cancel"} />
                            <ButtonDeleteUnit handleDelete={handleDeleteUnit} />
                            {/* <ButtonDeleteUser
                                // id={user.id}
                                handleDeleteUser={handleDeleteUser}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteUnitModal
