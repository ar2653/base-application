import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import '../App.css';

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
                                Learn more about my background, skills, and experiences.
                                Get insights into who I am and what drives my passion for technology.
                            </p>
                        </Card>
                    </Link>

                <Link to="/projects" className="card-link">
                    <Card title="Projects" className="landing-card">
                        <p className="card-text">
                            Explore the various projects I have worked on.
                            Discover my contributions, technologies used, and the outcomes of each project.
                        </p>
                    </Card>
                </Link>

                <Link to="/research" className="card-link">
                    <Card title="Research" className="landing-card">
                        <p className="card-text">
                            Dive into my research endeavors.
                            Explore the topics I have explored, methodologies employed,
                            and key findings from my research activities.
                        </p>
                    </Card>
                </Link>

                <Link to="/contact" className="card-link">
                    <Card title="Contact" className="landing-card">
                        <p className="card-text">
                            Reach out to me! Whether you have inquiries, collaboration opportunities,
                            or just want to say hello, find the details you need to get in touch.
                        </p>
                    </Card>
                </Link>
            </div>
        </div>
        </div>
    );
}

export default Landing;
