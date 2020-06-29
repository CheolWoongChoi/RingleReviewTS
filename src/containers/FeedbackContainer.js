import React, { useEffect } from 'react';
import Feedback from '../components/Feedback/Feedback';
import { getFeedback } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const FeedbackContainer = () => {
	const dispatch = useDispatch();
	const scoreResult = useSelector(state => state.feedback.scoreResult, []);
	
	useEffect(() => {
		dispatch(getFeedback());
	}, []);

	return (
		<Feedback scoreResult={scoreResult} />
	);
}

export default FeedbackContainer;