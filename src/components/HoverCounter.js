import React, { Component } from 'react';

export default class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <h2 onMouseOver={incrementCount} onFocus={incrementCount}>
                    Hover {count} me
                </h2>
            </div>
        );
    }
}
