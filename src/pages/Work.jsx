// Imports
import React, { useEffect } from 'react';

// Component imports
import Project from '../components/Project';

// Utility Imports
import projects from '../utils/projects';

const Work = ({ setCurrentPage }) => {
    // Set current page in header/nav
    useEffect(() => {
        setCurrentPage('work');
    });

    return (
        <main className="flex justify-center">
            <div className="px-4 text-theme-lilac md:px-12 lg:px-32 xl:px-32 xl:grid xl:grid-cols-2 xl:my-6 2xl:px-60">
                <div className="flex flex-col">
                    <Project project={projects.typePlusPlus} />
                    <div className="border-2 border-theme-pink mx-14 origin-left -skew-x-[14deg]"></div>
                </div>
                <div className="flex flex-col">
                    <Project project={projects.numberOneFan} />
                    <div className="border-2 border-theme-pink mx-14 origin-left -skew-x-[14deg]"></div>
                </div>
                <div className="flex flex-col">
                    <Project project={projects.streamability} />
                    <div className="border-2 border-theme-pink mx-14 origin-left -skew-x-[14deg]"></div>
                </div>
                <div className="flex flex-col">
                    <Project project={projects.weatherDashboard} />
                    <div className="border-2 border-theme-pink mx-14 origin-left -skew-x-[14deg]"></div>
                </div>
                <div className="flex flex-col">
                    <Project project={projects.budgetTracker} />
                    <div className="border-2 border-theme-pink mx-14 origin-left -skew-x-[14deg] xl:hidden"></div>
                </div>
                <Project project={projects.socialNetworkAPI} />
            </div>
        </main>
    );
};

export default Work;
