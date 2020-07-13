import ringleReview from '../apis/ringleReview';

export const thunk = async params => {
	const { api, actionType, dispatch } = params;
	const response = await ringleReview.get(api);

	dispatch({ type: actionType, payload: response.data });
}