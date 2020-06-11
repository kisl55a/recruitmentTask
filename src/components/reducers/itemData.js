const items = (state = [], action) => {
	switch (action.type) {
		case 'LOAD_ITEMS':
			return action.payload;

		case 'ADD_COMPANY':
			return [...state, { id: state.length + 1, ...action.payload }];

		case 'EDIT_COMPANY':
			for (let i = 0; i < state.length; i++) {
				const element = state[i];
				if (element.id == action.payload.id) {
					state[i] = action.payload
				}
			}
			return state;

		case 'DELETE_COMPANY':
			for (let i = 0; i < state.length; i++) {
				const element = state[i];
				if (element.id == action.payload) {
					state.splice(i, 1)
				}
			}
			return state;

		case 'ADD_INVOICE':
			let invoice = action.payload
			for (let i = 0; i < state.length; i++) {
				if (state[i].id == invoice.company) {
					state[i].rows = [...state[i].rows, invoice]
				}
			}
			return state
		case 'EDIT_INVOICE':
			let item = action.payload.invoice;
			let searchName = action.payload.searchName
			for (let i = 0; i < state.length; i++) {
				if (state[i].id == item.company) {
					state[i].rows.forEach((element, k) => {
						if (element.name == searchName) {
							state[i].rows[k] = item;
						}
					});
				}
			}
			return state

		case 'DELETE_INVOICE':
			let company = action.payload.companyId
			let name = action.payload.name
			for (let i = 0; i < state.length; i++) {
				if (state[i].id == company) {
					state[i].rows.forEach((element, k) => {
						if (element.name == name) {
							state[i].rows.splice(k, 1);
						}
					});
				}
			}
			return state
			
		default:
			return state
	}
}
export default items;