import React from 'react';
import '../App.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="social-buttons">
                <div className="icons-card">
                    <h1 className="connect-heading">Connect</h1>
                    <div className="icons-container">
                        <a href="https://www.linkedin.com/in/ankushranapure/" target="_blank" rel="noopener noreferrer" className='icon-link'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" height="60px" width="60px" className='icon-image' alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/ar2653" target="_blank" rel="noopener noreferrer" className='icon-link'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" height="60px" width="60px" className='icon-image' alt="GitHub" />
                        </a>
                        <a href="mailto:ar2653@njit.edu" target="_blank" rel="noopener noreferrer" className='icon-link'>
                            <img src="https://ankush-portfolio.s3.amazonaws.com/gmail.png" height="60px" width="60px" className='icon-image' alt="Email" />
                        </a>
                        <a href="https://ankush-portfolio.s3.amazonaws.com/Ankush+Ranapure.pdf" target="_blank" rel="noopener noreferrer" className='icon-link'>
                            <img src="https://ankush-portfolio.s3.amazonaws.com/download.jpg" height="60px" width="60px" className='icon-image' alt="Resume" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
