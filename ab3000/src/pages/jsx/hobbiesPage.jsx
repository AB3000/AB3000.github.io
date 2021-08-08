import React from "react";
import update from "immutability-helper";
import { Link } from "react-router-dom";
import "../css/hobbies-style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/bootstrap-grid.scss";
import ReactHtmlParser from "react-html-parser";
import { astrologyData, charPoses } from "../../data/hobbyVariables";
import SplitText from "react-pose-text";
import Button from "react-bootstrap/Button";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: "linear",
};

const allPictureData = [astrologyData];

var slideShowStates = new Array(allPictureData.length);

for (let i = 0; i < slideShowStates.length; i++) {
  slideShowStates[i] = Array(allPictureData[i].length).fill(false);
}

export default class HobbiesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemState: slideShowStates,
    };
  }

  toggleClass = (identifier, id) => {
    // console.log("identifier is ", identifier, "and id is", id);
    this.setState(
      update(this.state, {
        selectedItemState: {
          [identifier]: {
            [id]: { $set: !this.state.selectedItemState[identifier][id] },
          },
        },
      })
    );
  };

  render() {
    const { selectedItemState } = this.state;

    const SlideShow = ({ identifier, dataset }) => (
      <Slider {...settings}>
        {dataset.map((data, idx) => {
          // console.log("parsed backtext is ", ReactHtmlParser(data.backText));
          return (
            <div className="card-wrapper">
              <div
                key={data.id}
                className={`card ${
                  selectedItemState[identifier][data.id] ? "is-flipped" : ""
                }`}
                onClick={() => this.toggleClass(identifier, data.id)}
              >
                <div className="card__face--front">
                  <div className="card-image">
                    <img src={data.src} />
                  </div>
                  <div className="hover-content" style={{ color: "white" }}>
                    {ReactHtmlParser(data.frontText)}
                  </div>
                </div>
                <div
                  className="card__face--back"
                  style={{ backgroundColor: data.cardColor }}
                >
                  {ReactHtmlParser(data.backText)}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    );

    return (
      <div className="page-container">
        <div className="animation-left">
          <Link to="/professional">
            <svg
              fill="#ff8787"
              style={{
                float: "left",
                padding: "20px",
                overflow: "visible",
              }}
              width="200"
              height="50"
            >
              <path
                id="left_path"
                fill="#ff8787"
                transform="scale(1.03458333) translate(0, -103)"
                d="m 139.19047,150.28626 c 2.3235,-0.005 4.79464,-0.13319 8.71316,-0.48266 2.4473,-0.21826 4.89771,-0.49303 7.3055,-0.98236 2.6369,-0.53589 7.33212,-1.96601 9.68313,-3.70004 1.07164,-0.79041 1.80047,-1.96271 2.70061,-2.944 0.50955,-1.1434 1.20053,-2.22223 1.52859,-3.43028 1.01533,-3.73885 0.41267,-7.94599 -0.83819,-11.53522 -0.38367,-1.10092 -0.94048,-2.13404 -1.41077,-3.20084 l -7.27087,-3.31452 c 0.50793,1.03821 1.10441,2.03737 1.52342,3.11454 1.33028,3.41972 1.9747,7.41405 1.05936,11.03653 -0.28637,1.13334 -0.90493,2.15562 -1.35754,3.2334 -0.81329,0.92705 -1.47007,2.01979 -2.44016,2.78122 -2.2453,1.76235 -6.43912,3.22227 -9.03097,3.83904 -8.53053,2.02996 -17.43125,1.96356 -26.11934,1.50792 -10.45154,-1.31725 -12.94986,-1.30314 -23.361877,-4.00234 -3.896977,-1.01025 -7.70944,-2.3243 -11.54865,-3.5357 -10.415653,-3.2865 -20.687865,-7.11761 -31.36966,-9.49244 -5.197589,-0.7527 -9.912045,-1.67976 -15.179437,-1.54823 -2.081347,0.052 -4.199429,0.46824 -6.237861,1.11053 l -4.180623,-5.45858 -9.429398,7.18664 -9.429399,7.18612 15.718936,1.02526 15.718938,1.02526 -4.102076,-5.35574 c 0.275437,-0.13061 0.640638,-0.27397 1.318268,-0.53537 2.240563,-0.86432 4.554347,-1.59119 6.982518,-1.72031 5.260964,-0.27975 9.165783,0.5448 14.414624,1.27073 10.403929,2.28997 20.451404,5.87029 30.599165,9.04699 3.833312,1.2 7.636582,2.51363 11.528492,3.50728 9.89934,2.5274 13.53299,2.69903 23.52053,3.99252 5.26096,0.18579 8.00422,0.38145 10.99158,0.37465 z"
              />
              <text dy="-70%">
                <textPath
                  href="#left_path"
                  style={{
                    fontSize: 18,
                    fontFamily: "Aclonica",
                  }}
                  textLength="63%"
                  startOffset="74.5%"
                >
                  Professional
                </textPath>
              </text>
            </svg>
          </Link>
        </div>
        <div className="animation-right">
          <Link to="/">
            <svg
              transform="scale(-1,-1)"
              fill="#ff8787"
              style={{
                float: "right",
                padding: "20px",
                overflow: "visible",
              }}
              width="200"
              height="50"
            >
              <path
                id="right_path"
                fill="#ff8787"
                transform="scale(0.26458333) translate(0, -610)"
                d="m 526.07422,456.17578 c -11.29079,-0.0257 -21.65902,0.71383 -41.54297,1.41602 -37.74818,4.88878 -51.48166,5.53746 -88.89648,15.08984 -14.70959,3.75553 -29.08416,8.72043 -43.57227,13.25586 -38.35374,12.00643 -76.32845,25.53835 -115.65039,34.19336 -19.83814,2.74367 -34.59651,5.86006 -54.48047,4.80273 -9.17734,-0.48801 -17.92235,-3.23523 -26.39062,-6.50195 -2.56112,-0.98797 -3.94141,-1.52981 -4.98243,-2.02344 l 15.50391,-20.24218 -59.41016,3.875 -59.410152,3.875 35.638671,27.16015 35.638671,27.16211 15.80078,-20.63086 c 7.70431,2.42754 15.70966,4.00084 23.57617,4.19727 19.90825,0.49712 37.72667,-3.00671 57.3711,-5.85157 40.37214,-8.97573 79.19625,-23.45553 118.5625,-35.87695 14.5104,-4.57852 28.91971,-9.54501 43.64844,-13.36328 39.35249,-10.2017 48.79499,-10.14837 88.29687,-15.12695 32.83688,-1.72211 66.47738,-1.97307 98.71875,5.69922 9.79597,2.3311 25.64664,7.84891 34.13281,14.50976 3.66649,2.87785 6.14881,7.00791 9.22266,10.51172 1.71065,4.0735 4.04852,7.93721 5.13086,12.2207 3.45955,13.69127 1.02392,28.78797 -4.00391,41.71289 -1.58366,4.0712 -3.83804,7.84755 -5.75781,11.77149 l 27.48047,-12.52734 c 1.77747,-4.032 3.88194,-7.9367 5.33203,-12.09766 4.72766,-13.56559 7.00544,-29.46657 3.16797,-43.59766 -1.23991,-4.56586 -3.85149,-8.64333 -5.77734,-12.96484 -3.40211,-3.70881 -6.15674,-8.13958 -10.20704,-11.12695 -8.8857,-6.55382 -26.63142,-11.95897 -36.59765,-13.98438 -9.10031,-1.84944 -18.36169,-2.88797 -27.61133,-3.71289 -14.81016,-1.3208 -24.14992,-1.80421 -32.93164,-1.82422 z"
              />
              <text dy="-50%">
                <textPath
                  href="#right_path"
                  style={{
                    fontSize: 18,
                    fontFamily: "Aclonica",
                  }}
                  textLength="30%"
                  startOffset="3.25%"
                >
                  Home
                </textPath>
              </text>
            </svg>
          </Link>
        </div>
        {/* <h1 className="slider_title">Hobbies</h1> */}

        {/* <div className="container mt-5 carousel">
          <h1 className="slider_title">Test</h1>
          {SlideShow({ identifier: 0, dataset: astrologyData })}
        </div> */}

        <div className="">
          <div className="introduction-text">
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              During my spare time, I love to experiment with 2D digital
              drawing, 3D modeling, animation, jewelry design, and resin!
            </SplitText>
            <h1>Which collection do you want to see?</h1>
          </div>
        </div>
      </div>
    );
  }
}
