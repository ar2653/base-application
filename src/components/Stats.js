import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Statistic, Row, Col, Alert, Typography } from "antd";

const { Title } = Typography;

const defaultStats = {
  status: "success",
  message: "retrieved",
  totalSolved: 62,
  totalQuestions: 3252,
  easySolved: 46,
  totalEasy: 818,
  mediumSolved: 16,
  totalMedium: 1706,
  hardSolved: 0,
  totalHard: 728,
  acceptanceRate: 68.18,
  ranking: 1347398,
  contributionPoints: 189,
  reputation: 0,
  submissionCalendar: {
    1720915200: 8,
    1721001600: 5,
    1721088000: 5,
    1721174400: 5,
    1721260800: 1,
    1721347200: 19,
    1721433600: 16,
    1721520000: 15,
    1721606400: 10,
    1721692800: 11,
    1721779200: 5,
    1721865600: 8,
    1721952000: 11,
    1722038400: 2,
    1722211200: 8,
    1722297600: 10,
    1722470400: 2,
    1722556800: 4,
    1722729600: 13,
    1722816000: 3,
    1722902400: 7,
    1722988800: 4,
    1723075200: 26,
    1723161600: 9,
    1723248000: 9,
    1723334400: 4,
  },
};

const Stats = () => {
  const [stats, setStats] = useState(defaultStats);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          "https://leetcode-stats-api.herokuapp.com/poisonivy333"
        );
        setStats(response.data);
      } catch (err) {
        if (err.response && err.response.status === 500) {
          setError("Unable to fetch the latest data.");
        } else {
          setError(err.message);
        }
      }
    };

    fetchStats();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2} className="landing-title" style={{ textAlign: "center", color: "#666" }}>
        LeetCode Stats
      </Title>
      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          style={{ marginBottom: "20px" }}
        />
      )}
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)" }}>
            <Statistic
              title="Total Problems Solved"
              value={stats.totalSolved}
              suffix={`/ ${stats.totalQuestions}`}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)" }}>
            <Statistic
              title="Easy Problems Solved"
              value={stats.easySolved}
              suffix={`/ ${stats.totalEasy}`}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)" }}>
            <Statistic
              title="Medium Problems Solved"
              value={stats.mediumSolved}
              suffix={`/ ${stats.totalMedium}`}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)" }}>
            <Statistic
              title="Hard Problems Solved"
              value={stats.hardSolved}
              suffix={`/ ${stats.totalHard}`}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)" }}>
            <Statistic
              title="Acceptance Rate"
              value={stats.acceptanceRate}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)" }}>
            <Statistic title="Ranking" value={stats.ranking} />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)" }}>
            <Statistic
              title="Contribution Points"
              value={stats.contributionPoints}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)" }}>
            <Statistic title="Reputation" value={stats.reputation} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Stats;
