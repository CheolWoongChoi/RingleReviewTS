import React from 'react';
import './ComponentHeader.scss';

const ComponentHeader = ({ headerTitle, imgUrl }) => {
	return (
		<div className='component-header'>
			<img src={imgUrl} alt='헤더 아이콘' />
			<span>{headerTitle}</span>
		</div>
	)
}

export default ComponentHeader;