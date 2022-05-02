function Project(
    name,
    description,
    fullDescription,
    githubLink,
    deployedLink,
    imagePath,
    stack,
    role
) {
    this.name = name;
    this.description = description;
    this.fullDescription = fullDescription;
    this.githubLink = githubLink;
    this.deployedLink = deployedLink;
    this.imagePath = imagePath;
    this.stack = stack;
    this.role = role;
}

const budgetTracker = new Project(
    'Track Your Travels',
    'PWA budget-tracker',
    'is a budget-tracking app designed with frequent travelers in mind. Users can add both expenses and income, giving them an instant overview of their finances at any given time. It functions both on- and offline (and can be locally installed), caching files so that users can still track their budget without a web connection',
    'https://github.com/Thorulfr/traveling-budget-tracker',
    'https://pure-refuge-57011.herokuapp.com/',
    './assets/screenshots/budget-tracker-screenshot.png',
    'JavaScript, HTML, CSS, Express.js, Node.js, MongoDB, Mongoose, and Heroku',
    'everything minus an initial forked UI skeleton. This was a solo project that I planned, tested, wrote, designed, and implemented myself'
);

const numberOneFan = new Project(
    'No. 1 Fan',
    'Full-stack music app',
    'is a one-stop shop for music lovers to discover and preview new music, save favorite artists and albums, find upcoming concerts for both favorite bands and venues, and catalogue attended concerts',
    'https://github.com/Thorulfr/no1fan',
    'https://no1fan.herokuapp.com/',
    './assets/screenshots/no-1-fan-screenshot.png',
    'JavaScript, HTML, CSS, TailwindCSS, Handlebars, Sequelize, MySQL2, Express.js, BCrypt, and Moment.js ',
    'testing and connecting cross-API calls, planning and implementing the SQL database, wire-framing, and managing and directing team-wide design decisions'
);

const socialNetworkAPI = new Project(
    'Penny for Your Thoughts',
    'Back-end for a sample social network',
    'is a back-end framework and API for a hypothetical/sample social network. Given an appropriate front-end, this API provides methods for creating, updating, and deleting users, thoughts, and reactions to thoughts which are all stored in a MongoDB database. Users can also add and remove friends. Each time the server is started, all data/models are synced to the database',
    'https://github.com/Thorulfr/social-network-api',
    'https://www.youtube.com/watch?v=MOfmfsOLSZk',
    './assets/screenshots/social-network-api-screenshot.png',
    'JavaScript, Node.js, MongoDB, Mongoose, Express, Insomnia, and Luxon',
    'everything! This was a solo project that I planned, tested, wrote, designed, and implemented myself'
);

const streamability = new Project(
    'Streamability',
    'Full-stack streaming amalgamator',
    'is an easy-to-use streaming amalgamation application, offering users title information about any given tv-show or film including summaries, release years, ratings, similar title suggestions, and – most importantly – where a title can be streamed. Users can also build queues of titles to watch across all streaming platforms, not just one',
    'https://github.com/Thorulfr/Streamability',
    'https://streamability.herokuapp.com/',
    './assets/screenshots/streamability-screenshot.png',
    "JavaScript, HTML, CSS, Bulma, Express.js, and The Movie Database. It's currently being transitioned to a full-stack application",
    'UI and UX prototyping and design, code and repository maintenance, client-side queue storage, and selectable user themes'
);

const typePlusPlus = new Project(
    'Type++',
    'MERN-stack typing hub',
    "is a competitive type-racing single-page application (and PWA) that allows you to test your typing speed and compete both globally and with friends. As you play more and improve your speed and accuracy, you'll level up and earn badges to show off your skills",
    'https://github.com/Thorulfr/type-Plus-Plus',
    'https://typeplusplus.herokuapp.com/',
    './assets/screenshots/type-plus-plus-screenshot.png',
    'MongoDB, Express.js, React, Node.js, Javascript, HTML, CSS, React Router, GraphQL, JWT, TailwindCSS, and Chart.js',
    'the front-end, UI and UX design and implementation, site layout and construction, and documentation'
);

const weatherDashboard = new Project(
    'Should I Go Outside?',
    'API-centric weather app',
    "is a weather application that goes one step further. Simply search for any location in the world – the app will give you the current and upcoming forecasts with a twist: It will also analyze the current weather and tell you if it's pleasant enough to go outside",
    'https://github.com/Thorulfr/weather-dashboard',
    'https://thorulfr.github.io/weather-dashboard/',
    './assets/screenshots/weather-dashboard-screenshot.png',
    'JQuery, JavaScript, HTML, CSS, Bulma, and Luxon',
    'everything! This was a solo project that I planned, wireframed, tested, wrote, designed, and implemented myself'
);

const projects = {
    budgetTracker: budgetTracker,
    numberOneFan: numberOneFan,
    socialNetworkAPI: socialNetworkAPI,
    streamability: streamability,
    typePlusPlus: typePlusPlus,
    weatherDashboard: weatherDashboard,
};

export default projects;
