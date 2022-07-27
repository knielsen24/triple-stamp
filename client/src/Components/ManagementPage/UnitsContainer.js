import React from "react";
import { useSelector } from "react-redux";
import { setSelectProperty } from "../../app/features/propertySlice";

function UnitsContainer() {

    // need rtk for select property. property slice is not asnyc.

    const property = useSelector(setSelectProperty);
    console.log(property)

    // let renderUnitList;

    // if (property) {
    //     const getUnitsList = property.units;
    //     renderUnitList = getUnitsList.map((unit) => {
    //         console.log(unit);
    //     });
    // }

    return (
        <div>
            Units
            {/* <div>{renderUnitList}</div> */}
        </div>
    );
}

export default UnitsContainer;
