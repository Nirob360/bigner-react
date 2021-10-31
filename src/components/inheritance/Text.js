/* eslint-disable no-useless-constructor */
import Emoji from './Emoji';

export default class Text extends Emoji {
    constructor(props) {
        super(props);
    }

    render() {
        const decoratedText = this.addEmoji('I am javascrit language', '❤️');
        return super.render(decoratedText);
    }
}
