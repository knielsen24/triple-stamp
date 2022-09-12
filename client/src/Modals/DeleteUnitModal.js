import { useDeleteUnitMutation } from "../app/api/propertyApiSlice";
import { setUnitsList, unitsList } from "../app/features/unitsListSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSelectUnit } from "../app/features/unitSlice";
import ButtonCancelModal from "../Components/Buttons/ButtonCancelModal";
import ButtonCloseModalX from "../Components/Buttons/ButtonCloseModalX";
import ButtonDeleteItem from "../Components/Buttons/ButtonDeleteItem";

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
                <div className="modal-dialog modal-dialog-centered modal-min-w">
                    <div className="modal-content">
                        <div className="modal-header bg-light">
                            <h6 className="modal-title" id="delete-unit-form">
                                Are you sure you want to delete this unit?
                            </h6>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <p className="float-start">
                                    By clicking "Delete" will permantly
                                    remove this item from your selected property
                                    and all associated inspections.
                                </p>
                            </div>
                            <div className="float-end">
                                <ButtonCancelModal />
                                <ButtonDeleteItem
                                    id={unitState.id}
                                    handleDelete={handleDeleteUnit}
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

export default DeleteUnitModal;
