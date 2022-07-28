import { useSelector } from "react-redux";
import { setSelectProperty } from "../../app/features/propertySlice";

function ManagementNav() {
    const property = useSelector(setSelectProperty);

    let detailsLinkhref;
    property.name !== ""
        ? (detailsLinkhref = "#")
        : (detailsLinkhref = "/management/property-details");

    return (
        <div className="text-center mb-3">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <a className="nav-link active bg-secondary bg-opacity-75" aria-current="page" href="#">
                        Inspections
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Tasks
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href={detailsLinkhref}>
                        Details
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ManagementNav;
