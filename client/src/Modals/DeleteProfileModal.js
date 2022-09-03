import ButtonCancelModal from "../Components/Buttons/ButtonCancelModal";
import ButtonCloseModalX from "../Components/Buttons/ButtonCloseModalX";
import { useNavigate } from "react-router-dom";
import {
    useDeleteUserMutation,
    useFetchUserQuery,
    useLoginApiMutation,
} from "../app/api/userApiSlice";

import ButtonDeleteItem from "../Components/Buttons/ButtonDeleteItem";

function DeleteProfileModal() {
    const navigate = useNavigate();
    const [deleteUser] = useDeleteUserMutation();
    const [logoutApi] = useLoginApiMutation();
    const { data: user } = useFetchUserQuery();

    const handleDeleteUser = (id) => {
        logoutApi().then(deleteUser(id)).then(navigate("/"));
    };

    return (
        <div>
            <div
                className="modal fade"
                id="delete-account-form"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="delete-account-form"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-min-w">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="delete-account-form"
                            >
                                Are you sure you want to delete your account?
                            </h5>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                            <p className="float-start m-0" id="modal-subtext">
                                By clicking "Delete My Account" will permantly
                                remove your account with tripleStamp and your
                                information will not be recoverable.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <ButtonCancelModal />
                            <ButtonDeleteItem
                                handleDelete={handleDeleteUser}
                                id={user.id}
                                text={"Delete my account"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteProfileModal;
