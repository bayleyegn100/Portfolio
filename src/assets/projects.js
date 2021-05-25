import dankReviews from "./img/DankReviews.jpg";
import noteTaker from "./img/Notetaker.jpg";


const portfolioProjects = [
    {
        title: "Note Taker",
        img: noteTaker,
        heading: "Add, edit, delete and review notes!",
        description: `Note-Taker application helps to take notes, update
        notes, and delete notes. The application is easy to use. I used different technologies
        to develop this application. `,
        tech: "HTML, CSS and Javascript, node js, different npm packages, libraries and frameworks.",
        link: "https://vast-falls-81756.herokuapp.com/",
        github: "https://github.com/bayleyegn100/Note-Taker/"
    },
    {
        title: "Dank Reviews",
        img: dankReviews,
        heading: "Review memes!",
        description: `This website is created to have user review memes and give their inputs on the memes.
        You can only review memes if you have an account. Once you submit a review, you can view
        your reviews on your profile.`,
        tech: "MySQL2, Express, Reddit.images API, DOTENV, Handlebars, Session, MySQL, Sequelize, Bcrypt",
        link: "https://bootcamp-project2-uw.herokuapp.com",
        github: "https://github.com/bayleyegn100/Dank-Reviews"
    }
]

export default portfolioProjects;