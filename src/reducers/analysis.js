// actions
import { GET_ANALYSIS } from '../actionTypes';

const initialState = {
	success: false,
	perLesson: {}
};

const analysis = (state = initialState, action) => {
	switch(action.type) {
		case GET_ANALYSIS:
			return {
				...state,
				success: true,
				perLesson: action.payload.per_lesson
			}
		default:
			return state;
	}
}

export default analysis;