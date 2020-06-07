export const defaultState = {
    value: []
}

export function reducer(state, action) {
    let idx = state.value.findIndex(ele => action.payload.data.id === ele.id)
    if (idx >= 0) {
        state.value.splice(idx, 1)
    } else {
        state.value.push(action.payload.data)
    }
    
    switch(action.type) {
        case 'ADD_NUM':
            return { ...state, value: state.value + 1 };
        case 'REDUCE_NUM':
            return { ...state };
        default: 
            throw new Error();
    }
}