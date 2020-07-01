import React from 'react';
import ComponentHeader from '../ComponentHeader';
import ScriptCard from '../ScriptCard';
import './Script.scss';

const Script = ({ dialogArray }) => {
	return (
		<div className='script'>
			<ComponentHeader 
				headerTitle='Recorded Script' 
				imgUrl={'https://ringleimageassets.s3.ap-northeast-2.amazonaws.com/common/icon/ic-script.png'}
			/>
			<div className='content'>
				{dialogArray.map(dialog => (
					<ScriptCard dialog={dialog} />
				))}
			</div>
		</div>
	);
}

export default Script;