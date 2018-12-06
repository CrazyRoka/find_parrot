import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import FindParrotRouter from './router';


const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <FindParrotRouter />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
