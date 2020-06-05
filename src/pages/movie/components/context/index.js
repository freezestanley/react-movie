export const defaultState = {
    value: []
}

export function reducer(state, action) {
    let idx = state.value.indexOf(action.payload.data)
    if (idx === -1) {
        state.value.push(action.payload.data)
    } else {
        state.value.splice(idx, 1)
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