import { useFetchUserQuery } from "../app/api/userApiSlice";
import Logout from "../Login-Logout/Logout";
import { Link } from "react-router-dom";
import dashboardIcon from "../assets/dashboard-icon.svg";
import personIcon from "../assets/person-icon.svg";

function UserDropDown() {
    const { data: user, isError } = useFetchUserQuery();

    return (
        <div className="dropdown-center inline p-1">
            <button
                className="btn-grp dropdown-toggle text-secondary border-0 bg-transparent"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {user || !isError ? user.fullname : null}
                <img
                    src={user || !isError ? user.image : personIcon}
                    alt="profile-icon"
                    className="align-middle profile-dropdown rounded-circle "
                />
            </button>
            <ul className="dropdown-menu mt-3 bg-light p-1">
                <li>
                    <Link
                        as={Link}
                        to="/dashboard/profile"
                        className="dropdown-item"
                    >
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
                    <hr className="dropdown-divider mx-2 my-1" />
                </li>
                <li>
                    <Logout />
                </li>
            </ul>
        </div>
    );
}

export default UserDropDown;
