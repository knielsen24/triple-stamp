import { useSelector } from "react-redux";
import { setSelectProperty } from "../../app/features/propertySlice";
import DeleteInspectionModal from "../Modals/DeleteInspectionModal";
import PropInspectAccordians from "./PropInspectAccordians";

function InspectionsContainer() {
    const property = useSelector(setSelectProperty);

    return (
        <div className="container border-endtext-center min-vh-100">
            {property.name === "" ? null : (
                <>
                    <PropInspectAccordians />
                    <DeleteInspectionModal />

                </>
            )}
        </div>
    );
}

export default InspectionsContainer;
