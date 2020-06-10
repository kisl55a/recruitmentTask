const items = (state = [], action) => {
    switch(action.type){
        case 'LOAD_ITEMS':
            return action.payload;
        case 'ADD_COMPANY':
            return [...state, {id: state.length + 1, ...action.payload}]
        case 'ADD_INVOICE':
            let invoice = action.payload
            let previousState = state
            for (let i = 0; i < previousState.length; i++) {
                if(previousState[i].id == invoice.company){
                    previousState[i].rows = [...previousState[i].rows, invoice]
                }
            }
            return previousState
        default:
            return state
    }
}
export default items;