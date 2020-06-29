// actions
import { GET_ANALYSIS } from '../actionTypes';

const initialState = {
	perLesson: {}
};

const analysis = (state = initialState, action) => {
	switch(action.type) {
		case GET_ANALYSIS:
			return {
				...state,
				perLesson: action.payload.per_lesson
			}
		default:
			return state;
	}
}

export default analysis;