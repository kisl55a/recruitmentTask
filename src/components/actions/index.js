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
export const addInvoice = (invoice) => {
    return {
        type: 'ADD_INVOICE',
        payload: invoice
    }
}
export const editCompany = (company) => {
    return {
        type: 'EDIT_COMPANY',
        payload: company
    }
}

export const editInvoice = (invoice) => {
    return {
        type: 'EDIT_INVOICE',
        payload: invoice
    }
}
export const deleteCompany = (id) => {
    return {
        type: 'DELETE_COMPANY',
        payload: id
    }
}
export const deleteInvoice = (companyId, name) => {
    return {
        type: 'DELETE_INVOICE',
        payload: {companyId, name}
    }
}


