import React, { useEffect } from 'react';
import Analysis from '../components/Analysis';
import { getAnalysis } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const AnalysisContainer = () => {
	const dispatch = useDispatch();
	const perLesson = useSelector(state => state.analysis.perLesson);

	useEffect(() => {
		dispatch(getAnalysis()); 
	}, []);

	return (
		<Analysis perLesson={perLesson} />
	);
}

export default AnalysisContainer;