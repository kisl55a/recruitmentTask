const items = (state = [], action) => {
	switch (action.type) {
		case 'LOAD_ITEMS':
			return action.payload;
		case 'ADD_COMPANY':
			return [...state, { id: state.length + 1, ...action.payload }]
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
				console.log('element: ', element);
				if (element.id == action.payload) {
					state.splice(i, 1)
				}
			}
			return state;

		case 'ADD_INVOICE':
			let invoice = action.payload
			let previousState = state
			for (let i = 0; i < previousState.length; i++) {
				if (previousState[i].id == invoice.company) {
					previousState[i].rows = [...previousState[i].rows, invoice]
				}
			}
			return previousState
		case 'EDIT_INVOICE':
			let item = action.payload
			for (let i = 0; i < state.length; i++) {
				if (state[i].id == item.company) {
					console.log('state[i]: ', state[i]);
					state[i].rows.forEach((element, k) => {
						if (element.name == item.name) {
							console.log('item.name: ', item.name);
							state[i].rows[k] = item;
						}
					});
				}
			}
			return state

		case 'DELETE_INVOICE':
			let company = action.payload.companyId
			console.log('company: ', company);
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