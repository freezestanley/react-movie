export const defaultState = { // 初始化state
    value: [],
    currentDom: null
}

export function reducer(state, action) { //选座的reducer
    let idx = state.value.findIndex(ele => action.payload.data.id === ele.id) // 判断提交的座位是否已被选中
    if (idx >= 0) {
        state.value.splice(idx, 1)  // 选中删除
    } else {
        state.value.push({...action.payload.data, dom: action.payload.current}) // 没选中则加入选中array
    }
    state.currentDom = state.value[state.value.length -1] // 获取当前座位的dom
    switch(action.type) {
        case 'CHANG_SIT':   // CHANG_SIT 座位变化事件
            return { ...state };
        default: 
            throw new Error();
    }
}