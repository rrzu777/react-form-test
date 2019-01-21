import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from '../ui/button'
import { logout } from '../../store'
import { home } from './home.scss'

const logoutHandler = (history, onLogout) => {
    onLogout()
    history.push('/')
}

const Home = ({ user, history, onLogout }) => 
    <div className={home}>Welcome dear user, you're logged as: {user}, <br /> Thanks for visit my test, you can go back here:
        <Button onClick={() => logoutHandler(history, onLogout)} buttonType="logout">Logout</Button>
    </div>

const mapDispatchToProps = dispatch => ({ onLogout: () => dispatch(logout()) })
export default withRouter(connect(null, mapDispatchToProps)(Home))