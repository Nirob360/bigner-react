import Braket from './components/composition/Braket';
import Emoji from './components/composition/ComposionEmoji';
import Text from './components/composition/CompositionText';
import GlobalStyle from './GlobalStyle';

function App() {
    return (
        <>
            <GlobalStyle />
            <Emoji>
                {({ addEmoji }) => (
                    <Braket>
                        {({ addBraket }) => <Text addEmoji={addEmoji} addBraket={addBraket} />}
                    </Braket>
                )}
            </Emoji>
        </>
    );
}

export default App;
