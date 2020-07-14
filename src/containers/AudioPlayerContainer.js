import React from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { useSelector, shallowEqual } from 'react-redux';

const AudioPlayerContainer = () => {
	const { dialogByTime, audioUrl, isAutoScroll } = useSelector(state => ({
		dialogByTime: state.script.dialogByTime,
		audioUrl: state.script.audioUrl,
		isAutoScroll: state.script.isAutoScroll
	}), shallowEqual);
	const audio = document.querySelector('.audio-player audio');
	
	const onTimeUpdate = () => {
		const currentTime = Math.floor(audio.currentTime);

		if (currentTime && dialogByTime[currentTime]) {
			const dialogs = document.querySelectorAll('.script-content');
			const currentDialogId = dialogByTime[currentTime].id;
			const currentDialog = document.querySelector(`#dialog-${currentDialogId} .script-content`);
			
			for (let i = 0; i < dialogs.length; i++) {
				dialogs[i].classList.remove('selected');
			}

			currentDialog.classList.add('selected');

			if (isAutoScroll) {
				currentDialog.scrollIntoView({
					behavior: 'smooth',
					block: 'center'
				});
			}
		}
	};


	return (
		<AudioPlayer audioUrl={audioUrl} onTimeUpdate={onTimeUpdate} />
	);
}

export default AudioPlayerContainer;