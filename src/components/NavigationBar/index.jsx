import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Resume from '../../extras/Resume.pdf';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <header>
          {
            this.props ? (
              <Navbar bg="dark" variant="dark" fixed="top" className="justify-content-center">
                  <Nav>
                      <Nav.Link as={Link} to="/website">Home</Nav.Link>
                      <Nav.Link as={Link} to="/about">About</Nav.Link>
                      <Nav.Link onClick={() => window.open(Resume, "_blank")}>Resume</Nav.Link>
                  </Nav>
              </Navbar>
            ) : undefined
          }
        </header>
    )
  }
}
export default NavigationBar;