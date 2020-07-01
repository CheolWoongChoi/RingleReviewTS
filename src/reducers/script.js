// actions
import { GET_SCRIPT } from '../actionTypes';


const initialState = {
	timestamps: [],
	dialogArray: [],
	audioUrl: ''
};

const script = (state = initialState, action) => {
	switch(action.type) {
		case GET_SCRIPT: {
			const { timestamps, dialog_array, url } = action.payload;
		
			return {
				...state,
				timestamps,
				dialogArray: dialog_array,
				audioUrl: url
			};
		}
		default:
			return state;
	}
}

export default script;