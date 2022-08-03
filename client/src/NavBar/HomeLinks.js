function HomeLinks() {
    return (
        <>
            <a className="nav-link mx-3" type="button" href="#">
                Features
            </a>
            <a
                className="nav-link me-3"
                type="button"
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
