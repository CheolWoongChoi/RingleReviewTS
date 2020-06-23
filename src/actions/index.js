import ringleReview from '../apis/ringleReview';

export const getSuggestions = async () => {
	const response = await ringleReview.get('/suggestions');

	console.log(response);

	return {
		type: 'GET_SUGGESTIONS',
		payload: ''
	};
}