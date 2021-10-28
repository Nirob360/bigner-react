import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        const { date } = this.state;
        const { locale } = this.props;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
            </div>
        );
    }
}
