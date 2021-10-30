import React, { Component } from 'react';
import BoiligVerdict from './BoiligVerdict';
import { convert, toCelsius, toFahrenheit } from './lib/Conveter';
import { Container } from './style/TempStyle';
import Tempreature from './TemperatureInput';

export default class Calculator extends Component {
    state = {
        tempreature: '',
        scale: 'c',
    };

    handleChange = (e, scale) => {
        this.setState({
            tempreature: e.target.value,
            scale,
        });
    };

    render() {
        const { tempreature, scale } = this.state;

        const celsius = scale === 'f' ? convert(tempreature, toCelsius) : tempreature;
        const fahrenheit = scale === 'c' ? convert(tempreature, toFahrenheit) : tempreature;

        return (
            <Container Container>
                <Tempreature
                    scale="c"
                    tempreature={celsius}
                    onTemperatureChange={this.handleChange}
                />
                <Tempreature
                    scale="f"
                    tempreature={fahrenheit}
                    onTemperatureChange={this.handleChange}
                />
                <BoiligVerdict celsius={parseFloat(tempreature)} />
            </Container>
        );
    }
}
