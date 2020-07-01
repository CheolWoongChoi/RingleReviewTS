import React from 'react';
import ComponentHeader from '../ComponentHeader';
import './Feedback.scss';

const Feedback = ({ scoreResult }) => {
	const comment = scoreResult[0];
	// 점수 scoreResult[1] ~ [4]

	return (
		<div className='feedback'>
			<ComponentHeader 
				headerTitle="Tutor's Feedback" 
				imgUrl={'https://ringleimageassets.s3.ap-northeast-2.amazonaws.com/common/icon/ic-feedback.png'}
			/> 
			<div className='content'>
				<p className='comment'>
					{scoreResult.length && (
						comment.overall_comment
					)}
				</p>
				<a href='/'>
					<span className='detail'>
						Detail >
					</span>
				</a>
			</div>
		</div>
	);
};

export default Feedback;