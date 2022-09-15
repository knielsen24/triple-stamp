import { NavLink, Link } from "react-router-dom";
import UserDropDown from "../DropDownMenus/UserDropDown";

function DashboardNav() {
    const navLinkClass = "nav-link h-100";
    const dropDownClass = "mx-4 dropdown position-relative dropdown-zIndex";

    let activeClass =
        "nav-link fw-bold ts-primary-green text-dark navbar-text rounded";
    let inactiveClass =
        "nav-link text-dark align-items-center navbar-text rounded ";

    // let detailsLinkhref;
    // property.name !== ""
    //     ? (detailsLinkhref = "#")
    //     : (detailsLinkhref = "/inspections/property");

    return (
        <div className="row-fluid p-0">
            <nav className="navbar-nav rounded bg-white shadow-sm sticky-top p-0 border ">
                <ul className="nav nav-justified align-items-center align-items-end">
                    <li className={navLinkClass}>
                        <NavLink
                            as={Link}
                            to="main"
                            className={({ isActive }) =>
                                isActive ? activeClass : inactiveClass
                            }
                        >
                            Main{" "}
                        </NavLink>
                    </li>
                    <li className={navLinkClass}>
                        <NavLink
                            as={Link}
                            to="inspections"
                            className={({ isActive }) =>
                                isActive ? activeClass : inactiveClass
                            }
                        >
                            Inspections
                        </NavLink>
                    </li>

                    <li className={navLinkClass}>
                        <NavLink
                            as={Link}
                            to="details"
                            className={({ isActive }) =>
                                isActive ? activeClass : inactiveClass
                            }
                        >
                            Details
                        </NavLink>
                    </li>
                    <div className="vr my-2"></div>
                    <li className={dropDownClass}>
                        <NavLink as={Link} to="#">
                            <UserDropDown />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default DashboardNav;
