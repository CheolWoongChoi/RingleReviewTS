import { GET_SUGGESTIONS } from '../actionTypes';
import ringleReview from '../apis/ringleReview';

export const getSuggestions = () => async dispatch => {
	const response = await ringleReview.get('/suggestions');

	console.log(response);

	dispatch({ type: GET_SUGGESTIONS, payload: response });
};
