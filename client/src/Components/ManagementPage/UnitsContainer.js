import { useSelector } from "react-redux";
import { setSelectProperty } from "../../app/features/propertySlice";
import ButtonOpenAddUnitModal from "../Buttons/ButtonOpenAddUnitModal";

function UnitsContainer() {

    const property = useSelector(setSelectProperty);

    let renderUnitList;

    if (property) {
        const getUnitsList = property.units;
        renderUnitList = getUnitsList.map((unit) => {
            return (
                <button
                    type="button"
                    class="list-group-item list-group-item-action"
                    aria-current="true"
                    key={unit.id}
                    onClick={()=>{}}
                >
                    {unit.number + " " + (unit.name || "name")}
                </button>
            );
        });
    }

    return (
        <div>
            {/* {property.name + " " + "units"} */}
            <div className=" list-group">
                <ul className="list-group list-group-flush">
                    <ButtonOpenAddUnitModal />
                    {property.name !== "" ? renderUnitList : null}
                </ul>
            </div>
        </div>
    );
}

export default UnitsContainer;
