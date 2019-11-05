import React from "react";
import "./homeStyle.scss";
import { Link } from "react-router-dom";
import SplitText from "react-pose-text";
import Button from "@material-ui/core/Button";
import posed, { PoseGroup } from "react-pose";
import { tween } from "popmotion";
import { interpolate } from "flubber";

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};

const styles = [
  {
    opacity: 1,
    fill: "#ffffff",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "#000000",
    strokeWidth: 0,
    strokeLinejoin: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeDashoffset: 0,
    strokeOpacity: 1
  },
  {
    opacity: 1,
    fill: "#b6b6b6",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "#000000",
    strokeWidth: 0,
    strokeLinejoin: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeDashoffset: 0,
    strokeOpacity: 1
  },
  {
    opacity: 1,
    fill: "#ffffff",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "#000000",
    strokeWidth: 0,
    strokeLinejoin: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeDashoffset: 0,
    strokeOpacity: 1
  },
  {
    opacity: 1,
    fill: "#ffffff",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "#000000",
    strokeWidth: 0,
    strokeLinejoin: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeDashoffset: 0,
    strokeOpacity: 1
  }
];

//svgs
const paths = {
  plane:
    "m 250.42882,300.396741 c 96.457909,-303.153429 -397.34272,-47.739309 -94.18929,48.718601 303.153423,96.457908 47.7393,-397.34272 -48.7186,-94.18929 -96.45791,303.15342 397.34272,47.739303 94.18929,-48.71861 -303.15343,-96.4579 -47.73931,397.34273 48.7186,94.189299 z",
  circle:
    "m 453.62569,240.82154 c -103.93541,188.07633 184.67812,-133.21722 16.09333,16.2182 -168.58479,149.43543 165.99031,-131.25809 -14.71131,-17.67895 -180.70162,113.57915 222.30481,-30.01708 7.83754,23.59394 -214.46728,53.61102 214.52078,-41.72163 -8.90891,-21.60745 -223.42968,20.11418 210.00958,58.2208 -0.38292,22.05487 -210.3925,-36.16593 215.42069,29.22965 1.91747,-24.11508 -213.50321,-53.34474 188.62021,117.36969 -10.12277,21.95767 -198.74298,-95.41202 173.26823,112.76217 7.93075,-20.75713 -165.33748,-133.5193 118.12231,181.10263 -16.32883,13.23087 -134.45113,-167.871763 114.54588,176.45765 18.93872,-13.75715 -95.60716,-190.214813 41.02859,217.53732 -22.28261,4.69268 -63.31119,-212.84465 14.86683,210.54654 19.99172,-3.64574 5.1249,-214.192281 -72.42852,205.79256 -22.11311,-4.12377 50.31541,-209.916329 -46.57442,207.0147 22.21716,2.48154 C 522.49351,34.832877 307.74696,409.91766 436.60605,227.41255 565.46513,44.907432 291.51673,396.13857 454.88281,240.28966 618.24888,84.440745 254.17868,331.84451 443.4758,222.90197 632.77292,113.95942 247.99124,329.64389 454.40556,241.7856 c 206.41433,-87.8583 -218.90281,8.62715 -3.19217,-24.78549 215.71063,-33.41264 -209.44715,28.06731 3.46183,24.57584 212.90899,-3.49146 -211.9946,-70.36751 7.16299,-23.19735 219.1576,47.17017 -204.4918,-89.03154 -8.05782,20.85794 C 650.21436,349.12602 296.14577,95.72363 469.76122,222.89261 643.37667,350.06158 309.19799,80.224718 454.74463,241.62186 600.29127,403.01901 375.68493,40.178667 473.98096,230.07139 572.277,419.96411 397.12439,27.018878 455.18092,240.74626 c 58.05653,213.72739 11.58944,-213.31422 20.49935,0.49761 8.90992,213.81182 29.91433,-209.853788 -20.98186,-1.51271 -50.89618,208.34108 80.56871,-196.686734 19.58675,7.92019 -60.98197,204.60693 83.27594,-194.906141 -20.65947,-6.82981 z",
  heart: "M 0 100 H 90 V 90 H 10 L 10 10",
  bookmark: "M 0 100 H 90 V 90 H 10 L 10 10"
};

const pathIds = Object.keys(paths);

const morphTransition = ({ from, to }) =>
  tween({
    from: 0,
    to: 1
  }).pipe(interpolate(from, to));

const Icon = posed.path(
  pathIds.reduce((config, id) => {
    config[id] = {
      d: paths[id],
      transition: morphTransition
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
      pathIndex: nextIndex > pathIds.length - 1 ? 0 : nextIndex
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(this.gotoNext, 2000);
  }

  render() {
    return (
      <div className="home-container">
        <div className="svg-container-left">
          <svg width="100%" height="100%" viewBox="0 0 520 500">
            <Icon
              style={styles[this.state.pathIndex]}
              pose={pathIds[this.state.pathIndex]}
            />
          </svg>
        </div>
        <div className="svg-container-right">
          <svg width="100%" height="100%" viewBox="0 0 520 500">
            <Icon
              style={styles[this.state.pathIndex]}
              pose={pathIds[this.state.pathIndex]}
            />
          </svg>
        </div>
        <br></br>
        <div className="home-text page">
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
      </div>
    );
  }
}
