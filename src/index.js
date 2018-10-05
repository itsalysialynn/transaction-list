import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import CSS reset and Global Styles
import './styles/global-styles';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
