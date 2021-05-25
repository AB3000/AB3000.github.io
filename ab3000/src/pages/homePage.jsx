import React from "react";
import "./homeStyle.scss";
import { Link } from "react-router-dom";
import SplitText from "react-pose-text";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import posed from "react-pose";
import { tween } from "popmotion";
import { interpolate } from "flubber";
import { homeStyles, paths, charPoses } from "../data/variables";
//import {default as Arrow} from '../arrow/arrow.js';
import { ReactComponent as Arrow } from "../arrow/arrow.svg";

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
          <Arrow
            style={{ float: "left" }}
            fill="black"
            width="300px"
            height="100px"
          />
          <Arrow
            style={{ float: "right" }}
            transform="scale(-1, 1)"
            fill="pink"
            width="300px"
            height="100px"
          />
          <div className="profile-container" style={{ float: "center" }}>
            Aarushi Banerjee
            <h6> Software Engineer </h6>
          </div>
          <br></br>
        </div>

        <div className="home-text page">
          {/* <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            Welcome aboard!
          </SplitText>
          <br></br>
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            My name is Aarushi.
          </SplitText>
          <br></br>
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            Glad to have you here!
          </SplitText> */}
          {/* <Link to="/hobbies">
            <Button color="primary" variant="contained">
              Hobbies
            </Button>
          </Link>
          <Link to="/professional">
            <Button color="primary" variant="contained">
              Professional
            </Button>
          </Link> */}
        </div>
      </div>
    );
  }
}
