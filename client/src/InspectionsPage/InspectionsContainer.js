import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setSelectProperty } from "../app/features/propertySlice";
import { setSelectUnit } from "../app/features/unitSlice";
import UnitAllInspects from "../AccordianItems/UnitAllInspects";
import DeleteInspectionModal from "../Modals/DeleteInspectionModal";
import EditModalTemp from "../Modals/EditModalTemp";
import PropInspectAccordians from "./PropInspectAccordians";
import ViewInspectReport from "./ViewInspectReport";
import { setSelectInspection } from "../app/features/inspectionSlice";
import { useFetchPropertyQuery } from "../app/api/propertyApiSlice";

function InspectionsContainer() {
    const property = useSelector(setSelectProperty);
    const unit = useSelector(setSelectUnit);
    const inspection = useSelector(setSelectInspection);

    const {
        data = [],
        isFetching,
        isLoading,
        isSuccess,
    } = useFetchPropertyQuery();
    // console.log(isSuccess ? data : null);

    console.log(property)

    return (
        <div className="container border-endtext-center min-vh-100">
            <DeleteInspectionModal />
            <EditModalTemp
                modalId={"edit-inspections-form"}
                header={"Edit inspection information"}
                buttonText={"Click update to save changes"}
            />
            <div class="row align-content-between">
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">Inspections </div>
                        <div class="card-body">
                            <h5 class="card-title">Today!</h5>
                            <p class="card-text">
                                looks like there are no inspections scheduled
                                today
                            </p>
                            <a href="#" class="btn btn-primary">
                                Go to inspection
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-6 ">
                    <div class="card">
                        <div class="card-header">Inspections </div>
                        <div class="card-body">
                            <h5 class="card-title">This week</h5>
                            <p class="card-text">start planning</p>
                            <a href="/dashboard/inspections/property#" class="btn btn-primary">
                                Checkout the schedule
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route
                    path="property"
                    element={property ? <PropInspectAccordians /> : null}
                />
                <Route
                    path="unit"
                    element={unit.name === "" ? null : <UnitAllInspects />}
                />
                <Route
                    path="reports"
                    element={
                        inspection.title === "" ? null : <ViewInspectReport />
                    }
                />
            </Routes>
        </div>
    );
}

export default InspectionsContainer;
