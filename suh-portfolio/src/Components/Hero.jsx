// import React from "react";
// import { motion } from "framer-motion";
// import profileImg from "../assets/img.jpeg";

// const Hero = () => {
//   return (
//     <motion.section
//       id="hero"
//       className="hero section hero-section"
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       <div className="container">
//         <div className="hero-layout">
//           {/* Left: Text */}
//           <motion.div
//             className="hero-content"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//           >
//             <p className="intro-line">I am Suhana Firdosh</p>
//             <p className="tagline">MERN Stack Developer</p>
//             <h1>
//               Building scalable, user‑focused
//               <br />
//               web applications.
//             </h1>
//             <p className="hero-subtitle">
//               Enthusiastic MERN developer with real‑world experience in ERP
//               systems, fitness platforms, and modern admin dashboards.
//             </p>
//             <div className="hero-buttons">
//               <a href="#projects" className="btn primary">
//                 View Projects
//               </a>
//               <a href="#contact" className="btn secondary">
//                 Contact Me
//               </a>
//             </div>
//           </motion.div>

//           {/* Right: Image + 3D + Jugnu effect */}
//           <motion.div
//             className="hero-visual-wrapper"
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//           >
//             <div className="jugnu-layer local">
//               <span className="jugnu j1"></span>
//               <span className="jugnu j2"></span>
//               <span className="jugnu j3"></span>
//               <span className="jugnu j4"></span>
//               <span className="jugnu j5"></span>
//             </div>

//             <motion.div
//               className="hero-image-card hero-image-3d"
//               initial={{ rotateY: -10, rotateX: 5, scale: 0.97 }}
//               animate={{ rotateY: 0, rotateX: 0, scale: 1 }}
//               transition={{ duration: 0.9, ease: "easeOut" }}
//               whileHover={{
//                 rotateY: 12,
//                 rotateX: -6,
//                 scale: 1.05,
//               }}
//             >
//               <div className="hero-image-border">
//                 <img
//                   src={profileImg}
//                   alt="Suhana Firdosh"
//                   className="hero-image"
//                 />
//               </div>

//               <div className="hero-image-info">
//                 <p className="hero-image-name">Suhana Firdosh</p>
//                 <p className="hero-image-role">MERN Stack Developer</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;





import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/img.jpeg";
import "./Hero.css";

const Hero = () => {
  return (
    <motion.section
      id="home" // was "hero"
      className="hero section hero-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="hero-layout">
          {/* Left: Text */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.p
              className="intro-line"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I am Suhana Firdosh
            </motion.p>

            <motion.p
              className="tagline"
              initial={{ opacity: 0, x: -40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              MERN Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Building scalable, user‑focused
              <br />
              web applications.
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Enthusiastic MERN developer with real‑world experience in ERP
              systems, fitness platforms, and modern admin dashboards.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <a href="#projects" className="btn primary">
                View Projects
              </a>
              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Image + 3D + Jugnu effect */}
          <motion.div
            className="hero-visual-wrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="jugnu-layer local">
              <span className="jugnu j1"></span>
              <span className="jugnu j2"></span>
              <span className="jugnu j3"></span>
              <span className="jugnu j4"></span>
              <span className="jugnu j5"></span>
            </div>

            {/* Floating 3D image card */}
            <motion.div
              className="hero-image-card hero-image-3d"
              initial={{ rotateY: -10, rotateX: 5, scale: 0.97, y: 0 }}
              animate={{
                rotateY: 0,
                rotateX: 0,
                scale: 1,
                y: [0, -8, 0],
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                y: {
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 4,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                rotateY: 14,
                rotateX: -8,
                scale: 1.06,
              }}
            >
              <div className="hero-image-border">
                <img
                  src={profileImg}
                  alt="Suhana Firdosh"
                  className="hero-image"
                />
              </div>

              <div className="hero-image-info">
                {/* <p className="hero-image-name">Suhana Firdosh</p> */}
                {/* <p className="hero-image-role">MERN Stack Developer</p> */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
