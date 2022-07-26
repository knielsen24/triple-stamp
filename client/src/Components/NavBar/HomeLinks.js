import "../../App.css";

function HomeLinks() {
    return (
        <>
            <a className="nav-link" href="#">
                Features
            </a>
            <a
                className="nav-link"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#login-form"
            >
                Sign in
            </a>
        </>
    );
}

export default HomeLinks;
