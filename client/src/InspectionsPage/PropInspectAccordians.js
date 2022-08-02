import PropAllInspectsList from "../Components/AccordianItems/PropAllInspectsList";
import PropCompletedInspects from "../Components/AccordianItems/PropCompletedInspects";
import PropInProgressInspects from "../Components/AccordianItems/PropInProgressInspects";
import PropUpcomingInspects from "../Components/AccordianItems/PropUpcomingInspects";

function PropInspectAccordians() {
    return (
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <PropUpcomingInspects />
            <PropCompletedInspects />
            <PropInProgressInspects />
            <PropAllInspectsList />
        </div>
    );
}

export default PropInspectAccordians;
