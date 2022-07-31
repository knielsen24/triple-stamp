import { useDeleteUnitMutation } from "../../app/services/propertyApiSlice";
import { setUnitsList, unitsList } from "../../app/features/unitsListSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSelectUnit } from "../../app/features/unitSlice";
import ButtonCancelModal from "../Buttons/ButtonCancelModal";
import ButtonCloseModalX from "../Buttons/ButtonCloseModalX";
import ButtonDeleteItem from "../Buttons/ButtonDeleteItem";

function DeleteInspectionModal() {
    const dispatch = useDispatch();
    const unitState = useSelector(setSelectUnit);
    const unitsListState = useSelector(setUnitsList);
    const [deleteUnit] = useDeleteUnitMutation();

    const handleDeleteInspection = (id) => {
        console.log(id);
        // deleteUnit(id).then(() => {
        //     const filteredList = unitsListState.filter(
        //         (unit) => unit.id !== id
        //     );
        //     dispatch(unitsList(filteredList));
        // });
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
                                id={""}
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
