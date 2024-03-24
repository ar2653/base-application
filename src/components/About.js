import React from 'react';
import { Card, Row, Col } from 'antd';
import stack from '../constants/stack';
import description from '../constants/data';
import '../App.css';

const { Meta } = Card;

const About = () => {
  // Sort items by category
  const sortedStack = stack.reduce((acc, item) => {
    const existingCategory = acc.find((category) => category.name === item.category);
    if (existingCategory) {
      existingCategory.items.push(item);
    } else {
      acc.push({ name: item.category, items: [item] });
    }
    return acc;
  }, []);

  return (
    <div className="aboutContainer">
      <div className="centeredContent">
        <div className="aboutme">
          <h1>About me</h1>
          <Card hoverable className="techCard">
            <Meta
              description={description}
            />
          </Card>
        </div>
      </div>
      {sortedStack.map((categoryGroup) => (
        <div key={categoryGroup.name}>
          <h3 className="sectionTitle">{categoryGroup.name}</h3>
          <Row gutter={[16, 16]}>
            {categoryGroup.items.map((item) => (
              <Col key={item.id} xs={24} sm={12} md={8}>
                <Card hoverable className="techCard">
                  <div className="imageContainer">
                    <img src={item.image} alt={item.name} className="techImage" />
                  </div>
                  <Meta title={item.name} description={item.description} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default About;
