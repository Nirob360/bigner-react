import React, { Component } from 'react';
import Button from './Button';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), locale: 'bn-BD' };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    handaleClick = (locale) => {
        this.setState({ locale });
    };

    tick = () => {
        this.setState({ date: new Date() });
    };

    render() {
        const { date, locale } = this.state;

        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                {locale === 'bn-BD' ? (
                    <Button Change={this.handaleClick} locale="en-US" />
                ) : (
                    <Button Change={this.handaleClick} locale="bn-BD" />
                )}
            </div>
        );
    }
}
