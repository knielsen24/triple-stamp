import "../../App.css";

function ButtonCancelModal({text}) {
    return (
        <>
            <button
                type="button"
                id="nav-btn-start-now"
                class="btn btn-primary m-sm-auto"
                data-bs-dismiss="modal"
            >
                {text}
            </button>
        </>
    );
}

export default ButtonCancelModal;
