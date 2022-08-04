import { useFetchUserQuery } from "../app/api/userApiSlice";
import Logout from "../Login-Logout/Logout";

function UserDropDown() {
    const { data: user, isError } = useFetchUserQuery();

    return (
        <div className="dropdown center">
            <a
                className="btn btn-secondary dropdown-toggle align-bottom caret-off nav-drop-down-btn"

                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {!user || isError ? "" : user.full_name}
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
                    <Logout />
                </li>
            </ul>
        </div>
    );
}

export default UserDropDown;
