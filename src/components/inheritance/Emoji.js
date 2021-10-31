/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Emoji extends Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(overWrite) {
        let text = 'I am the Emoji Component';
        if (overWrite) text = overWrite;
        return (
            <div>
                <h2>{text}</h2>
            </div>
        );
    }
}
