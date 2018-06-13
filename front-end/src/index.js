import 'styles/bootstrap-grid.scss';
import 'styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import App from './components/App';
import { store, history } from './redux/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <div>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  </div>
), document.getElementById('root'));
registerServiceWorker();
