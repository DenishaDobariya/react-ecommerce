import { AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from '../actions/actionTypes';

const initialState = {
  user: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
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
