import React from "react";
import "./style.css";


function PortfolioCard(props) {

    console.log(props)
    return (
        <div className="card projectCard">
            <div className="card-body">
                <h5 className="card-title portfolioText">{props.project.title}</h5>
                <h6 className="card-subtitle mb-2 portfolioText">{props.project.heading}</h6>
                <img src={props.project.img} className="card-img-top mb-2 portImg" alt={props.project.title}></img>
                <p className="card-text portfolioText">{props.project.description}</p>
                <p className="card-text portfolioText">Tech used: {props.project.tech}</p>
                <a href={props.project.link} className="card-link" target="_blank" rel="noreferrer"><i
                    className="fa fa-link fa-2x" aria-hidden="true"></i></a>
                <a href={props.project.github} className="card-link" target="_blank" rel="noreferrer" alt="github"><i
                    className="fa fa-github fa-2x" aria-hidden="true" alt="github"></i></a>
            </div>
        </div>
    )
}

export default PortfolioCard;