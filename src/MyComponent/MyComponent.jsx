import React, { Component } from 'react';
import { Toaster } from '../Toast/ToastContainer';
import { sayHello } from '../utils/utils';
import styles from './styles.modules.scss';

const toaster1 = Toaster.createPortal('toaster-1');

//const toaster2 = Toaster.createPortal('toaster-2');

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

    handleToasts1 = () => {
        toaster1.show({ message: `This is a Toast ${Date.now()}` });
    };
    handleToasts2 = () => {
        // toaster2.show({ message: `This is a Toast ${Date.now()}` });
    };

    render() {
        return (
            <div className={styles.myComponent}>
                {sayHello(this.state.name)}
                <button onClick={this.handleToasts1}>
                    Show Toast 1
                </button>
            </div>
        );
    }
}

export { MyComponent };