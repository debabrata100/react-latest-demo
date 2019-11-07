import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import initializeStore from './store';
import { ConnectedRouter } from 'connected-react-router';
import history from './utils/history';

const store = initializeStore(history);
const app = (<Provider store={store}>
<ConnectedRouter history={history}>
    <App />
</ConnectedRouter>
</Provider>)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
