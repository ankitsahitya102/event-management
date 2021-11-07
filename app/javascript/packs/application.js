import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../src/root';
import '../stylesheets/style.scss'
import '../stylesheets/ant.less'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('app-root'))
});
