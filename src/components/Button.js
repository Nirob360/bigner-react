/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Button extends Component {
    shouldComponentUpdate(nextProps) {
        const { Change: CurentChange, locale: CurentLocale } = this.props;
        const { Change: nextChange, locale: nextLocale } = nextProps;

        if (CurentChange === nextChange && CurentLocale === nextLocale) {
            return false;
        }
        return true;
    }

    render() {
        console.log('button component render');
        const { Change, locale } = this.props;
        return (
            <button type="button" onClick={() => Change(locale)}>
                Click
            </button>
        );
    }
}
