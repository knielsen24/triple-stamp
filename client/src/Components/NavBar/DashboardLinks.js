import "../../App.css";

function DashboardLinks() {
    return (
        <>
            {/* <a className="nav-link" href="/dashboard">
                Dashboard
            </a> */}
            <a className="nav-link" href="/management">
                Management
            </a>
            <a className="nav-link" href="#">
                Inspections
            </a>
        </>
    );
}

export default DashboardLinks;
