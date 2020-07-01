import React from "react";
import { render } from "react-dom";
import { Button, Navbar, Nav, Row, Col, Container } from "react-bootstrap";
import Person from "./Components/Person";

export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar
          variant="dark"
          sticky="top"
          className="special-nav m-2"
          expand="md"
        >
          <Navbar.Brand>
            <small class="font-weight-light text-danger">THE</small>
            <span className="font-weight-bold"> OUT OF BAND </span>
            <small class="font-weight-light text-danger">SHOW</small>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About Us</Nav.Link>
            </Nav>
            <Button variant="danger">Listen Now</Button>
          </Navbar.Collapse>
        </Navbar>
        <Container fluid className="uh-100">
          <Row>
            <Col xs={12} className="justify-content-center d-flex">
              <img
                width="100%"
                src="./img/OOBPNG.png"
                id="oobImage"
                className="m-auto"
              ></img>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="justify-content-center d-flex flex-column">
              <iframe
                src="https://open.spotify.com/embed-podcast/episode/1iOmbKV9p7RmD62wYvHpGZ"
                width="100%"
                height="232"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                className="spot  m-auto"
              ></iframe>
              <h2 className='mx-auto mb-5 text-light'>The Crew</h2>
            </Col>
          </Row>
          <Row className="bg-light">
              
            <Col md={3} className='p-0'>
              <Person src="./img/HS4-square.jpg" name='Ryan Werner'>
                  <p>Student Pharmacist, Web Developer, Friend. Ryan is looking to build the future of healthcare technology, and brings experience in web design, video production, and pharmaceuticals to the team.</p>
              </Person>
            </Col>
            <Col md={3} className='p-0'>
              <Person src="./img/HS4-square.jpg" name='Bailey Conradt'>
                  <p>Bailey, Bacon, or B-Swizzle, is a smart kid looking for trouble. Experience in programming and management allows him to wrangle his favorite corgi, Luna (Usually away from Ryan).</p>
              </Person>
            </Col>
            <Col md={3} className='p-0'><Person src='./img/HS4-square.jpg' name='Eric Maccoux'>
                    <p>When he's not announcing his 'Hot Takes', Eric is often working on algorithims or producing new music. His love of games (and distaste of consumerism) adds a spicy flare of passion in every episode.</p>
                </Person></Col>
            <Col md={3} className='p-0'><Person src='./img/HS4-square.jpg' name='Aaraf Khondaker'>
                <p>Gamer by day; gamer by night. Aaraf hides in the shadows with his computer, playing the latest indie titles and picking up the hottest new zoomer slang. He may not be wise, but he's certainly something.</p></Person></Col>
          </Row>
        </Container>
        <div className="flex-column uh-100"></div>
        <Button variant="primary">Button text here</Button>
      </div>
    );
  }
}
