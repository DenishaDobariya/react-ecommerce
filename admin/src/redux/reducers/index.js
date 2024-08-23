import { combineReducers } from 'redux';
import authReducer from './authReducer';
import addProductReducer from './addProductReducer'

export const rootReducer= combineReducers({
  auth: authReducer,
  addProduct: addProductReducer,
});
