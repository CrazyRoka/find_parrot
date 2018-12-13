import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import FindParrotRouter from './router';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';
import { notification } from 'antd';
import logger from 'redux-logger';


const store = createStore(reducers, applyMiddleware(thunk, logger));
notification.config({placement: 'bottomRight'});

ReactDOM.render(
    <Provider store={store}>
        <FindParrotRouter />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
