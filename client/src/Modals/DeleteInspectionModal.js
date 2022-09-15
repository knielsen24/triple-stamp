import { useDeleteInspectMutation } from "../app/api/propertyApiSlice";
import { useSelector } from "react-redux";
import ButtonCancelModal from "../Components/Buttons/ButtonCancelModal";
import ButtonCloseModalX from "../Components/Buttons/ButtonCloseModalX";
import ButtonDeleteItem from "../Components/Buttons/ButtonDeleteItem";
import { setSelectInspection } from "../app/features/inspectionSlice";

function DeleteInspectionModal() {
    const inspection = useSelector(setSelectInspection);
    const [deleteInspect] = useDeleteInspectMutation();

    const handleDeleteInspection = (id) => deleteInspect(id);

    return (
        <div>
            <div
                className="modal fade"
                id="delete-inspections-modal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="delete-inspections-modal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-min-w">
                    <div className="modal-content">
                        <div className="modal-header bg-light">
                            <h6
                                className="modal-title"
                                id="delete-inspections-modal"
                            >
                                Are you sure you want to delete this inspection?
                            </h6>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <p className="float-start">
                                    By clicking "Delete" will
                                    permantly remove this item from this property.
                                </p>
                            </div>
                            <div className="float-end">
                                <ButtonCancelModal />
                                <ButtonDeleteItem
                                    handleDelete={handleDeleteInspection}
                                    id={inspection.id}
                                    text={"Delete"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteInspectionModal;
