import { useFetchUserQuery } from "../app/api/userApiSlice";
import Logout from "../Login-Logout/Logout";

import { useSelector } from "react-redux";
import { setUser } from "../app/features/userSlice";

function UserDropDown() {
    const { data: user } = useFetchUserQuery();

    return (
        <div className="dropdown center">
            <a
                className="btn btn-secondary dropdown-toggle align-bottom caret-off"
                id="nav-drop-down-btn"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {!user ? "" : user.full_name}
            </a>

            <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item" href="/profile">
                        My profile
                    </a>
                </li>

                <li>
                    <a className="dropdown-item" href="/dashboard/home">
                        Dashboard
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    {/* add log out icon */}
                    <Logout />
                </li>
            </ul>
        </div>
    );
}

export default UserDropDown;
