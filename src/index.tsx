import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import HomeContainer from './containers/landings/Home';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={HomeContainer} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
