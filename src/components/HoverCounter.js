import React from 'react';
import withCounter from './HOC/withCounter';

const HoverCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <div>
            <h2 onMouseOver={incrementCount} onFocus={incrementCount}>
                Hover
            </h2>

            <h2>Click Time Count = {count}</h2>
        </div>
    );
};

export default withCounter(HoverCounter);
