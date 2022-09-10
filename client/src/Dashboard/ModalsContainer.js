import DeleteInspectionModal from "../Modals/DeleteInspectionModal";
import DeleteProfileModal from "../Modals/DeleteProfileModal";
import DeletePropertyModal from "../Modals/DeletePropertyModal";
import DeleteUnitModal from "../Modals/DeleteUnitModal";
import EditAddModal from "../Modals/EditAddModal";

function ModalsContainer() {
    return (
        <div>
            <EditAddModal
                modalId={"add-inspection-form"}
                header={"Add inspection"}
            />
            <EditAddModal
                modalId={"add-property-form"}
                header={"Add property"}
            />
            <EditAddModal
                modalId={"update-profile-form"}
                header={"Edit your profile information"}
            />
            <EditAddModal
                modalId={"update-unit-form"}
                header={"Edit unit information"}
            />
            <EditAddModal modalId={"add-unit-form"} header={"Add unit"} />
            <EditAddModal
                modalId={"edit-property-form"}
                header={"Edit your property information"}
            />
            <EditAddModal
                modalId={"edit-inspection-form"}
                header={"Edit inspection information"}
            />
            <DeletePropertyModal />
            <DeleteProfileModal />
            <DeleteUnitModal />
            <DeleteInspectionModal />
        </div>
    );
}

export default ModalsContainer;
