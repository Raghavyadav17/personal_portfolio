// ParticlesBackground.jsx
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1  // ✅ Push particles behind all content
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: "out",
          },
          size: {
            value: 3,
          },
        },
        background: {
          color: "#0d0d0d", // Optional background color
        },
      }}
    />
  );
};

export default ParticlesBackground;
