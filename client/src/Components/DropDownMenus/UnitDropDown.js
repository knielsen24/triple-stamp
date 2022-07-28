import React from "react";
import { useSelector } from "react-redux";
import { setSelectProperty } from "../../app/features/propertySlice";

function UnitDropDown() {

        const renderDropDownItems = []

    return (
        <ul class="dropdown-menu">
            <li>
                <a className="dropdown-item" href="#">
                    View Inspections
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                    View Tasks
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                    Edit Information
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li>
                <a className="dropdown-item" href="#">
                    Delete Unit
                </a>
            </li>
        </ul>
    );
}

export default UnitDropDown;
