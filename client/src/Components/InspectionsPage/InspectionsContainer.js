import DeleteInspectionModal from "../Modals/DeleteInspectionModal";
import PropInspectAccordians from "./PropInspectAccordians";

function InspectionsContainer() {
    return (
        <div className="container border-endtext-center min-vh-100">
            <PropInspectAccordians />
            <DeleteInspectionModal />
        </div>
    );
}

export default InspectionsContainer;
