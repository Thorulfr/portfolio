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
    'Budget Tracker',
    'PWA with offline functionality',
    '',
    'https://github.com/Thorulfr/traveling-budget-tracker',
    'https://pure-refuge-57011.herokuapp.com/',
    './assets/screenshots/budget-tracker-screenshot.png'
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
    'Social Network API',
    'Back-end for a sample social network',
    '',
    'https://github.com/Thorulfr/social-network-api',
    'https://www.youtube.com/watch?v=MOfmfsOLSZk',
    './assets/screenshots/social-network-api-screenshot.png'
);

const streamability = new Project(
    'Streamability',
    'Full-stack streaming amalgamator',
    '',
    'https://github.com/Thorulfr/Streamability',
    'https://streamability.herokuapp.com/',
    './assets/screenshots/streamability-screenshot.png'
);

const typePlusPlus = new Project(
    'Type++',
    'MERN-stack typing hub',
    "is a competitive type-racing application that allows you to test your typing speed and compete both globally and with friends. As you play more and improve your speed and accuracy, you'll level up and earn badges to show off your skills",
    'https://github.com/Thorulfr/type-Plus-Plus',
    'https://typeplusplus.herokuapp.com/',
    './assets/screenshots/type-plus-plus-screenshot.png',
    'MongoDB, Express.js, React, Node.js, Javascript, HTML, CSS, React Router, GraphQL, JWT, TailwindCSS, and Chart.js',
    'the front-end, UI and UX design and implementation, site layout and construction, and documentation'
);

const weatherDashboard = new Project(
    'Should I Go Outside?',
    'API-centric weather app',
    '',
    'https://github.com/Thorulfr/weather-dashboard',
    'https://thorulfr.github.io/weather-dashboard/',
    './assets/screenshots/weather-dashboard-screenshot.png'
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
