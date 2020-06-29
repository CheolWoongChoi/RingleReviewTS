import { 
	GET_SCRIPT, 
	GET_ANALYSIS, 
	GET_FEEDBACK, 
	GET_SUGGESTIONS 
} from '../actionTypes';
import ringleReview from '../apis/ringleReview';

// script
export const getScript = () => async dispatch => {
	const response = await ringleReview.get('/script');

	console.log('[getScript]');
	console.log(response.data);

	dispatch({ type: GET_SCRIPT, payload: response.data });
};

// analysis
export const getAnalysis = () => async dispatch => {
	const response = await ringleReview.get('/analysis');

	console.log('[getAnalysis]');
	console.log(response.data);

	dispatch({ type: GET_ANALYSIS, payload: response.data });
};

// feedback
export const getFeedback = () => async dispatch => {
	const response = await ringleReview.get('/feedback');

	console.log('[getFeedback]');
	console.log(response.data);

	dispatch({ type: GET_FEEDBACK, payload: response.data });
};

// suggestions
export const getSuggestions = () => async dispatch => {
	const response = await ringleReview.get('/suggestions');

	console.log('[getSuggestions]');
	console.log(response.data);

	dispatch({ type: GET_SUGGESTIONS, payload: response.data });
};
