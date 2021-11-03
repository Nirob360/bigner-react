import React from 'react';

function ShowCounter({ count, title }) {
    return (
        <div>
            <h1>
                {title} is {count}
            </h1>
        </div>
    );
}
export default React.memo(ShowCounter);
