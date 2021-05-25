import "./style.css";

function Contact() {
    return (
        <div className="container my-2" id="contact">
        <div className="card contactCard">
            <div className="card-header">
                <h2>Contact</h2>
            </div>
            <div>
            <h5 className="card-body contactSubheading">Feel free to to reach me.</h5>
            </div>
            <div className="row iconRow">
            <div className="card col-6 iconCard">
                    <a href="mailto:coletta.bayleyegn100@gmail.com" target="_blank" rel="noreferrer"><span
                            className="fa fa-envelope-o fa-5x"></span></a>
                </div>
                <div className="card col-6 iconCard">
                    <a href="https://www.linkedin.com/in/debasu-bayleyegn-eyasu-a9105ba5/" target="_blank" rel="noreferrer"><span
                            className="fa fa-linkedin fa-5x"></span></a>
                </div>
                <div className="card col-6 iconCard">
                    <a href="https://github.com/bayleyegn100" target="_blank" rel="noreferrer"><span
                            className="fa fa-github githubContactLink fa-5x"></span></a>
                </div>
                <div className="card col-6 iconCard">
                    <a href="https://twitter.com/yedebkid" target="_blank" rel="noreferrer"><span
                            className="fa fa-twitter twitterContactLink fa-5x"></span></a>
                </div>
                <div className="card col-6 iconCard">
                    <a href="tel:+1-206-785-5195" target="_blank" rel="noreferrer"><span className="fa fa-phone fa-5x"></span></a>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Contact;