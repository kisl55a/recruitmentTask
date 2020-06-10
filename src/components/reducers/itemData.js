const items = (state = [], action) => {
    switch(action.type){
        case 'LOAD_ITEMS':
            return action.payload;
        case 'ADD_COMPANY':
            return [...state, {id: state.length + 1, ...action.payload}]
        default:
            return state
    }
}
export default items;