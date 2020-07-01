import React, { useEffect } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { useSelector } from 'react-redux';

const AudioPlayerContainer = () => {
	const audioUrl = useSelector(state => state.script.audioUrl);

	return (
		<AudioPlayer audioUrl={audioUrl} />
	);
}

export default AudioPlayerContainer;