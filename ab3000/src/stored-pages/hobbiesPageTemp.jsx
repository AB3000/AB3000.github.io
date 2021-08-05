import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./hobbiesStyle.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bootstrap-grid.scss";
import Icon from "../pages/icon";
import ReactHtmlParser from "react-html-parser";
import { astrologyData, testData } from "../data/hobbyVariables";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: "linear",

  // focusOnSelect: true,
};

const allVariableData = [astrologyData, testData];

var slideShowStates = new Array(2);

for (let i = 0; i < slideShowStates.length; i++) {
  slideShowStates[i] = Array(allVariableData[i].length).fill(false);
}

export default class HobbiesPage extends React.Component {
  state = {
    selectedItemState: slideShowStates,
  };

  toggleClass = (identifier, id) => {
    this.setState({ selectedItemId: id }, function () {
      this.setState((prevState) => {
        const team = prevState.selectedItemState;
        team[identifier][id] = !this.state.selectedItemState[identifier][id];
        console.log("team is", team);
        return { team };
      });
    });
  };

 

  render() {
    const { selectedItemState } = this.state;

    const SlideShow = ({ identifier, dataset }) => (
      console.log("REACT COMPONENT"),
      (
        <Slider {...settings}>
          {dataset.map((data, idx) => {
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
                        {data.frontText}
                      </div>
                    </div>
                    <div className="card__face--back">
                      {ReactHtmlParser(data.backText)}
                    </div>
                  </div>
                </div>
            );
          })}
        </Slider>
      )
    );

    return (
      <div className="page-container">
        <div className="container mt-5 carousel">
            <h1 className="slider_title">React Image Carousel</h1>
            <SlideShow identifier={0} dataset={astrologyData}></SlideShow>
        </div>
      </div>
    );
  }
}
