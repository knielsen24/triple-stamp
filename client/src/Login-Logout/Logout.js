import { useLogoutApiMutation } from "../app/api/userApiSlice";
import { useNavigate } from "react-router-dom";
import logoutIcon from "../assets/logout-icon.svg";

function Logout() {
    const navigate = useNavigate();
    const [logoutApi] = useLogoutApiMutation();

    return (
        <button
            className="dropdown-item"
            href="#"
            onClick={(e) => {
                e.preventDefault();
                logoutApi().then(navigate("/"));
            }}
        >
            <img
                src={logoutIcon}
                alt="logout-icon"
                className="align-middle me-3 mb-1"
            />
            Sign out
        </button>
    );
}

export default Logout;
