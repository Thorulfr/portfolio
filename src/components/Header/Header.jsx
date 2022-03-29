// Imports
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentPage, setCurrentPage }) => {
    return (
        <header id="nav-header" className="shadow-sm py-3 bg-theme-purple">
            <nav className="w-full flex justify-center">
                <ul
                    id="nav-list"
                    className="flex flex-col grow justify-evenly pr-4 text-right text-theme-lilac sm:text-lg sm:pr-12 lg:pr-20 lg:flex-row lg:items-center lg:justify-end"
                >
                    <li>
                        <Link
                            to="/"
                            onClick={() => setCurrentPage('/')}
                            className={`hover:text-theme-orange transition-all duration-300 ${
                                currentPage === '/' && 'text-theme-pink'
                            } lg:pr-20`}
                        >
                            {'//About'}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            onClick={() => setCurrentPage('contact')}
                            className={`hover:text-theme-orange transition-all duration-300 ${
                                currentPage === 'contact' && 'text-theme-pink'
                            }`}
                        >
                            {'//Contact'}
                        </Link>
                    </li>
                </ul>
                {/* Logo */}
                <div className="flex justify-center items-center text-2xl">
                    <svg
                        className="h-20 w-20"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        enableBackground="new 0 0 512 512"
                        version="1.1"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                    >
                        <path
                            fill="#e83f6f"
                            d="M456 161.8V456H202.8L56 350.2V56h253.2z"
                        ></path>
                        <g>
                            <g>
                                <path
                                    fill="none"
                                    stroke="#190e4f"
                                    strokeWidth="17.5"
                                    strokeMiterlimit="10"
                                    d="M307.6 148.4H204.4v188.9l.5-.4 49.2-47.1-49.2-46.9"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#190e4f"
                                    strokeWidth="17.5"
                                    strokeMiterlimit="10"
                                    d="M298.7 400.4v-159H205"
                                ></path>
                                <path
                                    fill="none"
                                    stroke="#190e4f"
                                    strokeWidth="17.5"
                                    strokeMiterlimit="10"
                                    d="M204.8 241.9l47.2-47.2-47.2-47.1m0 94.4l93.3 90.3"
                                ></path>
                            </g>
                        </g>
                    </svg>
                </div>
                <ul className="flex flex-col grow justify-evenly pl-4 text-left text-theme-lilac sm:text-lg sm:pl-12 lg:pl-20 lg:flex-row lg:items-center lg:justify-start">
                    <li>
                        <Link
                            to="/work"
                            onClick={() => setCurrentPage('work')}
                            className={`hover:text-theme-orange transition-all duration-300 ${
                                currentPage === 'work' && 'text-theme-pink'
                            } lg:pr-20`}
                        >
                            {'//Work'}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/resume"
                            onClick={() => setCurrentPage('resume')}
                            className={`hover:text-theme-orange transition-all duration-300 ${
                                currentPage === 'resume' && 'text-theme-pink'
                            }`}
                        >
                            {'//Resume'}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
