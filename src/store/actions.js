import { LOGOUT, LOGIN } from './types';

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const login = (email, password) => {
  return {
    type: LOGIN,
    email,
    password
  }
}