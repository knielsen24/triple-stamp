import React from "react";
import { useSelector } from "react-redux";
import { setSelectProperty } from "../../app/features/propertySlice";
import { useFetchPropInspectionsQuery } from "../../app/services/propertyApiSlice";

function test() {
    const propertyState = useSelector(setSelectProperty)
    console.log(propertyState)
    const [fetchPropInspections] = useFetchPropInspectionsQuery(propertyState)

    return <div>test</div>;
}

export default test;
