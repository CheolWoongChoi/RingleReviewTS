import React from 'react';
import './ComponentHeader.scss';

const ComponentHeader = ({ headerTitle, imgUrl, isAutoScroll, handleAutoScroll }) => {
	return (
		<div className='component-header'>
			<img src={imgUrl} alt='헤더 아이콘' />
			<span>{headerTitle}</span>
			{isAutoScroll && (
				<div className='auto-scroll-wrap'>
					<span>Auto Scroll</span>	
					<input 
						type='checkbox' 
						onClick={e => handleAutoScroll(e.target.checked)}
					/>
				</div>
			)}
		</div>
	)
}

export default ComponentHeader;