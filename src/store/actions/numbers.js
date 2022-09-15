
//action creator
export function changeNumberMin(newNumber){
    return {
        type: 'NM_MIN_CHANGE',
        payload: newNumber
    }
}

//action creator
export function changeNumberMax(newNumber){
    return {
        type: 'NM_MAX_CHANGE',
        payload: newNumber
    }
}