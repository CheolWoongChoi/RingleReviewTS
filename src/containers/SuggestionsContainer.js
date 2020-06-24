import React, { useEffect } from 'react';
import Suggestions from '../components/Suggestions';
import { getSuggestions } from '../actions';
import { useDispatch } from 'react-redux';

const SuggestionsContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('suggestions mount');
		dispatch(getSuggestions());

	}, []);

	return (
		<Suggestions />
	);
}

export default SuggestionsContainer;