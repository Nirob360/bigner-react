import React from 'react';

export default function CompositionText({ addEmoji, addBraket }) {
    let text = 'I am Javascript programing langauge';

    if (addEmoji) {
        text = addEmoji(text, '❤️');
    }
    if (addBraket) {
        text = addBraket(text);
    }

    return <div>{text}</div>;
}
