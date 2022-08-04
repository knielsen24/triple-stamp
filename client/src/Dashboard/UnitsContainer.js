import ButtonOpenAddUnitModal from "../Components/Buttons/ButtonOpenAddUnitModal";
import { setSelectProperty } from "../app/features/propertySlice";
import { setUnitsList } from "../app/features/unitsListSlice";
import { selectUnit } from "../app/features/unitSlice";
import { useDispatch, useSelector } from "react-redux";
import UnitDropDown from "../DropDownMenus/UnitDropDown";
import DeleteUnitModal from "../Modals/DeleteUnitModal";
import EditModalTemp from "../Modals/EditModalTemp";
import AddUnitModal from "../Modals/AddUnitModal";
import threeDots from "../assets/threedots-horizontal.svg";
import { useState } from "react";

function UnitsContainer() {
    const dispatch = useDispatch();
    const property = useSelector(setSelectProperty);
    const unitsListState = useSelector(setUnitsList);

    const buttonClassName =
        "btn btn-secondary dropdown-toggle bg-transparent border-0 p-0";

    let renderUnitList;
    let sortedList;

    if (unitsListState) {
        // sortedList = unitsListState.map(unit => unit.label);
        // console.log(sortedList);
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
                        {/* render on hover */}
                        <td className="pe-0 start-end">
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
        <div className="align-items-center">
            <AddUnitModal />
            <DeleteUnitModal />
            <EditModalTemp
                modalId={"update-unit-form"}
                header={"Edit unit information"}
                buttonText={"Click update to save changes"}
            />
            <table className="table table-borderless table-hover user-select-none ">
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
