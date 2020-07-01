import React, { useEffect } from 'react';
import Script from '../components/Script/Script';
import { getScript } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const ScriptContainer = () => {
	const dispatch = useDispatch();
	const dialogArray = useSelector(state => state.script.dialogArray);

	useEffect(() => {
		dispatch(getScript());
	}, []);

	return (
		<Script dialogArray={dialogArray} />
	);
}

export default ScriptContainer;