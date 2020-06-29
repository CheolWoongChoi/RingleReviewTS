import React from 'react';
import './ComponentHeader.scss';

const ComponentHeader = ({ headerTitle }) => {
	return (
		<div className='component-header'>
			*
			{headerTitle}
			?
		</div>
	)
}

export default ComponentHeader;