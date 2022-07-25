import "../../App.css";
import React from "react";

function Footer() {
    return (
        <div class="container-fluid text-center border-top border-1 m-4" id="footer-container">

            <div class="row mt-2">
                <div class="col">
                    <a
                        class="nav-link"
                        id="footer-links"
                        href="https://docs.google.com/presentation/d/1RXkb_iMTt5zE5fqRE0455yYT9UuW28gb0X53KkuulQg/edit#slide=id.p"
                    >
                        Proposal
                    </a>
                </div>
                <div class="col">
                    <a
                        class="nav-link"
                        id="footer-links"
                        href="https://github.com/knielsen24/triple-stamp"
                    >
                        Github
                    </a>
                </div>
                <div class="col">
                    <a
                        class="nav-link"
                        id="footer-links"
                        href="https://www.linkedin.com/in/kevin-nielsen-se/"
                    >
                        LinkedIn
                    </a>
                </div>
                <div class="col">
                    <a
                        class="nav-link"
                        id="footer-links"
                        href="https://www.figma.com/file/JwTKdTLfaxo4khUwfn2WrT/Triple-Stamp?node-id=0%3A1"
                    >
                        Wireframe
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
