import {
    selectProperty,
    setSelectProperty,
} from "../../../app/features/propertySlice";
import { useSelector, useDispatch } from "react-redux";
import { useFetchPropertiesQuery } from "../../../app/services/propertyApiSlice";
import ButtonOpenAddPropertyModal from "../../Buttons/ButtonOpenAddPropertyModal";
import { useNavigate } from "react-router-dom";

function PropertyDropDown() {
    const property = useSelector(setSelectProperty);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        data: properties,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useFetchPropertiesQuery({ refetchOnMountOrArgChange: true });

    const handleSelectProperty = (featured) =>
        dispatch(selectProperty(featured));

    // need useParams to render property link

    let renderPropertyList;
    if (properties) {
        renderPropertyList = properties.map((property) => {
            return (
                <li key={property.id}>
                    <a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSelectProperty(property);
                            navigate("property-details")
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
            <div className="dropdown ">
                <a
                    className="btn btn-secondary dropdown-toggle w-100"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {property.name || ""}
                </a>
                <ul className="dropdown-menu">
                    <li>
                        <ButtonOpenAddPropertyModal />
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    {renderPropertyList}
                </ul>
            </div>
        </div>
    );
}

export default PropertyDropDown;
