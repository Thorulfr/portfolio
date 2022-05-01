// Imports
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutMe = ({ currentPage, setCurrentPage }) => {
    // Set current page in header/nav
    useEffect(() => {
        setCurrentPage('/');
    });

    return (
        <main className="flex text-theme-lilac items-center justify-center">
            <div className="flex flex-col p-6 items-center md:text-lg 2xl:flex-row 2xl:max-w-[85%] h-full sm:justify-center">
                {/* Self-photo */}
                <div className="image relative max-h-[50rem] sm:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-1/3">
                    <img
                        src="./assets/images/self-portrait.png"
                        alt="Ben in a lava field in northern Iceland"
                    ></img>
                    <div className="absolute bottom-0 left-0 h-[27.5%] w-[26.35%] clip-triangle bg-theme-pink transition-all duration-150 z-20"></div>
                </div>
                <div className="text-justify pt-9 sm:px-9 2xl:w-1/2 2xl:pt-0 2xl:px-0 2xl:pl-20">
                    {/* Biography */}
                    <div>
                        <p className="text-center text-3xl text-theme-pink pb-6 md:text-5xl">
                            Howdy. I'm Ben.
                        </p>
                        <p>
                            I'm a full-stack web developer with a passion for
                            intuitive and responsive design, the marriage of
                            form and function, and logic-grounded
                            problem-solving.
                        </p>
                        <p className="pt-4">
                            I'm particularly enthusiastic about front-end
                            development and savor the challenges and rewards of
                            creating applications that are unique and visually
                            enticing. My aim is to provide engaging experiences
                            that help people{' '}
                            <span className="italic">enjoy</span> an application
                            – and want to <span className="italic">keep</span>{' '}
                            using it!
                        </p>
                    </div>
                    {/* Proficiencies */}
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-center text-3xl text-theme-pink py-6">
                            I'm proficient in:
                        </p>
                        {/* Proficiency SVGs */}
                        <div className="flex flex-wrap items-center justify-center">
                            {/* JavaScript */}
                            <div className="flex flex-col items-center justify-center w-28 px-4 pb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 630 630"
                                    className="h-16"
                                >
                                    <path
                                        fill="#9F9FED"
                                        d="M0 0h630v630H0z"
                                    ></path>
                                    <path
                                        fill="#E83F6F"
                                        d="M423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
                                    ></path>
                                </svg>
                                <span className="text-xs pt-1">JavaScript</span>
                            </div>
                            {/* HTML5 */}
                            <div className="flex flex-col items-center justify-center w-28 px-4 pb-6">
                                {/* Original by Aidan Dunn: https://codepen.io/aidandunn/pen/QWqRya */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 451 512"
                                    className="h-16"
                                >
                                    <path
                                        fill="#9F9FED"
                                        d="M41 460L0 0h451l-41 460-185 52"
                                    ></path>
                                    <path
                                        fill="#190E4F"
                                        d="M226 472l149-41 35-394H226"
                                    ></path>
                                    <path
                                        fill="#E83F6F"
                                        d="M362 150H146l5 58h206l-16 174-115 32-117-32-7-89h56l4 45 64 17 62-17 7-73H99L84 94h283l-5 56z"
                                    ></path>
                                </svg>
                                <span className="text-xs pt-1">HTML5</span>
                            </div>
                            {/* CSS3 */}
                            <div className="flex flex-col items-center justify-center w-28 px-4 pb-6">
                                {/* Original by Aidan Dunn: https://codepen.io/aidandunn/pen/QWqRya */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 451 512"
                                    className="h-16"
                                >
                                    <path
                                        fill="#9F9FED"
                                        d="M41 460L0 0h451l-41 460-185 52"
                                    ></path>
                                    <path
                                        fill="#190E4F"
                                        d="M226 472l149-41 35-394H226"
                                    ></path>
                                    <path
                                        fill="#E83F6F"
                                        d="M367 94l-26 288-115 32-117-32-7-60 124 33 62-17 7-73H99l-5-57h206l6-58H89l-5-56h283z"
                                    ></path>
                                </svg>
                                <span className="text-xs pt-1">CSS3</span>
                            </div>
                            {/* Git */}
                            <div className="flex flex-col items-center justify-center w-28 px-4 pb-6">
                                {/* Original by Jason Long: https://git-scm.com/downloads/logos */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-name="Layer 1"
                                    viewBox="0 0 91.89 91.89"
                                    className="h-16"
                                >
                                    <path
                                        fill="#9F9FED"
                                        d="M90.15 41.85L50 1.73a5.92 5.92 0 00-8.37 0l-8.33 8.33 10.6 10.57a7 7 0 018.9 9L63 39.78a7 7 0 11-4.22 4l-9.5-9.5v25a7.26 7.26 0 011.86 1.34 7 7 0 11-10 0A6.94 6.94 0 0143.48 59V33.81a6.79 6.79 0 01-2.3-1.54 7 7 0 01-1.52-7.69L29.24 14.16 1.73 41.66a5.93 5.93 0 000 8.38l40.12 40.11a5.92 5.92 0 008.37 0l39.93-39.93a5.9 5.9 0 000-8.37z"
                                    ></path>
                                </svg>
                                <span className="text-xs pt-1">Git</span>
                            </div>
                            {/* MongoDB */}
                            <div className="flex flex-col items-center justify-center w-28 px-4 pb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-name="Layer 1"
                                    viewBox="0 0 120 257"
                                    className="h-16"
                                >
                                    <path
                                        fill="#9F9FED"
                                        d="M82.32 28.64C71.54 15.85 62.25 2.85 60.35.15a.48.48 0 00-.7 0c-1.9 2.7-11.18 15.7-22 28.49-92.55 118.08 14.61 197.77 14.61 197.77l.9.6C54 239.3 56 257 56 257h8s2-17.6 2.79-30l.9-.7c.05.11 107.21-79.58 14.63-197.66zM60 224.61s-4.79-4.1-6.09-6.2v-.2l5.74-128.58a.3.3 0 01.6 0L66 218.21v.2c-1.25 2.1-6 6.2-6 6.2z"
                                    ></path>
                                </svg>
                                <span className="text-xs pt-1">MongoDB</span>
                            </div>
                            {/* React */}
                            <div className="flex flex-col items-center justify-center w-28 px-4 pb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-name="Layer 1"
                                    viewBox="0 0 490.6 436.9"
                                    className="h-16"
                                >
                                    <path
                                        fill="#9F9FED"
                                        d="M490.6 218.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4A43.84 43.84 0 00344.9.1v22.3a23.16 23.16 0 0111.4 2.6c13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4a484.62 484.62 0 00-63.5-10.9 487.8 487.8 0 00-41.6-50c32.6-30.3 63.2-46.9 84-46.9V0c-27.5 0-63.5 19.6-99.9 53.6C208.7 19.8 172.7.4 145.2.4v22.3c20.7 0 51.4 16.5 84 46.6a472.31 472.31 0 00-41.3 49.9 467 467 0 00-63.6 11c-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V.5a44.59 44.59 0 00-22.6 5.6c-28.1 16.2-34.4 66.7-19.9 130.1C40.5 155.4 0 186.1 0 218.5s40.7 63.3 103.1 82.4c-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2a44.59 44.59 0 0022.6-5.6c28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24s-9.5-15.8-14.4-23.4c14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2s-30.2-.7-45-1.9q-12.45-17.85-24.2-38-11.4-19.6-20.8-39.8c6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2s30.2.7 45 1.9q12.45 17.85 24.2 38 11.4 19.65 20.8 39.8c-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7s8.9-16.1 13-24.1zM245.5 352a412.27 412.27 0 01-27.8-32c9 .4 18.2.7 27.5.7s18.7-.2 27.8-.7a390.33 390.33 0 01-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zM245 85a412.27 412.27 0 0127.8 32c-9-.4-18.2-.7-27.5-.7s-18.7.2-27.8.7A390.33 390.33 0 01245 85zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7s-8.9 16-13 24c-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zM80.5 269.1c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1a480.28 480.28 0 0022.5 60.9 473.51 473.51 0 00-22.2 60.6c-9.9-3.1-19.3-6.5-28-10.2zM134.3 412c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4a484.62 484.62 0 0063.5 10.9 487.8 487.8 0 0041.6 50c-32.6 30.3-63.2 46.9-84 46.9a23.87 23.87 0 01-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6a472.31 472.31 0 0041.3-49.9 467 467 0 0063.6-11 279.94 279.94 0 015.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1a480.28 480.28 0 00-22.5-60.9 473.51 473.51 0 0022.2-60.6c9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6s-23 35.6-58.4 50.6z"
                                    ></path>
                                    <circle
                                        cx="245.2"
                                        cy="218.5"
                                        r="45.7"
                                        fill="#E83F6F"
                                    ></circle>
                                </svg>
                                <span className="text-xs pt-1">React</span>
                            </div>
                            {/* Node.js */}
                            <div className="flex flex-col items-center justify-center w-28 px-4 pb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-name="Layer 1"
                                    viewBox="0 0 256 289"
                                    className="h-16"
                                >
                                    <path
                                        fill="#9F9FED"
                                        d="M128 288.46a23.26 23.26 0 01-11.13-2.91l-35.25-20.94c-5.3-2.91-2.65-4-1.06-4.5 7.16-2.39 8.48-2.92 15.9-7.16a2.44 2.44 0 012.65.27l27 16.16a3.39 3.39 0 003.19 0l105.73-61.21a3 3 0 001.59-2.92V83.08a3 3 0 00-1.59-2.91l-105.73-61a3.39 3.39 0 00-3.19 0l-105.73 61a3.32 3.32 0 00-1.59 2.91v122.17a3.33 3.33 0 001.59 2.92l28.88 16.69c15.64 7.95 25.44-1.32 25.44-10.6V93.68a3.23 3.23 0 013.18-3.18h13.55a3.23 3.23 0 013.18 3.18v120.58c0 20.94-11.4 33.13-31.27 33.13-6.1 0-10.87 0-24.38-6.63l-27.83-15.9A22.35 22.35 0 010 205.52V83.35A22.38 22.38 0 0111.13 64L116.87 2.78a23.65 23.65 0 0122.26 0L244.87 64A22.38 22.38 0 01256 83.35v122.17a22.35 22.35 0 01-11.13 19.34l-105.74 61.22a27.1 27.1 0 01-11.13 2.38zm32.6-84c-46.38 0-55.92-21.21-55.92-39.23a3.22 3.22 0 013.18-3.18h13.78a2.72 2.72 0 012.91 2.65c2.12 14.05 8.22 20.94 36.31 20.94 22.26 0 31.8-5 31.8-17 0-6.89-2.65-11.93-37.36-15.37-28.89-2.92-46.91-9.28-46.91-32.33 0-21.47 18-34.19 48.23-34.19 33.92 0 50.62 11.66 52.74 37.1a4.3 4.3 0 01-.8 2.39 3.26 3.26 0 01-2.12 1.06h-13.78a3.1 3.1 0 01-2.91-2.39c-3.18-14.57-11.4-19.34-33.13-19.34-24.38 0-27.29 8.48-27.29 14.84 0 7.68 3.44 10.07 36.3 14.31 32.6 4.24 48 10.33 48 33.12-.27 23.32-19.35 36.58-53 36.58z"
                                    ></path>
                                </svg>
                                <span className="text-xs pt-1">Node.js</span>
                            </div>
                        </div>
                        {/* Link to resume with more proficiencies */}
                        <div>
                            <Link
                                to="/resume"
                                onClick={() => setCurrentPage('resume')}
                                className={`transition-all duration-300 ${
                                    currentPage === 'resume' &&
                                    'text-theme-pink'
                                }`}
                            >
                                <span className="animated-underline pb-1">
                                    ...and more!
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutMe;
