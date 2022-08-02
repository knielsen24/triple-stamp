import {
    selectProperty,
    setSelectProperty,
} from "../app/features/propertySlice";
import {
    useFetchPropertiesQuery,
    useFetchPropUnitsQuery,
} from "../app/api/propertyApiSlice";
import { unitsList } from "../app/features/unitsListSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ButtonOpenAddPropertyModal from "../Components/Buttons/ButtonOpenAddPropertyModal";
import { useFetchUserQuery } from "../app/api/userApiSlice";

function PropertyDropDown() {
    // useParams to render property link
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const property = useSelector(setSelectProperty);

    const { data: user } = useFetchUserQuery();
    const { data: properties } = useFetchPropertiesQuery(user.id || "");
    console.log(properties)
    const handleSearch = (e) => setSearch(e.target.value);

    let renderPropertyList;
    let filteredProperties;

    if (properties) {
        filteredProperties = properties.filter((property) => {
            let name = property.name.toLowerCase();
            let searchLC = search.toLowerCase();

            if (search === "") return property;
            else if (name.includes(searchLC)) return property;
        });
        renderPropertyList = filteredProperties.map((property) => {
            return (
                <li key={property.id}>
                    <a
                        key={property.id}
                        className="dropdown-item bg-light"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(selectProperty(property));
                            dispatch(unitsList(property.units));
                            navigate("/dashboard/inspections/property");
                        }}
                    >
                        {property.name}
                    </a>
                </li>
            );
        });
    }

    return (
        <div className="w-100 align-content-items-center">
            <div className="dropdown-center ">
                <a
                    className="btn text-white bg-secondary bg-opacity-75 dropdown-toggle w-100 "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {property.name || ""}
                </a>
                <ul className="dropdown-menu dropdown-menu p-3 bg-light ">
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2 mb-1"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={handleSearch}
                        />
                    </form>
                    <li>
                        <ButtonOpenAddPropertyModal />
                    </li>
                    <li>
                        <hr className="dropdown-divider m-1" />
                    </li>
                    {renderPropertyList}
                </ul>
            </div>
        </div>
    );
}

export default PropertyDropDown;
