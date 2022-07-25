import { setUser } from "../../../app/features/userSlice";
import { useSelector } from "react-redux";
import { useUserPropertiesQuery } from "../../../app/services/propertyApiSlice";

function PropertyDropDown() {
    const user = useSelector(setUser);
    const { data = [], isFetching } = useUserPropertiesQuery("");
    // create state for drop down menu value

    const propertiesArray = data.properties;
    // need to fetch property data
    // map through property data to retrieve name for drop down menu
    // each a tag will render property details and units list
    let propertyList;

    if (propertiesArray) {
        propertyList = propertiesArray.map((property) => {
            return (
                <li key={property.id}>
                    <a class="dropdown-item" href="#">
                        {property.name}
                    </a>
                </li>
            );
        });
    }

    return (
        <div>
            <p class="text-start">Property</p>
            <div class="dropdown">
                <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Select Property
                </a>

                <ul class="dropdown-menu">
                    {propertyList}
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li>
                        <a
                            a
                            class="dropdown-item"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add-property-form"
                        >
                            {/* add plus icon */}+ Add property
                        </a>
                    </li>
                </ul>
            </div>
            <hr />
        </div>
    );
}

export default PropertyDropDown;
