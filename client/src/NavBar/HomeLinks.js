import loginIcon from "../assets/login-icon.svg";

function HomeLinks() {
    return (
        <>
            <a className="nav-link mx-3 align-baseline btn" type="button" role="button" href="#">
                Features
            </a>
            <a
                className="nav-link me-3 btn"
                type="button"
                role="button"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#login-form"
            >
                Sign in
                <img src={loginIcon} alt="edit-icon" className=" ms-2"/>

            </a>
        </>
    );
}

export default HomeLinks;
