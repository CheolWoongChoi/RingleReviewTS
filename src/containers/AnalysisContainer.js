import React, { useEffect } from 'react';
import Analysis from '../components/Analysis';
import { getAnalysis } from '../actions';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

const AnalysisContainer = () => {
	const dispatch = useDispatch();
	const { perLesson, success } = useSelector(state => ({
		perLesson: state.analysis.perLesson,
		success: state.analysis.success
	}), shallowEqual);
	
	useEffect(() => {
		dispatch(getAnalysis()); 
	}, []);

	return (
		<Analysis perLesson={perLesson} success={success} />
	);
}

export default AnalysisContainer;