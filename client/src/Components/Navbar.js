import "../App.css";
import logoName from "../assets/logo-name.png";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm" id="nav-height">
            <div class="container-fluid" id="nav-height">
                <a class="navbar-brand">
                    <img src={logoName} alt="logo" id="logo-name" />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Log in
                            </a>
                        </li>
                    </ul>
                    <button
                        type="button"
                        id="nav-btn-start-now"
                        data-bs-toggle="modal"
                        data-bs-target="#startNowModal"
                    >
                        start now
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
