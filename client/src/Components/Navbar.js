import "../App.css";
import logoName from "../assets/logo-name.png";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";

function Navbar() {
    const user = useSelector(setUser);
    console.log(user);

    return (
        <nav
            class="navbar navbar-expand-sm navbar-light items-center sticky-top"
            id="nav-container"
        >
            <div class="container-xl mx-sm-2" id="main-nav-container">
                <a class="navbar-brand mx-sm-2">
                    <img src={logoName} alt="logo" id="logo-name" />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav mx-sm-2">
                        {user ? null : (
                            <>
                                <a class="nav-link" href="#">
                                    Features
                                </a>
                                <a class="nav-link" href="#">
                                    Sign in
                                </a>
                            </>
                        )}
                        <div class="ms-1 " id="nav-div-start-now">
                            {user ? (
                                <a class="nav-link" href="#">
                                    {user.full_name}
                                </a>
                            ) : (
                                <button
                                    type="button"
                                    id="nav-btn-start-now"
                                    data-bs-toggle="modal"
                                    data-bs-target="#start-now-modal"
                                >
                                    start now
                                </button>
                            )}
                        </div>
                        {user ? (
                            <a class="nav-link" href="#">
                                Sign out
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
