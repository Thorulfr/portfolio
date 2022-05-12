// Imports
import React, { useEffect } from 'react';

const Resume = ({ setCurrentPage }) => {
    // Set current page in header/nav
    useEffect(() => {
        setCurrentPage('resume');
    });

    return (
        <main className="grow flex flex-col justify-around items-center px-4 md:px-12 lg:px-32 lg:text-xl">
            {/* Proficiency badges from Ileriayo (https://github.com/Ileriayo/markdown-badges)*/}
            {/* Proficiencies */}
            <div className="mt-4 flex flex-col justify-around items-center text-theme-lilac">
                <p className=" text-theme-pink">Proficiencies</p>
                <div className="flex flex-col items-center xl:w-2/3">
                    <span className="mb-1 text-sm">Primary Stack</span>
                    <div className="flex flex-wrap justify-center mb-1">
                        {/* Primary Stack */}
                        <img
                            src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=190E4F&color=E83F6F"
                            alt="Javascript badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=190E4F&color=E83F6F"
                            alt="HTML5 badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=190E4F&color=E83F6F"
                            alt="CSS3 badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=190E4F&color=E83F6F"
                            alt="Express.js badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=190E4F&color=E83F6F"
                            alt="MongoDB badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=190E4F&color=E83F6F"
                            alt="Node.js badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=190E4F&color=E83F6F"
                            alt="React badge"
                            className="p-1"
                        />
                    </div>
                    <span className="mb-1 text-sm">Coding Proficiencies</span>
                    {/* Nonprimary Stack */}
                    <div className="flex flex-wrap justify-center mb-1">
                        <img
                            src="https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=E83F6F&color=342B6E"
                            alt="Apollo GraphQL badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=E83F6F&color=342B6E"
                            alt="Bootstrap badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=E83F6F&color=342B6E"
                            alt="Chart.js badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=E83F6F&color=342B6E"
                            alt="GIT badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=E83F6F&color=342B6E"
                            alt="GitHub badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=E83F6F&color=342B6E"
                            alt="GraphQL badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=E83F6F&color=342B6E"
                            alt="Heroku badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=E83F6F&color=342B6E"
                            alt="Insomnia badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=E83F6F&color=342B6E"
                            alt="Jest badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=E83F6F&color=342B6E"
                            alt="jQuery badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=E83F6F&color=342B6E"
                            alt="JWT badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=E83F6F&color=342B6E"
                            alt="Markdown badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=E83F6F&color=342B6E"
                            alt="MySQL badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=E83F6F&color=342B6E"
                            alt="NPM badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=E83F6F&color=342B6E"
                            alt="React Router badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=E83F6F&color=342B6E"
                            alt="Redux badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=E83F6F&color=342B6E"
                            alt="SASS badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=E83F6F&color=342B6E"
                            alt="Sequelize badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=E83F6F&color=342B6E"
                            alt="Tailwind CSS badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=E83F6F&color=342B6E"
                            alt="Webpack badge"
                            className="p-1"
                        />
                    </div>
                    {/* Other */}
                    <span className="mb-1 text-sm">Other Proficiencies</span>
                    <div className="flex flex-wrap justify-center">
                        <img
                            src="https://img.shields.io/badge/adobe%20illustrator-%23FF9A00.svg?style=for-the-badge&logo=adobe%20illustrator&logoColor=190E4F&color=E83F6F"
                            alt="Adobe Illustrator badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=190E4F&color=E83F6F"
                            alt="Adobe Photoshop badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=190E4F&color=E83F6F"
                            alt="Figma badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=190E4F&color=E83F6F"
                            alt="GIMP badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=190E4F&color=E83F6F"
                            alt="Slack badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=190E4F&color=E83F6F"
                            alt="Stack Overflow badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=190E4F&color=E83F6F"
                            alt="Trello badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=190E4F&color=E83F6F"
                            alt="Visual Studio Code badge"
                            className="p-1"
                        />
                        <img
                            src="https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=190E4F&color=E83F6F"
                            alt="Wordpress badge"
                            className="p-1"
                        />
                    </div>
                </div>
            </div>
            <div className="grow m-4 py-4 flex flex-col justify-around items-center text-theme-lilac xl:w-2/3">
                <p className="mb-4 text-theme-pink">Resume</p>
                <iframe
                    src="./assets/CV.pdf#view=fitH#zoom=FitH"
                    title="Benjamin Holt's CV"
                    height="95%"
                    width="95%"
                ></iframe>
            </div>
        </main>
    );
};

export default Resume;
