import { useFetchUserQuery } from "../app/api/userApiSlice";
import Logout from "../Login-Logout/Logout";
import { Link } from "react-router-dom";
import dashboardIcon from "../assets/dashboard-icon.svg";
import personIcon from "../assets/person-icon.svg";

function UserDropDown() {
    const { data: user, isError } = useFetchUserQuery();

    return (
        <div className="dropdown center inline p-1">
            <a
                className="btn btn-secondary dropdown-toggle nav-drop-down-btn"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {!user || isError ? "" : user.full_name}
            </a>
            <ul className="dropdown-menu">
                <li>
                    <Link to="/dashboard/profile" className="dropdown-item">
                        <img
                            src={personIcon}
                            alt="profile-icon"
                            className="align-middle me-2 mb-1"
                        />
                        My profile
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/main" className="dropdown-item">
                        <img
                            src={dashboardIcon}
                            alt="dashboard-icon"
                            className="align-middle me-2 mb-1"
                        />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <hr className="dropdown-divider m-1" />
                </li>
                <li>
                    <Logout />
                </li>
            </ul>
        </div>
    );
}

export default UserDropDown;
