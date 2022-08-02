import ButtonCancelModal from "../Components/Buttons/ButtonCancelModal";
import ButtonCloseModalX from "../Components/Buttons/ButtonCloseModalX";
import { useNavigate } from "react-router-dom";
import { logout } from "../app/features/userSlice";
import { useDispatch } from "react-redux";
import {
    useDeleteUserMutation,
    useFetchUserQuery,
} from "../app/api/userApiSlice";

import ButtonDeleteItem from "../Components/Buttons/ButtonDeleteItem";

function DeleteProfileModal() {
    const [deleteUser, { isLoading }] = useDeleteUserMutation();
    const { data: user } = useFetchUserQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteUser = (id) => {
        deleteUser(id).then(handleLogout());
    };

    // Handle Logout is used twice now.
    // Need to figure out how to use the API Slice to handle this query

    const handleLogout = () => {
        fetch("/logout", { method: "DELETE" })
            .then((r) => {
                if (r.ok) {
                    dispatch(logout());
                }
            })
            .then(navigate("/"));
        // logoutApi().then(() => {
        //     dispatch(logout(user)).then(navigate("/"));
        // });
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
                <div className="modal-dialog modal-dialog-centered">
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
