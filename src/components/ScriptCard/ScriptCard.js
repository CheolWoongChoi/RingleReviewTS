import React from 'react';
import './ScriptCard.scss';

const ScriptCard = ({ dialog }) => {
	const { 
		image_url, 
		content,
		role,
		formatted_time,

		formatted_time_to_milliseconds,
		formatted_end_time_to_milliseconds,
		start_time,
		end_time,
		
	} = dialog;
	
	return (
		<div className='script-card'>
			{role === 1 && (
				<div className='role1'>
					<img src={image_url} alt='role-img' />
					<span className='content'>{content}</span>
					<span className='time'>{formatted_time}</span>
				</div>
			)}
			{role === 0 && (
				<div className='role0'>
					<span className='time'>{formatted_time}</span>
					<span className='content'>{content}</span>
				</div>
			)}
		</div>
	);
}

export default ScriptCard;