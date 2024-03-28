import React from "react";
import { Card, Divider, Row, Col } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import "../App.css";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <div>
        <h2>Projects</h2>
        <Divider />
        {/* Add your Hackathon projects here */}
      </div>
      <div className="projectsSection">
        <h2>Work related projects</h2>
        <Divider />
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a
              href="https://www.potterybarn.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className="techCard"
                title="Pottery Barn"
                extra={<LinkOutlined />}
                cover={
                    <img
                      src="https://ankush-demo-bucket.s3.us-east-2.amazonaws.com/website-assets/pb1.jpeg"
                      alt="Architecture Diagram"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  }
                hoverable
              >
                <p>
                  Dive into my research endeavors. Explore the topics I have
                  explored, methodologies employed, and key findings from my
                  research activities.
                </p>
              </Card>
            </a>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a
              href="https://www.westelm.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className="techCard"
                title="Westelm"
                extra={<LinkOutlined />}
                cover={
                    <img
                      src="https://ankush-demo-bucket.s3.us-east-2.amazonaws.com/website-assets/westelm.svg"
                      alt="Architecture Diagram"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  }
                hoverable
              >
                <p>
                  Dive into my research endeavors. Explore the topics I have
                  explored, methodologies employed, and key findings from my
                  research activities.
                </p>
              </Card>
            </a>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a
              href="https://schedule.cc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className="techCard"
                title="Schedule.cc"
                extra={<LinkOutlined />}
                cover={
                    <img
                      src="https://ankush-demo-bucket.s3.us-east-2.amazonaws.com/website-assets/schedule.png"
                      alt="Architecture Diagram"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  }
                hoverable
              >
                <p>
                  Dive into my research endeavors. Explore the topics I have
                  explored, methodologies employed, and key findings from my
                  research activities.
                </p>
              </Card>
            </a>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a
              href="https://projectsly.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className="techCard"
                title="Projects.ly"
                extra={<LinkOutlined />}
                cover={
                    <img
                      src="https://ankush-demo-bucket.s3.us-east-2.amazonaws.com/website-assets/projectsly.png"
                      alt="Architecture Diagram"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  }
                hoverable
              >
                <p>
                  Dive into my research endeavors. Explore the topics I have
                  explored, methodologies employed, and key findings from my
                  research activities.
                </p>
              </Card>
            </a>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a
              href="http://www.virtus-it.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className="techCard"
                title="Moya"
                extra={<LinkOutlined />}
                cover={
                    <img
                      src="https://ankush-demo-bucket.s3.us-east-2.amazonaws.com/website-assets/moya.jpg"
                      alt="Architecture Diagram"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  }
                hoverable
              >
                <p>
                  Dive into my research endeavors. Explore the topics I have
                  explored, methodologies employed, and key findings from my
                  research activities.
                </p>
              </Card>
            </a>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a
              href="https://www.williams-sonoma.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className="techCard"
                title="Williams Sonoma"
                extra={<LinkOutlined />}
                cover={
                    <img
                      src="https://ankush-demo-bucket.s3.us-east-2.amazonaws.com/website-assets/ws.webp"
                      alt="Architecture Diagram"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  }
                hoverable
              >
                <p>
                  Dive into my research endeavors. Explore the topics I have
                  explored, methodologies employed, and key findings from my
                  research activities.
                </p>
              </Card>
            </a>
          </Col>
        </Row>
      </div>
      <Divider />
      <div className="projectsSection">
        <h2>Hackathons</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a
              href="https://makemyspacetrip.ankushranapure.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className="techCard"
                title="Make My Space Trip"
                extra={<LinkOutlined />}
                cover={
                  <img
                    src="https://ankush-demo-bucket.s3.us-east-2.amazonaws.com/website-assets/mmst.gif"
                    alt="Architecture Diagram"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                }
                hoverable
              >
                <p>
                  Dive into my research endeavors. Explore the topics I have
                  explored, methodologies employed, and key findings from my
                  research activities.
                </p>
              </Card>
            </a>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <a
              href="https://wavedynamics.ankushranapure.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className="techCard"
                title="Make My Space Trip"
                extra={<LinkOutlined />}
                cover={
                  <img
                    src="https://ankush-demo-bucket.s3.us-east-2.amazonaws.com/website-assets/wavedynamics.gif"
                    alt="Architecture Diagram"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                }
                hoverable
              >
                <p>
                  Dive into my research endeavors. Explore the topics I have
                  explored, methodologies employed, and key findings from my
                  research activities.
                </p>
              </Card>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Projects;
