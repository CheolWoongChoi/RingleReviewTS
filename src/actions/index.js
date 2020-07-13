import { 
	GET_SCRIPT, 
	TOGGLE_AUTO_SCROLL,
	GET_ANALYSIS, 
	GET_FEEDBACK, 
	GET_SUGGESTIONS, 
} from '../actionTypes';
import { thunk } from './thunk';

// script
export const getScript = () => dispatch => thunk({
	api: '/script',
	actionType: GET_SCRIPT,
	dispatch
});

export const toggleAutoScroll = value => ({
	type: TOGGLE_AUTO_SCROLL,
	payload: value
});

// analysis
export const getAnalysis = () => dispatch => thunk({
	api: '/analysis',
	actionType: GET_ANALYSIS,
	dispatch
});

// feedback
export const getFeedback = () => dispatch => thunk({
	api: '/feedback',
	actionType: GET_FEEDBACK,
	dispatch
});

// suggestions
export const getSuggestions = () => dispatch => thunk({
	api: '/suggestions',
	actionType: GET_SUGGESTIONS,
	dispatch
});
