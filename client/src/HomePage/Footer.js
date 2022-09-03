import logoName from "../assets/logo-name-white-svg.svg";
import emailIcon from "../assets/email-icon.svg";
import linkedInIcon from "../assets/linkedIn-icon.svg";
import githubIcon from "../assets/github-icon.svg";

function Footer() {
    const emailAddress = "knielsen24@gmail.com";
    const githubUrl = "https://github.com/knielsen24/triple-stamp";
    const linkedinUrl = "https://www.linkedin.com/in/kevin-nielsen-se/";
    const presentationUrl =
        "https://docs.google.com/presentation/d/1RXkb_iMTt5zE5fqRE0455yYT9UuW28gb0X53KkuulQg/edit#slide=id.p";
    const figmaUrl =
        "https://www.figma.com/file/JwTKdTLfaxo4khUwfn2WrT/Triple-Stamp?node-id=0%3A1";

    const footerClass =
        "mt-auto border-top border-1 py-4 bg-secondary text-white text";
    const aTagClass = "nav-link text-decoration-none";

    return (
        <footer className={footerClass}>
            <div className="container footer-container">
                <div className="row">
                    <div className="col">
                        <img className="logo" src={logoName} alt="logo-name" />
                    </div>

                    <div className="col ">
                        <div className="row">
                            <div className="col-2">
                                <a
                                    className={aTagClass}
                                    id="footer-links"
                                    href={linkedinUrl}
                                >
                                    <img
                                        className="logo"
                                        src={linkedInIcon}
                                        alt="logo-name"
                                    />
                                </a>
                            </div>

                            <div className="col-2">
                                <a
                                    className={aTagClass}
                                    id="footer-links"
                                    href={githubUrl}
                                >
                                    <img
                                        className="logo"
                                        src={githubIcon}
                                        alt="logo-name"
                                    />
                                </a>
                            </div>
                            <div className="col-2">
                                <a
                                    className={aTagClass}
                                    id="footer-links"
                                    href={emailAddress}
                                >
                                    <img
                                        className="logo"
                                        src={emailIcon}
                                        alt="logo-name"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <a
                            className={aTagClass}
                            id="footer-links"
                            href={presentationUrl}
                        >
                            Project Proposal
                        </a>
                    </div>
                    <div className="col">
                        <a
                            className={aTagClass}
                            id="footer-links"
                            href={figmaUrl}
                        >
                            Wireframe Templates
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
