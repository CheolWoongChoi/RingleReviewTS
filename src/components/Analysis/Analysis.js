import React from 'react';
import ComponentHeader from '../ComponentHeader';
import Loader from '../Loader';
import DataChart from '../DataChart';
import './Analysis.scss';

const Analysis = ({ perLesson, success }) => {
	const { w_p_m_object, w_range_object_per_lesson } = perLesson;
	const wpmData = [w_p_m_object];
	const wRangeData = [w_range_object_per_lesson];

	return (
		<div className='analysis'>
			<ComponentHeader 
				headerTitle='Summary graph' 
				imgUrl={'https://ringleimageassets.s3.ap-northeast-2.amazonaws.com/common/icon/ic-analytics.png'}	
			/> 
			<div className='sub-header'>
				<span className='icon'>
					<img src='https://ringleimageassets.s3.ap-northeast-2.amazonaws.com/common/icon/podcast-mic%403x.png' alt='mic' />
				</span>
				<span className='text'>
					Only available for lessons that allowed recoding
				</span>
			</div>
			<div className='content'>
				{!success ? <Loader /> : (
					<>
						<div className='data-chart-wrap'>
							<DataChart headerText='W.P.M' data={wpmData} />
							<DataChart headerText='Vocabulary Range' data={wRangeData} />				
						</div>
						<div className='data-indicator'>
							<span className='you'>You</span>
							<span className='tutor'>Tutor</span>
							<span className='avg'>Avg.Student</span>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Analysis;