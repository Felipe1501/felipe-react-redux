import { NM_MAX_CHANGE, NM_MIN_CHANGE } from "../actions/actionTypes";

const initialState = {
    min: 1,
    max: 10
}

export default function(state = initialState, action){
        
    switch(action.type){
        case NM_MIN_CHANGE:
            return{
                ...state,
                min: action.payload
            }
        case NM_MIN_CHANGE:
            return{
                ...state,
                max: action.payload
            }

            default:
                return state
    }
} 