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
        const { Change, locale } = this.props;
        return (
            <>
                <button type="button" onClick={() => Change(locale)}>
                    {locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
                </button>
            </>
        );
    }
}
