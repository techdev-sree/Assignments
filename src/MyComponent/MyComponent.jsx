import React, { Component } from 'react';
import { sayHello } from '../utils/utils';
import styles from './styles.modules.scss';

class MyComponent extends Component {
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
            </div>
        );
    }
}

export { MyComponent };