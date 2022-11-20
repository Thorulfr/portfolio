// Imports
import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

function ParticleHolder() {
    const particlesInit = useCallback(async (engine) => {
        // console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            className="-z-40 absolute"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: true,
                },
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            value_area: 900,
                        },
                    },
                    color: {
                        value: '#e83f6f',
                    },
                    shape: {
                        type: 'triangle',
                        stroke: {
                            width: 0,
                            color: '#000000',
                        },
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0,
                            sync: false,
                        },
                    },
                    size: {
                        value: 4,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 4,
                            size_min: 0.3,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: true,
                        distance: 125,
                        color: '#9f9fed',
                        opacity: 0.3,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 600,
                        },
                    },
                },
                interactivity: {
                    detect_on: 'window',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        onclick: {
                            enable: false,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 250,
                            size: 0,
                            duration: 2,
                            opacity: 0,
                            speed: 3,
                        },
                        repulse: {
                            distance: 75,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 4,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
}

export default ParticleHolder;
