import { useDispatch } from "react-redux";
import threeDots from "../assets/threedots-vertical.svg";
import { selectInspection } from "../app/features/inspectionSlice";
import { selectUnit } from "../app/features/unitSlice";
import InspectionDropDown from "../DropDownMenus/InspectionDropDown";
import plusIcon from "../assets/plus-icon.svg";
import { DateTime } from "luxon";

function PropInspectsTable({ propInspections, tableHeight }) {
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
                    <td scope="col"></td>
                    <th scope="row" className="text-start">
                        {inspect.unit.number}
                    </th>
                    <td colSpan="3" className="text-start">
                        {inspect.title}
                    </td>
                    <td className="text-start">{inspect.type_name}</td>
                    <td>{inspect.status}</td>
                    <td >{inspect.scheduled_date}</td>
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
        <div className={tableHeight ? "table-height-all overflow-auto" : "table-height overflow-auto"}>
            <table className="table table-responsive table-hover text-capitalize mb-0">
                <thead className="text-center bg-light sticky-top">
                    <tr className="border-bottom border-3 sticky-top">
                        <th scrop="col" className="text-start sticky-top p-1"></th>
                        <th scope="col" className="text-start sticky-top p-1">
                            Unit #
                        </th>
                        <th
                            scope="col"
                            colSpan="3"
                            className="text-start sticky-top p-1 "
                        >
                            Title
                        </th>
                        <th scope="col" className="text-start sticky-top p-1 ">
                            Type
                        </th>
                        <th scope="col" className="sticky-top p-1">Status</th>
                        <th scope="col" className="sticky-top p-1">Scheduled Date</th>
                        <th scope="col" className="sticky-top p-1"></th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr
                        role="button"
                        data-bs-toggle="modal"
                        data-bs-target="#add-inspection-form"
                        onClick={() => dispatch(selectUnit(initialValues))}
                    >
                        <td scope="col" className="p-1"></td>
                        <td scope="col" className="p-1"></td>
                        <td colSpan="3" className="p-1">
                            <img
                                src={plusIcon}
                                alt="edit-icon"
                                className="align-middle me-1 mb-1"
                            />
                            Add inspection
                        </td>
                        <td colSpan="4" className="p-1"></td>
                    </tr>
                    {renderInspections}
                </tbody>
            </table>
        </div>
    );
}

export default PropInspectsTable;
