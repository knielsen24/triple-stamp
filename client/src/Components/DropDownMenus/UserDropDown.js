import { useFetchUserQuery } from "../../app/services/userApiSlice";
import Logout from "../Login-Logout/Logout";
import "../../App.css";

function UserDropDown() {
    const { data: user } = useFetchUserQuery({
        refetchOnMountOrArgChange: true,
    });

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
                {user.full_name}
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
                <li><hr className="dropdown-divider"/></li>
                <li>
                    {/* add log out icon */}
                    <Logout />
                </li>
            </ul>
        </div>
    );
}

export default UserDropDown;
