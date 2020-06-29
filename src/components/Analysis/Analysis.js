import React from 'react';
import ComponentHeader from '../ComponentHeader';
import DataChart from '../DataChart';
import './Analysis.scss';

const Analysis = ({ perLesson }) => {
	console.log('--- perLesson ---');
	console.log(perLesson);

	const { w_p_m_object, w_range_object_per_lesson } = perLesson;
	const wpmData = [w_p_m_object];
	const wRangeData = [w_range_object_per_lesson];

	return (
		<div className='analysis'>
			<ComponentHeader headerTitle='Summary graph' /> 
			<div className='sub-header'>
				<span className='icon'>

				</span>
				<span className='text'>
					Only available for lessons that allowed recoding
				</span>
			</div>
			<div className='content'>
				<div className='data-chart-wrap'>
					<DataChart headerText='W.P.M' data={wpmData} />
					<DataChart headerText='Vocabulary Range' data={wRangeData} />				
				</div>
				<div className='data-indicator'>
					<span className='you'>You</span>
					<span className='tutor'>Tutor</span>
					<span className='avg'>Avg.Student</span>
				</div>
			</div>
		</div>
	);
}

export default Analysis;