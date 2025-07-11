import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLaptopCode,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const techStack = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "PHP",
  "Python",
  "SQL",
  "AWS",
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Adaptability",
  "Continuous Learning",
];

function Expertise() {
  return (
    <div className="container" id="about-me">
      <div className="skills-container">
        <h1>About Me</h1>
        <div className="skills-grid">
          {/* About Me Section */}
          <div className="skill">
            <FontAwesomeIcon icon={faUser} size="3x" />
            <h3>Personal Details</h3>
            <p>
              Hi, I'm Noriel Salonga, a passionate System Developer with a love
              for building impactful solutions. I enjoy learning new
              technologies, collaborating with diverse teams, and solving
              real-world problems through code.
              <br />
              <br />
              <strong>Email:</strong> salonganoriel4@gmail.com
              <br />
              <strong>Location:</strong> Candaba, Pampanga
              <br />
              <strong>Interests:</strong> Driving, Reading, Listening to music,
              Cats, and Coding.
            </p>
          </div>

          {/* Tech Stack Section */}
          <div className="skill">
            <FontAwesomeIcon icon={faLaptopCode} size="3x" />
            <h3>Tech Stack</h3>
            <p>
              My main tools and technologies for building modern, scalable
              applications:
            </p>
            <div className="flex-chips">
              {techStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Soft Skills / Fun Facts Section */}
          <div className="skill">
            <FontAwesomeIcon icon={faSmile} size="3x" />
            <h3>Soft Skills & Fun Facts</h3>
            <p>
              I believe in continuous growth, both technically and personally.
              Here are some of my strengths and interests:
            </p>
            <div className="flex-chips">
              {softSkills.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
