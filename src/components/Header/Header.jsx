// Imports
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentPage, setCurrentPage }) => {
    return (
        <header id="header" className="py-6">
            <nav className="w-full flex justify-center sm:text-xl md:text-2xl xl:text-3xl">
                <div className="items-end pr-2 sm:pr-4 flex lg:pr-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 172.01 302.03"
                        className="h-12 z-20 pulse-2"
                    >
                        <path
                            fill="#e83f6f"
                            d="M172.01 302.03H146.8L0 196.23V0h15v188.87l157.01 113.16z"
                        ></path>
                    </svg>
                </div>
                <ul
                    id="nav-list"
                    className="flex flex-col justify-evenly pr-6 text-right text-theme-lilac sm:pr-12 lg:pr-20 lg:flex-row lg:items-center lg:justify-end"
                >
                    <li>
                        <Link
                            to="/"
                            onClick={() => setCurrentPage('/')}
                            className={`transition-all duration-300 ${
                                currentPage === '/' && 'text-theme-pink'
                            } lg:pr-20`}
                        >
                            <span className="animated-underline">
                                {'//About'}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            onClick={() => setCurrentPage('contact')}
                            className={`transition-all duration-300 ${
                                currentPage === 'contact' && 'text-theme-pink'
                            }`}
                        >
                            <span className="animated-underline">
                                {'//Contact'}
                            </span>
                        </Link>
                    </li>
                </ul>
                {/* Logo */}
                <div className="flex justify-center items-center">
                    <svg
                        className="h-16 pulse z-20"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        enableBackground="new 0 0 400 400"
                        version="1.1"
                        viewBox="0 0 400 400"
                        xmlSpace="preserve"
                    >
                        <path
                            fill="#e83f6f"
                            d="M400 105.8V400H146.8L0 294.2V0h253.2L400 105.8z"
                        ></path>
                        <g>
                            <g>
                                <path
                                    d="M251.6 92.4H148.4v188.9l.5-.4 49.2-47.1-49.2-46.9"
                                    fill="none"
                                    stroke="#190e4f"
                                    strokeWidth="17.5"
                                    strokeMiterlimit="10"
                                ></path>
                                <path
                                    d="M242.7 344.4v-159H149"
                                    fill="none"
                                    stroke="#190e4f"
                                    strokeWidth="17.5"
                                    strokeMiterlimit="10"
                                ></path>
                                <path
                                    d="M148.8 185.9l47.2-47.2-47.2-47.1m0 94.4l93.3 90.3"
                                    fill="none"
                                    stroke="#190e4f"
                                    strokeWidth="17.5"
                                    strokeMiterlimit="10"
                                ></path>
                            </g>
                        </g>
                    </svg>
                </div>
                <ul className="flex flex-col justify-evenly pl-6 text-left text-theme-lilac sm:pl-12 lg:pl-20 lg:flex-row lg:items-center lg:justify-start">
                    <li>
                        <Link
                            to="/work"
                            onClick={() => setCurrentPage('work')}
                            className={`transition-all duration-300 ${
                                currentPage === 'work' && 'text-theme-pink'
                            } lg:pr-20`}
                        >
                            <span className="animated-underline">
                                {'//Work'}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/resume"
                            onClick={() => setCurrentPage('resume')}
                            className={`transition-all duration-300 ${
                                currentPage === 'resume' && 'text-theme-pink'
                            }`}
                        >
                            <span className="animated-underline">
                                {'//Resume'}
                            </span>
                        </Link>
                    </li>
                </ul>
                <div className="items-start pl-2 flex lg:pl-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 172.01 302.03"
                        className="h-12 z-20 pulse-2"
                    >
                        <path
                            fill="#e83f6f"
                            d="M0 0h25.21l146.8 105.8v196.23h-15V113.16L0 0z"
                        ></path>
                    </svg>
                </div>
            </nav>
        </header>
    );
};

export default Header;
