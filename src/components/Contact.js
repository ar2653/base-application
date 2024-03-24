import React from 'react';
import { Card, Form, Input, Button, Row, Col } from 'antd';
import '../App.css'; // Import your CSS file for styling

const Contact = () => {
    const onFinish = (values) => {
        console.log('Form values:', values);
        // You can handle form submission logic here, such as sending data to a server
    };

    return (
        <div className="contact-container">
            <Card title={<h1 className="contact-heading">Get in Touch</h1>} className="contact-card">
                <Form name="contact-form" onFinish={onFinish} layout="vertical">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: 'Please enter your name' }]}
                            >
                                <Input placeholder="Enter your name" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    { required: true, message: 'Please enter your email' },
                                    { type: 'email', message: 'Please enter a valid email' },
                                ]}
                            >
                                <Input placeholder="Enter your email" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        name="message"
                        label="Message"
                        rules={[{ required: true, message: 'Please enter your message' }]}
                    >
                        <Input.TextArea rows={4} placeholder="Enter your message" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default Contact;
