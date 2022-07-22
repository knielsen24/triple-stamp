import { useNavigate } from "react-router-dom";
import { setUser, logout } from "../../app/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../app/services/userApiSlice";

function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(setUser);
    const [logout, { isLoading }] = useLogoutMutation()

    const handleLogout = () => {
        logout();
        dispatch(logout(user));
        navigate("/");
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

// fetch("/logout", { method: "DELETE" })
//     .then((r) => {
//         if (r.ok) {
//             dispatch(logout(user));
//         }
//     })
//     .then(navigate("/"));
