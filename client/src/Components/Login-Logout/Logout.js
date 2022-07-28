import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../app/features/userSlice";
import { useFetchUserQuery, useLogoutApiMutation } from "../../app/services/userApiSlice";

function Logout() {
    const [logoutApi, { isLoading }] = useLogoutApiMutation();
    const { data: user } = useFetchUserQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <a
                className="dropdown-item"
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    logoutApi()
                        .then(() => dispatch(logout()))
                        .then(navigate("/"));
                }}
            >
                Sign out
            </a>
        </>
    );
}

export default Logout;
