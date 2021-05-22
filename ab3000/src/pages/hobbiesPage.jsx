import React from "react";
import "./hobbiesStyle.scss";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
//import Swiper from "react-id-swiper";
import { MDBContainer, MDBCard } from "mdbreact";
import Swiper from "swiper/swiper.scss";
import {
  braceletData,
  bottlesData,
  earringData,
  necklaceData,
  sewingData,
  modelingData,
  animationData,
} from "../data/hobbyVariables";

const params = {
  pagination: ".swiper-pagination",
  paginationClickable: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflow: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  autoHeight: true
};

const SlideShow = ({ dataset }) => (
  <MDBContainer>
    <MDBCard className="card-body">
      <Swiper {...params}>
        {dataset.map((data, idx) => {
          if (data.path.match(/[^/]+(jpg|png|gif|jpeg|JPG)$/))
            return <img src={data.path} key={idx} alt=""></img>;
          else
            return (
              <video preload='auto' key={idx} autoPlay loop>
                <source src={data.path} type="video/mp4"/>
              </video>
            );
        })}
      </Swiper>
    </MDBCard>
  </MDBContainer>
);

export default class HobbiesPage extends React.Component {
  render() {
    return (
      <div className="page-container page">
        <div className="home-page inner-container">
          <div className="welcome-container">
            <Link to="/">
              <Button>Home</Button>
            </Link>
            <Link to="/professional">
              <Button>Professional</Button>
            </Link>
            <SlideShow dataset={animationData}></SlideShow>
            <h1>Under construction!</h1>
          </div>
        </div>
      </div>
    );
  }
}
