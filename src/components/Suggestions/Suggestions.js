import React from 'react';
import ComponentHeader from '../ComponentHeader';
import SuggestionsCard from '../SuggestionsCard';
import Loader from '../Loader';
import './Suggestions.scss';

const Suggestions = ({ frequencyWord, fillerWord, synonym, success }) => {
	const { fillerWordMessage, fillerWordPercent } = fillerWord;
	const { message, subMessage, synonymList } = synonym;

	return (
		<div className='suggestions'>
			<ComponentHeader 
				headerTitle='Suggestions' 
				imgUrl={'https://ringleimageassets.s3.ap-northeast-2.amazonaws.com/common/icon/ic-suggestion.png'}
			/>
			<div className='content'>
				{!success ? <Loader /> 
					: (
					<>
						<SuggestionsCard 
							message='다음은 자주 사용하시는 50개 단어 입니다.'
							frequencyWord={frequencyWord}
						/>
						<SuggestionsCard 
							message={`
								필러워드를 사용할 확률은 ${Math.floor(fillerWordPercent)}% 입니다.
								${fillerWordMessage}
							`}
						/>
						<SuggestionsCard 
							message={message + ' ' + subMessage}
							synonymList={synonymList}
						/>
					</>
				)}
			</div>
		</div>
	);
}

export default Suggestions;