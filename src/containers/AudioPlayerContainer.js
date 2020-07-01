import React, { useEffect } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { getAudioPlayer } from '../actions';
import { useSelector } from 'react-redux';

const AudioPlayerContainer = () => {

	useEffect(() => {
	}, []);

	return (
		<AudioPlayer />
	);
}

export default AudioPlayerContainer;