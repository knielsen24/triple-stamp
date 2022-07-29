import { useDispatch, useSelector } from "react-redux";
import { setSelectProperty } from "../../app/features/propertySlice";
import { selectUnit } from "../../app/features/unitSlice";
import { setUnitsList } from "../../app/features/unitsListSlice";
import ButtonOpenAddUnitModal from "../Buttons/ButtonOpenAddUnitModal";
import UnitDropDown from "../DropDownMenus/UnitDropDown";

function UnitsContainer() {
    const dispatch = useDispatch();
    const property = useSelector(setSelectProperty);
    const unitsListState = useSelector(setUnitsList)

    const buttonClassName =
        "list-group-item list-group-item-action border border-0 btn btn-secondary dropdown-toggle dropdown-toggle ";

    let renderUnitList;
    if (unitsListState) {
        renderUnitList = unitsListState.map((unit) => {
            return (
                <div className="btn-group dropend" key={unit.id}>
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
