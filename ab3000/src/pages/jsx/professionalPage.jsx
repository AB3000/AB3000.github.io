import React from "react";
import {
  timelineData,
  skillData,
  languages,
  fasterCharPoses,
} from "../../data/professionalVariables";
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
import "../css/horizontal-timeline.scss";

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
  timelineData.length > 0 && (
    <div>
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

const Languages = () =>
  languages.length > 0 && (
    <div class="flex-parent">
	    <div class="input-flex-container">
      {languages.map((data, idx) => (
        <div class="input">
        <span data-level={data[0]} data-language={data[1]}></span>
      </div>
      ))}
    </div>
    </div>
  );

const Frame = (pdf) => (
  <div style={{ padding: "30px" }}>
    <iframe
      style={{
        width: "75%",
        height: "800px",
        overflow: "auto",
      }}
      src={pdf.src}
    />
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
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      isDark: true,
      majorSectionID: 0,
      skillSectionID: 0,
      resumeTypeID: 0,
    };
  }

  handleClick(id, sectionClicked) {
    //sectionClicked cases
    //majorSectionID = main header clicked
    //skillSectionID = skill subsection button clicked
    //resumeTypeID = resume light-dark toggle clicked

    // var sections = [majorSectionID, skillSectionID, resumeTypeID];
    // const sectionClicked = sections[sectionClick];
    this.setState({ [sectionClicked]: id }, function () {
      if (this.state[sectionClicked] === id) {
        this.setState({ isActive: true });
      } else {
        this.setState({ isActive: false });
      }

      if (sectionClicked === "resumeTypeID") {
        //toggle between light and dark
        this.setState({ isDark: !this.state.isDark });
      }
    });
  }

  render() {
    const { isActive, isDark, majorSectionID, skillSectionID, resumeTypeID } =
      this.state;

    const SkillButtons = () =>
      skillData.length > 0 && (
        <div>
          {skillData.map((data, idx) => (
            <div
              className={`underline link ${
                this.state.skillSectionID === idx && isActive ? "selected" : ""
              }`}
              id={`skill-${idx}`}
              onClick={() => this.handleClick(idx, "skillSectionID")}
            >
              {data.title}
            </div>
          ))}
        </div>
      );

    const Skills = () =>
      skillData.length > 0 && (
        <div className="skill-container">
          {skillData.map((data, idx) => (
            <div
              className={`section ${
                this.state.skillSectionID === idx && isActive ? "" : "is-hidden"
              }`}
            >
              {data.skills.length > 0 ? (
                data.skills.map((skill) => (
                  <p className="skill">
                    <img className="skill-box" src={skill[1]} />
                    <br></br>
                    {skill[0]}
                  </p>
                ))
              ) : Languages()}
            </div>
          ))}
        </div>
      );

    const ResumeChoiceButtons = () => (
      <div>
        {["dark", "light"].map((data, idx) => (
          <div
            className={`underline link ${
              this.state.resumeTypeID === idx && isActive ? "selected" : ""
            }`}
            id={`resume-color-${idx}`}
            onClick={() => this.handleClick(idx, "resumeTypeID")}
          >
            {data}
          </div>
        ))}
      </div>
    );

    return (
      <div className="page-container page">
        <div
          className="intro-wrapper"
          style={{
            margin: "10px 10px",
          }}
        ></div>
        <div
          className="welcome-container"
          style={{
            margin: "50px",
          }}
        >
          {leftArrow(
            "/",
            "translate(0, 0)",
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
            "scale(-1,-1)",
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
            className={`sketchy link ${
              this.state.majorSectionID === 0 && isActive ? "selected" : ""
            }`}
            onClick={() => this.handleClick(0, "majorSectionID")}
          >
            Timeline
          </div>
          <div
            className={`sketchy link ${
              this.state.majorSectionID === 1 && isActive ? "selected" : ""
            }`}
            onClick={() => this.handleClick(1, "majorSectionID")}
          >
            Skills
          </div>
          <div
            className={`sketchy link ${
              this.state.majorSectionID === 2 && isActive ? "selected" : ""
            }`}
            onClick={() => this.handleClick(2, "majorSectionID")}
          >
            Resume
          </div>
          <div
            className={`sketchy link ${
              this.state.majorSectionID === 3 && isActive ? "selected" : ""
            }`}
            onClick={() => this.handleClick(3, "majorSectionID")}
          >
            Awards
          </div>
        </div>
        <div
          className={`section ${
            this.state.majorSectionID === 0 && isActive ? "" : "is-hidden"
          }`}
        >
          <div className="introduction-panel">
            <SplitText
              initialPose="exit"
              pose="enter"
              charPoses={fasterCharPoses}
            >
              Most of my professional work involves research, full time positions,
              and internships in machine learning and software engineering. I
              enjoy collaborating with people to design applications for
              entertainment and educational purposes. For my personal projects,
              I am interested in experimentation with designing mini games and
              creating text analysis programs.
            </SplitText>
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
        <div
          className={`section ${
            this.state.majorSectionID === 1 && isActive ? "" : "is-hidden"
          }`}
        >
          {SkillButtons()}
          {Skills()}
        </div>
        <div
          className={`section ${
            this.state.majorSectionID === 2 && isActive ? "" : "is-hidden"
          }`}
        >
          {ResumeChoiceButtons()}
          <Frame
            src={
              isDark
                ? "pdfs/Dark_Aarushi_Resume.pdf"
                : "pdfs/Aarushi_Resume.pdf"
            }
            key={this.state.majorSectionID}
          ></Frame>
        </div>
        <div
          className={`section ${
            this.state.majorSectionID === 3 && isActive ? "" : "is-hidden"
          }`}
        >
          <h1 style={{color: "rgb(208, 216, 255)"}}>Coming soon!</h1>
        </div>
      </div>
    );
  }
}
