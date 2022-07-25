import "../../App.css";

function ButtonDropDownModals({ target, text }) {
    return (
        <>
            <a
                class="nav-link "
                href="#"
                role="button"
                data-bs-toggle="modal"
                data-bs-target={target}
            >
                {text}
            </a>
        </>
    );
}

export default ButtonDropDownModals;
