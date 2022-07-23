import { useNavigate } from "react-router-dom";
import { setUser, logout } from "../../app/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutApiMutation } from "../../app/services/userApiSlice";

function Logout() {
    // const [logoutApi, { isLoading }] = useLogoutApiMutation();
    const user = useSelector(setUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        fetch("/logout", { method: "DELETE" })
            .then((r) => {
                if (r.ok) {
                    dispatch(logout());
                }
            })
            .then(navigate("/"));
        // logoutApi().then(() => {
        //     dispatch(logout(user)).then(navigate("/"));
        // });
    };

    return (
        <>
            <a
                class="dropdown-item"
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                }}
            >
                Sign out
            </a>
        </>
    );
}

export default Logout;
