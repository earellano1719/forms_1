import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Reverse from './input'
// import MarsForm from './form';
// import Stack from './stack'
import App from './props_assignment/apps/app'
// import MovieApp from './movies/app'
// import App from './classwork/app'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
