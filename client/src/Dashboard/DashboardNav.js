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

    const navLinkClass = "nav-item btn";
    const imgClass = "align-middle me-2 mb-1"
    let activeClass =
        "nav-link active bg-success bg-opacity-25 text-dark fw-bold border-0 btn";
    let inactiveClass = "nav-link text-dark nav-item";

    let detailsLinkhref;
    property.name !== ""
        ? (detailsLinkhref = "#")
        : (detailsLinkhref = "/inspections/property");

    return (
        <div className="text-center py-1 mb-4 fw-bold ts-primary-green rounded shadow-sm">
            <ul className="nav nav-pills nav-justified">
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
                <li className={navLinkClass}>
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
                </li>
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
                <li className="border-start border-secondary nav-item">
                    <UserDropDown />
                </li>
            </ul>
        </div>
    );
}

export default DashboardNav;
