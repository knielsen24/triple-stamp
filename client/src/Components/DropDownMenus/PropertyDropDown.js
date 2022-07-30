import {
    selectProperty,
    setSelectProperty,
} from "../../app/features/propertySlice";
import {
    useFetchPropertiesQuery,
    useFetchPropInspectionsQuery,
    useFetchPropUnitsQuery,
} from "../../app/services/propertyApiSlice";
import { unitsList } from "../../app/features/unitsListSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ButtonOpenAddPropertyModal from "../Buttons/ButtonOpenAddPropertyModal";
import { setUser } from "../../app/features/userSlice";
import { useFetchUserQuery } from "../../app/services/userApiSlice";

function PropertyDropDown() {
    // useParams to render property link
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const property = useSelector(setSelectProperty);

    const { data: user } = useFetchUserQuery();
    const { data: properties } = useFetchPropertiesQuery(user.id || "");
    const { data: unitsListv2 } = useFetchPropUnitsQuery(property.id || "");
    console.log(property.id);
    // const { data: propInspections } = useFetchPropInspectionsQuery(property.id);

    const handleSearch = (e) => setSearch(e.target.value);

    let renderPropertyList;
    let filteredProperties;

    if (properties) {
        filteredProperties = properties.filter((property) => {
            let propName = property.name.toLowerCase();
            let searchLC = search.toLowerCase();
            if (search === "") return property;
            if (propName.includes(searchLC)) return property;
        });
        renderPropertyList = filteredProperties.map((property) => {
            return (
                <li key={property.id}>
                    <a
                        key={property.id}
                        className="dropdown-item "
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(selectProperty(property));
                            dispatch(unitsList(property.units));
                            // navigate("details");
                        }}
                    >
                        {property.name}
                    </a>
                </li>
            );
        });
    }

    return (
        <div className="w-100 ">
            <div className="dropdown-center ">
                <a
                    className="btn bg-secondary bg-opacity-75 text-light dropdown-toggle w-100 "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {property.name || ""}
                </a>
                <ul className="dropdown-menu dropdown-menu p-3 ">
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
