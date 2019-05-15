/* eslint no-unused-vars: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// ReactDOM.render(<App.SimpleApp />, document.getElementById('app'));
ReactDOM.render(<App.SuspendedApp />, document.getElementById('app'));
// ReactDOM.render(<App.TabsApp />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept();
}
