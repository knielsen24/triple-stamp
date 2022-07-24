import "../../App.css";
import ButtonCancelModalDelete from "../Buttons/ButtonCancelModalDelete";
import ButtonCloseModalX from "../Buttons/ButtonCloseModalX";
import ButtonDeleteUser from "../Buttons/ButtonDeleteUser";
import { useNavigate } from "react-router-dom";
import { setUser, logout } from "../../app/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useDeleteUserMutation } from "../../app/services/userApiSlice";

function DeleteProfileModal() {
    const [deleteUser, { isLoading }] = useDeleteUserMutation();
    const user = useSelector(setUser);
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
                class="modal fade"
                id="delete-account"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="delete-account"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="delete-account">
                                Are you sure you want to delete your account?
                            </h5>
                            <ButtonCloseModalX />
                        </div>
                        <div class="modal-body">
                            <p class="float-start m-0" id="modal-subtext">
                                By clicking "Delete My Account" will permantly
                                remove your account with tripleStamp and your
                                information will not be recoverable.
                            </p>
                        </div>
                        <div class="modal-footer">
                            <ButtonCancelModalDelete text={"cancel"} />
                            <ButtonDeleteUser
                                id={user.id}
                                handleDeleteUser={handleDeleteUser}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteProfileModal;