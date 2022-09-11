import PropCompletedInspects from "../AccordianItems/PropCompletedInspects";
import PropInProgressInspects from "../AccordianItems/PropInProgressInspects";
import PropUpcomingInspects from "../AccordianItems/PropUpcomingInspects";

function StatusAccordians() {
    return (
        <div className="accordion p-0" id="accordionPanelsStayOpenExample">
            <PropUpcomingInspects />
            <PropInProgressInspects />
            <PropCompletedInspects />
        </div>
    );
}

export default StatusAccordians;
