import React from "react";
import "./homeStyle.scss";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { Row, Col } from "reactstrap";
import Swiper from "react-id-swiper";

// import "swiper/css/swiper.css";

// const params = {
//   pagination: ".swiper-pagination",
//   paginationClickable: true,
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflow: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true
//   }
// };

// export default class HobbiesPage extends React.Component {
//   render() {
//     return (
//       <div className="page-container page">
//         <div className="home-page inner-container">
//           <div className="welcome-container">
//             <Link to="/">
//               <Button>Home</Button>
//             </Link>
//             <Link to="/professional">
//               <Button>Professional</Button>
//             </Link>
//           </div>
//           <Row>
//             <Col sm="12" md="12" lg="12">
//               <Swiper {...params}>
//                 <img
//                   src={require("../assets/images/Web-Files/AnimationClips/abstract.png")}
//                   alt="Smiley face"
//                   height="50px"
//                   width="20px"
//                 ></img>
//                 <img
//                   src={require("../assets/images/Web-Files/AnimationClips/abstract.png")}
//                   alt="Smiley face"
//                   height="50px"
//                   width="20px"
//                 ></img>
//                                 <img
//                   src={require("../assets/images/Web-Files/AnimationClips/abstract.png")}
//                   alt="Smiley face"
//                   height="50px"
//                   width="20px"
//                 ></img>
//               </Swiper>
//             </Col>
//           </Row>
//           <Swiper {...params}>
//             <div>
//               <img
//                 src={require("../assets/images/Web-Files/AnimationClips/abstract.png")}
//                 alt="Smiley face"
//               ></img>
//             </div>
//             <div>
//               <img
//                 src={require("../assets/images/Web-Files/AnimationClips/abstract.png")}
//                 alt="Smiley face"
//               ></img>
//             </div>
//           </Swiper>
//         </div>
//       </div>
//     );
//   }
// }

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
            <h1>Under construction!</h1>
          </div>
        </div>
      </div>
    );
  }
}
