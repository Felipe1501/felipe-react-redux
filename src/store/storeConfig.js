import {createStore, combineReducers} from 'redux';
import numReducers from './reducers/numReducers';
const reducers = combineReducers({
    numbers: numReducers,
});

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig