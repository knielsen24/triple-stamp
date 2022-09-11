import PropAnnualInspects from "../AccordianItems/PropAnnualInspects";
import PropMoveInInspects from "../AccordianItems/PropMoveInInspects";
import PropMoveOutInspects from "../AccordianItems/PropMoveOutInspects";
import PropSemiInspects from "../AccordianItems/PropSemiInspects";

function TypeAccordians() {
    return (
        <div className="accordion p-0" id="accordionPanelsStayOpenExample">
            <PropMoveInInspects />
            <PropMoveOutInspects />
            <PropAnnualInspects />
            <PropSemiInspects />
        </div>
    );
}

export default TypeAccordians;
