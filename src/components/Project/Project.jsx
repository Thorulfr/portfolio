// Imports
import React from 'react';

function Project(project) {
    return (
        <div className="m-2 rounded-lg flex flex-col justify-around items-center xl:px-10 2xl:px-20">
            {/* Project name */}
            <span className="text-xl text-center m-1 underline underline-offset-1 decoration- decoration-theme-pink lg:text-xl xl:text-2xl">
                {project.project.name}
            </span>
            {/* Project screenshot */}
            <div className="m-3 sm:w-5/6">
                <img
                    src={project.project.imagePath}
                    alt="Application screenshot"
                />
            </div>
            {/* Project description */}
            <p className="text-center">{project.project.description}</p>
            <div className="w-1/2 flex justify-evenly items-center p-1 mb-1">
                {/* Github logo + link */}
                <a
                    href={project.project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 50 50"
                        viewBox="0 0 50 50"
                        className="h-10"
                    >
                        <path
                            fill="#9F9FED"
                            fillRule="evenodd"
                            d="M24.9 8.8c-9 0-16.3 7.3-16.3 16.3 0 7.2 4.7 13.3 11.1 15.5.8.1 1.1-.4 1.1-.8V37c-4.5 1-5.5-2.2-5.5-2.2-.7-1.9-1.8-2.4-1.8-2.4-1.5-1 .1-1 .1-1 1.6.1 2.5 1.7 2.5 1.7 1.5 2.5 3.8 1.8 4.7 1.4.1-1.1.6-1.8 1-2.2-3.6-.4-7.4-1.8-7.4-8.1 0-1.8.6-3.2 1.7-4.4-.2-.4-.7-2.1.2-4.3 0 0 1.4-.4 4.5 1.7 1.3-.4 2.7-.5 4.1-.5 1.4 0 2.8.2 4.1.5 3.1-2.1 4.5-1.7 4.5-1.7.9 2.2.3 3.9.2 4.3 1 1.1 1.7 2.6 1.7 4.4 0 6.3-3.8 7.6-7.4 8 .6.5 1.1 1.5 1.1 3v4.5c0 .4.3.9 1.1.8 6.5-2.2 11.1-8.3 11.1-15.5-.1-8.9-7.4-16.2-16.4-16.2z"
                            clipRule="evenodd"
                            className="group-hover:fill-theme-pink transition-all duration-300"
                        ></path>
                    </svg>
                </a>
                {/* Deployment link */}
                <a
                    href={project.project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 group-hover:stroke-theme-pink transition-all duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#9F9FED"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default Project;
