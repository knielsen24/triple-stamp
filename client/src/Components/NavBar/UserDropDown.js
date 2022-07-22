import "../../App.css";
import { setUser, logout } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useDeleteUserMutation } from "../../app/services/apiSlice";

function UserDropDown() {
    const [deleteUser, { isLoading }] = useDeleteUserMutation();
    const user = useSelector(setUser);
    const handleSignOut = (id) => {
        // deleteUser(id)
        // dispatch(logout)
    };

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
                    <a
                        class="dropdown-item"
                        href="#"
                        onClick={handleSignOut(user.id)}
                    >
                        Sign out
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default UserDropDown;
