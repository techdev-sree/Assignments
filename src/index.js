import React from 'react';
import ReactDOM from 'react-dom';
import { MyComponent } from './MyComponent/MyComponent';
import { ThemeContext, withThemeProvider } from './utils/utils';

const MyComponent1 = withThemeProvider(MyComponent, { theme: 'Yellow' });

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <ThemeContext.Provider value={{ theme: 'blue' }}>
            <MyComponent/>
            <MyComponent1/>
        </ThemeContext.Provider>, document.querySelector('#root'));
});