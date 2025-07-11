import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../assets/styles/Main.scss";
import avatar from "../assets/images/avatar.jpg";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/agnolas7"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.instagram.com/rottenac.c/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/sev7v"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
          </div>
          <h1>Noriel Salonga</h1>
          <p>System Developer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/yujisatojr"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
