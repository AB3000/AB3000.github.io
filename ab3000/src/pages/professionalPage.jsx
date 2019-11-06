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
      {data.title && <h3>{data.title}</h3>}
      {data.position && <h4>Position: {data.position}</h4>}
      {data.location && <h5>Location: {data.location}</h5>}
      <time>{data.date}</time>
      {splitBullets(data.text)}
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

function splitBullets(points) {
  // console.log("HERE, points is ", points);
  if (points.length <= 1){

  } else {

    points = points.map(point => <li>{point}</li>);
  }
  return (<ul>{points}</ul>);
}


export default class ProfessionalPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.splitBullets = this.splitBullets.bind(this);
  // }

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
