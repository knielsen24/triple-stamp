import { setSelectProperty } from "../app/features/propertySlice";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home-icon.svg";
import calendarIcon from "../assets/calendar-icon.svg";

function DashboardNav() {
    const property = useSelector(setSelectProperty);

    let activeClass =
        "nav-link active bg-white text-dark fw-bold border-0";
    let inactiveClass = "nav-link text-dark btn";

    let detailsLinkhref;
    property.name !== ""
        ? (detailsLinkhref = "#")
        : (detailsLinkhref = "/inspections/property");

    // need conditional rendering on inspections tab

    return (
        <div className="text-center p-2 mb-3 fw-bold ts-primary-green rounded">
            <ul className="nav nav-pills nav-justified">
                <li className="nav-item justify-content-center">
                    <NavLink
                        to="main"
                        className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                        }
                    >
                        Main{" "}
                        <img
                            src={homeIcon}
                            alt="edit-icon"
                            className="align-middle mb-1"
                        />
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
                        <img
                            src={calendarIcon}
                            alt="edit-icon"
                            className="align-middle ms-2 mb-1"
                        />
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

export default DashboardNav;
