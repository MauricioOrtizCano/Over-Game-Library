import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "../reducer/reducer";
import thunk from 'redux-thunk';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; //is to use "thunk" and the redux devtools


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);


export default store;

