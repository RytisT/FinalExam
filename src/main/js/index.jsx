import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import ClientTableComponent from './components/client_table_component.jsx';
import ClientCreationComponent from './components/client_creation_component.jsx';

export const App = React.createClass({
    render: function () {
        return (
            <div>
                <nav className="navbar navbar-inverse bg-inverse">
                    <a className="navbar-brand" href="#/">View Clients</a>
                    <a className="navbar-brand" href="#/createClient">Create Client</a>
                </nav>

                <Router history={hashHistory}>
                    <Route path="/" component={ClientTableComponent} />
                    <Route path="/createClient" component={ClientCreationComponent} />
                </Router>
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
