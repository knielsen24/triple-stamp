import { useDispatch, useSelector } from "react-redux";
import threeDots from "../assets/threedots-vertical.svg";
import { setSelectInspection } from "../app/features/inspectionSlice";
import { selectUnit } from "../app/features/unitSlice";
import InspectionDropDown from "../DropDownMenus/InspectionDropDown";
import { useFetchInspectItemsQuery } from "../app/api/propertyApiSlice";
import { skipToken } from "@reduxjs/toolkit/dist/query";

function FullReportTable({ propInspections }) {
    const inspection = useSelector(setSelectInspection)

    const { data: report } = useFetchInspectItemsQuery(inspection.id || "" );

    console.log(inspection);
    console.log(report)

    const initialValues = {
        id: "",
        number: "",
        label: "",
        property_id: "",
        square_feet: "",
    };

    let renderInspections;

    if (propInspections) {
        console.log(propInspections)
        renderInspections = propInspections.map((inspect) => {
            return (
                <tr key={inspect.id}>
                    <th scope="col">{inspect.unit.number}</th>
                    <td colSpan="3">{inspect.title}</td>
                    <td>{inspect.type_name}</td>
                    <td>{inspect.status}</td>
                    <td type="date">{inspect.scheduled_date}</td>
                    <td>
                        <div className="btn-group">
                            <img
                                src={threeDots}
                                alt="threedots-icon"
                                role="button"
                                className="btn btn-secondary dropdown-toggle bg-light bg-opacity-25 border-0"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={() => {}}
                            />
                            <InspectionDropDown />
                        </div>
                    </td>
                </tr>
            );
        });
    }

    return (
        <table className="table table-hover user-select-none">
            <thead>
                <tr>
                    <th scope="col">Unit #</th>
                    <th scope="col" colSpan="3">
                        Title
                    </th>
                    <th scope="col">Type</th>
                    <th scope="col">Status</th>
                    <th scope="col">Scheduled Date</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                <tr
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#add-inspections-form"
                    // onClick={() => dispatch(selectUnit(initialValues))}
                >
                    <th scope="col"></th>
                    <td colSpan="3">+ Add inspection</td>
                    <td colSpan="4"></td>
                </tr>
                {renderInspections}
            </tbody>
        </table>
    );
}

export default FullReportTable;
