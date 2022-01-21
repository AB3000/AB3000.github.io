import React from "react";
import "../css/home-style.scss";
import posed from "react-pose";
import { tween } from "popmotion";
import { interpolate } from "flubber";
import { homeStyles, paths } from "../../data/professionalVariables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { leftArrow, rightArrow } from "./arrows";

const pathIds = Object.keys(paths);

const morphTransition = ({ from, to }) =>
  tween({
    from: 0,
    to: 1,
  }).pipe(interpolate(from, to));

const Icon = posed.path(
  pathIds.reduce((config, id) => {
    config[id] = {
      d: paths[id],
      transition: morphTransition,
    };
    return config;
  }, {})
);

export default class HomePage extends React.Component {
  state = { pathIndex: 0 };

  gotoNext = () => {
    const { pathIndex } = this.state;
    const nextIndex = pathIndex + 1;
    this.setState({
      pathIndex: nextIndex > pathIds.length - 1 ? 0 : nextIndex,
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(this.gotoNext, 1000);
  }

  render() {
    const verticallyCenteredStyle = {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
    };

    return (
      <div className="home-container">
        <div className="svg-container">
          <svg width="100%" height="100%" viewBox="0 0 520 500">
            <Icon
              style={homeStyles[this.state.pathIndex]}
              pose={pathIds[this.state.pathIndex]}
            />
          </svg>
        </div>
        <div className="center-container">
          {leftArrow(
            "/hobbies",
            "translate(0, 200)",
            "black",
            "250",
            "80",
            "scale(1.03458333) translate(0, -110)",
            "-10",
            "40%",
            "77%",
            "Hobbies"
          )}
          {rightArrow(
            "/career",
            "translate(0, 200) scale(-1,-1)",
            "#ff8787",
            "250",
            "80",
            "scale(0.26458333) translate(0, -450)",
            "-10",
            "30%",
            "5",
            "Career"
          )}
          <div className="profile-container">
            Aarushi Banerjee
            <h6> Software Engineer </h6>
            <div className="icon-container">
              <a
                href="https://www.instagram.com/someone_alive_somehow/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://github.com/AB3000" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/aarushi-b-06a2a0a8/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:ab2424@cornell.edu">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    );
  }
}
