import React from 'react';
import ComponentHeader from '../ComponentHeader';
import ScriptCard from '../ScriptCard';
import Loader from '../Loader';
import './Script.scss';

const Script = ({ dialogArray, onSelectDialog, handleAutoScroll, isAutoScroll, success }) => {
	return (
		<div className='script'>
			<ComponentHeader 
				headerTitle='Recorded Script' 
				imgUrl={'https://ringleimageassets.s3.ap-northeast-2.amazonaws.com/common/icon/ic-script.png'}
				isAutoScroll
				handleAutoScroll={handleAutoScroll}
			/>
			<div className='content'>
				{!success ? <Loader /> : ( 
					dialogArray.map((dialog, idx) => (
						<ScriptCard 
							key={idx} 
							dialog={dialog} 
							onSelectDialog={onSelectDialog} 
							isAutoScroll={isAutoScroll}
						/>
					))
				)}
			</div>
		</div>
	);
}

export default Script;