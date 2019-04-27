import React from 'react';
// import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';
import CurriculumVitaeVersion1 from './v1/v1';
import CurriculumVitaeVersion2 from './v2/v2';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.less';

class App extends React.PureComponent {
    onButtonClick = () => {
        // TODO
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs="6">
                            <CurriculumVitaeVersion1 />
                        </Col>
                        <Col xs="6">
                            <CurriculumVitaeVersion2 />
                        </Col>
                    </Row>
                </Container>
                <Button
                    onClick={this.onButtonClick}
                    color="primary">Generate PDF file
                </Button>
            </div>
        );
    }
}

export default App;