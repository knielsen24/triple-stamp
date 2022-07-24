import "../../App.css";

function ButtonStartNow() {
    return (
        <>
            <button
                type="button"
                id="nav-btn-start-now"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#start-now-modal"
            >
                start now
            </button>
        </>
    );
}

export default ButtonStartNow;
