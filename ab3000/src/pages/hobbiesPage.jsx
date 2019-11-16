import React from "react";
import "./hobbiesStyle.scss";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import Swiper from "react-id-swiper";
import { MDBContainer, MDBCard } from "mdbreact";
import "swiper/css/swiper.css";
import { braceletData } from "../data/variables";
// import {pic1} from '../assets/images/Web-Files/JewelryFiles/Bracelets/Jewelry - 10.png'

//check if at least one element in the array
// const Timeline = () =>
//   professionalData.length > 0 && (
//     <div className="timeline-container">
//       {professionalData.map((data, idx) => (
//         <TimelineItem data={data} key={idx} />
//       ))}
//     </div>
//   );

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
  autoHeight: true,
};

console.log("data path is ", braceletData[1].path);

const SlideShow = ({ dataset }) => (
  <MDBContainer>
    <MDBCard className="card-body">
      <Swiper {...params}>
        {dataset.map((data, idx) => (
          <img class="img" src={data.path} key={idx} alt=""></img>
        ))}
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
            <SlideShow dataset={braceletData}></SlideShow>
            <h1>Under construction!</h1>
          </div>
        </div>
      </div>
    );
  }
}
