import React, { useEffect } from 'react';
import Feedback from '../components/Feedback/Feedback';
import { getFeedback } from '../actions';
import { useDispatch } from 'react-redux';

const FeedbackContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('Feedback mount');
		dispatch(getFeedback());

	}, []);

	return (
		<Feedback />
	);
}

export default FeedbackContainer;