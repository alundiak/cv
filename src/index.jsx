/* eslint no-unused-vars: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import App from './components/App';

const WithHelmet = () => (
    <React.Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>My CV</title>
            <link rel="canonical" href="https://github.com/alundiak/cv" />
        </Helmet>
        <App.RoutingApp />
    </React.Fragment>
);
// <meta charset="utf-8">
// not replaced, but appended by one more:
// <meta charset="utf-8" data-react-helmet="true">

// ReactDOM.render(<App.SimpleApp />, document.getElementById('app'));
// ReactDOM.render(<App.TabsApp />, document.getElementById('app'));
// ReactDOM.render(<App.SuspendedApp />, document.getElementById('app'));
// ReactDOM.render(<App.RoutingApp />, document.getElementById('app'));
ReactDOM.render(<WithHelmet />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept();
}
