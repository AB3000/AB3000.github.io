import React from "react";
import Text from "react-text";
import "./homeStyle.scss";
import { Link } from "react-router-dom";
import SplitText from "react-pose-text";
import Button from "@material-ui/core/Button";

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};


export default class HomePage extends React.Component {
  render() {
    return (
      <div className="home-container page">
        <br></br>
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          Welcome aboard!
        </SplitText>
        <br></br>
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          My name is Aarushi.
        </SplitText>
        <br></br>
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          Glad to have you here!
        </SplitText>
        <br></br>
        <Link to="/hobbies">
          <Button color="primary" variant="contained">
            Hobbies
          </Button>
        </Link>
        <Link to="/professional">
          <Button color="primary" variant="contained">
            Professional
          </Button>
        </Link>
      </div>
    );
  }
}
