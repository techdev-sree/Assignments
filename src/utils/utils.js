import React from 'react';

const sayHello = (name = 'world') => {
    return `hello ${name}!!!!!!`;
};

const debounce = (fn, timeOut) => {
    let timerId = null;
    return () => {
        const context = this;
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            Reflect.apply(fn, context, arguments);
        }, timeOut);
    };
};
const ThemeContext = React.createContext({ theme: 'light' });

const withThemeConsumer = (WrappedComponent) => {
    return (props) => {
        return (
            <ThemeContext.Consumer>
                {(theme) =>
                    <WrappedComponent {...props} theme={{ ...theme }}/>
                }
            </ThemeContext.Consumer>
        );
    };
};

const withThemeProvider = (WrappedComponent, override) => {
    return (props) => {
        return (
            <ThemeContext.Provider value={override}>
                <WrappedComponent {...props}/>
            </ThemeContext.Provider>
        );
    };
};

export {
    sayHello,
    debounce,
    ThemeContext,
    withThemeConsumer,
    withThemeProvider
};