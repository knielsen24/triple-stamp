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
                        <div className="modal-header bg-light">
                            <h5
                                className="modal-title"
                                id="delete-account-form"
                            >
                                Are you sure you want to delete your account?
                            </h5>
                            <ButtonCloseModalX />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <p className="float-start">
                                    By clicking "Delete" will
                                    permantly remove your account with
                                    tripleStamp and will not be
                                    recoverable.
                                </p>
                            </div>
                            <div className="float-end">
                            <ButtonCancelModal />
                            <ButtonDeleteItem
                                handleDelete={handleDeleteUser}
                                id={user.id}
                                text={"Delete"}
                            />
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteProfileModal;
