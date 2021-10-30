import React from 'react';
import { Indicator } from './style/TempStyle';

export default function BoiligVerdict({ celsius = 0 }) {
    if (celsius >= 100) {
        return <Indicator>The water would boil.</Indicator>;
    }

    return <Indicator>water would not boil</Indicator>;
}
