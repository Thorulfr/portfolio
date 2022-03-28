// Imports
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentPage, setCurrentPage }) => {
    // Get viewport width
    const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    );

    const hamburgerToggle = () => {
        document
            .getElementById('hamburger-top')
            .classList.toggle('button-transform-top-active');
        document
            .getElementById('hamburger-middle')
            .classList.toggle('button-transform-middle-active');
        document
            .getElementById('hamburger-bottom')
            .classList.toggle('button-transform-bottom-active');
        document.getElementById('nav-list').classList.toggle('navlist-active');
        if (vw < 640) {
            document
                .getElementById('header-top')
                .classList.toggle('navlist-active');
        } else {
            document
                .getElementById('my-name')
                .classList.toggle('navlist-active');
        }
    };

    return (
        <header id="nav-header" className="shadow-sm bg-theme-purple">
            {/* Header top */}
            <div
                id="header-top"
                className="w-full flex flex-col justify-between items-center p-2 transition-all duration-300"
            >
                {/* Logo */}
                <div className="flex justify-center items-center text-2xl h-20">
                    <img
                        src="./assets/images/logo.svg"
                        alt="Benjamin Holt monogram"
                        className="h-full z-20"
                        id="logo-image-mobile"
                    />
                </div>
            </div>
            {/* Header bottom/Nav */}
            <nav className="w-full flex flex-wrap justify-around">
                <ul
                    id="nav-list"
                    className="w-full flex justify-evenly pb-1 text-theme-lilac transition-all duration-300 md:text-lg"
                >
                    <li>
                        <Link
                            to="/"
                            onClick={() => setCurrentPage('/')}
                            className={`hover:text-theme-pink transition-all duration-300 ${
                                currentPage === '/' && 'text-theme-pink'
                            }`}
                        >
                            //About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/work"
                            onClick={() => setCurrentPage('work')}
                            className={`hover:text-theme-pink transition-all duration-300 ${
                                currentPage === 'work' && 'text-theme-pink'
                            }`}
                        >
                            //Work
                        </Link>
                    </li>
                </ul>
                <ul className="w-full flex justify-evenly pb-3 text-theme-lilac transition-all duration-300 md:text-lg2">
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
            </nav>
        </header>
    );
};

export default Header;
