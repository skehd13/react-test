import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import App from './components/App';
import loginInfoApp from "./redux/reducer";

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore)
const store = createStoreWithMiddleware(loginInfoApp)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
rootElement);