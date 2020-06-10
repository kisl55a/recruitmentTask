export const loadData = (items) => {
    return {
        type: 'LOAD_ITEMS',
        payload: items
    }
}
export const addCompany = (item) => {
    return {
        type: 'ADD_COMPANY',
        payload: item
    }
}