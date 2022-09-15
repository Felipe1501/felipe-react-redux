import { connect } from 'react-redux';
import React from 'react';

import Card from './Card';

function Sum(props) {
    const {min, max} = props;
    return (
        <Card title="Soma dos Números" blue>
            <div className="Interval">
            <span>
                <span>Resultado:</span>
                <strong>{max + min}</strong>
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

export default connect(mapStateToProp)(Sum)