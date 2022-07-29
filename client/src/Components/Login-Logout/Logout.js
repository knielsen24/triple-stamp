import { useFetchUserQuery, useLogoutApiMutation } from "../../app/services/userApiSlice";
import { logout } from "../../app/features/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutApi, { isLoading }] = useLogoutApiMutation();

    // const { data: user } = useFetchUserQuery();

    return (
        <>
            <a
                className="dropdown-item"
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    logoutApi()
                        .then(() => dispatch(logout(null)))
                        .then(navigate("/"));
                }}
            >
                Sign out
            </a>
        </>
    );
}

export default Logout;
