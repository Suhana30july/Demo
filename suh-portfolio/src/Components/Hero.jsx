// import React from "react";
// import "./Hero.css";
// import { ReactTyped } from "react-typed";
// import profileImg from "../assets/img.jpeg"; // <-- Your Image

// const Hero = () => {
//   return (
//     <section className="hero-container">
//       {/* JUGNU BACKGROUND */}
//       <div className="fireflies">
//         {[...Array(35)].map((_, i) => (
//           <div
//             key={i}
//             className="firefly"
//             style={{
//               "--randX": Math.random(),
//               "--randY": Math.random(),
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="hero-content">
//         {/* LEFT TEXT COLUMN */}
//         <div className="hero-text">
//           <p className="small-title">HI, I'M SUHANA FIRDOSH</p>

//           <h1 className="main-title">
//             I’M A <br />
//             <ReactTyped
//               strings={["MERN STACK DEVELOPER"]}
//               typeSpeed={70}
//               backSpeed={40}
//               loop
//               className="highlight"
//             />
//           </h1>

//           <p className="description">
//             I build fast, scalable and user-centric digital products using
//             modern web technologies.
//           </p>

//           {/* <button className="btn">View My Projects</button> */}
//         </div>

//         {/* RIGHT IMAGE COLUMN */}
//         <div className="hero-image">
//           <img src={profileImg} alt="Suhana" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React, { useEffect, useRef } from "react";
// import "./Hero.css";
// import { ReactTyped } from "react-typed";
// import profileImg from "../assets/img.jpeg";

// const Hero = () => {
//   const imageRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     // 3D tilt effect for image
//     const handleMouseMove = (e) => {
//       if (!imageRef.current) return;

//       const { left, top, width, height } =
//         imageRef.current.getBoundingClientRect();
//       const x = (e.clientX - left) / width - 0.5;
//       const y = (e.clientY - top) / height - 0.5;

//       imageRef.current.style.transform = `
//         perspective(1000px)
//         rotateY(${x * 20}deg)
//         rotateX(${-y * 20}deg)
//         scale3d(1.05, 1.05, 1.05)
//       `;
//     };

//     const handleMouseLeave = () => {
//       if (imageRef.current) {
//         imageRef.current.style.transform = `
//           perspective(1000px)
//           rotateY(0deg)
//           rotateX(0deg)
//           scale3d(1, 1, 1)
//         `;
//       }
//     };

//     // Floating animation for text
//     const handleTextFloat = () => {
//       if (!textRef.current) return;
//       textRef.current.style.transform = `translateY(${
//         Math.sin(Date.now() / 1200) * 8
//       }px)`;
//       requestAnimationFrame(handleTextFloat);
//     };

//     const imageElement = imageRef.current;
//     if (imageElement) {
//       imageElement.addEventListener("mousemove", handleMouseMove);
//       imageElement.addEventListener("mouseleave", handleMouseLeave);
//     }

//     handleTextFloat();

//     return () => {
//       if (imageElement) {
//         imageElement.removeEventListener("mousemove", handleMouseMove);
//         imageElement.removeEventListener("mouseleave", handleMouseLeave);
//       }
//     };
//   }, []);

//   return (
//     <section className="hero-container">
//       {/* JUGNU BACKGROUND */}
//       <div className="fireflies">
//         {[...Array(35)].map((_, i) => (
//           <div
//             key={i}
//             className="firefly"
//             style={{
//               "--randX": Math.random(),
//               "--randY": Math.random(),
//               "--delay": Math.random() * 5 + "s",
//               "--duration": Math.random() * 15 + 10 + "s",
//             }}
//           ></div>
//         ))}
//       </div>

//       {/* FLOATING SHAPES */}
//       <div className="floating-shapes">
//         <div className="shape shape-1"></div>
//         <div className="shape shape-2"></div>
//         <div className="shape shape-3"></div>
//       </div>

//       <div className="hero-content">
//         {/* LEFT TEXT COLUMN */}
//         <div className="hero-text" ref={textRef}>
//           <p className="small-title"></p>

//           <h1 className="main-title">
//             <span className="title-line">HI, I'M SUHANA</span>
//             <span className="title-line">
//               <ReactTyped
//                 strings={["MERN DEVELOPER"]}
//                 typeSpeed={60}
//                 backSpeed={35}
//                 loop
//                 className="highlight"
//               />
//             </span>
//           </h1>

//           <p className="quote">
//             "Success is just a loop — try, fail, learn, repeat."
//           </p>

//           <p className="description">
//             Full-Stack Developer specializing in MERN stack, building fast,
//             scalable and user-centric digital products using modern web
//             technologies.
//           </p>

//           <div className="tech-stack">
//             <span className="tech-tag">React.js</span>
//             <span className="tech-tag">Node.js</span>
//             <span className="tech-tag">MongoDB</span>
//             <span className="tech-tag">Express.js</span>
//           </div>

//           <button className="btn">View My Projects</button>
//         </div>

//         {/* RIGHT 3D IMAGE COLUMN */}
//         <div className="hero-image">
//           <div className="image-3d-container" ref={imageRef}>
//             <img src={profileImg} alt="Suhana" />
//             <div className="image-glow"></div>
//             <div className="floating-border"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React, { useEffect, useRef } from "react";
// import "./Hero.css";
// import { ReactTyped } from "react-typed";
// import profileImg from "../assets/img.jpeg";

// const Hero = () => {
//   const imageRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     // Smooth parallax and mouse move effects
//     const handleMouseMove = (e) => {
//       if (!imageRef.current) return;

//       const { left, top, width, height } =
//         imageRef.current.getBoundingClientRect();
//       const x = (e.clientX - left) / width - 0.5;
//       const y = (e.clientY - top) / height - 0.5;

//       imageRef.current.style.transform = `
//         perspective(1000px)
//         rotateY(${x * 8}deg)
//         rotateX(${-y * 8}deg)
//         scale3d(1.02, 1.02, 1.02)
//       `;

//       // Parallax effect for background elements
//       const parallaxElements = document.querySelectorAll(".parallax");
//       parallaxElements.forEach((element) => {
//         const speed = element.dataset.speed || 0.5;
//         const x = (window.innerWidth - e.pageX * speed) / 100;
//         const y = (window.innerHeight - e.pageY * speed) / 100;
//         element.style.transform = `translateX(${x}px) translateY(${y}px)`;
//       });
//     };

//     const handleMouseLeave = () => {
//       if (imageRef.current) {
//         imageRef.current.style.transform = `
//           perspective(1000px)
//           rotateY(0deg)
//           rotateX(0deg)
//           scale3d(1, 1, 1)
//         `;
//       }
//     };

//     // Text floating animation
//     const handleTextFloat = () => {
//       if (!textRef.current) return;
//       textRef.current.style.transform = `translateY(${
//         Math.sin(Date.now() / 1500) * 5
//       }px)`;
//       requestAnimationFrame(handleTextFloat);
//     };

//     const imageElement = imageRef.current;
//     if (imageElement) {
//       imageElement.addEventListener("mousemove", handleMouseMove);
//       imageElement.addEventListener("mouseleave", handleMouseLeave);
//     }

//     handleTextFloat();

//     return () => {
//       if (imageElement) {
//         imageElement.removeEventListener("mousemove", handleMouseMove);
//         imageElement.removeEventListener("mouseleave", handleMouseLeave);
//       }
//     };
//   }, []);

//   return (
//     <section className="hero-container">
//       {/* Animated Background Elements */}
//       <div className="background-elements">
//         <div className="gradient-orbs">
//           <div className="orb orb-1 parallax" data-speed="0.3"></div>
//           <div className="orb orb-2 parallax" data-speed="0.5"></div>
//           <div className="orb orb-3 parallax" data-speed="0.7"></div>
//         </div>

//         {/* Grid Background */}
//         <div className="grid-background"></div>
//       </div>

//       <div className="hero-content">
//         {/* Left Text Content */}
//         <div className="hero-text" ref={textRef}>
//           <div className="text-content">
//             <div className="badge">
//               <span>👋 Hello, I'm Suhana Firdosh</span>
//             </div>

//             <h1 className="main-title">
//               <span className="title-line">Full-Stack</span>
//               <span className="title-line">
//                 <span className="gradient-text">
//                   <ReactTyped
//                     strings={[
//                       "Developer",
//                       "Designer",
//                       "Problem Solver",
//                       "Innovator",
//                     ]}
//                     typeSpeed={80}
//                     backSpeed={40}
//                     loop
//                   />
//                 </span>
//               </span>
//             </h1>

//             <p className="description">
//               I create <span className="highlight">digital experiences</span>{" "}
//               that blend beautiful design with powerful functionality.
//               Specializing in modern web technologies and user-centric
//               solutions.
//             </p>

//             <div className="stats">
//               <div className="stat">
//                 <span className="stat-number">50+</span>
//                 <span className="stat-label">Projects</span>
//               </div>
//               <div className="stat">
//                 <span className="stat-number">3+</span>
//                 <span className="stat-label">Years</span>
//               </div>
//               <div className="stat">
//                 <span className="stat-number">100%</span>
//                 <span className="stat-label">Client Satisfaction</span>
//               </div>
//             </div>

//             <div className="cta-buttons">
//               <button className="btn btn-primary">
//                 <span>View My Work</span>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                   <path
//                     d="M5 12H19M19 12L12 5M19 12L12 19"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//               <button className="btn btn-secondary">
//                 <span>Let's Talk</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Image Content */}
//         <div className="hero-visual">
//           <div className="image-container" ref={imageRef}>
//             <div className="image-wrapper">
//               <img src={profileImg} alt="Suhana Firdosh" />
//               <div className="image-overlay"></div>
//             </div>

//             {/* Floating Elements */}
//             <div className="floating-card card-1">
//               <div className="card-icon">⚡</div>
//               <span>Fast</span>
//             </div>
//             <div className="floating-card card-2">
//               <div className="card-icon">🎯</div>
//               <span>Reliable</span>
//             </div>
//             <div className="floating-card card-3">
//               <div className="card-icon">💡</div>
//               <span>Creative</span>
//             </div>

//             {/* Background Glow */}
//             <div className="visual-glow"></div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="scroll-indicator">
//         <div className="scroll-line"></div>
//         <span>Scroll to explore</span>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { ReactTyped } from "react-typed";
import profileImg from "../assets/img.jpeg";

const Hero = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    // 3D Tilt Effect
    const handleMouseMove = (e) => {
      if (!imageRef.current) return;

      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `
        perspective(1000px) 
        rotateY(${x * 15}deg) 
        rotateX(${-y * 15}deg) 
        scale3d(1.05, 1.05, 1.05)
      `;
    };

    const handleMouseLeave = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `
          perspective(1000px) 
          rotateY(0deg) 
          rotateX(0deg) 
          scale3d(1, 1, 1)
        `;
      }
    };

    // Floating Animation
    const handleTextFloat = () => {
      if (!textRef.current) return;
      textRef.current.style.transform = `translateY(${Math.sin(Date.now() / 1200) * 8}px)`;
      requestAnimationFrame(handleTextFloat);
    };

    const imageElement = imageRef.current;
    if (imageElement) {
      imageElement.addEventListener('mousemove', handleMouseMove);
      imageElement.addEventListener('mouseleave', handleMouseLeave);
    }

    handleTextFloat();

    return () => {
      if (imageElement) {
        imageElement.removeEventListener('mousemove', handleMouseMove);
        imageElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Animated Background */}
      <div className="hero-bg-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Text Content */}
          <div className="hero-text" ref={textRef}>
            <div className="intro-badge">
              <span className="pulse-dot"></span>
              MERN Stack Developer
            </div>

            <h1 className="main-title">
              <span className="title-line">Hi, I'm</span>
              <span className="title-line gradient-name">Suhana Firdosh</span>
              <span className="title-line">
                <ReactTyped
                  strings={[
                    "MERN Stack Developer",
                    // "React Specialist", 
                    // "Node.js Developer",
                    // "Problem Solver"
                  ]}
                  typeSpeed={60}
                  backSpeed={40}
                  loop
                  className="typing-text"
                />
              </span>
            </h1>

            <p className="hero-description">
              Passionate about building <span className="highlight">responsive, scalable, and user-centric</span> web applications 
              using modern technologies. Currently working at Visital Technology as a MERN Developer.
            </p>

            {/* <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Focus</span>
              </div>
            </div> */}

            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}
              >
                <span>View My Work</span>
                <div className="btn-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* 3D Image */}
          <div className="hero-visual">
            <div className="image-3d-container" ref={imageRef}>
              <div className="image-wrapper">
                <img src={profileImg} alt="Suhana Firdosh" />
                <div className="image-glow"></div>
                <div className="floating-border"></div>
              </div>
              
              {/* Floating Tech Stack */}
              {/* <div className="floating-tech tech-1">
                <span>React</span>
              </div>
              <div className="floating-tech tech-2">
                <span>Node.js</span>
              </div>
              <div className="floating-tech tech-3">
                <span>MongoDB</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </div> */}
    </section>
  );
};

export default Hero;