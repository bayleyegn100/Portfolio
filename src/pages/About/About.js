import myPhoto from "../../assets/img/Mypicture.jpg";
import "./style.css";
import resume from "../../assets/Resume-pdf.pdf";

function About() {
  return (
    <div className="container my-2" id="about-me">
      <div className="card cardStyle">
        <div className="card-header">
          <h2>About</h2>
        </div>
        <div className="card-body">

        
          <img src={myPhoto} className="float-left mr-3"  alt="Debasu B Eyasu."></img>
          <a href="mailto:someone@example.com">bayleyegn100@gmail.com</a> | Phone: +1-206-785-5195 | 
          {" "} <a  href={resume} className="resumeLink" >Resume</a>{" | "}
        <a href="https://github.com/bayleyegn100"> Github Page | </a>
        <a href="https://www.linkedin.com/in/debasu-bayleyegn-eyasu-a9105ba5/"> Linkedin </a>
          <p className="font-size: 20px; line-height: 2; ">
            A Full Stack Web Developer, self-proclaimed innovative problem-solver with a
            penchant to build web applications from mockup to roll-out. Strong
            aptitude to leverage web development knowledge and expertise to
            drive scalable technical solutions
          </p>
          <p>By now I do have a better knowledge and skill of coding by using languages and technologies including but not
        limited to the following:</p>
        <div className="techList">
          <ul>
            <li >HTML5</li>
            <li >CSS3</li>
            <li >Bootstrap</li>
            <li >Javascript ES6+</li>
            <li >JQuery</li>
            <li >Web-API</li>
            <li >Node.js and Npm packages</li>
            <li >Express</li>
            <li >MySQL</li>
            <li >Sequelize</li>
            <li >Model-View-Controller framework</li>
            <li >MongoDB</li>
            <li >React.js</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
