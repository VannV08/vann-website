// Home.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/HomePage.css';
import Footer from './Footer';
import Header from './Header'; 
const Home = () => {
  return (
    <div>
      <Header /> 
      <div className="container-fluid bg-image text-white text-center d-flex align-items-center">
        <div className="content">
          <h1 id="h1_welcome" className="font-weight-bold text-uppercase">Welcome to Cambodia</h1>
          <p>
            This Website focuses on planning your travel depending on your
            available date. It is straightforward for you to choose the date to
            see your travel schedule and destinations on your own and enjoy your
            trip without worrying about planning all of your trips. We are here to
            help you.
          </p>
        </div>
      </div>

      <Container className="mt-5">
        <h2 className="text-center mb-4 text-dark svg-shadow shadow-success shadow-intensity-lg custom-shadow font-weight-bold text-uppercase">Attraction Places</h2>
        <Row>
          <Col md={4} className="mb-4 mt-4">
            <Card>
              <Card.Img variant="top" src="/AngkorWat.jpg" />
              <Card.Body>
                <Card.Title className="text-center">Angkor Wat</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
