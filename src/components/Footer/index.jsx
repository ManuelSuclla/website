import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';


class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <header>
          {
            this.props ? (
              <Navbar bg="dark" variant="dark" fixed="bottom" className="justify-content-center">
                  <Nav>
                      <span className="footer legal" style= {{ color: 'rgba(255, 255, 255, 0.5)' }}> &copy; {new Date().getFullYear()} Manuel Suclla</span>
                  </Nav>
              </Navbar>
            ) : undefined
          }
        </header>
    )
  }
}
export default Footer;