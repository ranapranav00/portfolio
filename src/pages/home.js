import React from "react";
import "../styles/home.css";
import { LinkedIn } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { AssignmentInd } from "@mui/icons-material";
import { Button } from "@mui/material";

// random commit to check for pages/root

function Home() {
    return (
        <div id="home">
            <div>
                <img id="profile" src="./images/pfp.jpg" alt="pfp"/>
            </div>
            <div id="bio">
                <h1 id="intro">I'm Pranav Rana</h1>
                <p id="para">Welcome to my website! I'm currently a student at Northeastern University pursuing a combined major
                    in Computer Science and Mathematics. I enjoy learning new things and am greatly interested in the endless potential
                    applications of generative AI, as well as the role of SWE in predicting Financial Markets. I hope to be able to apply
                    my interests wherever possible.
                </p>
                <div id="buttons">
                    <Button id="button" href="https://www.linkedin.com/in/pranav-rana-a5b07a250/"><LinkedIn id="li-icon" className="icon"/>LinkedIn</Button>
                    <Button id="button" href="https://github.com/ranapranav00"><GitHub id="gh-icon" className="icon"/>GitHub</Button>
                    <Button id="button" href="https://www.instagram.com/pranav_0629/"><Instagram id="ig-icon" className="icon"/>Instagram</Button>
                    <Button id="button" href="mailto:ranapranav00@gmail.com"><Email id="gm-icon" className="icon"/>Email</Button>
                    <Button id="button" href="google.com"><AssignmentInd id="r-icon" className="icon"/>Resume</Button>
                </div>
            </div>
        </div>
    )
}

export default Home;