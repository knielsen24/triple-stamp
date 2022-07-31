import { useDeleteInspectMutation, useDeleteUnitMutation } from "../../app/services/propertyApiSlice";
import { setUnitsList, unitsList } from "../../app/features/unitsListSlice";
import { useDispatch, useSelector } from "react-redux";
import ButtonCancelModal from "../Buttons/ButtonCancelModal";
import ButtonCloseModalX from "../Buttons/ButtonCloseModalX";
import ButtonDeleteItem from "../Buttons/ButtonDeleteItem";
import { setSelectInspection } from "../../app/features/inspectionSlice";

function DeleteInspectionModal() {
    const dispatch = useDispatch();
    const inspection = useSelector(setSelectInspection)
    const [deleteInspect] = useDeleteInspectMutation()

    const handleDeleteInspection = (id) => {
        console.log(id);
        deleteInspect(id).then(() => {
            // const filteredList = unitsListState.filter(
            //     (unit) => unit.id !== id
            // );
            // dispatch(unitsList(filteredList));
        });
    };

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
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="delete-inspections-modal"
                            >
                                Are you sure you want to delete this inspection?
                            </h5>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                            <p className="float-start m-0" id="modal-subtext">
                                By clicking "Delete Inspection" will permantly
                                remove this item from your account.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <ButtonCancelModal />
                            <ButtonDeleteItem
                                handleDelete={handleDeleteInspection}
                                id={inspection.id}
                                text={"Delete Inspection"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteInspectionModal;
