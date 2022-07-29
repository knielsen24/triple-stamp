import { setSelectProperty } from "../../app/features/propertySlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function DashBoardNav() {
    const property = useSelector(setSelectProperty);
    // const [activePill, setActivePill] = useState(null);

    let activeClass = "nav-link active bg-secondary bg-opacity-75 fw-bold" ;
    let inactiveClass = "nav-link text-dark ";

    let detailsLinkhref;
    property.name !== ""
        ? (detailsLinkhref = "#")
        : (detailsLinkhref = "/management/property-details");

    return (
        <div className="text-center mb-3">
            <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                    <NavLink
                        to="main"
                        className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                        }
                    >
                        Main
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="inspections"
                        className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                        }
                    >
                        Inspections
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="tasks"
                        className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                        }
                    >
                        Tasks
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="details"
                        className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                        }
                    >
                        Details
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default DashBoardNav;
