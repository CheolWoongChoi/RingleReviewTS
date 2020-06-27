import React from 'react';
import moment from 'moment';
import './TitleHeader.scss';

const TitleHeader = () => {
	return (
		<div className='title-header'>
			<div className='title'>
				<span className='text'>
					What are you getting into it? – Notes from a start-up founder: Immersion and concentration
				</span>
				<span className='date'>
					{moment().format('LLLL')}
				</span>
			</div>
		</div>
	)
};

export default TitleHeader;