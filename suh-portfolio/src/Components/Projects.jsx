// import React from "react";
// import "./Projects.css";

// const projects = [
//   {
//     title: "Briidgit Fitness Platform",
//     role: "MERN Developer",
//     tech: "React, Redux, Node.js, Express, MongoDB",
//     desc: "A fitness booking platform allowing trainer & client session booking, slots & payment system.",
//   },
//   {
//     title: "ERP Management System",
//     role: "Frontend Developer",
//     tech: "React",
//     desc: "Developed modules for HRM, accounts, manpower allocation with role based access system.",
//   },
//   {
//     title: "Admin Dashboard",
//     role: "Full Stack Build",
//     tech: "React, REST API",
//     desc: "Sidebar, navigation, reusable components, API integration & dashboard UI.",
//   },
//   {
//     title: "To-Do List App",
//     role: "React Mini Project",
//     tech: "React",
//     desc: "Add delete tasks with localStorage persistence & smooth UI handling.",
//   },
//   {
//     title: "Login / Signup Validation",
//     role: "Auth UI System",
//     tech: "React, Formik, Bootstrap",
//     desc: "Field validation + show/hide password + clean UI + social login UI.",
//   },
//   {
//     title: "Tic Tac Toe",
//     role: "JavaScript Logic Game",
//     tech: "JavaScript",
//     desc: "Win logic + player turn detection + restart system.",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="project-section">
//       {/* Floating Jugnu Lights */}
//       <div className="project-jugnu">
//         {[...Array(40)].map((_, i) => (
//           <span
//             key={i}
//             className="firefly-p"
//             style={{ "--px": Math.random(), "--py": Math.random() }}
//           ></span>
//         ))}
//       </div>

//       <h2 className="project-title">My Projects </h2>

//       <div className="project-container">
//         {projects.map((p, i) => (
//           <div className="project-card" key={i}>
//             <h3>{p.title}</h3>
//             <p className="role">{p.role}</p>
//             <p className="tech">{p.tech}</p>
//             <p className="desc">{p.desc}</p>

//             {/* <button className="project-btn">View More →</button> */}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Briidgit Fitness Platform",
      desc: "Trainer–client booking, gym slot scheduling, and session management using the MERN stack.",
      points: [
        "Designed responsive dashboards for trainers and clients.",
        "Improved usability with clear flows and reusable UI components.",
      ],
      tech: "React, Node, Express, MongoDB",
    },
    // {
    //   title: "ERP System (HRMS + Attendance)",
    //   desc: "Role‑based ERP front‑end modules for HR and attendance workflows.",
    //   points: [
    //     "Implemented dynamic role‑based access control.",
    //     "Redesigned dashboards to improve internal workflow efficiency.",
    //   ],
    //   tech: "React, REST APIs",
    // },
    {
      title: "ERP System (HRMS + Attendance)",
      desc: "Role-based ERP front-end modules for HR and attendance workflows.",
      points: [
        "Implemented dynamic role-based access control.",
        "Redesigned dashboards to improve internal workflow efficiency.",
      ],
      tech: "React, REST APIs",
      liveUrl: "https://erpwebsite.vnvision.in/",
    },

    {
      title: "Admin Dashboard",
      desc: "Responsive admin panel with routing, sidebar navigation and API integration.",
      points: [],
      tech: "React, React Router, REST APIs",
    },
    {
      title: "Additional Projects",
      desc: "",
      points: [
        "To‑Do List App with CRUD and local storage.",
        "Authentication module with validation and password toggle.",
        "Multilingual React Slider (EN/AR) with image upload.",
        "Tic‑Tac‑Toe game in JavaScript.",
        "Diabetes Prediction dashboard in Excel.",
      ],
      tech: "React, JavaScript, Excel",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="projects section"
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
          Projects
        </motion.h2>

        <div className="project-grid">
          {projects.map((p, index) => (
            <motion.div
              key={p.title}
              className="project-card"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                rotateX: 4,
                rotateY: -4,
                scale: 1.02,
                boxShadow: "0 26px 45px rgba(15, 23, 42, 0.25)",
              }}
            >
              <h3>{p.title}</h3>
              {p.desc && <p>{p.desc}</p>}
              {p.points.length > 0 && (
                <ul>
                  {p.points.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <p className="tech">Tech: {p.tech}</p>

              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Live Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
