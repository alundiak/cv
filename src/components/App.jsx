import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import CurriculumVitaeVersion1 from './v1/v1';
// import CurriculumVitaeVersion2 from './v2/v2';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.less';

const LazyCurriculumVitaeVersion2 = React.lazy(() => import('./v2/v2'));

/* eslint react/no-multi-comp: 0 */
const SimpleApp = () => (
    <Container>
        <Row>
            <Col xs="6">
                <CurriculumVitaeVersion1 />
            </Col>
            <Col xs="6">
                {/* <CurriculumVitaeVersion2 /> */}
            </Col>
        </Row>
    </Container>
);

export { SimpleApp };

class SuspendedApp extends React.Component {
    state = {
        showV1: false,
        showV2: false
    };

    showV1Click = () => this.setState({ showV1: true });

    showV2Click = () => this.setState({ showV2: true });

    render() {
        const { showV1, showV2 } = this.state;

        return (
            <Container>
                <Row>
                    <Col xs="6">
                        <Button color="primary" onClick={this.showV1Click}>Show V1</Button>
                        {
                            showV1 ? <CurriculumVitaeVersion1 /> : null
                        }
                    </Col>
                    <Col xs="6">
                        <Button color="primary" onClick={this.showV2Click}>Show V2</Button>
                        {
                            showV2 ? (
                                <React.Suspense fallback={<div>Simple Loading...</div>}>
                                    <LazyCurriculumVitaeVersion2 />
                                </React.Suspense>
                            ) : null
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}

export { SuspendedApp };

const tabsContent = [
    {
        index: 1,
        component: CurriculumVitaeVersion1
    },
    {
        index: 2,
        // component: CurriculumVitaeVersion2
        component: () => <div>aaa</div>
    }
];

class TabsApp extends React.Component {
    state = {
        activeTab: '1'
    };

    toggle = (tab) => {
        const { activeTab } = this.state;
        if (activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    render() {
        const { activeTab } = this.state;

        return (
            <Container>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}>react-pdf
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}>@react-pdf/renderer
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    {tabsContent.map((tabData) => {
                        const { component: TabComponent, index } = tabData;
                        return (
                            <TabPane key={index} tabId={`${index}`}>
                                <Row>
                                    <Col sm="12">
                                        <TabComponent />
                                    </Col>
                                </Row>
                            </TabPane>
                        );
                    })}
                </TabContent>
            </Container>
        );
    }
}

export { TabsApp };

export default {
    SimpleApp,
    SuspendedApp,
    TabsApp
};