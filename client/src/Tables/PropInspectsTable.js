import { useDispatch } from "react-redux";
import threeDots from "../assets/threedots-vertical.svg";
import { selectInspection } from "../app/features/inspectionSlice";
import { selectUnit } from "../app/features/unitSlice";
import InspectionDropDown from "../DropDownMenus/InspectionDropDown";
import { DateTime } from "luxon";

function PropInspectsTable({ propInspections }) {
    const dispatch = useDispatch();
    // const formattedDate = DateTime.fromObject().toLocaleString();

    const initialValues = {
        id: "",
        number: "",
        label: "",
        property_id: "",
        square_feet: "",
    };

    let renderInspections;

    if (propInspections) {
        renderInspections = propInspections.map((inspect) => {
            return (
                <tr key={inspect.id}>
                    <th scope="col">{inspect.unit.number}</th>
                    <td scope="col" colSpan="3">
                        {inspect.title}
                    </td>
                    <td scope="col">{inspect.type_name}</td>
                    <td scope="col">{inspect.status}</td>
                    <td type="date" scope="col">
                        {inspect.scheduled_date}
                    </td>
                    <td scope="col">
                        <div className="btn-group">
                            <img
                                src={threeDots}
                                alt="threedots-icon"
                                role="button"
                                className="btn btn-secondary dropdown-toggle bg-light bg-opacity-25 border-0"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={() => {
                                    dispatch(selectInspection(inspect));
                                }}
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
                    onClick={() => dispatch(selectUnit(initialValues))}
                >
                    <th scope="col"></th>
                    <td scope="col" colSpan="3">
                        + Add inspection
                    </td>
                    <td scope="col" colSpan="4"></td>
                </tr>
                {renderInspections}
            </tbody>
        </table>
    );
}

export default PropInspectsTable;
