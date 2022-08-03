import { useFetchUserQuery } from "../app/api/userApiSlice";
import UserDropDown from "../DropDownMenus/UserDropDown";
import ButtonStartNow from "../Components/Buttons/ButtonStartNow";
import logoName from "../assets/logo-name.png";
import DashboardLinks from "./DashboardLinks";
import HomeLinks from "./HomeLinks";
import "../App.css";

function Navbar() {
    const { data: user, isError } = useFetchUserQuery();

    return (
        <nav
            className="navbar navbar-expand-sm navbar-light border-bottom border-1 sticky-top"
            id="nav-container"
        >
            <div className="container-md d-flex" id="main-nav-container">
                <a
                    className="navbar-brand mx-5 align-top"
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
                    className="collapse navbar-collapse align-end"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav position-absolute end-0 me-5">
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
