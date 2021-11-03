import { useCallback, useMemo, useState } from 'react';
import Button from './components/Button';
import ShowCounter from './components/ShowCounter';
import Title from './components/Title';

export default function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1((preveCount) => preveCount + 1);
    }, []);
    const incrementByFive = useCallback(() => {
        setCount2((preveCount) => preveCount + 5);
    }, []);

    const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i += 1;
        return count1 % 2 === 0;
    }, [count1]);

    return (
        <div>
            <Title title="useCallback Hook Tutorial" />
            <ShowCounter count={count1} title="Counter one" />
            <Button onClick={incrementByOne} HandleClick={incrementByOne}>
                Increment by one
            </Button>
            <p>{isEvenOrOdd ? 'even' : 'odd'}</p>
            <hr />
            <ShowCounter count={count2} title="Counter Five" />
            <Button onClick={incrementByFive} HandleClick={incrementByFive}>
                Increment by Five
            </Button>
        </div>
    );
}
