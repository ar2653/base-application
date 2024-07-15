import React from 'react';
import { Form, Input, Button, Row, Col, Divider } from 'antd';
import '../App.css';
import axios from 'axios';

const Contact = () => {
    const [form] = Form.useForm();
    // const [submitting, setSubmitting] = useState(false);

    const onFinish = (values) => {
        // setSubmitting(true);
        console.log('Form values:', values);
        const data = {
            name: values.name,
            emailAddress: values.emailAddress,
            message: values.message,
          };

          axios.post('https://8kvgkqbyhc.execute-api.us-east-1.amazonaws.com/default/send-email-nodemailer', data)
          .then(response => {
            console.log('Email sent successfully:', response.data);
            form.resetFields();
          })
          .catch(error => {
            form.resetFields();
            console.error('Error sending email:', error);
          });
    };

    return (
        <div className="contact-container">
            <Row gutter={[24, 24]}>
                {/* Left Partition: Social Buttons */}
                <Col xs={24} sm={6}>
                    <div className="social-buttons">
                        <h1 className="connect-heading">Connect</h1>
                        <a href="https://www.linkedin.com/in/ankushranapure/" target="_blank" rel="noopener noreferrer" className='icon-spacing'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" height="60px" width="60px" className='icon-image-spacing' alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/ar2653" target="_blank" rel="noopener noreferrer" className='icon-spacing'>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" height="60px" width="60px" className='icon-image-spacing' alt="GitHub" />
                        </a>
                        <a href="mailto:ar2653@njit.edu" target="_blank" rel="noopener noreferrer" className='icon-spacing'>
                            <img src="https://ankush-portfolio.s3.amazonaws.com/gmail.png" height="60px" width="60px" className='icon-image-spacing' alt="GitHub" />
                        </a>
                        <a href="https://ankush-portfolio.s3.amazonaws.com/Ankush+Ranapure.pdf" target="_blank" rel="noopener noreferrer" className='icon-spacing'>
                            <img src="https://ankush-portfolio.s3.amazonaws.com/download.jpg" height="60px" width="60px" className='icon-image-spacing' alt="GitHub" />
                        </a>
                    </div>
                </Col>

                {/* Vertical Divider */}
                <Col xs={0} sm={1}>
                    <Divider type="vertical" style={{ height: '100%', margin: '0 auto' }} />
                </Col>

                {/* Right Partition: Contact Form */}
                <Col xs={24} sm={17}>
                    <div className="contact-form">
                        <h1 className="contact-heading">Get in Touch</h1>
                        <Form name="contact-form" onFinish={onFinish} layout="vertical" form={form}>
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: 'Please enter your name' }]}
                            >
                                <Input placeholder="Enter your name" />
                            </Form.Item>
                            <Form.Item
                                name="emailAddress"
                                label="Email"
                                rules={[
                                    { required: true, message: 'Please enter your email' },
                                    { type: 'email', message: 'Please enter a valid email' },
                                ]}
                            >
                                <Input placeholder="Enter your email" />
                            </Form.Item>
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
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;
