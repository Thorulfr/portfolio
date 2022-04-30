// Imports
import React, { useEffect } from 'react';

const AboutMe = ({ setCurrentPage }) => {
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
                {/* Biography */}
                <div className="text-justify pt-9 sm:px-9 2xl:w-1/2 2xl:pt-0 2xl:px-0 2xl:pl-20 ">
                    <p className="text-center text-3xl text-theme-pink pb-6 md:text-5xl">
                        Howdy. I'm Ben.
                    </p>
                    <p>
                        I'm a full-stack web developer with a passion for
                        intuitive and responsive design, the marriage of form
                        and function, and logic-grounded problem-solving.
                    </p>
                    <p className="py-4">
                        I'm particularly enthusiastic about front-end
                        development and savor the challenges and rewards of
                        creating applications that are unique and visually
                        enticing. My aim is to provide engaging experiences that
                        help people <span className="italic">enjoy</span> an
                        application – and want to{' '}
                        <span className="italic">keep</span> using it!
                    </p>
                </div>
            </div>
        </main>
    );
};

export default AboutMe;
