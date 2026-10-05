import React from "react";
import resumePdf from "./assets/resume1.pdf";

function Resume() {
    return (
        <div>
            <iframe
                src={resumePdf}
                width="100%"
                height="800px"
                title="Resume"
            ></iframe>
        </div>
    );
}

export default Resume;