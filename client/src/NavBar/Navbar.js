import { useFetchUserQuery } from "../app/api/userApiSlice";
import UserDropDown from "../DropDownMenus/UserDropDown";
import ButtonStartNow from "../Components/Buttons/ButtonStartNow";
import logoName from "../assets/logo-name.png";
import DashboardLinks from "./DashboardLinks";
import HomeLinks from "./HomeLinks";
import "../App.css";
import { useSelector } from "react-redux";
import { setUser } from "../app/features/userSlice";

function Navbar() {
    // const user = useSelector(setUser)
    const { data: user } = useFetchUserQuery();

    return (
        <nav
            className="navbar navbar-expand-sm navbar-light border-bottom border-1 sticky-top"
            id="nav-container"
        >
            <div className="container-md d-flex" id="main-nav-container">
                <a
                    className="navbar-brand mx-sm-2 align-top"
                    href={!user ? "/" : "#"}
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
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        {!user ? (
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
                    {/* <div className="navbar-nav p-1 ms-2" id="nav-div-start-now">
                        {user ? <UserDropDown /> : <ButtonStartNow />}
                    </div> */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
