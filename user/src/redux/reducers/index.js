import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import productsReducer from "./productsreducer";
import addProductReducer from "../../../../admin/src/redux/reducers/addProductReducer"

const rootReducer = combineReducers({
    cart : cartReducer,
    auth : authReducer,
    products: productsReducer,
    addProduct: addProductReducer
})

export default rootReducer;