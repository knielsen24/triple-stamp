import "../../../App.css";

function HomeLinks() {
    return (
        <>
            <a class="nav-link" href="#">
                Features
            </a>
            <a
                class="nav-link"
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
