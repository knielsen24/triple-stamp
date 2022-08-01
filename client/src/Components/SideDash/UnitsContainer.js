import ButtonOpenAddUnitModal from "../Buttons/ButtonOpenAddUnitModal";
import { setSelectProperty } from "../../app/features/propertySlice";
import { setUnitsList } from "../../app/features/unitsListSlice";
import { selectUnit } from "../../app/features/unitSlice";
import { useDispatch, useSelector } from "react-redux";
import UnitDropDown from "../DropDownMenus/UnitDropDown";
import DeleteUnitModal from "../Modals/DeleteUnitModal";
import EditModalTemp from "../Modals/EditModalTemp";
import AddUnitModal from "../Modals/AddUnitModal";

function UnitsContainer() {
    const dispatch = useDispatch();
    const property = useSelector(setSelectProperty);
    const unitsListState = useSelector(setUnitsList);

    const buttonClassName =
        "list-group-item list-group-item-action border border-0 btn btn-secondary dropdown-toggle dropdown-toggle toggle-align-end";

    let renderUnitList;
    if (unitsListState) {
        renderUnitList = unitsListState.map((unit) => {
            return (
                <div className="btn-group dropend " key={unit.id}>
                    <button
                        key={unit.id}
                        type="button"
                        className={buttonClassName}
                        aria-current="true"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={() => {
                            dispatch(selectUnit(unit));
                        }}
                    >
                        {unit.number + " " + (unit.label || "Label")}
                    </button>
                    <UnitDropDown />
                </div>
            );
        });
    }

    return (
        <div>
            <AddUnitModal />
            <DeleteUnitModal />
            <EditModalTemp
                modalId={"update-unit-form"}
                header={"Edit unit information"}
            />
            <div className=" list-group">
                <ul className="list-group border border-0">
                    {property.name !== "" ? <ButtonOpenAddUnitModal /> : null}
                    {property.name !== "" ? renderUnitList : null}
                </ul>
            </div>
        </div>
    );
}

export default UnitsContainer;
