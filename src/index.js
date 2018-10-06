import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Import CSS reset and Global Styles
import './styles/global-styles'

import 'react-toastify/dist/ReactToastify.css'

import * as serviceWorker from './serviceWorker'

/* global document */

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
