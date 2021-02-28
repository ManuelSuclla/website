import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import TypingAnimation from '../TypingAnimation';
import ProfileImage from '../../extras/profile.jpg';
import github from '../../extras/github.png';
import linkedin from '../../extras/linkedin.png';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.imageClick = this.imageClick.bind(this);
    }

    imageClick(website) {
        switch(website) {
            case 'github':
                window.open("https://github.com/ManuelSuclla", "_blank")
                break;
            case 'linkedIn':
                window.open("https://www.linkedin.com/in/manuel-suclla-29023770/", "_blank")
                break;
            default:
                // code block
        }
    };  

    render() {
        return (
            <div>
                <Row className="text-center">
                    <Col className="align-self-center">
                        <div>
                            <img src={ProfileImage} alt="Logo" style={{ maxHeight: '250px', maxWidth: '250px', borderRadius: '120px'}} />
                        </div>
                    </Col>
                </Row>
                <br/>
                <Row className="text-center">
                    <Col >
                        <h1>Manuel Suclla</h1>
                        <TypingAnimation strings={['Software Engineer']}/>
                    </Col>
                </Row>
                <br/>
                <Row className="text-center">
                    <Col>
                        <img src={github} alt="github" onClick={() => this.imageClick('github')} style={{ height:'40px', margin: '5px', cursor: 'pointer' }}/>
                        <img src={linkedin} alt="linkedin" onClick={() => this.imageClick('linkedIn')} style={{ height:'40px', margin: '5px', cursor: 'pointer' }}/>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default HomePage;