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

    const navLinkClass = "nav-link h-100 ";
    const dropDownClass = "nav-item btn border-0 ";
    // border-start rounded-0 border-secondary
    const imgClass = "me-1 mb-1 ";
    let activeClass =
        "nav-link active fw-bold bg-secondary text-dark bg-opacity-50 border-0 navbar-text h-100";
    let inactiveClass =
        "nav-link text-dark align-items-center navbar-text";

    let detailsLinkhref;
    property.name !== ""
        ? (detailsLinkhref = "#")
        : (detailsLinkhref = "/inspections/property");

    return (
        <nav className="navbar-nav ts-primary-green rounded shadow-sm sticky-top">
            <ul className="nav nav-pills nav-justified align-items-center">
                <li className={navLinkClass}>
                    <NavLink
                        to="main"
                        className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                        }
                    >
                        <img
                            src={homeIcon}
                            alt="home-icon"
                            className={imgClass}
                        />
                        Main{" "}
                    </NavLink>
                </li>
                <li className={navLinkClass}>
                    <NavLink
                        to="inspections"
                        className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                        }
                    >
                        <img
                            src={calendarIcon}
                            alt="calendar-icon"
                            className={imgClass}
                        />
                        Inspections
                    </NavLink>
                </li>
                {/* <li className={navLinkClass}>
                    <NavLink
                        to="items"
                        className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                        }
                    >
                        <img
                            src={checkListIcon}
                            alt="checklist-icon"
                            className={imgClass}
                        />
                        Items
                    </NavLink>
                </li> */}
                <li className={navLinkClass}>
                    <NavLink
                        to="details"
                        className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                        }
                    >
                        <img
                            src={detailsIcon}
                            alt="Clipboard-icon"
                            className={imgClass}
                        />
                        Details
                    </NavLink>
                </li>
                <li className={dropDownClass}>
                    {/* "border-start border-secondary nav-item" */}
                    <NavLink to="#">
                        <UserDropDown />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default DashboardNav;
