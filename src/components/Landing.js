import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import '../App.css'; // Import your CSS file for styling

const Landing = () => {
    return (
        <div className="landing-content">
            <h1>Hello 🙋🏻‍♂️ I am Ankush Ranapure</h1>
            <h3>Welcome to My Portfolio</h3>

            <div className="landing-card-grid">
                <Link to="/about" className="card">
                    <Card title="About">
                        <p>
                            Learn more about my background, skills, and experiences.
                            Get insights into who I am and what drives my passion for technology.
                        </p>
                    </Card>
                </Link>

                <Link to="/projects" className="card">
                    <Card title="Projects">
                        <p>
                            Explore the various projects I have worked on.
                            Discover my contributions, technologies used, and the outcomes of each project.
                        </p>
                    </Card>
                </Link>

                <Link to="/research" className="card">
                    <Card title="Research">
                        <p>
                            Dive into my research endeavors.
                            Explore the topics I have explored, methodologies employed,
                            and key findings from my research activities.
                        </p>
                    </Card>
                </Link>

                <Link to="/contact" className="card">
                    <Card title="Contact">
                        <p>
                            Reach out to me! Whether you have inquiries, collaboration opportunities,
                            or just want to say hello, find the details you need to get in touch.
                        </p>
                    </Card>
                </Link>
            </div>
        </div>
    );
}

export default Landing;
