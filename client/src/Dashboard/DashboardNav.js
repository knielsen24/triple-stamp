import { setSelectProperty } from "../app/features/propertySlice";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home-icon.svg";
import calendarIcon from "../assets/calendar-icon.svg";
import checkListIcon from "../assets/check-list-icon.svg";
import detailsIcon from "../assets/details-icon.svg";
import UserDropDown from "../DropDownMenus/UserDropDown";

function DashboardNav() {
    const property = useSelector(setSelectProperty);

    let activeClass = "nav-link active bg-white p-2 text-dark fw-bold border-0";
    let inactiveClass = "nav-link text-dark btn";

    let detailsLinkhref;
    property.name !== ""
        ? (detailsLinkhref = "#")
        : (detailsLinkhref = "/inspections/property");

    // need conditional rendering on inspections tab

    return (
        <div className="text-center py-1 mb-4 fw-bold ts-primary-green rounded justify-content-center sticky-top">
            <ul className="nav nav-pills nav-justified">
                <li className="nav-item p-0 m-0 btn">
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
                <li className="nav-item p-0 m-0 btn">
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
                <li className="nav-item p-0 m-0 btn">
                    <NavLink
                        to="tasks"
                        className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                        }
                    >
                        Tasks{" "}
                        <img
                            src={checkListIcon}
                            alt="edit-icon"
                            className="align-middle ms-2 mb-1"
                        />
                    </NavLink>
                </li>
                <li className="nav-item p-0 m-0 btn">
                    <NavLink
                        to="details"
                        className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                        }
                    >
                        Details
                        <img
                            src={checkListIcon}
                            alt="edit-icon"
                            className="align-middle ms-2 mb-1"
                        />
                    </NavLink>
                </li>
                <li>
                <UserDropDown />
                </li>
            </ul>
        </div>
    );
}

export default DashboardNav;
