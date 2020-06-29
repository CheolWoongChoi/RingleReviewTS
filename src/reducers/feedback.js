// actions
import { GET_FEEDBACK } from '../actionTypes';

const initialState = {
	success: false,
	scoreResult: []
};

const feedback = (state = initialState, action) => {
	switch(action.type) {
		case GET_FEEDBACK:
			return {
				...state,
				success: action.payload.success,
				scoreResult: action.payload.score_result,
			};
		default:
			return state;
	}
}

export default feedback;