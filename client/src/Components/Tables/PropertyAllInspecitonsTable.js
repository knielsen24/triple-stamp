import { useSelector } from "react-redux";
import { setSelectProperty } from "../../app/features/propertySlice";
import { useFetchPropInspectionsQuery } from "../../app/services/propertyApiSlice";

function PropertyAllInspecitonsTable() {
    const property = useSelector(setSelectProperty);
    const { data: propInspections } = useFetchPropInspectionsQuery(
        property.id || ""
    );

    let allPropInspect;

    if (propInspections) {
        console.log(propInspections);
        allPropInspect = propInspections.map((inspect) => {
            return (
                <tr key={inspect.id}>
                    <th scope="row">{inspect.unit.number}</th>
                    <td>{inspect.title}</td>
                    <td>{inspect.type_name}</td>
                    <td>{inspect.status}</td>
                    <td>{inspect.scheduled_date}</td>
                </tr>
            );
        });
    }

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Unit #</th>
                        <th scope="col">Title</th>
                        <th scope="col">Type</th>
                        <th scope="col">Status</th>
                        <th scope="col">Scheduled Date</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">{allPropInspect}</tbody>
            </table>
        </div>
    );
}

export default PropertyAllInspecitonsTable;
