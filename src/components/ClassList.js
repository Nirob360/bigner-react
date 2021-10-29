import Clock from './Clock';

export default function ClassList({ quantities = [] }) {
    return (
        <div>
            {quantities.map(() => (
                <Clock key={Math.random()} />
            ))}
        </div>
    );
}
