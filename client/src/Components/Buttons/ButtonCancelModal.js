import "../../App.css";

function ButtonCancelModal({text}) {
    return (
        <>
            <button
                type="button"
                id="nav-btn-start-now"
                className="btn btn-primary m-sm-auto"
                data-bs-dismiss="modal"
            >
                {text}
            </button>
        </>
    );
}

export default ButtonCancelModal;
