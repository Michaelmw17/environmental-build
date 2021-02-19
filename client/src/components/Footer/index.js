import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Href from "../LocationInfo/Href";
import './stlyes.css'

const stickyFooterStyle = {
backgroundColor: "#D3D3D3",
fontSize: "13px",
color: "black",
borderTop: "transparent",
textAlign: "center",
padding: "10px",
paddingTop: "40px",
paddingRight: "40px",
paddingBottom: "70px",
height: "30px",
wordWrap: "word-break",
position: "fixed",
left: "0",
bottom: "0",
width: "100%",
opacity: "0.5",

};

const testData = {
  text: " Nature Vectors by Vecteezy",
  link: "https://www.vecteezy.com/free-vector/nature"
};

export default class Footer extends Component {
  render() {
    return (
        <Container className="container-fluid">
        <Row>
          <Col style={stickyFooterStyle} sm={12}>
            &copy; Copyright  2021 | "Eco Getaway" |
            Michaelmw17@outlook.com | (+614) 449-620-082 |
             <Href
                                    text={testData.text}
                                    url={testData.link}
                                    />
          </Col>
        </Row>
      </Container>
    );
  }
}