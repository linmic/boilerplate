import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line max-len, no-mixed-operators
const rexButtons = (typeof window !== 'undefined' &&
  window.rexButtons &&
  window.rexButtons.length &&
  window.rexButtons) || [{ id: 'foo' }];

rexButtons.forEach(btn => {
  ReactDOM.render(<App />, document.getElementById(btn.id));
});

registerServiceWorker();
