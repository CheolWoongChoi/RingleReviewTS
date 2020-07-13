import { GET_SUGGESTIONS } from '../actionTypes';

const initialState = {
	success: false,
	frequencyWord: {
		listTop50: [],
		listAll: [],
	},
	fillerWord: {
		fillerWordPercent: 0,
		fillerWordMessage: '',
	},
	synonym: {
		message: '',
		subMessage: '',
		synonymList: [],
	},
	feedbackResponse: []
};

const suggestions = (state = initialState, action) => {
	switch(action.type) {
		case GET_SUGGESTIONS: {
			const {
				message,
				sub_message,
				list_top_50,
				list_all,
				synonym_list,
				filler_word_percent,
				filler_word_message,
				feedback_response 
			} = action.payload;
			
			return {
				...state,
				success: true,
				frequencyWord: {
					listTop50: list_top_50,
					listAll: list_all,
				},
				fillerWord: {
					fillerWordPercent: filler_word_percent,
					fillerWordMessage: filler_word_message,
				},
				synonym: {
					message,
					subMessage: sub_message,
					synonymList: synonym_list,
				},
				feedbackResponse: feedback_response,
			}
		}
		default:
			return state;
	}
}

export default suggestions;