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

    const navLinkClass = "nav-link h-100";
    const dropDownClass = "mx-4 dropdown";
    // border-start rounded-0 border-secondary
    const imgClass = "me-1 mb-1 ";
    let activeClass =
        "nav-link fw-bold ts-primary-green text-dark navbar-text rounded pill-height ";
    let inactiveClass =
        "nav-link text-dark align-items-center navbar-text rounded ";

    let detailsLinkhref;
    property.name !== ""
        ? (detailsLinkhref = "#")
        : (detailsLinkhref = "/inspections/property");

    return (
        <nav className="navbar-nav rounded bg-white shadow-sm sticky-top p-0">
            <ul className="nav nav-justified align-items-center align-items-end">
                <li className={navLinkClass}>
                    <NavLink
                        to="main"
                        className={({ isActive }) =>
                            isActive ? activeClass : inactiveClass
                        }
                    >
                        {/* <img
                            src={homeIcon}
                            alt="home-icon"
                            className={imgClass}
                        /> */}
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
                        {/* <img
                            src={calendarIcon}
                            alt="calendar-icon"
                            className={imgClass}
                        /> */}
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
                        {/* <img
                            src={detailsIcon}
                            alt="Clipboard-icon"
                            className={imgClass}
                        /> */}
                        Details
                    </NavLink>
                </li>
                <div className="vr h-75 align-self-center"></div>
                <li className={dropDownClass}>
                    <NavLink to="#">
                        <UserDropDown />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default DashboardNav;
