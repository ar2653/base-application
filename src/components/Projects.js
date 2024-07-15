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
                      src="https://ankush-portfolio.s3.amazonaws.com/pb2.png"
                      alt="Architecture Diagram"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  }
                hoverable
              >
                <p>
                Pottery Barn is an e-commerce platform specializing in home decor and furniture, offering a dynamic product catalog, secure checkout, and personalized recommendations.
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
                      src="https://ankush-portfolio.s3.amazonaws.com/we3.webp"
                      alt="Architecture Diagram"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  }
                hoverable
              >
                <p>
                West Elm is an online retail platform focused on modern furniture and home accessories, featuring a curated product selection, secure payment options, and personalized shopping experiences.
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
                      src="https://ankush-portfolio.s3.amazonaws.com/schedule-vid.gif"
                      alt="Architecture Diagram"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  }
                hoverable
              >
                <p>
                Schedule.cc is a scheduling software designed to streamline appointment booking, calendar management, and event coordination with user-friendly interfaces and automated reminders.
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
                      src="https://ankush-portfolio.s3.amazonaws.com/projects-vid.gif"
                      alt="Architecture Diagram"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  }
                hoverable
              >
                <p>
                Projects.ly is a project management tool that facilitates task tracking, team collaboration, and progress monitoring, offering intuitive dashboards and real-time updates for efficient project execution.
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
                      src="https://ankush-portfolio.s3.amazonaws.com/moya.jpeg"
                      alt="Architecture Diagram"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  }
                hoverable
              >
                <p>
                Moya the Waterman is an order management application that streamlines the process of placing orders, tracking deliveries, and managing inventory with real-time updates and user-friendly interfaces.
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
                      src="https://ankush-portfolio.s3.amazonaws.com/ws4.png"
                      alt="Architecture Diagram"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  }
                hoverable
              >
                <p>
                Williams Sonoma is an online store specializing in high-quality kitchenware, home furnishings, and gourmet foods, providing a rich product catalog, secure transactions, and personalized culinary recommendations.
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
                    src="https://ankush-portfolio.s3.amazonaws.com/mmst.png"
                    alt="Make my space trip"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                }
                hoverable
              >
                <p>
                Make My Space Trip is a futuristic travel planning application that allows users to plan interplanetary journeys between different planets, offering detailed itineraries, celestial maps, and virtual tours of space destinations.
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
                title="Wave Dynamics"
                extra={<LinkOutlined />}
                cover={
                  <img
                    src="https://ankush-portfolio.s3.amazonaws.com/wd.png"
                    alt="Architecture Diagram"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                }
                hoverable
              >
                <p>
                Wave Dynamics is a cutting-edge web application designed to simulate and visualize realistic ocean wave behaviors. Utilizing authentic real-world data, it offers a comprehensive platform for understanding, predicting, and experiencing oceanic waves in an immersive digital environment.
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
