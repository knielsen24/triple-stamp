import "../App.css";
import logoName from "../assets/logo-name.png";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm navbar-light items-center">
            <div class="container-xl mx-sm-2" id="main-nav-container">
                <a class="navbar-brand mx-sm-2" href="#">
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
                        <a class="nav-link active" aria-current="page" href="#">
                            Home
                        </a>
                        <a class="nav-link" href="#">
                            Features
                        </a>
                        <a class="nav-link" href="#">
                            Pricing
                        </a>
                        <div class="ms-1" id="nav-div-start-now" >
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

        // <nav class="navbar navbar-expand-sm">
        //     <div class="container-fluid">
        //         <a class="navbar-brand">
        //             <img src={logoName} alt="logo" id="logo-name" />
        //         </a>
        //         <button
        //             class="navbar-toggler"
        //             type="button"
        //             data-bs-toggle="collapse"
        //             data-bs-target="#navbarNav"
        //             aria-controls="navbarNav"
        //             aria-expanded="false"
        //             aria-label="Toggle navigation"
        //         >
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarNav">
        //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">
        //                         Log in
        //                     </a>
        //                 </li>
        //             </ul>
        //
        //         </div>
        //     </div>
        // </nav>
    );
}

export default Navbar;
