import React from 'react'
import Particles from 'react-particles-js'
import { background } from '../../profile'

const ParticlesBackground = () => {
    return (
        <div className="particle">
            { background.type === 'Snow' && <Particles
            height="100vh"
            width="100%"
                params={{
                "particles": {
                    "number": {
                        "value": 5,
                        "density": {
                            "enable": false
                        }
                    },
                    "color": {
                        "value": "#887ecb"
                    },
                    "size": {
                        "value": 80,
                        "random": true
                    },
                    "move": {
                        "direction": "bottom",
                        "out_mode": "out"
                    },
                    "line_linked": {
                        "enable": false
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": false,
                            "mode": "remove"
                        }
                    },
                    "modes": {
                        "remove": {
                            "particles_nb": 4
                        }
                    }
                }
            }} />}
            { background.type === 'Particle' && <Particles
            height= "100vh"
            width= "100vw"
            params={{
            "particles": {
                "collisions": {
                    "enable": true
                },
                "number": {
                    "value": 30,
                    "density": {
                        "enable": false
                    }
                },
                "color": "#887ecb",
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "speed": 2,
                        "size_min": 0.4
                    }
                },
                "line_linked": {
                    "enable": true,
                    "color": "#50459b"
                },
                "move": {
                    "random": true,
                    "speed": 0.5,
                    "direction": "bottom",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 3,
                        "opacity": 0.4
                    },
                    "push": {
                        "particles_nb": 5
                    }
                },
                "retina_detect": true
            }
        }} />}
        </div>
    )
}

export default ParticlesBackground
