import React from 'react';
import { Image } from 'antd';
import stack from '../constants/stack'
import '../App.css'; // Import your CSS module for styling

const About = ({ tech }) => {
    return (
        <div className="aboutContainer">
            <div className="description">
                <h1>About me</h1>
                <p className="aboutme">
                    I am a passionate graduate student with a strong background in
                    software development, specializing in the creation of dynamic web
                    applications and high-performance components. Leveraging my
                    expertise in technologies such as JavaScript, TypeScript, Vue.js,
                    Angular, React.js, Node.js, Express, and MySQL, I have a proven
                    track record of delivering innovative and impactful solutions to
                    meet the unique needs of clients. As a former Software Engineer at
                    Nisum, I honed my skills and developed a commitment to excellence in
                    software engineering. Now, I am eagerly seeking internship
                    opportunities to further expand my knowledge, contribute to exciting
                    projects, and make a meaningful impact in the software industry.
                    Let&apos;s connect and explore how I can bring my skills and
                    dedication to your team.
                </p>
            </div>
            {stack.map((item) => (
                <div key={item.id} className="techCard">
                    <h3>{item.category}</h3>
                    <div className="cardContent">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        {item.image && (
                            <Image
                                priority
                                src={item.image}
                                alt={item.name}
                                width={150}
                                height={150}
                                className="techImag"
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default About;
