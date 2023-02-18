import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Footer = () => {
  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Assignment-2</Card.Title>
          <Card.Text>SpaceX</Card.Text>
          <Button variant="primary">Rupam Gupta</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Footer;
