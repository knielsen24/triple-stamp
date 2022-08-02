import ButtonOpenAddUnitModal from "../Buttons/ButtonOpenAddUnitModal";
import { setSelectProperty } from "../../app/features/propertySlice";
import { setUnitsList } from "../../app/features/unitsListSlice";
import { selectUnit } from "../../app/features/unitSlice";
import { useDispatch, useSelector } from "react-redux";
import UnitDropDown from "../DropDownMenus/UnitDropDown";
import DeleteUnitModal from "../Modals/DeleteUnitModal";
import EditModalTemp from "../Modals/EditModalTemp";
import AddUnitModal from "../Modals/AddUnitModal";
import threeDots from "../../assets/threedots.svg";

function UnitsContainer() {
    const dispatch = useDispatch();
    const property = useSelector(setSelectProperty);
    const unitsListState = useSelector(setUnitsList);

    const buttonClassName =
        "btn btn-secondary dropdown-toggle bg-transparent border-0";
    let renderUnitList;
    if (unitsListState) {
        renderUnitList = unitsListState.map((unit) => {
            return (
                <tr
                    key={unit.id}
                    onClick={() => {
                        dispatch(selectUnit(unit));
                    }}
                >
                    <td scope="col">{unit.number}</td>
                    <td scope="col">{unit.label}</td>
                    {/* render on hover */}
                    <td scope="col">
                        <div className="btn-group dropend ">
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
            <table className="table table-borderless table-hover">
                <tbody>
                    <tr scope="row">
                        <td scope="col" colSpan="1"></td>
                        <td scope="col" colSpan="2">
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

//  /* <button
//                         key={unit.id}
//                         type="button"
//                         className={buttonClassName}
//                         aria-current="true"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                         onClick={() => {
//                             dispatch(selectUnit(unit));
//                         }}
//                     ></button> */}
//                 {/* {unit.number + " " + (unit.label || "Label")}

//                     /> */
