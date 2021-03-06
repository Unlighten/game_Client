import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from './types';
import authReducer from '../reducers/auth_reducer';

const ROOT_URL = "https://cmdr-server.herokuapp.com/api"
// const ROOT_URL = "https://localhost:8080/"
const config = {
  headers: {authorization: localStorage.getItem('token') }
  // headers: {authorization: null }
}

export function signinUser({username, password}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signin`, {username, password})
    .then(response => {
      dispatch({type: AUTH_USER});
      console.log(response.data);
      config.headers.authorization = response.data.token;
      localStorage.setItem('token', config.headers.authorization);
      browserHistory.push('/homepage');
    })
    .catch(response => dispatch(authError("Poor login information.")));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signupUser({username, password}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`, {username, password})
    .then(response => {
      dispatch({
        type: AUTH_USER,
        payload: response.data
      });
      config.headers.authorization = response.data.token;
      localStorage.setItem('token', config.headers.authorization);
      browserHistory.push('/homepage');
    })
    .catch(response => dispatch(authError(response.data.error)));
  }
}


export function signoutUser(){
  localStorage.removeItem('token');
  
  return {type: UNAUTH_USER};
}