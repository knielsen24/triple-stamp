function ButtonManageAccountModals({ target, text }) {
    return (
        <a
            className="nav-link m-1"
            href="#"
            role="button"
            data-bs-toggle="modal"
            data-bs-target={target}
        >
            {text}
        </a>
    );
}

export default ButtonManageAccountModals;
