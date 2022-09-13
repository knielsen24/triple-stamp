import { Link } from "react-router-dom";
import logoName from "../assets/logo-name-white-svg.svg";
import emailIcon from "../assets/email-icon.svg";
import linkedInIcon from "../assets/linkedIn-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import { useFetchUserQuery } from "../app/api/userApiSlice";

function Footer() {
    const { data: user, isError } = useFetchUserQuery();
    const emailAddress = "knielsen24@gmail.com";
    const githubUrl = "https://github.com/knielsen24/triple-stamp";
    const linkedinUrl = "https://www.linkedin.com/in/kevin-nielsen-se/";
    const presentationUrl =
        "https://docs.google.com/presentation/d/1RXkb_iMTt5zE5fqRE0455yYT9UuW28gb0X53KkuulQg/edit#slide=id.p";
    const figmaUrl =
        "https://www.figma.com/file/JwTKdTLfaxo4khUwfn2WrT/Triple-Stamp?node-id=0%3A1";

    const footerClass =
        "mt-auto border-top border-1 py-3 bg-secondary text-white text";
    const aTagClass = "nav-link text-decoration-none";

    const handlePath = (!user || isError) ? "/" : "dashboard/main"

    return (
        <footer className={footerClass}>
            <div className="container">
                <div className="row justify-content-between align-items-end">
                    <div className="col ">
                        <Link to={handlePath}>
                            <img
                                className="footer-logo"
                                src={logoName}
                                alt="logo-name"
                            />
                        </Link>
                    </div>
                    <div className="col">
                        <div className="row justify-content-center">
                            <div className="col-2 align-middle">
                                <a
                                    className="nav-link text-decoration-none "
                                    id="footer-links"
                                    href={linkedinUrl}
                                >
                                    <img
                                        className="footer-logo"
                                        src={linkedInIcon}
                                        alt="logo-name"
                                    />
                                </a>
                            </div>

                            <div className="col-2">
                                <a
                                    className="nav-link text-decoration-none"
                                    id="footer-links"
                                    href={githubUrl}
                                >
                                    <img
                                        className="footer-logo"
                                        src={githubIcon}
                                        alt="logo-name"
                                    />
                                </a>
                            </div>
                            {/* <div className="col-2">
                                <a
                                    className="nav-link text-decoration-none "
                                    id="footer-links"
                                    href={emailAddress}
                                >
                                    <img
                                        className="footer-logo"
                                        src={emailIcon}
                                        alt="logo-name"
                                    />
                                </a>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="col">
                        <a
                            className="nav-link text-decoration-none text-center"
                            id="footer-links"
                            href={presentationUrl}
                        >
                            Portfolio (Coming Soon)
                        </a>
                    </div> */}
                    <div className="col">
                        <a
                            className="nav-link text-decoration-none text-center"
                            id="footer-links"
                            href={presentationUrl}
                        >
                            Project Proposal
                        </a>
                    </div>
                    <div className="col">
                        <a
                            className="nav-link text-decoration-none float-end"
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
