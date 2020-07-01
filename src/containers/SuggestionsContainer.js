import React, { useEffect } from 'react';
import Suggestions from '../components/Suggestions/Suggestions';
import { getSuggestions } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const SuggestionsContainer = () => {
	const dispatch = useDispatch();
	const { frequencyWord, fillerWord, synonym } = useSelector(state => state.suggestions, []);

	useEffect(() => {
		dispatch(getSuggestions());

	}, []);

	return (
		<Suggestions 
			frequencyWord={frequencyWord}
			fillerWord={fillerWord}
			synonym={synonym}
		/>
	);
}

export default SuggestionsContainer;