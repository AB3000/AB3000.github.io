import React from "react";
import { Link } from "react-router-dom";
import "./hobbiesStyle.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bootstrap-grid.scss";
import Icon from "./icon";
import ReactHtmlParser from 'react-html-parser';
import {astrologyData} from "../data/hobbyVariables"


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: "linear",
};

export default class HobbiesPage extends React.Component {
  // const [isActive, setActive] = useState("false");

  state = { isActive: false };

  toggleClass = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const isActive = this.state.isActive;
    const SlideShow = ({ dataset }) => (
      
      <Slider {...settings}>
        {dataset.map((data, idx) => {
          //   console.log("data is ", data);
        //   console.log("dataset is ", dataset)
          return (
            <div className="card-wrapper">
              <div
                className={`card ${isActive ? "is-flipped" : ""}`}
                onClick={this.toggleClass}
              >
                <div className="card__face--front">
                  <div className="card-image">
                    <img src={data.src}/>
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
    );
    return (
      <div className="page-container">
        <div className="container mt-5 carousel">
          {/* <Icon icon="Leo" size={20}/> */}
          <h1 className="slider_title">React Image Carousel</h1>
          <SlideShow dataset={astrologyData}></SlideShow>
          {/* <Slider {...settings}>
            <div className="card-wrapper">
              <div
                className={`card ${isActive ? "is-flipped" : ""}`}
                onClick={this.toggleClass}
              >
                <div className="card__face--front">
                  <div className="card-image">
                    <img src="images/astrology/aries.png" />
                  </div>
                  <div className="hover-content" style={{ color: "white" }}>
                    Spontaneous, adventurous, bold, confident, and determined.
                    Which sign am I?
                  </div>
                </div>
                <div className="card__face--back">
                  <h1>Aries the Ram</h1>
                  <h2>Element: Fire</h2>
                  <h2>
                    Symbol: <Icon icon="Aries" size={30} />
                  </h2>
                  <h2>Modality: Cardinal</h2>
                  <h2>Season: Spring</h2>
                  <h3>
                    Most compatible with Aries, Leo, Sagittarius, Aquarius, and
                    Gemini.
                  </h3>
                  <h3>"The child of the zodiac"</h3>
                </div>
              </div>
            </div>
          </Slider> */}
        </div>
      </div>
    );
  }
}
