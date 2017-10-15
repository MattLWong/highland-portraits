import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Gallery/>, root);
})
