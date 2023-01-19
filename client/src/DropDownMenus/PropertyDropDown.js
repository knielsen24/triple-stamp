import ButtonOpenAddPropertyModal from "../Components/Buttons/ButtonOpenAddPropertyModal";
import {
    selectProperty,
    setSelectProperty,
} from "../app/features/propertySlice";
import {
    useFetchPropertiesQuery,
    useFetchPropertyQuery,
} from "../app/api/propertyApiSlice";
import { unitsList } from "../app/features/unitsListSlice";
import { useSelector, useDispatch } from "react-redux";
import { useFetchUserQuery } from "../app/api/userApiSlice";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useState } from "react";

function PropertyDropDown() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const property = useSelector(setSelectProperty);
    const { data: user, isError } = useFetchUserQuery();
    const { data: properties, isSuccess } = useFetchPropertiesQuery(
        !user || isError ? skipToken : user.id
    );
    const { refetch } = useFetchPropertyQuery(
        property && isSuccess ? property.id : skipToken
    );
    const handleSearch = (e) => setSearch(e.target.value);

    let renderPropertyList;
    let filteredProperties;

    if (isSuccess) {
        filteredProperties = properties.filter((property) => {
            let name = property.name.toLowerCase();
            let searchLC = search.toLowerCase();

            if (search === "") return property;
            else if (name.includes(searchLC)) return property;
        });
        renderPropertyList = filteredProperties.map((property) => {
            return (
                <li className="" key={property.id}>
                    <button
                        key={property.id}
                        className="dropdown-item"
                        onClick={() => {
                            dispatch(selectProperty(property));
                            dispatch(unitsList(property.units));
                            refetch();
                        }}
                    >
                        {property.name}
                    </button>
                </li>
            );
        });
    }

    return (
        <div>
            <div className="dropdown-center ">
                <button
                    className="btn text-white bg-secondary bg-gradient shadow-sm dropdown-toggle w-100 justify-content-center ms-2 fw-bold"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {!user || isError
                        ? null
                        : property.name || "Select Property"}
                </button>
                <ul className="dropdown-menu p-3 bg-light property-dropdown-height overflow-auto">
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2 mb-1 bg-opacity-75"
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
