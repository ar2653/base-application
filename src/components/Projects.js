import React from 'react';
import { Card, Divider, Row, Col } from 'antd';

const Projects = () => {
    return (
        <div style={{ background: '#fff', padding: '20px' }}>
            <div>
                <h2>Hackathon</h2>
                <Divider />
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Card size="small" title="Project 1">
                            <p>Details about Project 1</p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Card size="small" title="Project 2">
                            <p>Details about Project 2</p>
                        </Card>
                    </Col>
                    {/* Add more cards for Hackathon projects */}
                </Row>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h2>Work related projects</h2>
                <Divider />
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Card size="small" title="Project A">
                            <p>Details about Project A</p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}>
                        <Card size="small" title="Project B">
                            <p>Details about Project B</p>
                        </Card>
                    </Col>
                    {/* Add more cards for work-related projects */}
                </Row>
            </div>
            {/* Add more sections and cards as needed */}
        </div>
    );
}

export default Projects;
