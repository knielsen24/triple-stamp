function ButtonManageAccountModals({ target, text }) {
    return (
        <li
            role="button"
            className="nav-link m-1"
            data-bs-toggle="modal"
            data-bs-target={target}
        >
            {text}
        </li>
    );
}

export default ButtonManageAccountModals;
