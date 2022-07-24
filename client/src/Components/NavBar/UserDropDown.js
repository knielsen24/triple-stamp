import "../../App.css";
import { setUser } from "../../app/features/userSlice";
import { useSelector } from "react-redux";
import Logout from "./Logout";

function UserDropDown() {
    const user = useSelector(setUser);

    return (
        <div class="dropdown ">
            <a
                class="btn btn-secondary dropdown-toggle align-bottom"
                id="nav-drop-down-btn"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {user.full_name}
            </a>

            <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item" href="profile">
                        My profile
                    </a>
                </li>
                {/* <li>
                    <a
                        class="dropdown-item"
                        href="profile"
                        data-bs-toggle="modal"
                        data-bs-target="#update-profile-form"
                    >
                        Edit profile
                    </a>
                </li> */}
                <li>
                    <a class="dropdown-item" href="dashboard">
                        Dashboard
                    </a>
                </li>
                <hr class="border border-2 m-1" />
                <li>
                    {/* add log out icon */}
                    <Logout />
                </li>
            </ul>
        </div>
    );
}

export default UserDropDown;
