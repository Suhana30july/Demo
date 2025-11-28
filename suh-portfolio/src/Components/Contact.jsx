// import React from "react";
// import "./Contact.css";

// const Contact = () => {
//   return (
//     <section className="contact-section">
//       {/* Jugnu Background */}
//       <div className="contact-jugnu">
//         {[...Array(50)].map((_, i) => (
//           <span
//             key={i}
//             className="contact-firefly"
//             style={{ "--x": Math.random(), "--y": Math.random() }}
//           ></span>
//         ))}
//       </div>

//       <div className="contact-wrapper">
//         {/* LEFT SIDE TEXT */}
//         <div className="contact-info">
//           <h3 className="info-title">Get in touch easily!</h3>

//           <p>📍 Bhubaneswar, Odisha, India</p>
//           <p>📞 +91 9937178640</p>
//           <p>✉ suhanafirdosh00@gmail.com</p>

//           <div className="social-links">
//             <a href="#">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="#">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//             <a href="#">
//               <i className="fab fa-github"></i>
//             </a>
//             <a href="#">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
//         </div>

//         {/* RIGHT SIDE FORM */}
//         <form className="contact-form">
//           <div className="input-box">
//             <input type="text" required />
//             <label>Your Name</label>
//           </div>

//           <div className="input-box">
//             <input type="email" required />
//             <label>Your Email</label>
//           </div>

//           <div className="input-box textarea">
//             <textarea required></textarea>
//             <label>Write your message...</label>
//           </div>

//           <button className="send-btn">Send Message ✦</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Any questions or remarks? Just write us a message!
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Left Side - Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter a valid email address"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="divider"></div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="btn-spinner"></div>
                    SUBMIT...
                  </>
                ) : (
                  "SUBMIT"
                )}
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="contact-info">
            <div className="info-content">
              <div className="info-section">
                <h3 className="info-title">ABOUT CLUB</h3>
                <div className="info-links">
                  <a href="#" className="info-link">Running Guide</a>
                  <a href="#" className="info-link">Workouts</a>
                </div>
              </div>

              <div className="info-section">
                <h3 className="info-title">PHONE (LANDLINE)</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-text">
                      <p>+ 912 3 567 8987</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-text">
                      <p>+ 912 5 252 3336</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h3 className="info-title">OUR OFFICE LOCATION</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-text">
                      <p>The Interior Design Studio Company</p>
                      <p>The Courtyard, Al Quoz 1, Colorado, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;