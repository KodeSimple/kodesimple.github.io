  // import React from 'react';
  // import ReactDOM from 'react-dom';
  // import { BrowserRouter as Router } from 'react-router-dom';
  // import App from './App';
  
  // ReactDOM.render(
  //            <Router>
  //             <App />
  //            </Router>,
  //   document.getElementById('root')
  // );
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './admin/component/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
     <Router>
          <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);