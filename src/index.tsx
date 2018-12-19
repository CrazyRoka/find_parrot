import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import FindParrotRouter from './router';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';
import { notification } from 'antd';
import logger from 'redux-logger';
import { AuthentificationStore, ProductStore } from './dataTypes';

export interface ApplicationState {
    authentification: AuthentificationStore;
    products: ProductStore;
};
const store = createStore(reducers, applyMiddleware(thunk, logger));
notification.config({placement: 'bottomRight'});

ReactDOM.render(
    <Provider store={store}>
        <FindParrotRouter />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
