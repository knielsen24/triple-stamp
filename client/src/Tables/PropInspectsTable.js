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
                <tr className="text-center" key={inspect.id}>
                    <th scope="row" className="text-start">{inspect.unit.number}</th>
                    <td colSpan="3" className="text-start">{inspect.title}</td>
                    <td className="text-start">{inspect.type_name }</td>
                    <td>{inspect.status}</td>
                    <td type="date">{inspect.scheduled_date}</td>
                    <td>
                        <div className="btn-group">
                            <img
                                src={threeDots}
                                alt="threedots-icon"
                                role="button"
                                className="btn btn-secondary dropdown-toggle bg-light bg-opacity-25 border-0 p-0 align-middle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={() =>
                                    dispatch(selectInspection(inspect))
                                }
                            />
                            <InspectionDropDown />
                        </div>
                    </td>
                </tr>
            );
        });
    }

    return (
        <table className="table table-hover user-select-none text-capitalize">
            <thead className="text-center">
                <tr>
                    <th scope="col" className="text-start">
                        Unit #
                    </th>
                    <th scope="col" colSpan="3" className="text-start">
                        Title
                    </th>
                    <th scope="col" className="text-start">Type</th>
                    <th scope="col">Status</th>
                    <th scope="col">Scheduled Date</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                <tr
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#add-inspection-form"
                    onClick={() => dispatch(selectUnit(initialValues))}
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

export default PropInspectsTable;
