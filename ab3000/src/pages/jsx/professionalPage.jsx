import React from "react";
import { Link } from "react-router-dom";
import { professionalData, fasterCharPoses } from "../../data/variables";
import SplitText from "react-pose-text";
import "../css/professional-style.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { leftArrow } from './arrows'

import { faStar } from "@fortawesome/free-solid-svg-icons";

const TimelineItem = ({ data }) => (
  <VerticalTimelineElement
    date={data.date}
    dateClassName="date"
    contentStyle={{ background: "#ff8787", color: "#000" }}
    iconStyle={{ background: "#424242", color: data.iconColor }}
    icon={
      <FontAwesomeIcon transform={data.iconOffset} icon={data.icon} size="2x" />
    }
    contentArrowStyle={{ borderRight: "7px solid  #424242" }}
  >
    {data.title && <h2>{data.title}</h2>}
    {data.position && <h4>Position: {data.position}</h4>}
    <time>{data.location}</time>
    {"text" in data ? splitBullets(data.text) : ""}
    {"links" in data ? addLinks(data.links) : ""}
  </VerticalTimelineElement>
);

//check if at least one element in the array
const Timeline = () =>
  professionalData.length > 0 && (
    <div>
      {professionalData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

function splitBullets(points) {
  if (points.length > 1) {
    points = points.map((point) => <li>{point}</li>);
  }
  return <ul>{points}</ul>;
}

function addLinks(links) {
  if (links.length >= 1) {
    return (
      <div>
        {links.map((link) => (
          <a
            className="button"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        ))}
      </div>
    );
  }
}

export default class ProfessionalPage extends React.Component {
  render() {
    return (
      <div className="page-container page">
        {leftArrow(
          "/",
          "translate(0, 200)",
          "#ff8787",
          "250",
          "80",
          "scale(1.03458333) translate(10, -115)",
          "-10",
          "30%",
          "80.5%",
          "Home"
        )}
        <div className="animation-right">
          <Link to="/hobbies">
            <svg
              transform="translate(0, 200) scale(-1,-1)"
              fill="#ff8787"
              style={{
                float: "right",
                padding: "20px",
              }}
              width="250"
              height="80"
            >
              <path
                id="right_path"
                fill="#ff8787"
                transform="scale(0.26458333) translate(0, -450)"
                d="m 526.07422,456.17578 c -11.29079,-0.0257 -21.65902,0.71383 -41.54297,1.41602 -37.74818,4.88878 -51.48166,5.53746 -88.89648,15.08984 -14.70959,3.75553 -29.08416,8.72043 -43.57227,13.25586 -38.35374,12.00643 -76.32845,25.53835 -115.65039,34.19336 -19.83814,2.74367 -34.59651,5.86006 -54.48047,4.80273 -9.17734,-0.48801 -17.92235,-3.23523 -26.39062,-6.50195 -2.56112,-0.98797 -3.94141,-1.52981 -4.98243,-2.02344 l 15.50391,-20.24218 -59.41016,3.875 -59.410152,3.875 35.638671,27.16015 35.638671,27.16211 15.80078,-20.63086 c 7.70431,2.42754 15.70966,4.00084 23.57617,4.19727 19.90825,0.49712 37.72667,-3.00671 57.3711,-5.85157 40.37214,-8.97573 79.19625,-23.45553 118.5625,-35.87695 14.5104,-4.57852 28.91971,-9.54501 43.64844,-13.36328 39.35249,-10.2017 48.79499,-10.14837 88.29687,-15.12695 32.83688,-1.72211 66.47738,-1.97307 98.71875,5.69922 9.79597,2.3311 25.64664,7.84891 34.13281,14.50976 3.66649,2.87785 6.14881,7.00791 9.22266,10.51172 1.71065,4.0735 4.04852,7.93721 5.13086,12.2207 3.45955,13.69127 1.02392,28.78797 -4.00391,41.71289 -1.58366,4.0712 -3.83804,7.84755 -5.75781,11.77149 l 27.48047,-12.52734 c 1.77747,-4.032 3.88194,-7.9367 5.33203,-12.09766 4.72766,-13.56559 7.00544,-29.46657 3.16797,-43.59766 -1.23991,-4.56586 -3.85149,-8.64333 -5.77734,-12.96484 -3.40211,-3.70881 -6.15674,-8.13958 -10.20704,-11.12695 -8.8857,-6.55382 -26.63142,-11.95897 -36.59765,-13.98438 -9.10031,-1.84944 -18.36169,-2.88797 -27.61133,-3.71289 -14.81016,-1.3208 -24.14992,-1.80421 -32.93164,-1.82422 z"
              />
              <text dy="-25%">
                <textPath
                  href="#right_path"
                  style={{
                    fontSize: 18,
                    fontFamily: "Aclonica",
                  }}
                  textLength="50%"
                  startOffset="-1.25%"
                >
                  Hobbies
                </textPath>
              </text>
            </svg>
          </Link>
        </div>
        <div
          className="welcome-container"
          style={{
            margin: "130px",
          }}
        >
          <div className="introduction-panel">
            <SplitText
              initialPose="exit"
              pose="enter"
              charPoses={fasterCharPoses}
            >
              Most of my professional work involves research and internships in
              machine learning and education. I enjoy collaborating with people
              to design applications for entertainment and scholastic purposes.
              For my personal projects, I am interested in learning new things
              through designing mini games and text analysis programs.
            </SplitText>
          </div>
        </div>
        <VerticalTimeline className="vertical-timeline-custom-line">
          <Timeline></Timeline>
          <VerticalTimelineElement
            iconStyle={{ background: "#424242", color: "rgb(223, 255, 205)" }}
            icon={
              <FontAwesomeIcon icon={faStar} size="2x" transform="left-4" />
            }
          />
        </VerticalTimeline>
      </div>
    );
  }
}
