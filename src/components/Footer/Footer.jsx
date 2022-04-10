import React from 'react';

function Footer() {
    return (
        <footer className="flex flex-col items-center pt-5">
            <div className="flex justify-around items-center pt-3 w-3/4 lg:w-1/3">
                {/* LinkedIn logo + link */}
                <a
                    href="https://www.linkedin.com/in/benjamin-thorulfr-holt/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        height="2.25rem"
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 40 40"
                        viewBox="0 0 40 40"
                        className="group"
                    >
                        <path
                            fill="#9F9FED"
                            d="M32.8 5.3H7c-1.2 0-2.2 1-2.2 2.2v25.9c0 1.2 1 2.2 2.2 2.2h25.8c1.2 0 2.2-1 2.2-2.2V7.5c0-1.2-1-2.2-2.2-2.2zM13.7 31.1H9.2V16.6h4.5v14.5zm-.4-17.2c-.5.5-1.1.8-1.8.8-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6 2.6 1.2 2.6 2.6c0 .7-.3 1.3-.8 1.8zm17.2 17.2H26v-7c0-1.7 0-3.8-2.3-3.8S21 22.1 21 24v7.1h-4.5V16.6h4.3v2h.1c.9-1.5 2.5-2.4 4.2-2.3 4.5 0 5.4 3 5.4 6.9v7.9z"
                            className="group-hover:fill-theme-orange transition-all duration-300"
                        ></path>
                    </svg>
                </a>
                {/* GitHub logo + link */}
                <a
                    href="https://github.com/Thorulfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <svg
                        height="2rem"
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 125 125"
                        viewBox="0 0 125 125"
                    >
                        <path
                            fill="#9F9FED"
                            fillRule="evenodd"
                            d="M62.8 3C29.5 3 2.4 30 2.4 63.4c0 26.7 17.3 49.3 41.3 57.3 3 .6 4.1-1.3 4.1-2.9 0-1.4-.1-6.2-.1-11.2-16.8 3.7-20.3-7.1-20.3-7.1-2.7-7-6.7-8.8-6.7-8.8-5.5-3.7.4-3.7.4-3.7 6.1.4 9.3 6.2 9.3 6.2 5.4 9.2 14.1 6.6 17.6 5 .5-3.9 2.1-6.6 3.8-8.1-13.4-1.5-27.5-6.7-27.5-29.8 0-6.6 2.4-12 6.2-16.2-.6-1.5-2.7-7.7.6-16 0 0 5.1-1.6 16.6 6.2 4.8-1.3 10-2 15.1-2s10.3.7 15.1 2c11.5-7.8 16.6-6.2 16.6-6.2 3.3 8.3 1.2 14.5.6 16 3.9 4.2 6.2 9.6 6.2 16.2 0 23.2-14.1 28.3-27.6 29.8 2.2 1.9 4.1 5.5 4.1 11.2 0 8.1-.1 14.6-.1 16.6 0 1.6 1.1 3.5 4.1 2.9 24-8 41.3-30.6 41.3-57.3C123.2 30 96.2 3 62.8 3z"
                            clipRule="evenodd"
                            className="group-hover:fill-theme-orange transition-all duration-300"
                        ></path>
                        <path
                            fill="#190e4f"
                            d="M25.3 89.7c-.1.3-.6.4-1 .2s-.7-.6-.5-.9c.1-.3.6-.4 1-.2s.6.6.5.9zm2.4 2.7c-.3.3-.9.1-1.2-.3-.4-.4-.5-1-.2-1.3.3-.3.8-.1 1.2.3.5.5.5 1.1.2 1.3zm2.4 3.5c-.4.3-1 0-1.3-.5-.4-.5-.4-1.2 0-1.4.4-.3 1 0 1.3.5.4.5.4 1.2 0 1.4zm3.3 3.4c-.3.4-1 .3-1.6-.2-.5-.5-.7-1.2-.3-1.5.3-.4 1-.3 1.6.2.5.4.6 1.1.3 1.5zm4.5 1.9c-.1.5-.8.7-1.5.5-.7-.2-1.1-.8-1-1.2.1-.5.8-.7 1.5-.5.7.2 1.1.8 1 1.2zm4.9.4c0 .5-.6.9-1.3.9-.7 0-1.3-.4-1.3-.9s.6-.9 1.3-.9c.7 0 1.3.4 1.3.9zm4.6-.8c.1.5-.4 1-1.1 1.1-.7.1-1.3-.2-1.4-.7-.1-.5.4-1 1.1-1.1.7-.1 1.3.2 1.4.7zm0 0"
                            className="group-hover:fill-theme-orange transition-all duration-300"
                        ></path>
                    </svg>
                </a>
                {/* Stack Overflow logo + link */}
                <a
                    href="https://stackoverflow.com/users/16655462/thorulfr?tab=profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <svg aria-hidden="true" height="2rem" viewBox="0 0 32 37">
                        <path
                            d="M26 33v-9h4v13H0V24h4v9h22Z"
                            fill="#9F9FED"
                            className="group-hover:fill-theme-orange transition-all duration-300"
                        ></path>
                        <path
                            d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                            fill="#E83F6F"
                            className="group-hover:fill-theme-orange transition-all duration-300"
                        ></path>
                    </svg>
                </a>
            </div>
            <div className="text-center m-3 text-theme-lilac">
                © 2022{' '}
                <a
                    className="hover:text-theme-orange transition-all duration-300"
                    href="https://www.youtube.com/watch?v=qHAHEhhJisk"
                    target="_blank"
                    rel="noreferrer"
                >
                    Benjamin Holt
                </a>
            </div>
        </footer>
    );
}

export default Footer;
