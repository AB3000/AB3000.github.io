import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { professionalData } from "../data/variables";

import "./professionalStyle.scss";

//creates a timeline based on data from variables.js
//Credits to Florin Pop for the tutorial!
const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      {data.secondLink && (
        <a href={data.secondLink.url} target="_blank" rel="noopener noreferrer">
          {data.secondLink.text}
        </a>
      )}
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
        <Timeline></Timeline>
      </div>
    );
  }
}
