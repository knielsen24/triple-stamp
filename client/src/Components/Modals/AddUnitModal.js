import ButtonCloseModalX from "../Buttons/ButtonCloseModalX";
import AddUnitForm from "../Forms/AddUnitForm";

function AddUnitModal() {
    return (
        <div>
            <div
                className="modal fade"
                id="add-unit-form"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="add-unit-form"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="add-unit-form">
                                Add unit to property
                            </h5>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                            <AddUnitForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddUnitModal;
