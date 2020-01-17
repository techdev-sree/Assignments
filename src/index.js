import React from 'react';
import ReactDOM from 'react-dom';
import { MyComponent } from './MyComponent/MyComponent';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<MyComponent/>, document.querySelector('#root'));
});