import { useFetchUserQuery } from "../app/api/userApiSlice";
import Logout from "../Login-Logout/Logout";
import { Link } from "react-router-dom";
import dashboardIcon from "../assets/dashboard-icon.svg";
import personIcon from "../assets/person-icon.svg";

function UserDropDown() {
    const { data: user, isError } = useFetchUserQuery();

    return (
        <div className="dropdown center p-1">
            <a
                className="btn btn-secondary dropdown-toggle align-bottom nav-drop-down-btn"
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
                        My profile
                        <img
                            src={personIcon}
                            alt="profile-icon"
                            className="align-middle ms-4 mb-1"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/main" className="dropdown-item">
                        Dashboard
                        <img
                            src={dashboardIcon}
                            alt="dashboard-icon"
                            className="align-middle ms-4 mb-1"
                        />
                    </Link>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <Logout />
                </li>
            </ul>
        </div>
    );
}

export default UserDropDown;
