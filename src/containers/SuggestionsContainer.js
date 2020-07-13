import React, { useEffect } from 'react';
import Suggestions from '../components/Suggestions/Suggestions';
import { getSuggestions } from '../actions';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

const SuggestionsContainer = () => {
	const dispatch = useDispatch();
	const { frequencyWord, fillerWord, synonym, success } = useSelector(state => ({
		frequencyWord: state.suggestions.frequencyWord,
		fillerWord: state.suggestions.fillerWord,
		synonym: state.suggestions.synonym,
		success: state.suggestions.success
	}), shallowEqual);

	useEffect(() => {
		dispatch(getSuggestions());
	}, []);

	return (
		<Suggestions 
			frequencyWord={frequencyWord}
			fillerWord={fillerWord}
			synonym={synonym}
			success={success}
		/>
	);
}

export default SuggestionsContainer;