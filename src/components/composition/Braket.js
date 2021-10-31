/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

export default class Braket extends Component {
    addBraket = (text) => `[ ${text} ]`;

    render() {
        return this.props.children({ addBraket: this.addBraket });
    }
}
