import PortfolioCard from "../../components/PortfolioCard";
import portfolioProjects from "../../assets/projects"

function Portfolio() {
    return (
        <div className="container my-2" id="portfolio">
            <div className="card cardStyle">
                <div className="card-header">
                    <h2>Portfolio</h2>
                </div>
                <div className="row portfolioCard">
                    {portfolioProjects.map(project => {
                        return <PortfolioCard project={project} key={project.title} />
                    })}

                </div>
            </div>
        </div>
    )
}

export default Portfolio;