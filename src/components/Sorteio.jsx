import { connect } from 'react-redux';
import React from 'react';

import Card from './Card';

function Sorteio(props) {
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="sorteio de um Número" purple>
            <div className="Interval">
            <span>
                <span>Resultado:</span>
                <strong>{aleatorio}</strong>
            </span>
            </div>
        </Card>
    )
}

function mapStateToProp(state){
    return{
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

export default connect(mapStateToProp)(Sorteio)