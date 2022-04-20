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
                        I'm a full-stack web developer with a thirst for
                        crafting pleasing user experiences. I earned my
                        development certificate through the University of Utah's
                        full-stack bootcamp. Though full-time devotion to web
                        development and design is a recent development, my
                        passion for coding and design hearkens back to time
                        spent building Geocities pages and making Flash
                        animations as an early teen. I am particularly
                        passionate about front-end development and savor the
                        challenges and rewards of creating applications that are
                        unique and visually enticing. My goal is to provide
                        engaging experiences that allow people to{' '}
                        <span className="italic">enjoy</span> an application.
                    </p>
                    <p className="pt-4">
                        My education includes an undergraduate degree in German
                        Literature and Linguistics and a Master of Arts degree
                        from the University of Iceland in comparative historical
                        linguistics and network analysis as applied to Swedish
                        and Danish runic inscriptions. I've been a
                        linguistics-nut since about the age of 13, when I first
                        started studying German. I also am an avid fan of
                        guitar, synthesizer, keyboard-building, and all things
                        80s!
                    </p>
                    <p className="py-4">
                        Also, my degree officially bestows upon me the title
                        'Nordic Master of Viking and Medieval Norse Studies'.
                        Ask me about it!
                    </p>
                </div>
            </div>
        </main>
    );
};

export default AboutMe;
