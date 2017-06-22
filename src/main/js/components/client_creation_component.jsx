import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const ClientCreationComponent = React.createClass({

    getInitialState: function() {
        return {firstName: '', lastName: ''};
    },

    handleFirstNameChange: function(event) {
        this.setState({firstName: event.target.value})
    },

    handleLastNameChange: function(event) {
        this.setState({lastName: event.target.value})
    },

    registerClient: function() {
        axios.post('http://localhost:8080/api/clients', {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }).then(result => window.location = "#/");
    },

    render() {
        return (
            <div>
                <form>
                    <fieldset>
                        <legend>Register a client</legend>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input className="form-control" id="firstName" name="firstName" value={this.props.firstName} onChange={this.handleFirstNameChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input className="form-control" id="lastName" name="lastName" value={this.props.lastName} onChange={this.handleLastNameChange}/>
                        </div>
                        <div className="form-group">
                            <input className="btn btn-primary" id="registerBtn" type="button" value="Register" onClick={this.registerClient}/>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }

});

export default ClientCreationComponent;