import React from "react";
import { Link } from "react-router-dom";
import { professionalData, fasterCharPoses } from "../data/variables";
import SplitText from "react-pose-text";
import "./professionalStyle.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";

//creates a timeline based on data from variables.js
//Credits to Florin Pop for the tutorial!

{
  /* <VerticalTimelineElement
className="vertical-timeline-element--education"
date="November 2012"
iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
// icon={<SchoolIcon />}
>
<h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
<h4 className="vertical-timeline-element-subtitle">Certification</h4>
<p>
  Creative Direction, User Experience, Visual Design
</p>
</VerticalTimelineElement> */
}

const TimelineItem = ({ data }) => (
  <VerticalTimelineElement
    date={data.date}
    // className={data.className}
    contentStyle={{ background: "#ff8787", color: "#000" }}
    iconStyle={{ background: "#424242", color: data.iconColor }}
    icon={
      <FontAwesomeIcon transform={data.iconOffset} icon={data.icon} size="2x" />
    }
  >
    {/* <div className="timeline-item-content"> */}
    {/* <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span> */}
    {data.title && <h2>{data.title}</h2>}
    {data.position && <h4>Position: {data.position}</h4>}
    {/* {data.location && <h5>Location: {data.location}</h5>} */}
    <time>{data.location}</time>
    {/* {data.text} */}
    {"text" in data ? splitBullets(data.text) : ""}
    {"links" in data ? addLinks(data.links) : ""}
    {/* </div> */}
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
        {/* <Timeline></Timeline> */}
        {/* <VerticalTimeline></VerticalTimeline> */}
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
