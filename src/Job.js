import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function Job(params) {
  let location = useLocation();
  return (
    <Link
      key={params.id}
      to={{
        pathname: `/job/${params.id}`,
        state: { background: location },
      }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={params.logo} />
          <Card.Title>{params.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. {params.created}
          </Card.Text>
          <Button variant="info">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Link>
  );
}
