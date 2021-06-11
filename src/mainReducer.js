const initState = {
	data: [],
};

const mainReducer = (state = initState, action) => {
	switch (action.type) {
		case "ACTIVE":
			return {
				...state,
				data: state.data.concat([action.payload]),
			};
		case "NOT-ACTIVE":
			return {
				...state,
				data: state.data.filter(item => {
					return item.id !== action.payload.id;
				}),
			};
		case "CLEAR-STATE":
			return {
				data: (state.data = []),
			};
		default:
			return state;
	}
};

export default mainReducer;
