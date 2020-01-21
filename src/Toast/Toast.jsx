import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.modules.css';

class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: null
        };
    }

    onClose = () => {
        this.props.onClose();
    };

    startTimer = () => {
        if (!this.state.timer) {
            const timer = setTimeout(() => {
                //   this.onClose();
            }, this.props.timeout);

            this.setState({
                timer
            });
        }
    };
    endTimer = () => {
        clearTimeout(this.state.timer);
        this.setState({
            timer: null
        });
    };

    componentDidMount() {
        this.startTimer();
    }

    render() {
        const { message } = this.props.obj;
        return (
            <div class={styles.toast} onMouseEnter={() => {
                this.endTimer();
            }} onMouseLeave={this.startTimer}>
                <button onClick={this.onClose}>CLOSE</button>
                <div>
                    <div>
                        {message}
                    </div>
                </div>
            </div>
        );
    }
}

Toast.propTypes = {
    timeout: PropTypes.number
};

Toast.defaultProps = {
    timeout: 5 * 1000
};

export { Toast };