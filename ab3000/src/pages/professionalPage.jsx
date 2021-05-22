import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { professionalData, fasterCharPoses } from "../data/variables";
import SplitText from "react-pose-text";
import "./professionalStyle.scss";

//creates a timeline based on data from variables.js
//Credits to Florin Pop for the tutorial!

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      {data.title && <h3>{data.title}</h3>}
      {data.position && <h4>Position: {data.position}</h4>}
      {data.location && <h5>Location: {data.location}</h5>}
      <time>{data.date}</time>
      {splitBullets(data.text)}
      {"links" in data ? addLinks(data.links) : ""}
      <span className="circle" />
    </div>
  </div>
);

//check if at least one element in the array
const Timeline = () =>
  professionalData.length > 0 && (
    <div className="timeline-container">
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
        <div className="home-page inner-container">
          <div className="welcome-container">
            <Link to="/">
              <Button>Home</Button>
            </Link>
            <Link to="/hobbies">
              <Button>Hobbies</Button>
            </Link>
          </div>
        </div>
        <div className="center-panel">
          <SplitText
            initialPose="exit"
            pose="enter"
            charPoses={fasterCharPoses}
          >
            Most of my professional work involves research and internships in
            machine learning and education. I enjoy collaborating with people to
            design applications for entertainment and scholastic purposes. For
            my personal projects, I am interested in learning new things through
            designing mini games and text analysis programs.
          </SplitText>
        </div>
        <Timeline></Timeline>
      </div>
    );
  }
}
