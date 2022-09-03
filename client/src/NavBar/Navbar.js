import { useFetchUserQuery } from "../app/api/userApiSlice";
import UserDropDown from "../DropDownMenus/UserDropDown";
import ButtonStartNow from "../Components/Buttons/ButtonStartNow";
import logoName from "../assets/logo-name-svg.svg";
import DashboardLinks from "./DashboardLinks";
import HomeLinks from "./HomeLinks";
import "../App.css";

function Navbar() {
    const { data: user, isError, isLoading } = useFetchUserQuery();

    let signUpNav =
        "navbar navbar-expand-sm navbar-light border-bottom border-1 sticky-top mw-75";
    let isLoggedIn =
        "navbar navbar-expand-sm navbar-light border-bottom border-1 mw-75";

    if (isLoading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    return (
        <nav
            className={user || !isError ? isLoggedIn : signUpNav}
            id="nav-container"
        >
            <div className="container fluid" id="main-nav-container">
                <a
                    className="navbar-brand align-top"
                    href={user || !isError ? "/" : "/"}
                >
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
                    className="collapse navbar-collapse float-end"
                    id="navbarNavAltMarkup"

                >
                    <div className="navbar-nav float-end me-auto">
                        {!user || isError ? (
                            <>
                                <HomeLinks />
                                <ButtonStartNow />
                            </>
                        ) : (
                            <>
                                <DashboardLinks />
                                <UserDropDown />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
