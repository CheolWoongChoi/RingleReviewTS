import React, { useEffect } from 'react';
import Feedback from '../components/Feedback/Feedback';
import { getFeedback } from '../actions';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

const FeedbackContainer = () => {
	const dispatch = useDispatch();
	const { scoreResult, success } = useSelector(state => ({
		scoreResult: state.feedback.scoreResult,
		success: state.feedback.success
	}), shallowEqual);

	useEffect(() => {
		dispatch(getFeedback());
	}, []);

	return (
		<Feedback scoreResult={scoreResult} success={success} />
	);
}

export default FeedbackContainer;