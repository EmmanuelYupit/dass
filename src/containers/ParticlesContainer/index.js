import React from "react"
import Particles from "react-particles-js"

const ParticlesContainer = () => (
  <div
    style={{
      background: "#393E44",
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  </div>
)

export default ParticlesContainer
