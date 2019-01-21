import * as types from './types';
import { updateObject } from '../utils'

const initialState = {
  login: false,
  loggedUser: {}
}

const logout = (state) =>
  updateObject(state, { login: false })

const login = (state, { email, password }) =>
  updateObject(state, { loggedUser: { email, password }, login: true })

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(types.LOGOUT): return logout(state, action);
    case(types.LOGIN): return login(state, action);

    default:
      return state;
  }
}

export default reducer;