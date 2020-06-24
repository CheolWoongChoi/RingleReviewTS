import { GET_SUGGESTIONS } from '../actionTypes';

const initialState = {

};

const suggestions = (state = initialState, action) => {
	switch(action.type) {
		case GET_SUGGESTIONS:
			return state;
		default:
			return state;
	}
}