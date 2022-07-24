import "../../App.css";

function ButtonOpenEditModal() {
    return (
        <>
            <a
                class="nav-link "
                href="#"
                role="button"
                data-bs-toggle="modal"
                data-bs-target="#update-profile-form"
            >
                Edit Account
            </a>
        </>
    );
}

export default ButtonOpenEditModal;
