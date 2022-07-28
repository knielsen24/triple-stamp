import "../../App.css";
import { setUser } from "../../app/features/userSlice";
import { useSelector } from "react-redux";
import Logout from "../Login-Logout/Logout";
import { useFetchUserQuery } from "../../app/services/userApiSlice";

function UserDropDown() {
    const { data: user } = useFetchUserQuery({
        refetchOnMountOrArgChange: true,
    });

    return (
        <div className="dropdown center">
            <a
                className="btn btn-secondary dropdown-toggle align-bottom"
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
                    <a className="dropdown-item" href="dashboard">
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
