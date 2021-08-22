import React from "react";
import update from "immutability-helper";
import { Link } from "react-router-dom";
import "../css/hobbies-style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/bootstrap-grid.scss";
import "../css/fancy-buttons.scss";
import ReactHtmlParser from "react-html-parser";
import { astrologyData, charPoses } from "../../data/hobbyVariables";
import SplitText from "react-pose-text";
import { leftArrow, rightArrow } from "./arrows";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: "linear",
};

const allPictureData = [astrologyData, astrologyData];

var slideShowStates = new Array(allPictureData.length);

for (let i = 0; i < slideShowStates.length; i++) {
  slideShowStates[i] = Array(allPictureData[i].length).fill(false);
}

export default class HobbiesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemState: slideShowStates,
      isActive: false,
      sectionID: null,
    };
  }

  handleClick(id) {
    this.setState({ sectionID: id }, function () {
      //console.log("sectionID is ", this.state.sectionID);

      if (this.state.sectionID === id) {
        // console.log("in here");
        this.setState({ isActive: true });
      } else {
        this.setState({ isActive: false });
      }
    });
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
    const { selectedItemState, isActive, sectionID } = this.state;

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
        {leftArrow(
          "/professional",
          "none",
          "#ff8787",
          "200",
          "50",
          "scale(1.03458333) translate(0, -103)",
          "-8",
          "63%",
          "74.5%",
          "Professional"
        )}
        {rightArrow(
          "/",
          "scale(-1,-1)",
          "#ff8787",
          "200",
          "50",
          "scale(0.26458333) translate(0, -610)",
          "-8",
          "30%",
          "3.25%",
          "Home"
        )}
        <div className="test">
          <div className="introduction-text">
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              During my spare time, I love to experiment with 2D digital
              drawing, 3D modeling, animation, jewelry design, and resin!
            </SplitText>
            <h1>Which collection do you want to see?</h1>
            <div className="intro-wrapper">
              <div
                className={`sketchy link ${
                  this.state.sectionID === 0 && isActive ? "selected" : ""
                }`}
                onClick={() => this.handleClick(0)}
              >
                Resin Pendants
              </div>
              <div
                className={`sketchy link ${
                  this.state.sectionID === 1 && isActive ? "selected" : ""
                }`}
                onClick={() => this.handleClick(1)}
              >
                Jewelry
              </div>
              <div
                className={`sketchy link ${
                  this.state.sectionID === 2 && isActive ? "selected" : ""
                }`}
                onClick={() => this.handleClick(2)}
              >
                3D Modeling
              </div>
              <div
                className={`sketchy link ${
                  this.state.sectionID === 3 && isActive ? "selected" : ""
                }`}
                onClick={() => this.handleClick(3)}
              >
                Animation
              </div>
            </div>
          </div>
          <div
            className={`section ${
              this.state.sectionID === 0 && isActive ? "" : "is-hidden"
            }`}
          >
            <div className="container mt-5 carousel">
              <h1 className="slider_title">Astrology</h1>
              {SlideShow({ identifier: 0, dataset: astrologyData })}
            </div>
            <h1 className="coming-soon">More coming soon!</h1>
          </div>
          <div
            className={`section ${
              this.state.sectionID === 1 && isActive ? "" : "is-hidden"
            }`}
          >
            <h1 className="coming-soon">Coming soon!</h1>
          </div>
          <div
            className={`section ${
              this.state.sectionID === 2 && isActive ? "" : "is-hidden"
            }`}
          >
            <h1 className="coming-soon">Coming soon!</h1>
          </div>
          <div
            className={`section ${
              this.state.sectionID === 3 && isActive ? "" : "is-hidden"
            }`}
          >
            <h1 className="coming-soon">Coming soon!</h1>
          </div>

          {/* <div
            className={`section ${
              this.state.sectionID === 1 && isActive ? "" : "is-hidden"}`}
          >
            <div className="container mt-5 carousel">
              <h1 className="slider_title">Class 2</h1>
              {SlideShow({ identifier: 1, dataset: astrologyData })}
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
