import React from 'react';
import './ScriptCard.scss';

const ScriptCard = ({ dialog, onSelectDialog, isAutoScroll }) => {
	const {
		id, 
		image_url, 
		content,
		role,
		formatted_time,

		formatted_time_to_milliseconds,
		// formatted_end_time_to_milliseconds,
		// start_time,
		// end_time,
		
	} = dialog;
	
	return (
		<div className='script-card'>
			{role === 1 && (
				<div 
					id={`dialog-${id}`} 
					className='role1' 
					onClick={() => onSelectDialog(id, formatted_time_to_milliseconds, isAutoScroll)}
				>
					<img src={image_url} alt='role-img' />
					<span className='script-content'>{content}</span>
					<span className='time'>{formatted_time}</span>
				</div>
			)}
			{role === 0 && (
				<div 
					id={`dialog-${id}`} 
					className='role0' 
					onClick={() => onSelectDialog(id, formatted_time_to_milliseconds, isAutoScroll)}
				>
					<span className='time'>{formatted_time}</span>
					<span className='script-content'>{content}</span>
				</div>
			)}
		</div>
	);
}

export default ScriptCard;