import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Briidgit Fitness Platform",
    role: "MERN Developer",
    tech: "React, Redux, Node.js, Express, MongoDB",
    desc: "A fitness booking platform allowing trainer & client session booking, slots & payment system.",
  },
  {
    title: "ERP Management System",
    role: "Frontend Developer",
    tech: "React",
    desc: "Developed modules for HRM, accounts, manpower allocation with role based access system.",
  },
  {
    title: "Admin Dashboard",
    role: "Full Stack Build",
    tech: "React, REST API",
    desc: "Sidebar, navigation, reusable components, API integration & dashboard UI.",
  },
  {
    title: "To-Do List App",
    role: "React Mini Project",
    tech: "React",
    desc: "Add delete tasks with localStorage persistence & smooth UI handling.",
  },
  {
    title: "Login / Signup Validation",
    role: "Auth UI System",
    tech: "React, Formik, Bootstrap",
    desc: "Field validation + show/hide password + clean UI + social login UI.",
  },
  {
    title: "Tic Tac Toe",
    role: "JavaScript Logic Game",
    tech: "JavaScript",
    desc: "Win logic + player turn detection + restart system.",
  },
];

const Projects = () => {
  return (
    <section className="project-section">
      {/* Floating Jugnu Lights */}
      <div className="project-jugnu">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="firefly-p"
            style={{ "--px": Math.random(), "--py": Math.random() }}
          ></span>
        ))}
      </div>

      <h2 className="project-title">My Projects </h2>

      <div className="project-container">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p className="role">{p.role}</p>
            <p className="tech">{p.tech}</p>
            <p className="desc">{p.desc}</p>

            {/* <button className="project-btn">View More →</button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
