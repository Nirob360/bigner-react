import React from 'react';
import { FieldSet, Input, ScaleName } from './style/TempStyle';

const scaleName = {
    c: 'Cellaius',
    f: 'Fahrenheit',
};

export default function TemperatureInput({ tempreature, scale, onTemperatureChange }) {
    return (
        <FieldSet>
            <ScaleName>Enter temperature in {scaleName[scale]}: </ScaleName>
            <Input
                type="text"
                value={tempreature}
                onChange={(e) => onTemperatureChange(e, scale)}
            />
        </FieldSet>
    );
}
