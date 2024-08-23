// src/redux/reducers/authReducer.js
import { AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from '../actions/actionType';

const initialState = {
  user: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload // Merge the user object with the new payload
        },
        error: null
      };
    case AUTH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;
