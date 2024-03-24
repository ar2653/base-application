import React from 'react';
import { Card, Row, Col, Image } from 'antd';
import '../App.css'; // Import your CSS file for styling

const { Meta } = Card;

const projects = [
    {
        id: 1,
        appName: "Project 1",
        techStack: "React, Node.js, MongoDB",
        githubURL: "https://github.com/yourusername/project1",
        architectureDiagramURL: "https://images.edrawmax.com/examples/aws-architecture-diagram-examples/example-4.png",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sed libero maximus, id efficitur leo blandit."
    },
    {
        id: 2,
        appName: "Project 2",
        techStack: "Vue.js, Express, MySQL",
        githubURL: "https://github.com/yourusername/project2",
        architectureDiagramURL: "https://www.intellectsoft.net/blog/wp-content/uploads/web-application-architecture-diagram-2.png",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sed libero maximus, id efficitur leo blandit."
    },
    {
        id: 3,
        appName: "Project 3",
        techStack: "Angular, Express, MongoDB",
        githubURL: "https://github.com/yourusername/project3",
        architectureDiagramURL: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210128214233/Netflix-High-Level-System-Architecture.png",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sed libero maximus, id efficitur leo blandit."
    },
    {
        id: 4,
        appName: "Project 4",
        techStack: "Next.js, Node.js, PostgreSQL",
        githubURL: "https://github.com/yourusername/project4",
        architectureDiagramURL: "https://assets-global.website-files.com/63062129119620a44791a2eb/63770361b7a796b4383fe660_604f41a08050b970730d3efe_Thumbnail-AWSArchitectureDiagram.png",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sed libero maximus, id efficitur leo blandit."
    },
    {
        id: 5,
        appName: "Project 5",
        techStack: "Docker, Kubernetes, AWS",
        githubURL: "https://github.com/yourusername/project5",
        architectureDiagramURL: "https://docs.aws.amazon.com/images/solutions/latest/amazon-s3-glacier-refreezer/images/reference-architecture-diagram.png", // Use the same image as Project 1
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan nunc sed libero maximus, id efficitur leo blandit."
    },
];

const DIYPage = () => {
    return (
        <div className="diy-page">
            <h1>DIY Projects</h1>
            <Row gutter={[16, 16]}>
                {projects.map((project) => (
                    <Col key={project.id} xs={24} sm={12} md={8}>
                        <Card
                            hoverable
                            className="project-card"
                            cover={<Image src={project.architectureDiagramURL} alt="Architecture Diagram" style={{ height: '300px', objectFit: 'cover' }} />}
                        >
                            <Meta
                                title={project.appName}
                                description={project.techStack}
                            />
                            <div className="project-links">
                                <a href={project.githubURL} target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                            <div className="project-details">
                                <p>{project.details}</p>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default DIYPage;
