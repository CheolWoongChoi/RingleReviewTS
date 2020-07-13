import React from 'react';
import './AudioPlayer.scss';

const AudioPlayer = ({ audioUrl, onTimeUpdate }) => {
	
	return (
		<div className='audio-player'>
			<audio
				controls
				src={audioUrl}
				onTimeUpdate={onTimeUpdate}
			>
				Your browser does not support the
				<code>audio</code> element.
			</audio>
		</div>
	);
}

export default AudioPlayer;