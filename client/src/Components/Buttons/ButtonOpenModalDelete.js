import "../../App.css";

function ButtonOpenModalDelete() {
    return (
        <>
            <a
                class="nav-link "
                href="#"
                role="button"
                data-bs-toggle="modal"
                data-bs-target="#delete-account"
            >
                Delete Account
            </a>
        </>
    );
}

export default ButtonOpenModalDelete;
