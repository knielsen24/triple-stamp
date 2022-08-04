import { useLogoutApiMutation } from "../app/api/userApiSlice";
import { useNavigate } from "react-router-dom";
import loginIcon from "../assets/login-icon.svg";

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
            <img src={loginIcon} alt="edit-icon" className="align-middle ms-5 mb-1" />
        </a>
    );
}

export default Logout;
