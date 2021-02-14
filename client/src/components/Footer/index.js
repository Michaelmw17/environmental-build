import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

const stickyFooterStyle = {
backgroundColor: "#D3D3D3",
fontSize: "13px",
color: "black",
borderTop: "transparent",
textAlign: "center",
padding: "40px",
paddingRight: "40px",
height: "30px",
wordWrap: "wrap",
position: "fixed",
left: "0",
bottom: "0",
width: "100%",
opacity: "0.5"
};

export default class Footer extends Component {
  render() {
    return (
        <Container className="container-fluid">
        <Row>
          <Col style={stickyFooterStyle} sm={12}>
            &copy; Copyright  2022 | "Eco Getaway" |
            Michaelmw17@outlook.com | (+614) 449-620-082 |
          </Col>
        </Row>
      </Container>
    );
  }
}