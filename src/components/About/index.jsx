import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Row className="text-center">
                    <Col>
                        <hr/>
                            <h1>About Me</h1>
                        <hr/>
                    </Col>
                </Row>
                <br/>
                <Row className="text-center">
                    <Col>
                        <p>
                            My first experience coding was when I was a kid. I was so overwhelmed with the amount of buttons I had to press when playing World of Warcraft, I ended up learning about macros to make my life easier. Basically, one button click was programmed to be multiple actions.
                        </p>                        
                        <p>
                            Now as a Software Engineer, I can make everyone's life easier. I work to optimize user efficiency through web applications and help meet reporting requirements through back-end manipulation.
                        </p>
                        <p>
                            Who would've thought my love for video games would open the path to my future hobby and career.
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default About;