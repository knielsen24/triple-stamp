import "../App.css";
import logoName from "../assets/logo-name.png";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm navbar-light items-center sticky-top" id="nav-container">
            <div class="container-xl mx-sm-2" id="main-nav-container">
                <a class="navbar-brand mx-sm-2" >
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
                <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div class="navbar-nav mx-sm-2">
                        <a class="nav-link" href="#">
                            Features
                        </a>
                        <a class="nav-link" href="#">
                            Pricing
                        </a>
                        <div class="ms-1" id="nav-div-start-now">
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
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
