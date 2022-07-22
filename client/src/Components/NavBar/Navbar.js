import "../../App.css";
import logoName from "../../assets/logo-name.png";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../features/userSlice";

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
                    <div class="navbar-nav mx-sm-2 float-end">
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
                        <div id="nav-div-start-now">
                            {user ? (
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
                                            <a class="dropdown-item" href="#">
                                                Sign out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
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
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
