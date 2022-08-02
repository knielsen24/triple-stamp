function HomeLinks() {
    return (
        <>
            <a className="nav-link" type="button" href="#">
                Features
            </a>
            <a
                className="nav-link"
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
