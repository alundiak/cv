/* eslint no-unused-vars: 0 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const WithHelmet = ({ callback }) => (
    <React.Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>My CV</title>
            <link rel="canonical" href="https://github.com/alundiak/cv" />
        </Helmet>
        <div ref={callback}>
            <App.RoutingApp />
        </div>
    </React.Fragment>
);

// <meta charset="utf-8">
// not replaced, but appended by one more:
// <meta charset="utf-8" data-react-helmet="true">

// ReactDOM.render(<App.SimpleApp />, document.getElementById('app'));
// ReactDOM.render(<App.TabsApp />, document.getElementById('app'));
// ReactDOM.render(<App.SuspendedApp />, document.getElementById('app'));
// ReactDOM.render(<App.RoutingApp />, document.getElementById('app'));
// ReactDOM.render(<WithHelmet />, document.getElementById('app'));
// Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    //     <WithHelmet callback={() => console.log("render-ed")} />
    // </React.StrictMode>
    <App.RoutingApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
