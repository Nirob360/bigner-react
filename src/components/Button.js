import React from 'react';

function Button({ children, HandleClick }) {
    return (
        <div>
            <button type="button" onClick={HandleClick}>
                {children}
            </button>
        </div>
    );
}

export default React.memo(Button);
