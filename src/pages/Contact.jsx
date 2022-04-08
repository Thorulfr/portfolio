// Imports
import React, { useEffect, useState, setState } from 'react';

// Utility imports
import validator from 'validator';

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

    // Handle changes to input fields
    function handleChange(evt) {
        setFormState({ ...formState, [evt.target.name]: evt.target.value });
    }

    // Handle form submission
    function handleSubmit(evt) {
        evt.preventDefault();
        // Disable button after submission
        document.getElementById('contact-submit-button').disabled = true;
        document
            .getElementById('contact-submit-button')
            .classList.remove('hover:text-theme-orange', 'hover:shadow-lg');
        // API endpoint for AWS SES
        const endpoint =
            'https://m29d885kl7.execute-api.us-east-1.amazonaws.com/default/send-contact-form-email';
        // Prep API request
        const body = JSON.stringify({
            senderName: name,
            senderEmail: email,
            message: message,
        });
        const requestOptions = {
            method: 'POST',
            body,
        };
        // Fetch request to AWS SES endpoint
        fetch(endpoint, requestOptions)
            .then((response) => {
                if (!response.ok) throw new Error('Error in fetch');
                return response.json();
            })
            .then((response) => {
                document
                    .getElementById('contact-submit-button')
                    .classList.add('text-theme-green');
                document.getElementById(
                    'contact-submit-button-text'
                ).innerText = 'Got it!';
            })
            .catch((error) => {
                document.getElementById(
                    'contact-submit-button-text'
                ).innerText = 'Uh oh! "Something broke...';
            });
    }

    return (
        <main className="grow text-theme-lilac px-4 flex flex-col items-center justify-center md:px-12 lg:px-32 lg:text-xl 2xl:px-52">
            <div className="m-4 flex justify-center sm:w-5/6 2xl:w-2/3">
                <p className="text-justify">
                    Want to collaborate? Looking for a killer website? Just
                    wanna talk about vikings and runes? Shoot me a message and
                    I'll get back to you ASAP! <br /> <br />
                    You can also reach me directly{' '}
                    <a
                        href="mailto:holt.benjamin.eric@gmail.com"
                        className="text-theme-pink hover:text-theme-orange transition-all duration-300 ease-in-out"
                    >
                        via e-mail
                    </a>
                    .
                </p>
            </div>
            <div
                className="m-4 p-8 relative bg-theme-lilac/[.20] sm:w-5/6 sm:p-12 2xl:w-2/3"
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
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center"
                >
                    {/* Name input */}
                    <div className="mb-6 relative w-full">
                        <input
                            type="text"
                            id="nameInput"
                            name="name"
                            placeholder="Name"
                            required
                            defaultValue={name}
                            onInput={handleChange}
                            className="w-full px-3 py-1.5 font-black border-l-4 invalid:border-theme-pink valid:border-theme-green focus:outline-none transition duration-300 ease-in-out"
                        ></input>
                        {/* Bottom-left frame */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 146.32 105.45"
                            className="absolute -bottom-1 -left-1 w-5"
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
                            className="absolute -top-1 -right-1 w-5"
                        >
                            <path
                                fill="#342b6e"
                                d="M0 0h146.32v105.45L0 0z"
                            ></path>
                        </svg>
                    </div>
                    {/* Email input */}
                    <div className="mb-6 relative w-full">
                        <input
                            type="email"
                            id="emailInput"
                            name="email"
                            placeholder="E-mail Address"
                            required
                            defaultValue={email}
                            onInput={handleChange}
                            className="w-full px-3 py-1.5 font-black border-l-4 invalid:border-theme-pink valid:border-theme-green focus:outline-none transition duration-300 ease-in-out"
                        />
                        {/* Bottom-left frame */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 146.32 105.45"
                            className="absolute -bottom-1 -left-1 w-5"
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
                            className="absolute -top-1 -right-1 w-5"
                        >
                            <path
                                fill="#342b6e"
                                d="M0 0h146.32v105.45L0 0z"
                            ></path>
                        </svg>
                    </div>
                    {/* Message input */}
                    <div className="mb-6 relative w-full">
                        <textarea
                            id="messageInput"
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            required
                            minLength="10"
                            defaultValue={message}
                            onInput={handleChange}
                            className="w-full px-3 py-1.5 font-black border-l-4 invalid:border-theme-pink valid:border-theme-green focus:outline-none transition duration-300 ease-in-out"
                        />
                        {/* Bottom-left frame */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 146.32 105.45"
                            className="absolute bottom-[.175rem] -left-1 w-5"
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
                            className="absolute -top-1 -right-1 w-5"
                        >
                            <path
                                fill="#342b6e"
                                d="M0 0h146.32v105.45L0 0z"
                            ></path>
                        </svg>
                    </div>
                    <button
                        type="submit"
                        id="contact-submit-button"
                        className="w-2/3 px-6 py-2.5 relative bg-theme-purple text-theme-pink font-black shadow hover:text-theme-orange hover:shadow-lg focus:outline-none transition duration-300 ease-in-out 2xl:w-1/2"
                    >
                        <span id="contact-submit-button-text">Submit</span>
                        {/* Bottom-left frame */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 146.32 105.45"
                            className="absolute -bottom-1 -left-1 w-5"
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
                            className="absolute -top-1 -right-1 w-5"
                        >
                            <path
                                fill="#342b6e"
                                d="M0 0h146.32v105.45L0 0z"
                            ></path>
                        </svg>
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Contact;
