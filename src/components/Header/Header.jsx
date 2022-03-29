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
                            className={`hover:text-theme-pink transition-all duration-300 ${
                                currentPage === '/' && 'text-theme-pink'
                            } lg:pr-20`}
                        >
                            //About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            onClick={() => setCurrentPage('contact')}
                            className={`hover:text-theme-pink transition-all duration-300 ${
                                currentPage === 'contact' && 'text-theme-pink'
                            }`}
                        >
                            //Contact
                        </Link>
                    </li>
                </ul>
                {/* Logo */}
                <div className="flex justify-center items-center text-2xl h-20">
                    <img
                        src="./assets/images/logo.svg"
                        alt="Benjamin Holt monogram"
                        className="h-full z-20"
                        id="logo-image-mobile"
                    />
                </div>
                <ul className="flex flex-col grow justify-evenly pl-4 text-left text-theme-lilac sm:text-lg sm:pl-12 lg:pl-20 lg:flex-row lg:items-center lg:justify-start">
                    <li>
                        <Link
                            to="/work"
                            onClick={() => setCurrentPage('work')}
                            className={`hover:text-theme-pink transition-all duration-300 ${
                                currentPage === 'work' && 'text-theme-pink'
                            } lg:pr-20`}
                        >
                            //Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/resume"
                            onClick={() => setCurrentPage('resume')}
                            className={`hover:text-theme-pink transition-all duration-300 ${
                                currentPage === 'resume' && 'text-theme-pink'
                            }`}
                        >
                            //Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
