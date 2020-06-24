import React from 'react';
import FeedbackContainer from './containers/FeedbackContainer';
import AnalysisContainer from './containers/AnalysisContainer';
import SuggestionsContainer from './containers/SuggestionsContainer';
import ScriptContainer from './containers/ScriptContainer';

import './App.scss';

const App = () => {
	return (
		<div className='review-page'>
			{/* 제목 */}
			<h1 className='header'>Ringle 복습 페이지</h1>
			<div>
				{/* Feedback: 왼쪽 */}
				<FeedbackContainer />

				{/* Analysis: 왼쪽 */}
				<AnalysisContainer />

				{/* Suggestions: 중간 */}
				<SuggestionsContainer />

				{/* Script: 오른쪽 */}
				<ScriptContainer />

				{/* 하단 오디오 플레이어 */}
			</div>
		</div>
	);
}

export default App;
