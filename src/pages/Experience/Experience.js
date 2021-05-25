import "./style.css";
import resume from "../../assets/Resume-pdf.pdf";

function Experience() {
  return (
    <div className="container my-2" id="experience">
      <div className="card cardStyle">
        <h2 className="card-header">Experience</h2>
        <div className="card-body">
          <p className="card-title">Full stack web developer, Self. </p>
          <p className="card-subtitle mb-2">
            Quality Control Analyst, HydromaxUSA, Seattle, WA, USA: February
            12th , 2021 – Present
          </p>
          <p className="card-text">
            Leak Survey Technician, HydromaxUSA, Seattle, WA, USA: August 18th -
            February 12th , 2021.
          </p>
          <p className="card-title">
            Director General for Climate Change, Addis Ababa, Ethiopia: February
            8th , 2017 – April 20, 2019.{" "}
          </p>
          <p className="card-subtitle mb-2">
            Climate Change negotiation coordinator, Addis Ababa, Ethiopia June
            8th, 2016 – February 7th, 2017.
          </p>
        </div>
        <p className="card-body">
          For more information Look out my{" "}
          <a
            href={resume}
            className="resumeLink"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Experience;
