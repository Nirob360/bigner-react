import React, { useEffect, useState } from 'react';

export default function MyComponents() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        document.title = `Clicked ${count} time`;
    }, [count]);

    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const addClick = () => {
        setCount((preveCount) => preveCount + 1);
    };

    const tick = () => {
        setDate(new Date());
    };

    return (
        <div>
            <p> Time: {date.toLocaleTimeString()}</p>
            <button type="button" onClick={addClick}>
                Click
            </button>
        </div>
    );
}
