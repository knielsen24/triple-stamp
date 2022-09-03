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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ButtonOpenAddPropertyModal from "../Components/Buttons/ButtonOpenAddPropertyModal";
import { useFetchUserQuery } from "../app/api/userApiSlice";
import { skipToken } from "@reduxjs/toolkit/dist/query";

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
                <li className="overflow-auto" key={property.id}>
                    <a
                        key={property.id}
                        className="dropdown-item bg-light"
                        role="button"
                        href="#"
                        onClick={() => {
                            dispatch(selectProperty(property));
                            dispatch(unitsList(property.units));
                            refetch();
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
                    className="btn text-white bg-secondary bg-opacity-75 dropdown-toggle w-100 justify-content-center  ms-2 fw-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {!user || isError ? null : property.name}
                </a>
                <ul className="dropdown-menu dropdown-menu p-3 bg-light ">
                    <form className="d-flex" role="search">
                        {/* <i class="bi bi-calendar2"></i> */}
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
