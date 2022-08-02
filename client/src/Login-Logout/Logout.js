import { useLogoutApiMutation } from "../app/api/userApiSlice";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    const [logoutApi, { isLoading }] = useLogoutApiMutation();

    return (
        <a
            className="dropdown-item"
            href="#"
            onClick={(e) => {
                e.preventDefault();
                logoutApi().then(navigate(""));
            }}
        >
            Sign out
        </a>
    );
}

export default Logout;
