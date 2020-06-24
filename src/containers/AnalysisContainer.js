import React, { useEffect } from 'react';
import Analysis from '../components/Analysis';
import { getAnalysis } from '../actions';
import { useDispatch } from 'react-redux';

const AnalysisContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('analysis mount');
		dispatch(getAnalysis()); 

	}, []);

	return (
		<Analysis />
	);
}

export default AnalysisContainer;