import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Login from '../login'
import Home from '../home'
import { app, help } from './app.scss'

const App = ({ login, loggedUser }) => {
    const helpMessage = <h3 className={help}>To signin in the test, please use: <br />
        email: 'test@test.com' <br />
        password: 'test', <br />
        Also you can create an account, Signup!</h3>
    return (
        <div className={app}>
            {!login ? helpMessage : null}
            <div>
                <Switch>
                    <Route path={process.env.PUBLIC_URL + '/'} exact component={Login} />
                    <Route path={process.env.PUBLIC_URL + '/home'} render={() => <Home user={loggedUser.hasOwnProperty('email') ? loggedUser.email : ''} />} />
                    <Route component={() => (<div> 404 Not found </div>)} />
                </Switch>
            </div>
        </div>
    );
};


App.propTypes = {
    login: PropTypes.bool.isRequired,
    loggedUser: PropTypes.object
}

const mapStateToProps = ({ login, loggedUser }) => ({ login, loggedUser })

export default connect(mapStateToProps)(App);