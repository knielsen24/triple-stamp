import { Toast } from "bootstrap";
import { useFetchUserQuery } from "../app/api/userApiSlice";

function WelcomeUserToast() {
    const { data: user, isError, isLoading } = useFetchUserQuery();

    return (
        <div
            id="welcome-toast"
            class="toast align-items-center"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <div class="d-flex">
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
                <button
                    type="button"
                    class="btn-close me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                ></button>
            </div>
        </div>
    );
}

export default WelcomeUserToast;
