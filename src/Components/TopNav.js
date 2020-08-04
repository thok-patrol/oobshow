import React from 'react'
import { Navbar, Button, Nav } from 'react-bootstrap'

export default class TopNav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Navbar
          variant="dark"
          sticky="top"
          className="special-nav my-2"
          expand="md"
        >
          <Navbar.Brand>
            <small className="font-weight-light text-danger">THE</small>
            <span className="font-weight-bold"> OUT OF BAND </span>
            <small className="font-weight-light text-danger">SHOW</small>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#about'>About Us</Nav.Link>
              <Nav.Link href='#episodes'>Episodes</Nav.Link>
            </Nav>
            <Button variant="danger" href='https://open.spotify.com/show/2UoczsS60XNqDjCfJqAoIo'>Listen Now</Button>
          </Navbar.Collapse>
        </Navbar>
        
    }
}