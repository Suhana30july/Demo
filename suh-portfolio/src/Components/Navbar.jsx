// import React, { useState, useEffect } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
//       <div className="nav-container">
//         {/* Logo */}
//         <div className="nav-logo">
//           <div className="logo-3d">
//             <span className="logo-text">SF</span>
//             <div className="logo-glow"></div>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="nav-menu">
//           {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
//             <li key={item} className="nav-item">
//               <button
//                 onClick={() => scrollToSection(item)}
//                 className="nav-link"
//               >
//                 <span className="link-text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
//                 <span className="link-underline"></span>
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <div
//           className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
//           {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollToSection(item)}
//               className="mobile-nav-link"
//             >
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     setIsScrolled(scrollY > 50);

  //     const sections = ["home", "about", "projects", "contact"];
  //     let current = "home"; // default when near top

  //     for (const section of sections) {
  //       const element = document.getElementById(section);
  //       if (element) {
  //         const rect = element.getBoundingClientRect();
  //         const offsetTop = rect.top;
  //         const offsetBottom = rect.bottom;

  //         if (offsetTop <= 100 && offsetBottom >= 100) {
  //           current = section;
  //           break;
  //         }
  //       }
  //     }

  //     setActiveSection(current);
  //   };

  //   handleScroll(); // run once on load so Home is active
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      setIsScrolled(scrollY > 50);

      const sections = ["home", "about", "projects", "contact"];
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        // section becomes active when top has passed 80px
        if (scrollY + 80 >= offsetTop && scrollY + 80 < offsetTop + height) {
          current = section;
        }
      });

      // if very close to bottom, force "contact"
      if (pageHeight - (scrollY + viewportHeight) < 10) {
        current = "contact";
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId); // also mark active on click
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo" onClick={() => scrollToSection("home")}>
          <div className="logo-3d">
            <span className="logo-text">SF</span>
            <div className="logo-glow"></div>
            <div className="logo-sparkle"></div>
          </div>
          <span className="logo-name">Suhana Firdosh</span>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                <span className="link-text">{item.label}</span>
                <span className="link-underline"></span>
                <span className="nav-glow"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`mobile-nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-bg-glow"></div>
      </div>
    </nav>
  );
};

export default Navbar;
