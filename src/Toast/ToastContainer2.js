import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './styles.modules.css';
import { Toast } from './Toast';

class Toaster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toasts: {}
        };
    }

    show = (messageObj) => {
        const key = Date.now();
        const inputObj = { key, ...messageObj };
        this.setState({
            toasts: {
                ...this.state.toasts,
                [key]: inputObj
            }
        });
    };
    clear = (key) => {
        const output = { ...this.state.toasts };
        delete output[key];
        this.setState({ toasts: output });
    };


    render() {
        return (
            <div className={''}>
                {Object.keys(this.state.toasts).map((key) => {
                    const obj = this.state.toasts[key];
                    return (
                        <Toast obj={obj} key={obj.key} onClose={() => {
                            this.clear(obj.key);
                        }}/>
                    );
                })}
            </div>
        );
    };
}

Toaster.propTypes = {};

export { Toaster };