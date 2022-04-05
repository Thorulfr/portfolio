// Imports
import React, { useEffect, useState } from 'react';

// Utility imports
import { validateEmail } from '../utils/helpers';

const Contact = ({ setCurrentPage }) => {
    // Set current page in header/nav
    useEffect(() => {
        setCurrentPage('contact');
    });

    // Initialize useState to control inputs
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Destructure defaults
    const { name, email, message } = formState;

    // Initialize useState to control error messages
    const [errorMessage, setErrorMessage] = useState('');

    // Handle changes to input fields
    function handleChange(evt) {
        // Email validation
        if (evt.target.name === 'email') {
            const isValid = validateEmail(evt.target.value);
            if (!isValid) {
                setErrorMessage('Please enter a valid e-mail address!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!evt.target.value.length) {
                setErrorMessage(`${evt.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }
        setFormState({ ...formState, [evt.target.name]: evt.target.value });
    }

    // Handle form submission
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(formState);
    }

    return (
        <main className="grow text-theme-lilac px-4 flex flex-col items-center justify-center md:px-12 lg:px-32 lg:text-xl 2xl:px-52">
            <div className="m-4 xl:px-16 2xl:px-20">
                <p className="text-justify">
                    Want to collaborate? Looking for a killer website? Just
                    wanna talk about vikings and runes? Shoot me a message and
                    I'll get back to you ASAP!
                </p>
            </div>
            <div
                className="m-4 p-8 relative bg-theme-lilac/[.20] sm:w-5/6 sm:p-12"
                id="email-form"
            >
                {/* Bottom-left frame */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 146.32 105.45"
                    className="absolute -bottom-1 -left-1 w-10 sm:w-16"
                >
                    <path
                        fill="#190e4f"
                        d="M146.32 105.45H0V0l146.32 105.45z"
                    ></path>
                </svg>
                {/* Top-right frame */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 146.32 105.45"
                    className="absolute -top-1 -right-1 w-10 sm:w-16"
                >
                    <path fill="#190e4f" d="M0 0h146.32v105.45L0 0z"></path>
                </svg>
                <form onSubmit={handleSubmit}>
                    {/* Name input */}
                    <div className="mb-6 relative">
                        <input
                            type="text"
                            id="nameInput"
                            name="name"
                            placeholder="Name"
                            defaultValue={name}
                            onBlur={handleChange}
                            className="w-full px-3 py-1.5 font-black focus:outline-none"
                        ></input>
                        {/* Bottom-left frame */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 146.32 105.45"
                            className="absolute -bottom-1 -left-1 w-5 sm:w-16"
                        >
                            <path
                                fill="#342b6e"
                                d="M146.32 105.45H0V0l146.32 105.45z"
                            ></path>
                        </svg>
                        {/* Top-right frame */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 146.32 105.45"
                            className="absolute -top-1 -right-1 w-5 sm:w-16"
                        >
                            <path
                                fill="#342b6e"
                                d="M0 0h146.32v105.45L0 0z"
                            ></path>
                        </svg>
                    </div>
                    {/* Email input */}
                    <div className="mb-6 relative">
                        <input
                            type="email"
                            id="emailInput"
                            name="email"
                            placeholder="E-mail Address"
                            defaultValue={email}
                            onBlur={handleChange}
                            className="w-full px-3 py-1.5 font-black focus:outline-none"
                        />
                        {/* Bottom-left frame */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 146.32 105.45"
                            className="absolute -bottom-1 -left-1 w-5 sm:w-16"
                        >
                            <path
                                fill="#342b6e"
                                d="M146.32 105.45H0V0l146.32 105.45z"
                            ></path>
                        </svg>
                        {/* Top-right frame */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 146.32 105.45"
                            className="absolute -top-1 -right-1 w-5 sm:w-16"
                        >
                            <path
                                fill="#342b6e"
                                d="M0 0h146.32v105.45L0 0z"
                            ></path>
                        </svg>
                    </div>
                    {/* Message input */}
                    <div className="mb-6 relative">
                        <textarea
                            id="messageInput"
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            defaultValue={message}
                            onBlur={handleChange}
                            className="w-full px-3 py-1.5 font-black focus:outline-none"
                        />
                        {/* Bottom-left frame */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 146.32 105.45"
                            className="absolute bottom-[.065rem] -left-1 w-5 sm:w-16"
                        >
                            <path
                                fill="#342b6e"
                                d="M146.32 105.45H0V0l146.32 105.45z"
                            ></path>
                        </svg>
                        {/* Top-right frame */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 146.32 105.45"
                            className="absolute -top-1 -right-1 w-5 sm:w-16"
                        >
                            <path
                                fill="#342b6e"
                                d="M0 0h146.32v105.45L0 0z"
                            ></path>
                        </svg>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full px-6 py-2.5 bg-theme-purple text-theme-pink font-black  shadow hover:text-theme-orange hover:shadow-lg focus:outline-none transition duration-300 ease-in-out"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Contact;
