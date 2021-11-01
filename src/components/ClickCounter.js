import React, { Component } from 'react';

export default class ClickCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <button type="button" onClick={incrementCount}>
                    Click {count} me
                </button>
            </div>
        );
    }
}
