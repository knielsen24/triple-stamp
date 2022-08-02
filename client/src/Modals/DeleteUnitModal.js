import { useDeleteUnitMutation } from "../app/services/propertyApiSlice";
import { setUnitsList, unitsList } from "../app/features/unitsListSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSelectUnit } from "../app/features/unitSlice";
import ButtonCancelModal from "../Buttons/ButtonCancelModal";
import ButtonCloseModalX from "../Buttons/ButtonCloseModalX";
import ButtonDeleteItem from "../Buttons/ButtonDeleteItem";

function DeleteUnitModal() {
    const dispatch = useDispatch();
    const unitState = useSelector(setSelectUnit);
    const unitsListState = useSelector(setUnitsList);
    const [deleteUnit] = useDeleteUnitMutation();

    const handleDeleteUnit = (id) => {
        deleteUnit(id).then(() => {
            const filteredList = unitsListState.filter(
                (unit) => unit.id !== id
            );
            dispatch(unitsList(filteredList));
        });
    };

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
                                By clicking "Delete Unit" will permantly remove
                                this item from your selected property.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <ButtonCancelModal />
                            <ButtonDeleteItem
                                id={unitState.id}
                                handleDelete={handleDeleteUnit}
                                text={"Delete this unit"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteUnitModal;
