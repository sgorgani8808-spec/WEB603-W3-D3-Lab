import React from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <nav className="navbar">
          <div className="logo">SG</div>

          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="hero-content">
          <p className="intro">Hello, I’m</p>
          <h1>Saina Gorgani</h1>
          <h2>Designer • Web Developer • Creative Thinker</h2>
          <p className="hero-text">
            I’m building a portfolio to showcase my projects, skills, and creative work
            from this bootcamp and beyond.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">View Projects</a>
            <a href="#contact" className="btn secondary-btn">Contact Me</a>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I come from a design background and I am expanding my skills in web
            development. I enjoy creating thoughtful, visually engaging, and
            user-friendly digital experiences.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>

          <div className="project-grid">
            <div className="project-card">
              <div className="project-image placeholder">Project Screenshot</div>
              <h3>Shop 2 React</h3>
              <p>A React shopping cart app built with routing, modal, and checkout flow.</p>
              <div className="project-links">
                <a href="/">Live Demo</a>
                <a href="/">GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image placeholder">Project Screenshot</div>
              <h3>Portfolio Website</h3>
              <p>A personal portfolio shell to showcase projects, resume, and contact info.</p>
              <div className="project-links">
                <a href="/">Live Demo</a>
                <a href="/">GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image placeholder">Project Screenshot</div>
              <h3>Future Project</h3>
              <p>This is a placeholder for another class or personal project.</p>
              <div className="project-links">
                <a href="/">Live Demo</a>
                <a href="/">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="section">
          <h2>Resume</h2>
          <p>
            You can place your resume here as a downloadable PDF or add a link later.
          </p>
          <a href="/" className="btn primary-btn">Download Resume</a>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>

          <div className="contact-box">
            <div className="contact-info">
              <p><strong>Email:</strong> s.gorgani.8808@westcliff.edu</p>
              <p><strong>LinkedIn:</strong> {""} <a href="https://linkedin.com/in/sainagorgani" target="_blank" rel="noopener noreferrer">linkedin.com/in/sainagorgani</a></p>
              <p><strong>GitHub:</strong> {""} <a href="https://github.com/sgorgani8808-spec" target="_blank" rel="noopener noreferrer">github.com/sgorgani8808-spec</a></p>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows="5"></textarea>
              <button type="button" className="btn primary-btn">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Saina Gorgani. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;