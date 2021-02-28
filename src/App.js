import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import NavBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './components/Homepage';
import About from './components/About';
import {Container} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        homePage: true
    };
    this.setState = this.setState.bind(this);
    this.isHomepage = this.isHomepage.bind(this);
  }

  isHomepage() {
    console.log('test');
  };

  render() {
    return (
      <Router>    
        <div className="App">
          <NavBar 
            homePage={this.state.homePage}/>
          <Container style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
            <AnimatedSwitch
              atEnter={{ opacity: 0, scale: 10.0 }}
              atLeave={{ opacity: 1 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper">
              <Route exact path="/website" component={HomePage}/>
              <Route exact path="/about" component={About}/>
            </AnimatedSwitch>
          </Container>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
