import DeleteInspectionModal from "../Modals/DeleteInspectionModal";
import PropertyInspections from "./PropertyInspections";

function InspectionsContainer() {
    return (
        <div className="container border-endtext-center min-vh-100">
            <PropertyInspections />
            <DeleteInspectionModal />

        </div>
    );
}

export default InspectionsContainer;
