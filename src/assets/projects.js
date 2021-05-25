import Eventscheduler from "./img/Eventscheduler.jpg";
import DankReviews from "./img/DankReviews.jpg";
import Offlinepic from "./img/offlinepic.jpg";
import RandomActsOfKindness from "./img/RandomActsOfKindness.jpg";
import stats from "./img/stats.jpg";
import ViewEmployee from "./img/ViewEmployee.jpg";

const portfolioProjects = [
  {
    title: "Note Taker: Full stack.",
    img: DankReviews,
    description: `This website is created to let users review memes and give
        their inputs on the memes. `,
    tech: "HTML, CSS, Bootstrap, Javascript, NPM packages, (Reddit images, Sequelize, Bcrypt, DOTENV, MySQL2, Express), Heroku, Google Fonts.",
    github: "https://github.com/bayleyegn100/Dank-Reviews",
    link: "https://bootcamp-project2-uw.herokuapp.com",
  },
  {
    title: "Event Scheduler: Frontend.",
    img: Eventscheduler,
    description: `Scheduler app, can help the user to schedule any events
    in between 8 AM up to 4 PM, when necessary.`,
    tech: "HTML, CSS, Javascript, Moments js.",
    github: "https://github.com/bayleyegn100/Event-Scheduler-",
   link: "https://bayleyegn100.github.io/Event-Scheduler-/",
  },
  {
    title: "Offline-Online-Budget-Tracker: Backend.",
    img: Offlinepic,
    description: `This application helps
    the user to track thier budget
    during online and offline mode.`,
    tech: "IndexedDB, Javascript, Node Package Manager (npm), express, Mongo data base, Mongoose, node.js and other node.js frameworks.",
    github: "https://github.com/bayleyegn100/Offline-Online-Budget-Tracker",
    link: "https://test-2314.herokuapp.com/",
  },
  {
    title: "Random Acts of Kindness: Frontend",
    img: RandomActsOfKindness,
    description: `Random Acts of Kindness
    app offers all volunteer
    Seattleites to connect with local charities and organizations based on their interest, specifically on education, public safety, culture and others.`,
    tech: "HTML, CSS, Bulma, Bootstrap, Google Maps API, Charity API, Charity Navigator API.",
    github: "https://github.com/bayleyegn100/random_Acts_Of_Kindess",
    link: "https://bayleyegn100.github.io/random_Acts_Of_Kindess/",
  },
  {
    title: "Workout-Tracker: Backend.",
    img: stats,
    description: `By using this app it is
    possible to track name, type, weight, sets, repetitions, and duration of the
    exercise done by a user. A user can add exercise to the most recent or to a new plan.`,
    tech: "Javascript,Node.js, express, Mongo data base, Mongoose schema.",
    github: "https://github.com/bayleyegn100/Workout-Tracker",
    link: "https://fast-forest-21283.herokuapp.com/stats",
  },
  {
    title: "Employee-Tracker: Backend.",
    img: ViewEmployee,
    description: `This application helps any organization
    to track, add and update employees information.`,
    tech: "Javascript, express, Mongo data base, Mongoose schema, node.js.",
    github: "https://github.com/bayleyegn100/Employee-Tracker",
    link: "https://drive.google.com/file/d/1ETgE5laXORdedFW4FbBiq0I8-Aq4zAo9/view", 
  },
];

export default portfolioProjects;
