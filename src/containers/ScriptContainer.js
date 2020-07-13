import React, { useEffect } from 'react';
import Script from '../components/Script/Script';
import { getScript, toggleAutoScroll } from '../actions';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

const ScriptContainer = () => {
	const dispatch = useDispatch();
	const { dialogArray, isAutoScroll, success } = useSelector(state => ({ 
		dialogArray: state.script.dialogArray, 
		isAutoScroll: state.script.isAutoScroll,
		success: state.script.success
	}), shallowEqual);
	const audio = document.querySelector('.audio-player audio');


	const onSelectDialog = (id, time, isAutoScroll) => {
		const dialogs = document.querySelectorAll('.script-content');
		const currentDialog = document.querySelector(`#dialog-${id} .script-content`);
		
		for (let i = 0; i < dialogs.length; i++) {
			dialogs[i].classList.remove('selected');
		}

		if (isAutoScroll) {
			currentDialog.scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			});
		}

		currentDialog.classList.add('selected');
		audio.currentTime = time;
		// audio.play();
	};

	const handleAutoScroll = value => {
		dispatch(toggleAutoScroll(value));
	}

	useEffect(() => {
		dispatch(getScript());
	}, []);

	return (
		<Script 
			dialogArray={dialogArray} 
			onSelectDialog={onSelectDialog} 
			handleAutoScroll={handleAutoScroll}
			isAutoScroll={isAutoScroll} 
			success={success}
		/>
	);
}

export default ScriptContainer;