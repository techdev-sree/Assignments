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
        this.el = document.createElement('div');
        document.body.appendChild(this.el);
    }

    /*  static createContainer = () => {
          const ele = document.createElement('div');
          ele.classList.add(styles.portal);
          document.body.appendChild(ele);
          Toaster.toaster = ele;
      };

      static createPortal = (className) => {
          if (!Toaster.toaster) {
              Toaster.createContainer();
          }
          const ele = document.createElement('div');
          ele.classList.add(styles.toastContainer, styles[className]);
          Toaster.toaster.appendChild(ele);
          return ReactDOM.render(<Toaster/>, ele);
      };*/

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
        return ReactDOM.createPortal(
            <div className={styles.portal}>
                <div className={styles.toastContainer}>
                    {Object.keys(this.state.toasts).map((key) => {
                        const obj = this.state.toasts[key];
                        return (
                            <Toast obj={obj} key={obj.key} onClose={() => {
                                this.clear(obj.key);
                            }}/>
                        );
                    })}
                </div>
            </div>
            , this.el
        );
    }
}

Toaster.propTypes = {};

export { Toaster };