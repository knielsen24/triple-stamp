import { useSelector } from "react-redux";
import { setSelectProperty } from "../../app/features/propertySlice";

function DashBoardNav() {
    const property = useSelector(setSelectProperty);

    let detailsLinkhref;
    property.name !== ""
        ? (detailsLinkhref = "#")
        : (detailsLinkhref = "/management/property-details");

    return (
        <div className="text-center mb-3">
            <ul className="nav nav-tabs nav-fill">
                <li className="nav-item">
                    <a className="nav-link active "
                    aria-current="page" href="#">
                        {/* bg-secondary bg-opacity-75 */}
                        Inspections
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
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

export default DashBoardNav;
