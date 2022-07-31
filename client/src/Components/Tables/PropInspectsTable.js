import { useDispatch, useSelector } from "react-redux";
import trashCanIcon from "../../assets/trashcan-icon.svg";
import editIcon from "../../assets/edit-icon.svg";
import { selectInspection } from "../../app/features/inspectionSlice";

function PropInspectsTable({ propInspections }) {
    const dispatch = useDispatch();

    let renderInspections;

    if (propInspections) {
        renderInspections = propInspections.map((inspect) => {
            return (
                <tr key={inspect.id}>
                    <th scope="row">{inspect.unit.number}</th>
                    <td>{inspect.title}</td>
                    <td>{inspect.type_name}</td>
                    <td>{inspect.status}</td>
                    <td>{inspect.scheduled_date}</td>
                    <td>
                        <img
                            src={editIcon}
                            alt="edit-icon"
                            role="button"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(selectInspection(inspect));
                            }}
                        />
                    </td>
                    <td>
                        <img
                            src={trashCanIcon}
                            alt="trashcan-icon"
                            role="button"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-inspections-modal"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(selectInspection(inspect));
                            }}
                        />
                    </td>
                </tr>
            );
        });
    }

    return (
        <div>
            <table className="table table-hover user-select-none">
                <thead>
                    <tr>
                        <th scope="col">Unit #</th>
                        <th scope="col">Title</th>
                        <th scope="col">Type</th>
                        <th scope="col">Status</th>
                        <th scope="col">Scheduled Date</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {renderInspections}
                </tbody>
            </table>
        </div>
    );
}

export default PropInspectsTable;
