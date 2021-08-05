// Stuff I might use later

//.scss
// .vertical-timeline.vertical-timeline-custom-line .vertical-timeline-element--work .vertical-timeline-element-icon {
//   box-shadow: 0 0 0 4px rgb(183, 255, 248), inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
// }

// {
//     text: ["Started College at Purdue University!"],
//     date: "August 2017",
//     category: {
//       tag: "Event",
//       color: "#ffa257"
//     },
// links: [
//     {
//       url: "https://github.com/magickaiyang/purdue-healthy-dining",
//       text: "See Repo"
//     },
//     {
//       url:
//         "https://play.google.com/store/apps/details?id=com.reprincipia.phd",
//       text: "See App"
//     }
//   ],
//     title: "Purdue University",
//     icon: faSchool,
//     iconOffset: "left-5",
//     className: "vertical-timeline-element--work"
//   },


//  <VerticalTimelineElement
    // date={data.date}
    // className={data.className}
    // .
    // .
    // . />



    //hobbies.jsx 

       //   {/* <div className="container mt-5 carousel"> */}
      //     /* <Icon icon="Leo" size={20}/> */}

      //     {/* <SlideShow identifier={0} dataset={astrologyData}></SlideShow> */}

      //     {/* <Slider {...settings}>
      //       <div className="card-wrapper">
      //         <div
      //           className={`card ${isActive ? "is-flipped" : ""}`}
      //           onClick={this.toggleClass}
      //         >
      //           <div className="card__face--front">
      //             <div className="card-image">
      //               <img src="images/astrology/aries.png" />
      //             </div>
      //             <div className="hover-content" style={{ color: "white" }}>
      //               Spontaneous, adventurous, bold, confident, and determined.
      //               Which sign am I?
      //             </div>
      //           </div>
      //           <div className="card__face--back">
      //             <h1>Aries the Ram</h1>
      //             <h2>Element: Fire</h2>
      //             <h2>
      //               Symbol: <Icon icon="Aries" size={30} />
      //             </h2>
      //             <h2>Modality: Cardinal</h2>
      //             <h2>Season: Spring</h2>
      //             <h3>
      //               Most compatible with Aries, Leo, Sagittarius, Aquarius, and
      //               Gemini.
      //             </h3>
      //             <h3>"The child of the zodiac"</h3>
      //           </div>
      //         </div>
      //       </div>
      //     </Slider> */}
      //   // </div>
      // // </div>








      //HOBBIES PAGE 

      import React, { useState, useEffect } from "react";
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

// const toggleClass = (identifier, id) => {
//   // console.log("sex is fun");
//   this.setState({ selectedItemId: id }, function () {
//     this.setState((prevState) => {
//       const team = prevState.selectedItemState;
//       team[identifier][id] = !this.state.selectedItemState[identifier][id];
//       console.log("team is", team);
//       return { team };
//     });
//   });
// };



const MappedData = (data) => {
  const [selectedItemState, setSelectedItemState] = useState(slideShowStates);

  //  console.log("dataset is ", data);

  var dataset = data.dataset;
  var identifier = data.identifier;

  console.log("dataset is ", dataset, "and identifier is", identifier);

  // console.log("selectedItemState[identifier][data.id] is ", selectedItemState[identifier]);
  console.log("selectedItemState[0] is ", selectedItemState);

  let clsName = 'card ' + (selectedItemState ? "is-flipped" : "");

  return dataset.map((data, idx) => {
    console.log("inside the mapping function");
    return (
      <div className="card-wrapper">
        <div
          key={data.id}
          className={`${clsName}`}
          onClick={() => setSelectedItemState(!(selectedItemState))}
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
  });
};

function SlideShow(identifier, dataset) {
  return (
    <Slider {...settings}>
      <MappedData identifier={0} dataset={astrologyData}></MappedData>
    </Slider>
  );
  // return (
  //   <div>
  //     <h1>Hello papa</h1>
  //   </div>
  // )
}

export default class HobbiesPage extends React.Component {
  // state = {
  //   selectedItemState: slideShowStates,
  // };

  // toggleClass = (identifier, id) => {
  //   this.setState({ selectedItemId: id }, function () {
  //     this.setState((prevState) => {
  //       const team = prevState.selectedItemState;
  //       team[identifier][id] = !this.state.selectedItemState[identifier][id];
  //       console.log("team is", team);
  //       return { team };
  //     });
  //   });
  // };

  render() {
    // const { selectedItemState } = this.state;

    // const SlideShow = ({ identifier, dataset }) => (
    //   console.log("REACT COMPONENT"),
    //   (
    //     <Slider {...settings}>
    //       {dataset.map((data, idx) => {
    //         return (
    //             <div className="card-wrapper">
    //               <div
    //                 key={data.id}
    //                 className={`card ${
    //                   selectedItemState[identifier][data.id] ? "is-flipped" : ""
    //                 }`}
    //                 onClick={() => this.toggleClass(identifier, data.id)}
    //               >
    //                 <div className="card__face--front">
    //                   <div className="card-image">
    //                     <img src={data.src} />
    //                   </div>
    //                   <div className="hover-content" style={{ color: "white" }}>
    //                     {data.frontText}
    //                   </div>
    //                 </div>
    //                 <div className="card__face--back">
    //                   {ReactHtmlParser(data.backText)}
    //                 </div>
    //               </div>
    //             </div>
    //         );
    //       })}
    //     </Slider>
    //   )
    // );

    return (
      <div className="page-container">
        <div className="container mt-5 carousel">
          <h1 className="slider_title">React Image Carousel</h1>
          {/* <SlideShow identifier={0} dataset={astrologyData}></SlideShow> */}
          <SlideShow></SlideShow>
        </div>
      </div>
    );
  }
}
