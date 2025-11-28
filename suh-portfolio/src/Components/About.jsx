// import React from "react";
// import "./About.css";
// import { ReactTyped } from "react-typed";

// const About = () => {
//   return (
//     <section className="about-section">

//       {/* Jugnu Floating Lights */}
//       <div className="about-jugnu">
//         {[...Array(35)].map((_, i) => (
//           <span
//             key={i}
//             className="about-firefly"
//             style={{
//               "--x": Math.random(),
//               "--y": Math.random(),
//             }}
//           ></span>
//         ))}
//       </div>

//       <div className="about-container">

//         <h2 className="about-title">
//           <ReactTyped
//             strings={["About Me", "Who Am I?", "Let’s Know Me"]}
//             typeSpeed={60}
//             backSpeed={40}
//             loop
//           />
//         </h2>

//         <p>
//           My name is <span className="highlight">Suhana</span> — A passionate
//           <span className="highlight"> MERN Stack Developer </span>
//           who loves building modern, animated and interactive web applications.
//         </p>

//         <p>
//           I create fast, responsive and user-focused UI using React, and
//           powerful backend services using Node, Express and MongoDB.
//         </p>

//         <p>
//           I enjoy solving real-world problems through logic, design and clean code.
//           I believe in consistency, growth and building something that people love to use.
//         </p>

//         {/* <button className="about-btn">Download Resume 📄</button> */}
//       </div>

//     </section>
//   );
// };

// export default About;

import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React.js", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express.js", category: "backend" },
    { name: "MongoDB", category: "database" },
    { name: "Git/GitHub", category: "tools" },
  ];

  return (
    <section id="about" className="about-section">
      {/* Animated Background */}
      <div className="about-bg-elements">
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
        <div className="floating-shape shape-6"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          {/* Left Column - Text Content */}
          <div className="about-text">
            <h3 className="about-subtitle">
              Crafting Digital Experiences with{" "}
              <span className="gradient-text">Modern Technology</span>
            </h3>

            <div className="about-description">
              <p>
                I'm a passionate <strong>MERN Stack Developer</strong> currently
                working at <strong>Visital Technology</strong>, where I build
                responsive and dynamic web applications using modern
                technologies.
              </p>

              <p>
                With expertise in{" "}
                <strong>React.js, Node.js, Express, and MongoDB</strong>, I
                specialize in creating full-stack solutions that are both
                scalable and user-friendly. My focus is on writing clean,
                efficient code and implementing best practices.
              </p>
            </div>

            {/* Education Section */}
            <div className="education-section">
              <div className="education-icon">🎓</div>
              <div className="education-content">
                <h4 className="education-title">Education</h4>
                <div className="education-item">
                  <div className="education-degree">
                    <strong>Bachelor of Computer Applications (BCA)</strong>
                  </div>
                  <div className="education-institute">
                    Trident Academy of Creative Technology (2021-2024)
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">💼</div>
                <div className="feature-content">
                  <h5>Professional Experience</h5>
                  <p>Currently working at Visital Technology</p>
                </div>
                <div className="feature-glow"></div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <div className="feature-content">
                  <h5>Modern Tech Stack</h5>
                  <p>MERN Stack Specialist</p>
                </div>
                <div className="feature-glow"></div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <div className="feature-content">
                  <h5>Problem Solver</h5>
                  <p>Creative solutions for complex challenges</p>
                </div>
                <div className="feature-glow"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="skills-section">
            <div className="skills-header">
              <h3 className="skills-title">Technical Skills</h3>
              <p className="skills-subtitle">My expertise across the stack</p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-card"
                  data-category={skill.category}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-icon">
                    {skill.category === "frontend" && "⚡"}
                    {skill.category === "backend" && "🔧"}
                    {skill.category === "database" && "🗄️"}
                    {skill.category === "tools" && "🛠️"}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-glow"></div>
                </div>
              ))}
            </div>

            {/* Skill Categories */}
            <div className="skill-categories">
              <div className="category">
                <div className="category-dot frontend"></div>
                <span>Frontend</span>
              </div>
              <div className="category">
                <div className="category-dot backend"></div>
                <span>Backend</span>
              </div>
              <div className="category">
                <div className="category-dot database"></div>
                <span>Database</span>
              </div>
              <div className="category">
                <div className="category-dot tools"></div>
                <span>Tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
