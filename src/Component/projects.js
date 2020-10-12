import packMybags from '../assets/img/packMyBags.png';
import codeQuiz from '../assets/img/codeQuiz.png';
import weatherDashboard from '../assets/img/weatherDashboard.png'
import EmployeeTracker from '../assets/img/employeeTracker.png';
import TeamProfileGenerator from '../assets/img/teamProfile.png';
import eatDaBurguer from '../assets/img/eatDaBurguer.png';
import progressiveBudget from '../assets/img/progressiveBudget.png';


    const List = [
        {
            key: 1,
            name: "Pack My Bags",
            img: packMybags,
            text: "An application that renders a list of items to pack, based on location, dates and weather forecast.",
            deploy: "https://mloibner.github.io/Pack-My-Bags/",
            git: "https://github.com/mloibner/Pack-My-Bags",
            video: ""
        },
        {
            key: 2,
            name: "Code Quiz",
            img: codeQuiz,
            text: "This application is a timed quiz developed with javascript that stores the high score on local storage.",
            deploy: "https://alvarofernandes.github.io/codeQuiz",
            git: "https://github.com/AlvaroFernandes/codeQuiz",
            video: ""
        },
        {
            key: 3,
            name: "Weather Dashboard",
            img: weatherDashboard,
            text: "This application uses data retrieved from an API called OpenWeather API, to show the current weather for cities and also the forecast for the next five days.",
            deploy: "https://alvarofernandes.github.io/weatherDashboard/",
            git: "https://github.com/AlvaroFernandes/weatherDashboard",
            video: ""
        },
        {
            key: 4,
            name: "Team Profile Generator",
            img: TeamProfileGenerator,
            text: "This is a application that get informations that the user insert on a command-line prompt and generate a html file with a engineering team structure.",
            deploy: "",
            git: "https://github.com/AlvaroFernandes/TeamProfileGenerator",
            video: "https://drive.google.com/file/d/1MKSrLDt9ThIbZffy9_dlfkg-THJpVF7R/view"
        },
        {
            key: 5,
            name: "Employee Management System",
            img: EmployeeTracker,
            text: "This application uses node.js and MySQL to create an app that gives the user the possibility to add, remove and update the employees, roles and departments on the database.",
            deploy: "",
            git: "https://github.com/AlvaroFernandes/EmployeeTracker",
            video: "https://drive.google.com/file/d/1rKDEkbpqqWFV8iJj13WBIw1OWdUfDEK4/view"
        },
        {
            key: 6,
            name: "Eat Da Burguer",
            img: eatDaBurguer,
            text: "This application controls a list of burger devoured and desired done with MySQL, Node, Express, Handlebars and an ORM following the MVC design pattern.",
            deploy: "https://obscure-inlet-20568.herokuapp.com/",
            git: "https://github.com/AlvaroFernandes/eatDaBurguer",
            video: ""
        },
        {
            key: 7,
            name: "Progressive Budget",
            img: progressiveBudget,
            text: "This application is a budget tracker where the user can store all his expenses online and offline, using the cache and service worker on the client to keep all the modification made by the user.",
            deploy: "https://salty-plains-90121.herokuapp.com/",
            git: "https://github.com/AlvaroFernandes/budgetTrackers",
            video: ""
        }
    ]

export default List;