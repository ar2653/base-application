import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "../App.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Hello, I'm Ankush Ranapure</h1>
        <h3 className="landing-subtitle">Welcome to My Portfolio</h3>

        <div className="landing-card-grid">
          <Link to="/about" className="card-link">
            <Card title="About" className="landing-card">
              <p className="card-text">
              Learn about my background, skills, and experiences. Gain insights into my journey and discover what drives my passion for technology and innovation in my professional life.
              </p>
            </Card>
          </Link>

          <Link to="/projects" className="card-link">
            <Card title="Projects" className="landing-card">
              <p className="card-text">
              Discover the projects I've worked on, including my contributions, technologies used, and outcomes. Dive into detailed insights about each project and my hands-on experience.
              </p>
            </Card>
          </Link>

          <Link to="/stats" className="card-link">
            <Card title="Stats" className="landing-card">
              <p className="card-text">
              Explore my LeetCode journey and see how I tackle coding challenges. Track my progress, understand my strategies, and view my achievements in coding and problem-solving.
              </p>
            </Card>
          </Link>

          <Link to="/contact" className="card-link">
            <Card title="Contact" className="landing-card">
              <p className="card-text">
              Get in touch for inquiries, collaboration opportunities, or just to connect. Find all the details you need to reach out and start a meaningful conversation with me.
              </p>
            </Card>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default Landing;
