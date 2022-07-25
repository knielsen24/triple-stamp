import { useState } from "react";
import { setUser } from "../../../app/features/userSlice";
import {
    selectProperty,
    setSelectProperty,
} from "../../../app/features/propertySlice";
import { useSelector, useDispatch } from "react-redux";
import { useUserPropertiesQuery } from "../../../app/services/propertyApiSlice";
import ButtonOpenAddPropertyModal from "../../Buttons/ButtonOpenAddPropertyModal";

function PropertyDropDown() {
    const user = useSelector(setUser);
    const property = useSelector(setSelectProperty);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const { data = [], isFetching } = useUserPropertiesQuery("");
    const propertiesArray = data.properties;
    console.log(data)

    const handleSelectProperty = (property) =>
        dispatch(selectProperty(property));

    let propertyList;
    // need useParams to render property link
    if (propertiesArray) {
        propertyList = propertiesArray.map((property) => {
            return (
                <li key={property.id}>
                    <a
                        class="dropdown-item"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSelectProperty(property);
                        }}
                    >
                        {property.name}
                    </a>
                </li>
            );
        });
    }

    return (
        <div class="mw-100 my-3">
            <div class="dropdown mw-100">
                <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {property.name}
                </a>
                <ul class="dropdown-menu">
                    {propertyList}
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li>
                        <ButtonOpenAddPropertyModal />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PropertyDropDown;
