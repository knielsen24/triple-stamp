import React from "react";
import { useSelector } from "react-redux";
import { setSelectProperty } from "../../app/features/propertySlice";

function UnitsContainer() {

    const property = useSelector(setSelectProperty);

    let renderUnitList;

    if (property) {
        const getUnitsList = property.units;
        renderUnitList = getUnitsList.map((unit) => {
            return (
                <button
                    type="button"
                    class="list-group-item list-group-item-action"
                    aria-current="true"
                    key={unit.id}
                    onClick={()=>{}}
                >
                    {unit.number + " " + (unit.name || "name")}
                </button>
            );
        });
    }

    return (
        <div>
            {/* {property.name + " " + "units"} */}
            <div className=" list-group">
                <ul className="list-group list-group-flush">
                    {property.name !== "" ? renderUnitList : null}
                </ul>
            </div>
        </div>
    );
}

export default UnitsContainer;
