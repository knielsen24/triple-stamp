import { setSelectProperty } from "../../app/features/propertySlice";
import { useSelector } from "react-redux";
import { useState } from "react";

function DashBoardNav() {
    const property = useSelector(setSelectProperty);
    // const [activePill, setActivePill] = useState(null);

    // const activeClass = "nav-link active";
    // const inactiveClass = "nav-link";

    // const handleClick = (e) => {
    //     console.log(e.target.id)
    // };

    // onclick takes in the id
    // if the id matches click, set to true,
    // if the id doesn't match set to false

    let detailsLinkhref;
    property.name !== ""
        ? (detailsLinkhref = "#")
        : (detailsLinkhref = "/management/property-details");

    return (
        <div className="text-center mb-3">
            <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                    <a id="home" className="nav-link active" href="#">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        id="inspections"
                        className="nav-link "
                        aria-current="page"
                        href="#"
                    >
                        {/* bg-secondary bg-opacity-75 */}
                        Inspections
                    </a>
                </li>
                <li className="nav-item">
                    <a id="tasks" className="nav-link " href="#">
                        Tasks
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        id="details"
                        className="nav-link "
                        href={detailsLinkhref}
                    >
                        Details
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default DashBoardNav;
