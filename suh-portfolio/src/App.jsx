// import "./App.css";
// // import Header from "./Components/Header";
// import About from "./Components/About";
// import Hero from "./Components/Hero";
// import Projects from "./Components/Projects";
// import Contact from "./Components/Contact";
// import Navbar from "./Components/Navbar";

// function App() {
//   return (
//     <>
//       <Navbar></Navbar>
//       <Hero></Hero>
//       {/* <Header></Header> */}
//       {/* <About></About> */}
//       <Projects></Projects>
//       {/* <Contact></Contact> */}
//     </>
//   );
// }

// export default App;

// import React from "react";
// import { motion } from "framer-motion";
// import "./App.css";

// const App = () => {
//   return (
//     <div className="portfolio">
//       {/* Global Jugnu Layer */}
//       <div className="jugnu-layer global">
//         <span className="jugnu g1"></span>
//         <span className="jugnu g2"></span>
//         <span className="jugnu g3"></span>
//         <span className="jugnu g4"></span>
//         <span className="jugnu g5"></span>
//         <span className="jugnu g6"></span>
//         <span className="jugnu g7"></span>
//       </div>

//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo">Suhana Firdosh</div>
//         <ul className="nav-links">
//           <li>
//             <a href="#hero">Home</a>
//           </li>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#projects">Projects</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <section id="hero" className="hero">
//         <div className="hero-layout">
//           {/* Left: Text */}
//           <motion.div
//             className="hero-content"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <p className="tagline">MERN Stack Developer</p>
//             <h1>Building scalable, user‑focused web applications.</h1>
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
//               className="hero-image-card"
//               whileHover={{ rotateY: 8, rotateX: -4, scale: 1.03 }}
//               transition={{ type: "spring", stiffness: 180, damping: 18 }}
//             >
//               <div className="hero-image-border">
//                 {/* Put your image file in /public and update src */}
//                 <img
//                   src="/suhana.png"
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
//       </section>

//       {/* About Section */}
//       <section id="about" className="about">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           About Me
//         </motion.h2>

//         <motion.div
//           className="about-grid"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div>
//             <p>
//               MERN Stack Developer with hands‑on experience in building
//               responsive, scalable web applications using React.js, Node.js,
//               Express, and MongoDB.
//             </p>
//             <p>
//               Currently working as a MERN Developer Trainee at Visital
//               Technology, focusing on dynamic UIs, REST API integration, and
//               secure backend modules.
//             </p>

//             <h3>Technical Skills</h3>
//             <ul>
//               <li>
//                 <strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5,
//                 CSS3, Bootstrap
//               </li>
//               <li>
//                 <strong>Backend:</strong> Node.js, Express.js
//               </li>
//               <li>
//                 <strong>Database:</strong> MongoDB
//               </li>
//               <li>
//                 <strong>Tools:</strong> Git, GitHub, VS Code, Postman
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3>Education</h3>
//             <p>
//               <strong>BCA</strong> — Trident Academy of Creative Technology
//               (2021–2024)
//             </p>
//             <h3>Experience</h3>
//             <p>
//               <strong>MERN Developer Trainee</strong> — Visital Technology (Feb
//               2024 – Present)
//             </p>
//             <ul>
//               <li>
//                 Built reusable React components and dynamic admin dashboards.
//               </li>
//               <li>
//                 Integrated REST APIs with authentication and CRUD operations.
//               </li>
//               <li>Designed MongoDB schemas and optimized queries.</li>
//             </ul>
//           </div>
//         </motion.div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="projects">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           Projects
//         </motion.h2>

//         <div className="project-grid">
//           {[
//             {
//               title: "Briidgit Fitness Platform",
//               desc: "Trainer–client booking, gym slot scheduling, and session management using the MERN stack.",
//               points: [
//                 "Designed responsive dashboards for trainers and clients.",
//                 "Improved usability with clear flows and reusable UI components.",
//               ],
//               tech: "React, Node, Express, MongoDB",
//             },
//             {
//               title: "ERP System (HRMS + Attendance)",
//               desc: "Role‑based ERP front‑end modules for HR and attendance workflows.",
//               points: [
//                 "Implemented dynamic role‑based access control.",
//                 "Redesigned dashboards to improve internal workflow efficiency.",
//               ],
//               tech: "React, REST APIs",
//             },
//             {
//               title: "Admin Dashboard",
//               desc: "Responsive admin panel with routing, sidebar navigation and API integration.",
//               points: [],
//               tech: "React, React Router, REST APIs",
//             },
//             {
//               title: "Additional Projects",
//               desc: "",
//               points: [
//                 "To‑Do List App with CRUD and local storage.",
//                 "Authentication module with validation and password toggle.",
//                 "Multilingual React Slider (EN/AR) with image upload.",
//                 "Tic‑Tac‑Toe game in JavaScript.",
//                 "Diabetes Prediction dashboard in Excel.",
//               ],
//               tech: "React, JavaScript, Excel",
//             },
//           ].map((p, index) => (
//             <motion.div
//               key={p.title}
//               className="project-card"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{
//                 y: -6,
//                 rotateX: 3,
//                 rotateY: -3,
//                 boxShadow: "0 24px 40px rgba(15, 23, 42, 0.18)",
//               }}
//             >
//               <h3>{p.title}</h3>
//               {p.desc && <p>{p.desc}</p>}
//               {p.points.length > 0 && (
//                 <ul>
//                   {p.points.map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
//               )}
//               <p className="tech">Tech: {p.tech}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="contact">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           Contact
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           Open to MERN stack roles, internships, and freelance opportunities.
//           Feel free to reach out.
//         </motion.p>

//         <motion.div
//           className="contact-grid"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div>
//             <p>
//               <strong>Phone:</strong> +91‑9937178640
//             </p>
//             <p>
//               <strong>Email:</strong> suhanafirdosh00@gmail.com
//             </p>
//           </div>
//           <form
//             className="contact-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               alert("Thank you for reaching out!");
//             }}
//           >
//             <div className="form-group">
//               <label>Name</label>
//               <input type="text" required placeholder="Your name" />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="email" required placeholder="Your email" />
//             </div>
//             <div className="form-group">
//               <label>Message</label>
//               <textarea rows="4" required placeholder="Write your message..." />
//             </div>
//             <button type="submit" className="btn primary">
//               Send Message
//             </button>
//           </form>
//         </motion.div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <p>© {new Date().getFullYear()} Suhana Firdosh. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { motion } from "framer-motion";
// import "./App.css";
// import profileImg from "../src/assets/img.jpeg";

// const App = () => {
//   return (
//     <div className="portfolio">
//       {/* Global Jugnu Layer */}
//       <div className="jugnu-layer global">
//         <span className="jugnu g1"></span>
//         <span className="jugnu g2"></span>
//         <span className="jugnu g3"></span>
//         <span className="jugnu g4"></span>
//         <span className="jugnu g5"></span>
//         <span className="jugnu g6"></span>
//         <span className="jugnu g7"></span>
//       </div>

//       {/* Navbar (sticky) */}
//       <nav className="navbar">
//         <div className="logo">Suhana Firdosh</div>
//         <ul className="nav-links">
//           <li>
//             <a href="#hero">Home</a>
//           </li>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#projects">Projects</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <section id="hero" className="hero">
//         <div className="hero-layout">
//           {/* Left: Text */}
//           <motion.div
//             className="hero-content"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <p className="tagline">MERN Stack Developer</p>
//             <h1>Building scalable, user‑focused web applications.</h1>
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
//               className="hero-image-card"
//               whileHover={{ rotateY: 8, rotateX: -4, scale: 1.03 }}
//               transition={{ type: "spring", stiffness: 180, damping: 18 }}
//             >
//               <div className="hero-image-border">
//                 {/* Use the attached image: place it in /public/image.jpg */}
//                 <img src={profileImg} alt="Suhana Firdosh" />
//                 <img
//                   src="/image.jpg"
//                   alt="Suhana Firdosh portrait"
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
//       </section>

//       {/* About Section */}
//       <section id="about" className="about">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           About Me
//         </motion.h2>

//         <motion.div
//           className="about-grid"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div>
//             <p>
//               MERN Stack Developer with hands‑on experience in building
//               responsive, scalable web applications using React.js, Node.js,
//               Express, and MongoDB.
//             </p>
//             <p>
//               Currently working as a MERN Developer Trainee at Visital
//               Technology, focusing on dynamic UIs, REST API integration, and
//               secure backend modules.
//             </p>

//             <h3>Technical Skills</h3>
//             <ul>
//               <li>
//                 <strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5,
//                 CSS3, Bootstrap
//               </li>
//               <li>
//                 <strong>Backend:</strong> Node.js, Express.js
//               </li>
//               <li>
//                 <strong>Database:</strong> MongoDB
//               </li>
//               <li>
//                 <strong>Tools:</strong> Git, GitHub, VS Code, Postman
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3>Education</h3>
//             <p>
//               <strong>BCA</strong> — Trident Academy of Creative Technology
//               (2021–2024)
//             </p>
//             <h3>Experience</h3>
//             <p>
//               <strong>MERN Developer Trainee</strong> — Visital Technology (Feb
//               2024 – Present)
//             </p>
//             <ul>
//               <li>
//                 Built reusable React components and dynamic admin dashboards.
//               </li>
//               <li>
//                 Integrated REST APIs with authentication and CRUD operations.
//               </li>
//               <li>Designed MongoDB schemas and optimized queries.</li>
//             </ul>
//           </div>
//         </motion.div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="projects">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           Projects
//         </motion.h2>

//         <div className="project-grid">
//           {[
//             {
//               title: "Briidgit Fitness Platform",
//               desc: "Trainer–client booking, gym slot scheduling, and session management using the MERN stack.",
//               points: [
//                 "Designed responsive dashboards for trainers and clients.",
//                 "Improved usability with clear flows and reusable UI components.",
//               ],
//               tech: "React, Node, Express, MongoDB",
//             },
//             {
//               title: "ERP System (HRMS + Attendance)",
//               desc: "Role‑based ERP front‑end modules for HR and attendance workflows.",
//               points: [
//                 "Implemented dynamic role‑based access control.",
//                 "Redesigned dashboards to improve internal workflow efficiency.",
//               ],
//               tech: "React, REST APIs",
//             },
//             {
//               title: "Admin Dashboard",
//               desc: "Responsive admin panel with routing, sidebar navigation and API integration.",
//               points: [],
//               tech: "React, React Router, REST APIs",
//             },
//             {
//               title: "Additional Projects",
//               desc: "",
//               points: [
//                 "To‑Do List App with CRUD and local storage.",
//                 "Authentication module with validation and password toggle.",
//                 "Multilingual React Slider (EN/AR) with image upload.",
//                 "Tic‑Tac‑Toe game in JavaScript.",
//                 "Diabetes Prediction dashboard in Excel.",
//               ],
//               tech: "React, JavaScript, Excel",
//             },
//           ].map((p, index) => (
//             <motion.div
//               key={p.title}
//               className="project-card"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{
//                 y: -6,
//                 rotateX: 3,
//                 rotateY: -3,
//                 boxShadow: "0 24px 40px rgba(15, 23, 42, 0.25)",
//               }}
//             >
//               <h3>{p.title}</h3>
//               {p.desc && <p>{p.desc}</p>}
//               {p.points.length > 0 && (
//                 <ul>
//                   {p.points.map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
//               )}
//               <p className="tech">Tech: {p.tech}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="contact">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           Contact
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           Open to MERN stack roles, internships, and freelance opportunities.
//           Feel free to reach out.
//         </motion.p>

//         <motion.div
//           className="contact-grid"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div>
//             <p>
//               <strong>Phone:</strong> +91‑9937178640
//             </p>
//             <p>
//               <strong>Email:</strong> suhanafirdosh00@gmail.com
//             </p>
//           </div>
//           <form
//             className="contact-form"
//             onSubmit={(e) => {
//               e.preventDefault();
//               alert("Thank you for reaching out!");
//             }}
//           >
//             <div className="form-group">
//               <label>Name</label>
//               <input type="text" required placeholder="Your name" />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input type="email" required placeholder="Your email" />
//             </div>
//             <div className="form-group">
//               <label>Message</label>
//               <textarea rows="4" required placeholder="Write your message..." />
//             </div>
//             <button type="submit" className="btn primary">
//               Send Message
//             </button>
//           </form>
//         </motion.div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <p>© {new Date().getFullYear()} Suhana Firdosh. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;
// --------------

// import React from "react";
// import { motion } from "framer-motion";
// import "./App.css";
// import profileImg from "../src/assets/img.jpeg";

// const sectionVariants = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0 },
// };

// const App = () => {
//   return (
//     <div className="page-root">
//       {/* Global Jugnu Layer */}
//       <div className="jugnu-layer global">
//         <span className="jugnu g1"></span>
//         <span className="jugnu g2"></span>
//         <span className="jugnu g3"></span>
//         <span className="jugnu g4"></span>
//         <span className="jugnu g5"></span>
//         <span className="jugnu g6"></span>
//         <span className="jugnu g7"></span>
//       </div>

//       {/* Navbar */}
//       <header className="navbar-wrapper">
//         <nav className="navbar">
//           <div className="container nav-container">
//             <div className="logo">Suhana Firdosh</div>
//             <ul className="nav-links">
//               <li>
//                 <a href="#hero">Home</a>
//               </li>
//               <li>
//                 <a href="#about">About</a>
//               </li>
//               <li>
//                 <a href="#projects">Projects</a>
//               </li>
//               <li>
//                 <a href="#contact">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </header>

//       <main className="page-main">
//         {/* Hero Section */}
//         <motion.section
//           id="hero"
//           className="hero section hero-section"
//           variants={sectionVariants}
//           initial="hidden"
//           animate="show"
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <div className="container">
//             <div className="hero-layout">
//               {/* Left: Text */}
//               <motion.div
//                 className="hero-content"
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.1 }}
//               >
//                 <p className="tagline">MERN Stack Developer</p>
//                 <h1>Building scalable, user‑focused web applications.</h1>
//                 <p className="hero-subtitle">
//                   Enthusiastic MERN developer with real‑world experience in ERP
//                   systems, fitness platforms, and modern admin dashboards.
//                 </p>
//                 <div className="hero-buttons">
//                   <a href="#projects" className="btn primary">
//                     View Projects
//                   </a>
//                   <a href="#contact" className="btn secondary">
//                     Contact Me
//                   </a>
//                 </div>
//               </motion.div>

//               {/* Right: Image + 3D + Jugnu effect */}
//               <motion.div
//                 className="hero-visual-wrapper"
//                 initial={{ opacity: 0, x: 40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.9 }}
//               >
//                 <div className="jugnu-layer local">
//                   <span className="jugnu j1"></span>
//                   <span className="jugnu j2"></span>
//                   <span className="jugnu j3"></span>
//                   <span className="jugnu j4"></span>
//                   <span className="jugnu j5"></span>
//                 </div>

//                 <motion.div
//                   className="hero-image-card"
//                   whileHover={{ rotateY: 8, rotateX: -4, scale: 1.03 }}
//                   transition={{ type: "spring", stiffness: 180, damping: 18 }}
//                 >
//                   <div className="hero-image-border">
//                     <img
//                       src={profileImg}
//                       alt="Suhana Firdosh"
//                       className="hero-image"
//                     />
//                   </div>

//                   <div className="hero-image-info">
//                     <p className="hero-image-name">Suhana Firdosh</p>
//                     <p className="hero-image-role">MERN Stack Developer</p>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>
//         </motion.section>

//         {/* About Section */}
//         <motion.section
//           id="about"
//           className="about section about-section"
//           variants={sectionVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.2 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           <div className="container">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               About Me
//             </motion.h2>

//             <div className="about-grid">
//               <div>
//                 <p>
//                   MERN Stack Developer with hands‑on experience in building
//                   responsive, scalable web applications using React.js, Node.js,
//                   Express, and MongoDB.
//                 </p>
//                 <p>
//                   Currently working as a MERN Developer Trainee at Visital
//                   Technology, focusing on dynamic UIs, REST API integration, and
//                   secure backend modules.
//                 </p>

//                 <h3>Technical Skills</h3>
//                 <ul>
//                   <li>
//                     <strong>Frontend:</strong> React.js, JavaScript (ES6+),
//                     HTML5, CSS3, Bootstrap
//                   </li>
//                   <li>
//                     <strong>Backend:</strong> Node.js, Express.js
//                   </li>
//                   <li>
//                     <strong>Database:</strong> MongoDB
//                   </li>
//                   <li>
//                     <strong>Tools:</strong> Git, GitHub, VS Code, Postman
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h3>Education</h3>
//                 <p>
//                   <strong>BCA</strong> — Trident Academy of Creative Technology
//                   (2021–2024)
//                 </p>
//                 <h3>Experience</h3>
//                 <p>
//                   <strong>MERN Developer Trainee</strong> — Visital Technology
//                   (Feb 2024 – Present)
//                 </p>
//                 <ul>
//                   <li>
//                     Built reusable React components and dynamic admin
//                     dashboards.
//                   </li>
//                   <li>
//                     Integrated REST APIs with authentication and CRUD
//                     operations.
//                   </li>
//                   <li>Designed MongoDB schemas and optimized queries.</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Projects Section */}
//         <motion.section
//           id="projects"
//           className="projects section"
//           variants={sectionVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.2 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           <div className="container">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               Projects
//             </motion.h2>

//             <div className="project-grid">
//               {[
//                 {
//                   title: "Briidgit Fitness Platform",
//                   desc: "Trainer–client booking, gym slot scheduling, and session management using the MERN stack.",
//                   points: [
//                     "Designed responsive dashboards for trainers and clients.",
//                     "Improved usability with clear flows and reusable UI components.",
//                   ],
//                   tech: "React, Node, Express, MongoDB",
//                 },
//                 {
//                   title: "ERP System (HRMS + Attendance)",
//                   desc: "Role‑based ERP front‑end modules for HR and attendance workflows.",
//                   points: [
//                     "Implemented dynamic role‑based access control.",
//                     "Redesigned dashboards to improve internal workflow efficiency.",
//                   ],
//                   tech: "React, REST APIs",
//                 },
//                 {
//                   title: "Admin Dashboard",
//                   desc: "Responsive admin panel with routing, sidebar navigation and API integration.",
//                   points: [],
//                   tech: "React, React Router, REST APIs",
//                 },
//                 {
//                   title: "Additional Projects",
//                   desc: "",
//                   points: [
//                     "To‑Do List App with CRUD and local storage.",
//                     "Authentication module with validation and password toggle.",
//                     "Multilingual React Slider (EN/AR) with image upload.",
//                     "Tic‑Tac‑Toe game in JavaScript.",
//                     "Diabetes Prediction dashboard in Excel.",
//                   ],
//                   tech: "React, JavaScript, Excel",
//                 },
//               ].map((p, index) => (
//                 <motion.div
//                   key={p.title}
//                   className="project-card"
//                   initial={{ opacity: 0, y: 40, scale: 0.96 }}
//                   whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                   viewport={{ once: false, amount: 0.3 }}
//                   transition={{
//                     duration: 0.55,
//                     delay: index * 0.12,
//                     ease: "easeOut",
//                   }}
//                   whileHover={{
//                     y: -8,
//                     rotateX: 4,
//                     rotateY: -4,
//                     scale: 1.02,
//                     boxShadow: "0 26px 45px rgba(15, 23, 42, 0.25)",
//                   }}
//                 >
//                   <h3>{p.title}</h3>
//                   {p.desc && <p>{p.desc}</p>}
//                   {p.points.length > 0 && (
//                     <ul>
//                       {p.points.map((item) => (
//                         <li key={item}>{item}</li>
//                       ))}
//                     </ul>
//                   )}
//                   <p className="tech">Tech: {p.tech}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* Contact Section */}
//         <motion.section
//           id="contact"
//           className="contact section"
//           variants={sectionVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.2 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           <div className="container">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               Contact
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               Open to MERN stack roles, internships, and freelance opportunities.
//               Feel free to reach out.
//             </motion.p>

//             <div className="contact-grid">
//               <div>
//                 <p>
//                   <strong>Phone:</strong> +91‑9937178640
//                 </p>
//                 <p>
//                   <strong>Email:</strong> suhanafirdosh00@gmail.com
//                 </p>
//               </div>
//               <form
//                 className="contact-form"
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   alert("Thank you for reaching out!");
//                 }}
//               >
//                 <div className="form-group">
//                   <label>Name</label>
//                   <input type="text" required placeholder="Your name" />
//                 </div>
//                 <div className="form-group">
//                   <label>Email</label>
//                   <input type="email" required placeholder="Your email" />
//                 </div>
//                 <div className="form-group">
//                   <label>Message</label>
//                   <textarea rows="4" required placeholder="Write your message..." />
//                 </div>
//                 <button type="submit" className="btn primary">
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </motion.section>
//       </main>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <p>© {new Date().getFullYear()} Suhana Firdosh. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;

import React from "react";
import "./App.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="page-root">
      {/* Global Jugnu Layer */}
      <div className="jugnu-layer global">
        <span className="jugnu g1"></span>
        <span className="jugnu g2"></span>
        <span className="jugnu g3"></span>
        <span className="jugnu g4"></span>
        <span className="jugnu g5"></span>
        <span className="jugnu g6"></span>
        <span className="jugnu g7"></span>
      </div>

      {/* Sticky Navbar */}
      <header className="navbar-wrapper">
        <Navbar />
      </header>

      <main className="page-main">
        {/* Make sure ids match nav items */}
        <Hero /> {/* section id="home" inside */}
        <About /> {/* section id="about" */}
        <Projects /> {/* section id="projects" */}
        <Contact /> {/* section id="contact" */}
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Suhana Firdosh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
