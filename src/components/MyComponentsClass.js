import React, { Component } from 'react';

export default class MyComponentsClass extends Component {
    state = {
        count: 0,
        date: new Date(),
    };

    componentDidMount() {
        const { count } = this.state;
        document.title = `Clicked ${count} time`;
        setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        const { count } = this.state;
        document.title = `Clicked ${count} time`;
    }

    addClick = () => {
        this.setState((click) => ({ count: click.count + 1 }));
    };

    tick = () => {
        this.setState({
            date: new Date(),
        });
    };

    render() {
        const { date } = this.state;
        return (
            <div>
                <p> Time: {date.toLocaleTimeString()}</p>
                <button type="button" onClick={this.addClick}>
                    Click
                </button>
            </div>
        );
    }
}
