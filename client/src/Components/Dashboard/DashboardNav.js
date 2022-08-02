import { setSelectProperty } from "../../app/features/propertySlice";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function DashboardNav() {
    const property = useSelector(setSelectProperty);

    let activeClass = "nav-link active bg-secondary bg-opacity-75 fw-bold" ;
    let inactiveClass = "nav-link text-dark ";

    let detailsLinkhref;
    property.name !== ""
        ? (detailsLinkhref = "#")
        : (detailsLinkhref = "/inspections/property");


    // need conditional rendering on inspections tab

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
                        to="inspections/property"
                        className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                        }
                    >
                        Inspections
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="reports"
                        className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                        }
                    >
                        Reports
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

export default DashboardNav;
