import PropAllInspectsList from "../AccordianItems/PropAllInspectsList";
import PropCompletedInspects from "../AccordianItems/PropCompletedInspects";
import PropInProgressInspects from "../AccordianItems/PropInProgressInspects";
import PropUpcomingInspects from "../AccordianItems/PropUpcomingInspects";

function PropInspectAccordians() {
    return (
        <div className="accordion p-0" id="accordionPanelsStayOpenExample">
            <PropUpcomingInspects />
            <PropInProgressInspects />
            <PropCompletedInspects />
            <PropAllInspectsList />
        </div>
    );
}

export default PropInspectAccordians;
