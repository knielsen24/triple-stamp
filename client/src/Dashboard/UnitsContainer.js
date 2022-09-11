import ButtonOpenAddUnitModal from "../Components/Buttons/ButtonOpenAddUnitModal";
import { setSelectProperty } from "../app/features/propertySlice";
import { setUnitsList } from "../app/features/unitsListSlice";
import { selectUnit } from "../app/features/unitSlice";
import { useDispatch, useSelector } from "react-redux";
import UnitDropDown from "../DropDownMenus/UnitDropDown";
import threeDots from "../assets/threedots-horizontal.svg";

function UnitsContainer() {
    const dispatch = useDispatch();
    const property = useSelector(setSelectProperty);
    const unitsListState = useSelector(setUnitsList);

    const buttonClassName =
        "btn btn-secondary dropdown-toggle bg-transparent border-0 p-0";
    const tableClassHover =
        "table table-borderless table-hover text-capitalize";
    const tableClassNoHover = "table table-borderless";

    let renderUnitList;

    if (unitsListState) {
        renderUnitList = unitsListState
            .map((unit) => {
                return (
                    <tr
                        key={unit.id}
                        onClick={() => {
                            dispatch(selectUnit(unit));
                        }}
                    >
                        <td>{unit.number}</td>
                        <td>{unit.label}</td>
                        <td className="pe-0 ">
                            <div className="btn-group dropend">
                                <img
                                    src={threeDots}
                                    alt="threedots-icon"
                                    role="button"
                                    key={unit.id}
                                    className={buttonClassName}
                                    aria-current="true"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    onClick={() => {
                                        dispatch(selectUnit(unit));
                                    }}
                                />
                                <UnitDropDown />
                            </div>
                        </td>
                    </tr>
                );
            })
            .sort((a, b) => a.label - b.label);
    }

    return (
        <div>
            <table className={property.name !== "" ? tableClassHover : tableClassNoHover}>
                <tbody>
                    <tr scope="row">
                        <td colSpan="1"></td>
                        <td colSpan="2">
                            {property.name !== "" ? (
                                <ButtonOpenAddUnitModal />
                            ) : null}
                        </td>
                    </tr>
                    {property.name !== "" ? renderUnitList : null}
                </tbody>
            </table>
        </div>
    );
}

export default UnitsContainer;
