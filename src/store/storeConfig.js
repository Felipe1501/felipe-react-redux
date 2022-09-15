import {createStore, combineReducers} from 'redux';

const reducers = combineReducers({
    numbers: function(state, action){
        
        switch(action.type){
            case 'NM_MIN_CHANGE':
                return{
                    ...state,
                    min: action.payload
                }

                default:
                    return {
                        min: 7,
                        max: 31
                    }
        }
    } ,
    names: function(state, action){
        console.log('Reducer names...');
       console.log(state, ' ', action);
        return[
            'Ana',
            'Bianca',
            'Felipe'
        ]
    }
});

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig