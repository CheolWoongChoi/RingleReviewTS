import React from 'react';
import ComponentHeader from '../ComponentHeader';
import Loader from '../Loader';
import './Feedback.scss';

const Feedback = ({ scoreResult, success }) => {
	const comment = scoreResult[0];
	// 점수 scoreResult[1] ~ [4]

	return (
		<div className='feedback'>
			<ComponentHeader 
				headerTitle="Tutor's Feedback" 
				imgUrl={'https://ringleimageassets.s3.ap-northeast-2.amazonaws.com/common/icon/ic-feedback.png'}
			/> 
			<div className='content'>
				{!success ? <Loader /> : (
					<>
						<p className='comment'>
							{comment.overall_comment}
						</p>
						<a href='/'>
							<span className='detail'>
								Detail >
							</span>
						</a>
					</>
				)}
			</div>
		</div>
	);
};

export default Feedback;