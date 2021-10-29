import './App.css';
import ClassList from './components/ClassList';

function App() {
    const quantities = [1, 2, 3];
    return (
        <div className="App">
            <ClassList quantities={quantities} />
        </div>
    );
}

export default App;
