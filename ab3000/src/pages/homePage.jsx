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
          <Link to="/hobbies">
            <svg
              transform="scale(1,-1)"
              fill="black"
              style={{
                float: "left",
                padding: "20px",
                margin: "10px",
              }}
              width="200"
              height="300"
            >
              <path
                id="left_path"
                fill="black"
                transform="scale(0.26458333)"
                d="m 526.07422,456.17578 c 8.78172,0.02 18.12148,0.50342 32.93164,1.82422 9.24964,0.82492 18.51102,1.86345 27.61133,3.71289 9.96623,2.02541 27.71195,7.43056 36.59765,13.98438 4.0503,2.98737 6.80493,7.41814 10.20704,11.12695 1.92585,4.32151 4.53743,8.39898 5.77734,12.96484 3.83747,14.13109 1.55969,30.03207 -3.16797,43.59766 -1.45009,4.16096 -3.55456,8.06566 -5.33203,12.09766 l -27.48047,12.52734 c 1.91977,-3.92394 4.17415,-7.70029 5.75781,-11.77149 5.02783,-12.92492 7.46346,-28.02162 4.00391,-41.71289 -1.08234,-4.28349 -3.42021,-8.1472 -5.13086,-12.2207 -3.07385,-3.50381 -5.55617,-7.63387 -9.22266,-10.51172 -8.48617,-6.66085 -24.33684,-12.17866 -34.13281,-14.50976 -32.24137,-7.67229 -65.88187,-7.42133 -98.71875,-5.69922 -39.50188,4.97858 -48.94438,4.92525 -88.29687,15.12695 -14.72873,3.81827 -29.13804,8.78476 -43.64844,13.36328 -39.36625,12.42142 -78.19036,26.90122 -118.5625,35.87695 -19.64443,2.84486 -37.46285,6.34869 -57.3711,5.85157 -7.86651,-0.19643 -15.87186,-1.76973 -23.57617,-4.19727 l -15.80078,20.63086 -35.638671,-27.16211 -35.638671,-27.16015 59.410152,-3.875 59.41016,-3.875 -15.50391,20.24218 c 1.04102,0.49363 2.42131,1.03547 4.98243,2.02344 8.46827,3.26672 17.21328,6.01394 26.39062,6.50195 19.88396,1.05733 34.64233,-2.05906 54.48047,-4.80273 39.32194,-8.65501 77.29665,-22.18693 115.65039,-34.19336 14.48811,-4.53543 28.86268,-9.50033 43.57227,-13.25586 37.41482,-9.55238 51.1483,-10.20106 88.89648,-15.08984 19.88395,-0.70219 30.25218,-1.44172 41.54297,-1.41602 z"
                />
              <text dy="-5%">
                <textPath
                  href="#left_path"
                  style={{
                    fontSize: 18,
                  }}
                  textLength="50%"
                  startOffset="25%"
                >
                  ƨɘiddoH
                </textPath>
              </text>
            </svg>
          </Link>
          <Link to="/professional">
            <svg
              transform="scale(-1,-1)"
              fill="pink"
              style={{
                float: "right",
                padding: "20px",
                margin: "10px",
              }}
              width="200"
              height="300"
            >
              <path
                id="right_path"
                fill="pink"
                transform="scale(0.26458333)"
                d="m 526.07422,456.17578 c -11.29079,-0.0257 -21.65902,0.71383 -41.54297,1.41602 -37.74818,4.88878 -51.48166,5.53746 -88.89648,15.08984 -14.70959,3.75553 -29.08416,8.72043 -43.57227,13.25586 -38.35374,12.00643 -76.32845,25.53835 -115.65039,34.19336 -19.83814,2.74367 -34.59651,5.86006 -54.48047,4.80273 -9.17734,-0.48801 -17.92235,-3.23523 -26.39062,-6.50195 -2.56112,-0.98797 -3.94141,-1.52981 -4.98243,-2.02344 l 15.50391,-20.24218 -59.41016,3.875 -59.410152,3.875 35.638671,27.16015 35.638671,27.16211 15.80078,-20.63086 c 7.70431,2.42754 15.70966,4.00084 23.57617,4.19727 19.90825,0.49712 37.72667,-3.00671 57.3711,-5.85157 40.37214,-8.97573 79.19625,-23.45553 118.5625,-35.87695 14.5104,-4.57852 28.91971,-9.54501 43.64844,-13.36328 39.35249,-10.2017 48.79499,-10.14837 88.29687,-15.12695 32.83688,-1.72211 66.47738,-1.97307 98.71875,5.69922 9.79597,2.3311 25.64664,7.84891 34.13281,14.50976 3.66649,2.87785 6.14881,7.00791 9.22266,10.51172 1.71065,4.0735 4.04852,7.93721 5.13086,12.2207 3.45955,13.69127 1.02392,28.78797 -4.00391,41.71289 -1.58366,4.0712 -3.83804,7.84755 -5.75781,11.77149 l 27.48047,-12.52734 c 1.77747,-4.032 3.88194,-7.9367 5.33203,-12.09766 4.72766,-13.56559 7.00544,-29.46657 3.16797,-43.59766 -1.23991,-4.56586 -3.85149,-8.64333 -5.77734,-12.96484 -3.40211,-3.70881 -6.15674,-8.13958 -10.20704,-11.12695 -8.8857,-6.55382 -26.63142,-11.95897 -36.59765,-13.98438 -9.10031,-1.84944 -18.36169,-2.88797 -27.61133,-3.71289 -14.81016,-1.3208 -24.14992,-1.80421 -32.93164,-1.82422 z"
              />
              <text dy="-5%">
                <textPath
                  href="#right_path"
                  style={{
                    fontSize: 18,
                  }}
                  textLength="50%"
                  startOffset="-1.25%"
                >
                  Professional
                </textPath>
              </text>
            </svg>
          </Link>
          <div className="profile-container">
            Aarushi Banerjee
            <h6> Software Engineer </h6>
          </div>
          <br></br>
        </div>

        {/* <div className="home-text page">
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
          <Link to="/hobbies">
            <Button color="primary" variant="contained">
              Hobbies
            </Button>
          </Link>
        </div> */}
      </div>
    );
  }
}
