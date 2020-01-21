import React, { Component } from 'react';
import { sayHello, ThemeContext, withTheme, withThemeConsumer, withThemeProvider } from '../utils/utils';
import styles from './styles.modules.scss';

class MyComponent extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        this.state = {
            name: 'SFO',
            rendered: false
        };
    }

    componentDidMount() {
        this.setState({ rendered: true });
    }

    render() {
        return (
            <div className={styles.myComponent}>
                {sayHello(this.state.name)}
                {this.context.theme}
            </div>
        );
    }
}

MyComponent = withThemeConsumer(MyComponent);

export { MyComponent };