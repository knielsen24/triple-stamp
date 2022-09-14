import ButtonStartNow from "../Components/Buttons/ButtonStartNow";
import logoName from "../assets/logo-name-svg.svg";
import HomeLinks from "./HomeLinks";
import "../App.css";

function Navbar() {
    let signUpNav =
        "navbar navbar-expand-sm navbar-light border-bottom border-1 sticky-top mw-75";

    // if (isLoading) {
    //     return (
    //         <div className="spinner-border" role="status">
    //             <span className="visually-hidden">Loading...</span>
    //         </div>
    //     );
    // }

    return (
        <nav className={signUpNav} id="nav-container">
            <div className="container fluid " id="main-nav-container">
                <a className="navbar-brand align-top" href="/">
                    <img src={logoName} alt="logo" id="logo-name" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ms-auto">
                        <HomeLinks />
                        <ButtonStartNow />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
