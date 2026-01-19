// import React from "react";
// import "./About.css";

// const About = () => {
//   const skills = [
//     { name: "HTML5", category: "frontend" },
//     { name: "CSS3", category: "frontend" },
//     { name: "JavaScript", category: "frontend" },
//     { name: "React.js", category: "frontend" },
//     { name: "Node.js", category: "backend" },
//     { name: "Express.js", category: "backend" },
//     { name: "MongoDB", category: "database" },
//     { name: "Git/GitHub", category: "tools" },
//   ];

//   return (
//     <section id="about" className="about-section">
//       {/* Animated Background */}
//       <div className="about-bg-elements">
//         <div className="floating-shape shape-4"></div>
//         <div className="floating-shape shape-5"></div>
//         <div className="floating-shape shape-6"></div>
//       </div>

//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">About Me</h2>
//           <div className="section-line"></div>
//         </div>

//         <div className="about-content">
//           {/* Left Column - Text Content */}
//           <div className="about-text">
//             <h3 className="about-subtitle">
//               Crafting Digital Experiences with{" "}
//               <span className="gradient-text">Modern Technology</span>
//             </h3>

//             <div className="about-description">
//               <p>
//                 I'm a passionate <strong>MERN Stack Developer</strong> currently
//                 working at <strong>Visital Technology</strong>, where I build
//                 responsive and dynamic web applications using modern
//                 technologies.
//               </p>

//               <p>
//                 With expertise in{" "}
//                 <strong>React.js, Node.js, Express, and MongoDB</strong>, I
//                 specialize in creating full-stack solutions that are both
//                 scalable and user-friendly. My focus is on writing clean,
//                 efficient code and implementing best practices.
//               </p>
//             </div>

//             {/* Education Section */}
//             <div className="education-section">
//               <div className="education-icon">🎓</div>
//               <div className="education-content">
//                 <h4 className="education-title">Education</h4>
//                 <div className="education-item">
//                   <div className="education-degree">
//                     <strong>Bachelor of Computer Applications (BCA)</strong>
//                   </div>
//                   <div className="education-institute">
//                     Trident Academy of Creative Technology (2021-2024)
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Features Grid */}
//             <div className="features-grid">
//               <div className="feature-card">
//                 <div className="feature-icon">💼</div>
//                 <div className="feature-content">
//                   <h5>Professional Experience</h5>
//                   <p>Currently working at Visital Technology</p>
//                 </div>
//                 <div className="feature-glow"></div>
//               </div>
//               <div className="feature-card">
//                 <div className="feature-icon">🚀</div>
//                 <div className="feature-content">
//                   <h5>Modern Tech Stack</h5>
//                   <p>MERN Stack Specialist</p>
//                 </div>
//                 <div className="feature-glow"></div>
//               </div>
//               <div className="feature-card">
//                 <div className="feature-icon">🎯</div>
//                 <div className="feature-content">
//                   <h5>Problem Solver</h5>
//                   <p>Creative solutions for complex challenges</p>
//                 </div>
//                 <div className="feature-glow"></div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Skills */}
//           <div className="skills-section">
//             <div className="skills-header">
//               <h3 className="skills-title">Technical Skills</h3>
//               <p className="skills-subtitle">My expertise across the stack</p>
//             </div>

//             <div className="skills-grid">
//               {skills.map((skill, index) => (
//                 <div
//                   key={skill.name}
//                   className="skill-card"
//                   data-category={skill.category}
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="skill-icon">
//                     {skill.category === "frontend" && "⚡"}
//                     {skill.category === "backend" && "🔧"}
//                     {skill.category === "database" && "🗄️"}
//                     {skill.category === "tools" && "🛠️"}
//                   </div>
//                   <span className="skill-name">{skill.name}</span>
//                   <div className="skill-glow"></div>
//                 </div>
//               ))}
//             </div>

//             {/* Skill Categories */}
//             <div className="skill-categories">
//               <div className="category">
//                 <div className="category-dot frontend"></div>
//                 <span>Frontend</span>
//               </div>
//               <div className="category">
//                 <div className="category-dot backend"></div>
//                 <span>Backend</span>
//               </div>
//               <div className="category">
//                 <div className="category-dot database"></div>
//                 <span>Database</span>
//               </div>
//               <div className="category">
//                 <div className="category-dot tools"></div>
//                 <span>Tools</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import React from "react";
// import "./About.css";

// const About = () => {
//   return (
//     <section id="about" className="about-section">
//       <div className="container">
//         <h2 className="section-title">About Me</h2>
//         <div className="about-content">
//           <div className="about-text">
//             <p>
//               Enthusiastic MERN Stack Developer with hands-on experience in
//               building
//               <span className="highlight">
//                 {" "}
//                 scalable, responsive, and user-focused
//               </span>{" "}
//               web applications. Skilled in React.js, Node.js, Express, and
//               MongoDB with real-world project experience in ERP systems and
//               fitness platforms.
//             </p>
//             <div className="skills-highlights">
//               <div className="skill-item">
//                 <span className="skill-dot"></span>
//                 <span>Frontend Development with React.js</span>
//               </div>
//               <div className="skill-item">
//                 <span className="skill-dot"></span>
//                 <span>Backend Development with Node.js & Express</span>
//               </div>
//               <div className="skill-item">
//                 <span className="skill-dot"></span>
//                 <span>Database Management with MongoDB</span>
//               </div>
//               <div className="skill-item">
//                 <span className="skill-dot"></span>
//                 <span>RESTful API Integration</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;











import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="about section about-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="about-grid">
          <div>
            <p>
              MERN Stack Developer with hands‑on experience in building
              responsive, scalable web applications using React.js, Node.js,
              Express, and MongoDB.
            </p>
            <p>
              Currently working as a MERN Developer Trainee at Visital
              Technology, focusing on dynamic UIs, REST API integration, and
              secure backend modules.
            </p>

            <h3>Technical Skills</h3>
            <ul>
              <li>
                <strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5,
                CSS3, Bootstrap
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express.js
              </li>
              <li>
                <strong>Database:</strong> MongoDB
              </li>
              <li>
                <strong>Tools:</strong> Git, GitHub, VS Code, Postman
              </li>
            </ul>
          </div>
          <div>
            <h3>Education</h3>
            <p>
              <strong>BCA</strong> — Trident Academy of Creative Technology
              (2021–2024)
            </p>
            <h3>Experience</h3>
            <p>
              <strong>MERN Developer Trainee</strong> — Visital Technology (Feb
              2025 – Present)
            </p>
            <ul>
              <li>
                Built reusable React components and dynamic admin dashboards.
              </li>
              <li>
                Integrated APIs with authentication and CRUD operations.
              </li>
              <li>Designed MongoDB schemas and optimized queries.</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
