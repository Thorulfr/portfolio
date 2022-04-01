// Imports
import React, { useEffect } from 'react';

const AboutMe = ({ setCurrentPage }) => {
    // Set current page in header/nav
    useEffect(() => {
        setCurrentPage('/');
    });

    return (
        <main className="flex flex-col py-6 text-theme-lilac bg-theme-purple sm:items-center sm:justify-center 2xl:text-lg">
            <img
                src="./assets/images/self-portrait.png"
                alt="Benjamin in a lava field in northern Iceland"
                className="mb-6 mx-12 sm:w-2/3 md:w-1/2 lg:w-1/3 shadow-1"
            ></img>
            <div className="text-justify px-6 sm:px-12 2xl:px-60">
                <p>
                    I'm a full-stack web developer with a penchant for creating
                    especially pleasing user experiences. Though full-time
                    devotion to web development and design is a recent
                    development, my passion for coding and design hearkens back
                    to time spent building Geocities pages and making Flash
                    animations as an early teen. I am particularly passionate
                    about front-end development and savor the challenges and
                    rewards of creating applications that are unique and
                    visually enticing. My goal is to provide engaging
                    experiences that allow people to enjoy and appreciate an
                    application rather than begrudgingly use or even fight with
                    it.
                </p>
                <p className="pt-4">
                    My education includes an undergraduate degree in German
                    Literature and Linguistics and a Master of Arts degree from
                    the University of Iceland in comparative historical
                    linguistics and network analysis as applied to Swedish and
                    Danish runic inscriptions. I've been a linguistics-nut since
                    about the age of 13, when I first started studying German. I
                    also am an avid fan of guitar, synthesizer,
                    keyboard-building, and all things 80s.
                </p>
                <p className="py-4">
                    Also, my degree officially bestows upon me the title 'Nordic
                    Master of Viking and Medieval Norse Studies'. Ask me about
                    it!
                </p>
            </div>
        </main>
    );
};

export default AboutMe;
