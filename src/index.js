import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
import * as serviceWorker from './serviceWorker';

import "./assets/css/style.css";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
