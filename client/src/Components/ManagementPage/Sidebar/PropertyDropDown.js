import { setUser } from "../../../app/features/userSlice";
import {
    selectProperty,
    setSelectProperty,
} from "../../../app/features/propertySlice";
import { useSelector, useDispatch } from "react-redux";
import { useFetchPropertiesQuery } from "../../../app/services/userApiSlice";
import ButtonOpenAddPropertyModal from "../../Buttons/ButtonOpenAddPropertyModal";

function PropertyDropDown() {
    // const user = useSelector(setUser);
    const property = useSelector(setSelectProperty);
    const dispatch = useDispatch();

    const {
        data = [],
        isLoading,
        isSuccess,
        isError,
        error,
    } = useFetchPropertiesQuery();

    const handleSelectProperty = (property) =>
        dispatch(selectProperty(property));

    const renderPropertyList = data.map((property) => {
        return (
            <li key={property.id}>
                <a
                    className="dropdown-item"
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

    return (
        <div className="w-100 ">
            <div className="dropdown ">
                <a
                    className="btn btn-secondary dropdown-toggle w-100"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {property.name}
                </a>
                <ul className="dropdown-menu">
                    {renderPropertyList}
                    <li>
                        <hr className="dropdown-divider" />
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
