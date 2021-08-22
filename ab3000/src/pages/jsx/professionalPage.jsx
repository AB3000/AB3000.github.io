import React from "react";
import { professionalData, fasterCharPoses } from "../../data/variables";
import SplitText from "react-pose-text";
import "../css/professional-style.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { leftArrow, rightArrow } from "./arrows";

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
        {rightArrow(
          "/hobbies",
          "translate(0, 200) scale(-1,-1)",
          "#ff8787",
          "250",
          "80",
          "scale(0.26458333) translate(0, -450)",
          "-10",
          "40%",
          "-1.25%",
          "Hobbies"
        )}
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
