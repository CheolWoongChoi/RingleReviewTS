// actions

const initialState = {

};

const feedback = (state = initialState, action) => {
	switch(action.type) {
		case 'something': 
			return state;
		default:
			return state;
	}
}

export default feedback;