// actions
import { GET_SCRIPT, TOGGLE_AUTO_SCROLL } from '../actionTypes';
import _ from 'lodash';

const initialState = {
	success: false,
	timestamps: [],
	dialogArray: [],
	dialogById: {},
	dialogByTime: {},
	isAutoScroll: false,
	audioUrl: '',
};

const script = (state = initialState, action) => {
	switch(action.type) {
		case GET_SCRIPT: {
			const { timestamps, dialog_array, url } = action.payload;
			const dialogById = _.keyBy(dialog_array, dialog => dialog.id);
			const dialogByTime = _.keyBy(dialog_array, dialog => dialog.formatted_time_to_milliseconds);

			return {
				...state,
				success: true,
				timestamps,
				dialogArray: dialog_array,
				dialogById,
				dialogByTime,
				audioUrl: url
			};
		}

		case TOGGLE_AUTO_SCROLL: {
			return {
				...state,
				isAutoScroll: action.payload
			};
		}

		default:
			return state;
	}
}

export default script;