import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import './DataChart.scss';

const DataChart = ({ headerText, data }) => {
	return (
		<div className='data-chart'>
			<div className='header'>
				<span className='text'>{headerText}</span>
				<span className='icon'>?</span>
			</div>
			<BarChart syncld='data-chart' width={400} height={275} data={data} barSize={30} barGap={20} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
				<CartesianGrid strokeDasharray="3 3"/>
				<XAxis dataKey="name"/>
				<YAxis/>
				<Bar dataKey="student" fill="#7A5DE8" />
				<Bar dataKey="tutor" fill="#9B9B9B" />
				<Bar dataKey="avg_student" fill="#69C880" />
			</BarChart>
		</div>
	);
}

export default DataChart;
