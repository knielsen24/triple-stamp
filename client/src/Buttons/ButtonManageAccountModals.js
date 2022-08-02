function ButtonManageAccountModals({ target, text }) {
    return (
        <a
            className="nav-link "
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
