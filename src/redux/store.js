import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {combineReducers} from "redux";
import {categoryReducer , loaderReducer, productReducer, userReducer} from "./reducers";


const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
    isLoading: loaderReducer,
    user:userReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
