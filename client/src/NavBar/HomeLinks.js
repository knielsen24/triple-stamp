import loginIcon from "../assets/login-icon.svg";

function HomeLinks() {
    return (
        <>
            <button className="nav-link mx-3 align-baseline btn">
                Features
            </button>
            <button
                className="nav-link me-3 btn"
                data-bs-toggle="modal"
                data-bs-target="#login-form"
            >
                Sign in
                <img src={loginIcon} alt="edit-icon" className=" ms-2" />
            </button>
        </>
    );
}

export default HomeLinks;
