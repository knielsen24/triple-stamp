import { useNavigate } from "react-router-dom";
import { logout } from "../../app/features/userSlice";
import { useDispatch } from "react-redux";
import { useLogoutApiMutation } from "../../app/services/userApiSlice";

function Logout() {
    // const [logoutApi, { isLoading }] = useLogoutApiMutation();
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
                className="dropdown-item"
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
