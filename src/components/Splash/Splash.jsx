import React from 'react';

function Splash() {
    return (
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
    );
}

export default Splash;
