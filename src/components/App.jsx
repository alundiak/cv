import React from 'react';
// import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import CurriculumVitaeVersion1 from './v1/v1';
import CurriculumVitaeVersion2 from './v2/v2';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.less';

/* eslint react/no-multi-comp: 0 */
const SimpleApp = () => (
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
    </div>
);

export { SimpleApp };

const tabsContent = [
    {
        index: 1,
        component: CurriculumVitaeVersion1
    },
    {
        index: 2,
        component: CurriculumVitaeVersion2
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
    TabsApp
};