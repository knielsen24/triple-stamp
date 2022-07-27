import "../../App.css";

function Footer() {
    const presentationUrl = "https://docs.google.com/presentation/d/1RXkb_iMTt5zE5fqRE0455yYT9UuW28gb0X53KkuulQg/edit#slide=id.p"
    const githubUrl = "https://github.com/knielsen24/triple-stamp"
    const linkedinUrl = "https://www.linkedin.com/in/kevin-nielsen-se/"
    const figmaUrl = "https://www.figma.com/file/JwTKdTLfaxo4khUwfn2WrT/Triple-Stamp?node-id=0%3A1"

    return (
        <div
            className="container-fluid text-center border-top border-1 my-4"
            id="footer-container"
        >
            <div className="row mt-2">
                <div className="col">
                    <a
                        className="nav-link"
                        id="footer-links"
                        href={presentationUrl}
                    >
                        Proposal
                    </a>
                </div>
                <div className="col">
                    <a
                        className="nav-link"
                        id="footer-links"
                        href={githubUrl}
                    >
                        Github
                    </a>
                </div>
                <div className="col">
                    <a
                        className="nav-link"
                        id="footer-links"
                        href={linkedinUrl}
                    >
                        LinkedIn
                    </a>
                </div>
                <div className="col">
                    <a
                        className="nav-link"
                        id="footer-links"
                        href={figmaUrl}
                    >
                        Wireframe
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
