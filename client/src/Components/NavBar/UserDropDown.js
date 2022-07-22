import "../../App.css";
import { setUser, logout } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Logout from "./Logout";
// import { useDeleteUserMutation } from "../../app/services/apiSlice";

function UserDropDown() {
    // const [deleteUser, { isLoading }] = useDeleteUserMutation();
    const user = useSelector(setUser);

    return (
        <div class="dropdown">
            <a
                class="btn btn-secondary dropdown-toggle"
                id="nav-btn-start-now"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {user.account_name}
            </a>

            <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item" href="#">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        Profile
                    </a>
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
