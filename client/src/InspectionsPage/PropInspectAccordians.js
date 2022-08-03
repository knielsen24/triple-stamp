import PropAllInspectsList from "../AccordianItems/PropAllInspectsList";
import PropCompletedInspects from "../AccordianItems/PropCompletedInspects";
import PropInProgressInspects from "../AccordianItems/PropInProgressInspects";
import PropUpcomingInspects from "../AccordianItems/PropUpcomingInspects";

function PropInspectAccordians() {
    return (
        <div className="accordion mt-4" id="accordionPanelsStayOpenExample">
            <PropUpcomingInspects />
            <PropCompletedInspects />
            <PropInProgressInspects />
            <PropAllInspectsList />
        </div>
    );
}

export default PropInspectAccordians;
