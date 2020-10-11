import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Job from "./Job";

const BASE_URL =
  "https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json";

export default function Jobs() {
  useEffect(() => {
    axios
      .get(BASE_URL, {
        params: { markdown: true },
      })
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  });

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <Container>
      {error && <h1>Something Went Wrong! Error: {error}</h1>}
      {loading && <h1>Loading...</h1>}
      <Row className="d-flex justify-content-start">
        {jobs.map((job) => (
          <Col xs="12" sm="6" lg="4" className="d-flex justify-content-center">
            <Job
              key={job.id}
              id={job.id}
              title={job.title}
              created={job.created_at}
              logo={job.company_logo}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
