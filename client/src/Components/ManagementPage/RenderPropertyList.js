function RenderPropertyList() {
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
                        className="dropdown-item"
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

    return <div>RenderPropertyList</div>;
}

export default RenderPropertyList;
