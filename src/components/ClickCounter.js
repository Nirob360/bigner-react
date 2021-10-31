import React from 'react';
import withCounter from './HOC/withCounter';

const ClickCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <button type="button" onClick={incrementCount} onFocus={incrementCount}>
                Click Button
            </button>

            <h2>Click Time Count = {count}</h2>
        </div>
    );
};

export default withCounter(ClickCounter);
