import thunkMiddleware from "redux-thunk";
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: weatherReducer } = require("./weatherReducer");

let reducers = combineReducers({
    weatherPage: weatherReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;