import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateObject, checkValidity } from '../../utils'
import { login } from '../../store'
import { Input } from '../ui';
import { Button } from '../ui';
import { formContainer, buttonContainer } from './login.scss'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputs: {
                email: {
                    inputConfig: {
                        type: 'email',
                        placeholder: 'Your Email Address'
                    },
                    value: '',
                    validation: {
                        required: true,
                        email: true
                    },
                    valid: false,
                    touched: false
                },
                password: {
                    inputConfig: {
                        type: 'password',
                        placeholder: 'Your Password'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 4
                    },
                    valid: false,
                    touched: false
                }
            },
            users: [
                {
                  email: 'acid@acid.com',
                  password: 'acid123'
            
                },
                {
                  email: 'roberto@roberto.com',
                  password: 'roberto123'
            
                },
                {
                  email: 'test@test.com',
                  password: 'test'
            
                }
            ]
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this)
        this.loginHandler = this.loginHandler.bind(this)
        this.singUpHandler = this.singUpHandler.bind(this)
    }

    inputChangeHandler(e, name) {
        const { target: { value } } = e
        const { inputs } = this.state
        let updatedInputs = updateObject(inputs, { [name]:
            updateObject(inputs[name], {
            value,
            touched: true,
            valid: checkValidity(value, inputs[name].validation)
            })
        })
        this.setState({ inputs: updatedInputs })
    }

    loginHandler(e) {
        e.preventDefault();
        const { inputs: { email, password }, users } = this.state
        const { onLogin, history } = this.props
        const user = users.filter(user => user.email === email.value && user.password === password.value)
        debugger
        if(user.length > 0) {
            history.replace('/home')
            onLogin(email.value, password.value)
        }
    }

    singUpHandler(e) {
        e.preventDefault();
        debugger
        const { users, inputs: { email, password } } = this.state
        const newUser = { email: email.value, password: password.value }
        this.setState({ users: [...users, newUser] })
    }

    render() {
        const inputsFormArr = [];
        const { inputs } = this.state
        const isButtonEnabled = inputs.email.valid && inputs.password.valid

        for (let key in inputs) {
            inputsFormArr.push({
                name: key,
                config: inputs[key]
            })
        }

        let form = (
            inputsFormArr.map( input => <Input
                key={input.name}
                inputConfig={input.config.inputConfig}
                changed={e => this.inputChangeHandler(e, input.name)}
                value={input.config.value}
                shouldValidate={input.config.validation}
                touched={input.config.touched}
                invalid={!input.config.valid}
            />)
        );
                console.log(this.state)
        return (
          <div className={formContainer}>
                <form onSubmit={this.loginHandler}>
                    {form}
                    <div className={buttonContainer}>
                        <Button disabled={!isButtonEnabled} buttonType="signin">Login</Button>
                        <Button disabled={!isButtonEnabled} onClick={this.singUpHandler} buttonType="signup">Signup</Button>
                    </div>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({ onLogin: (email, password) => dispatch(login(email, password)) })

export default connect(null, mapDispatchToProps)(Login);