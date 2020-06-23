import React from 'react';
import Summary from './components/Summary';
import Script from './components/Script';
import './App.scss';

const App = () => {
	return (
		<div className='review-page'>
			<h1 className='header'>Ringle 복습 페이지</h1>
			<div>
				{/* Summary graph & Tutor's Feedback */}
				<Summary />

				{/* Suggestions - 단어 */}

				{/* 스크립트 오른쪽 */}
				<Script />
				
				{/* 하단 오디오 플레이어 */}
			</div>
		</div>
	);
}

export default App;
