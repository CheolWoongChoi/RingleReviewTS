import React, { useEffect } from 'react';
import Script from '../components/Script';
import { getScript } from '../actions';
import { useDispatch } from 'react-redux';

const ScriptContainer = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('Script mount');
		dispatch(getScript());

	}, []);

	return (
		<Script />
	);
}

export default ScriptContainer;